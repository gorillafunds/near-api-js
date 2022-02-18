'use strict';

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.diffEpochValidators = exports.findSeatPrice = void 0;

var bn_js_1 = __importDefault(require("bn.js"));

var depd_1 = __importDefault(require("depd"));
/** Finds seat price given validators stakes and number of seats.
 *  Calculation follow the spec: https://nomicon.io/Economics/README.html#validator-selection
 * @params validators: current or next epoch validators.
 * @params maxNumberOfSeats: maximum number of seats in the network.
 * @params minimumStakeRatio: minimum stake ratio
 * @params protocolVersion: version of the protocol from genesis config
 */


function findSeatPrice(validators, maxNumberOfSeats, minimumStakeRatio, protocolVersion) {
  if (protocolVersion && protocolVersion < 49) {
    return findSeatPriceForProtocolBefore49(validators, maxNumberOfSeats);
  }

  if (!minimumStakeRatio) {
    var deprecate = depd_1.default('findSeatPrice(validators, maxNumberOfSeats)');
    deprecate('`use `findSeatPrice(validators, maxNumberOfSeats, minimumStakeRatio)` instead');
    minimumStakeRatio = [1, 6250]; // harcoded minimumStakeRation from 12/7/21
  }

  return findSeatPriceForProtocolAfter49(validators, maxNumberOfSeats, minimumStakeRatio);
}

exports.findSeatPrice = findSeatPrice;

function findSeatPriceForProtocolBefore49(validators, numSeats) {
  var stakes = validators.map(function (v) {
    return new bn_js_1.default(v.stake, 10);
  }).sort(function (a, b) {
    return a.cmp(b);
  });
  var num = new bn_js_1.default(numSeats);
  var stakesSum = stakes.reduce(function (a, b) {
    return a.add(b);
  });

  if (stakesSum.lt(num)) {
    throw new Error('Stakes are below seats');
  } // assert stakesSum >= numSeats


  var left = new bn_js_1.default(1),
      right = stakesSum.add(new bn_js_1.default(1));

  while (!left.eq(right.sub(new bn_js_1.default(1)))) {
    var mid = left.add(right).div(new bn_js_1.default(2));
    var found = false;
    var currentSum = new bn_js_1.default(0);

    for (var i = 0; i < stakes.length; ++i) {
      currentSum = currentSum.add(stakes[i].div(mid));

      if (currentSum.gte(num)) {
        left = mid;
        found = true;
        break;
      }
    }

    if (!found) {
      right = mid;
    }
  }

  return left;
} // nearcore reference: https://github.com/near/nearcore/blob/5a8ae263ec07930cd34d0dcf5bcee250c67c02aa/chain/epoch_manager/src/validator_selection.rs#L308;L315


function findSeatPriceForProtocolAfter49(validators, maxNumberOfSeats, minimumStakeRatio) {
  if (minimumStakeRatio.length != 2) {
    throw Error('minimumStakeRatio should have 2 elements');
  }

  var stakes = validators.map(function (v) {
    return new bn_js_1.default(v.stake, 10);
  }).sort(function (a, b) {
    return a.cmp(b);
  });
  var stakesSum = stakes.reduce(function (a, b) {
    return a.add(b);
  });

  if (validators.length < maxNumberOfSeats) {
    return stakesSum.mul(new bn_js_1.default(minimumStakeRatio[0])).div(new bn_js_1.default(minimumStakeRatio[1]));
  } else {
    return stakes[0].add(new bn_js_1.default(1));
  }
}
/** Diff validators between current and next epoch.
 * Returns additions, subtractions and changes to validator set.
 * @params currentValidators: list of current validators.
 * @params nextValidators: list of next validators.
 */


function diffEpochValidators(currentValidators, nextValidators) {
  var validatorsMap = new Map();
  currentValidators.forEach(function (v) {
    return validatorsMap.set(v.account_id, v);
  });
  var nextValidatorsSet = new Set(nextValidators.map(function (v) {
    return v.account_id;
  }));
  return {
    newValidators: nextValidators.filter(function (v) {
      return !validatorsMap.has(v.account_id);
    }),
    removedValidators: currentValidators.filter(function (v) {
      return !nextValidatorsSet.has(v.account_id);
    }),
    changedValidators: nextValidators.filter(function (v) {
      return validatorsMap.has(v.account_id) && validatorsMap.get(v.account_id).stake != v.stake;
    }).map(function (v) {
      return {
        current: validatorsMap.get(v.account_id),
        next: v
      };
    })
  };
}

exports.diffEpochValidators = diffEpochValidators;