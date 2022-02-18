"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

function exponentialBackoff(_x, _x2, _x3, _x4) {
  return _exponentialBackoff.apply(this, arguments);
}

function _exponentialBackoff() {
  _exponentialBackoff = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(startWaitTime, retryNumber, waitBackoff, getResult) {
    var waitTime, i, result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // TODO: jitter?
            waitTime = startWaitTime;
            i = 0;

          case 2:
            if (!(i < retryNumber)) {
              _context.next = 14;
              break;
            }

            _context.next = 5;
            return getResult();

          case 5:
            result = _context.sent;

            if (!result) {
              _context.next = 8;
              break;
            }

            return _context.abrupt("return", result);

          case 8:
            _context.next = 10;
            return sleep(waitTime);

          case 10:
            waitTime *= waitBackoff;

          case 11:
            i++;
            _context.next = 2;
            break;

          case 14:
            return _context.abrupt("return", null);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _exponentialBackoff.apply(this, arguments);
}

exports["default"] = exponentialBackoff; // Sleep given number of millis.

function sleep(millis) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, millis);
  });
}