/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.extend = extend;
exports.indexOf = indexOf;
exports.escapeExpression = escapeExpression;
exports.isEmpty = isEmpty;
exports.createFrame = createFrame;
exports.blockParams = blockParams;
exports.appendContextPath = appendContextPath;
var escape = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#x27;',
  '`': '&#x60;',
  '=': '&#x3D;'
};

var badChars = /[&<>"'`=]/g,
    possible = /[&<>"'`=]/;

function escapeChar(chr) {
  return escape[chr];
}

function extend(obj /* , ...source */) {
  for (var i = 1; i < arguments.length; i++) {
    for (var key in arguments[i]) {
      if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
        obj[key] = arguments[i][key];
      }
    }
  }

  return obj;
}

var toString = Object.prototype.toString;

exports.toString = toString;
// Sourced from lodash
// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
/* eslint-disable func-style */
var isFunction = function isFunction(value) {
  return typeof value === 'function';
};
// fallback for older versions of Chrome and Safari
/* istanbul ignore next */
if (isFunction(/x/)) {
  exports.isFunction = isFunction = function (value) {
    return typeof value === 'function' && toString.call(value) === '[object Function]';
  };
}
exports.isFunction = isFunction;

/* eslint-enable func-style */

/* istanbul ignore next */
var isArray = Array.isArray || function (value) {
  return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
};

exports.isArray = isArray;
// Older IE versions do not directly support indexOf so we must implement our own, sadly.

function indexOf(array, value) {
  for (var i = 0, len = array.length; i < len; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

function escapeExpression(string) {
  if (typeof string !== 'string') {
    // don't escape SafeStrings, since they're already safe
    if (string && string.toHTML) {
      return string.toHTML();
    } else if (string == null) {
      return '';
    } else if (!string) {
      return string + '';
    }

    // Force a string conversion as this will be done by the append regardless and
    // the regex test will do this transparently behind the scenes, causing issues if
    // an object's to string has escaped characters in it.
    string = '' + string;
  }

  if (!possible.test(string)) {
    return string;
  }
  return string.replace(badChars, escapeChar);
}

function isEmpty(value) {
  if (!value && value !== 0) {
    return true;
  } else if (isArray(value) && value.length === 0) {
    return true;
  } else {
    return false;
  }
}

function createFrame(object) {
  var frame = extend({}, object);
  frame._parent = object;
  return frame;
}

function blockParams(params, ids) {
  params.path = ids;
  return params;
}

function appendContextPath(contextPath, id) {
  return (contextPath ? contextPath + '.' : '') + id;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL3V0aWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxJQUFNLE1BQU0sR0FBRztBQUNiLEtBQUcsRUFBRSxPQUFPO0FBQ1osS0FBRyxFQUFFLE1BQU07QUFDWCxLQUFHLEVBQUUsTUFBTTtBQUNYLEtBQUcsRUFBRSxRQUFRO0FBQ2IsS0FBRyxFQUFFLFFBQVE7QUFDYixLQUFHLEVBQUUsUUFBUTtBQUNiLEtBQUcsRUFBRSxRQUFRO0NBQ2QsQ0FBQzs7QUFFRixJQUFNLFFBQVEsR0FBRyxZQUFZO0lBQ3ZCLFFBQVEsR0FBRyxXQUFXLENBQUM7O0FBRTdCLFNBQVMsVUFBVSxDQUFDLEdBQUcsRUFBRTtBQUN2QixTQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUNwQjs7QUFFTSxTQUFTLE1BQU0sQ0FBQyxHQUFHLG9CQUFtQjtBQUMzQyxPQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUN6QyxTQUFLLElBQUksR0FBRyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTtBQUM1QixVQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUU7QUFDM0QsV0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztPQUM5QjtLQUNGO0dBQ0Y7O0FBRUQsU0FBTyxHQUFHLENBQUM7Q0FDWjs7QUFFTSxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQzs7Ozs7O0FBS2hELElBQUksVUFBVSxHQUFHLG9CQUFTLEtBQUssRUFBRTtBQUMvQixTQUFPLE9BQU8sS0FBSyxLQUFLLFVBQVUsQ0FBQztDQUNwQyxDQUFDOzs7QUFHRixJQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTtBQUNuQixVQUlNLFVBQVUsR0FKaEIsVUFBVSxHQUFHLFVBQVMsS0FBSyxFQUFFO0FBQzNCLFdBQU8sT0FBTyxLQUFLLEtBQUssVUFBVSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssbUJBQW1CLENBQUM7R0FDcEYsQ0FBQztDQUNIO1FBQ08sVUFBVSxHQUFWLFVBQVU7Ozs7O0FBSVgsSUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sSUFBSSxVQUFTLEtBQUssRUFBRTtBQUN0RCxTQUFPLEFBQUMsS0FBSyxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsR0FBSSxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLGdCQUFnQixHQUFHLEtBQUssQ0FBQztDQUNqRyxDQUFDOzs7OztBQUdLLFNBQVMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUU7QUFDcEMsT0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUNoRCxRQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLEVBQUU7QUFDdEIsYUFBTyxDQUFDLENBQUM7S0FDVjtHQUNGO0FBQ0QsU0FBTyxDQUFDLENBQUMsQ0FBQztDQUNYOztBQUdNLFNBQVMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFO0FBQ3ZDLE1BQUksT0FBTyxNQUFNLEtBQUssUUFBUSxFQUFFOztBQUU5QixRQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFO0FBQzNCLGFBQU8sTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0tBQ3hCLE1BQU0sSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO0FBQ3pCLGFBQU8sRUFBRSxDQUFDO0tBQ1gsTUFBTSxJQUFJLENBQUMsTUFBTSxFQUFFO0FBQ2xCLGFBQU8sTUFBTSxHQUFHLEVBQUUsQ0FBQztLQUNwQjs7Ozs7QUFLRCxVQUFNLEdBQUcsRUFBRSxHQUFHLE1BQU0sQ0FBQztHQUN0Qjs7QUFFRCxNQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtBQUFFLFdBQU8sTUFBTSxDQUFDO0dBQUU7QUFDOUMsU0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztDQUM3Qzs7QUFFTSxTQUFTLE9BQU8sQ0FBQyxLQUFLLEVBQUU7QUFDN0IsTUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO0FBQ3pCLFdBQU8sSUFBSSxDQUFDO0dBQ2IsTUFBTSxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtBQUMvQyxXQUFPLElBQUksQ0FBQztHQUNiLE1BQU07QUFDTCxXQUFPLEtBQUssQ0FBQztHQUNkO0NBQ0Y7O0FBRU0sU0FBUyxXQUFXLENBQUMsTUFBTSxFQUFFO0FBQ2xDLE1BQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDL0IsT0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7QUFDdkIsU0FBTyxLQUFLLENBQUM7Q0FDZDs7QUFFTSxTQUFTLFdBQVcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLFFBQU0sQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO0FBQ2xCLFNBQU8sTUFBTSxDQUFDO0NBQ2Y7O0FBRU0sU0FBUyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsRUFBRSxFQUFFO0FBQ2pELFNBQU8sQ0FBQyxXQUFXLEdBQUcsV0FBVyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUEsR0FBSSxFQUFFLENBQUM7Q0FDcEQiLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBlc2NhcGUgPSB7XG4gICcmJzogJyZhbXA7JyxcbiAgJzwnOiAnJmx0OycsXG4gICc+JzogJyZndDsnLFxuICAnXCInOiAnJnF1b3Q7JyxcbiAgXCInXCI6ICcmI3gyNzsnLFxuICAnYCc6ICcmI3g2MDsnLFxuICAnPSc6ICcmI3gzRDsnXG59O1xuXG5jb25zdCBiYWRDaGFycyA9IC9bJjw+XCInYD1dL2csXG4gICAgICBwb3NzaWJsZSA9IC9bJjw+XCInYD1dLztcblxuZnVuY3Rpb24gZXNjYXBlQ2hhcihjaHIpIHtcbiAgcmV0dXJuIGVzY2FwZVtjaHJdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXh0ZW5kKG9iai8qICwgLi4uc291cmNlICovKSB7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yIChsZXQga2V5IGluIGFyZ3VtZW50c1tpXSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhcmd1bWVudHNbaV0sIGtleSkpIHtcbiAgICAgICAgb2JqW2tleV0gPSBhcmd1bWVudHNbaV1ba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5leHBvcnQgbGV0IHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLy8gU291cmNlZCBmcm9tIGxvZGFzaFxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Jlc3RpZWpzL2xvZGFzaC9ibG9iL21hc3Rlci9MSUNFTlNFLnR4dFxuLyogZXNsaW50LWRpc2FibGUgZnVuYy1zdHlsZSAqL1xubGV0IGlzRnVuY3Rpb24gPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xufTtcbi8vIGZhbGxiYWNrIGZvciBvbGRlciB2ZXJzaW9ucyBvZiBDaHJvbWUgYW5kIFNhZmFyaVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmlmIChpc0Z1bmN0aW9uKC94LykpIHtcbiAgaXNGdW5jdGlvbiA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbiAgfTtcbn1cbmV4cG9ydCB7aXNGdW5jdGlvbn07XG4vKiBlc2xpbnQtZW5hYmxlIGZ1bmMtc3R5bGUgKi9cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmV4cG9ydCBjb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpID8gdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IEFycmF5XScgOiBmYWxzZTtcbn07XG5cbi8vIE9sZGVyIElFIHZlcnNpb25zIGRvIG5vdCBkaXJlY3RseSBzdXBwb3J0IGluZGV4T2Ygc28gd2UgbXVzdCBpbXBsZW1lbnQgb3VyIG93biwgc2FkbHkuXG5leHBvcnQgZnVuY3Rpb24gaW5kZXhPZihhcnJheSwgdmFsdWUpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGFycmF5Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKGFycmF5W2ldID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuIGk7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gZXNjYXBlRXhwcmVzc2lvbihzdHJpbmcpIHtcbiAgaWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgLy8gZG9uJ3QgZXNjYXBlIFNhZmVTdHJpbmdzLCBzaW5jZSB0aGV5J3JlIGFscmVhZHkgc2FmZVxuICAgIGlmIChzdHJpbmcgJiYgc3RyaW5nLnRvSFRNTCkge1xuICAgICAgcmV0dXJuIHN0cmluZy50b0hUTUwoKTtcbiAgICB9IGVsc2UgaWYgKHN0cmluZyA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfSBlbHNlIGlmICghc3RyaW5nKSB7XG4gICAgICByZXR1cm4gc3RyaW5nICsgJyc7XG4gICAgfVxuXG4gICAgLy8gRm9yY2UgYSBzdHJpbmcgY29udmVyc2lvbiBhcyB0aGlzIHdpbGwgYmUgZG9uZSBieSB0aGUgYXBwZW5kIHJlZ2FyZGxlc3MgYW5kXG4gICAgLy8gdGhlIHJlZ2V4IHRlc3Qgd2lsbCBkbyB0aGlzIHRyYW5zcGFyZW50bHkgYmVoaW5kIHRoZSBzY2VuZXMsIGNhdXNpbmcgaXNzdWVzIGlmXG4gICAgLy8gYW4gb2JqZWN0J3MgdG8gc3RyaW5nIGhhcyBlc2NhcGVkIGNoYXJhY3RlcnMgaW4gaXQuXG4gICAgc3RyaW5nID0gJycgKyBzdHJpbmc7XG4gIH1cblxuICBpZiAoIXBvc3NpYmxlLnRlc3Qoc3RyaW5nKSkgeyByZXR1cm4gc3RyaW5nOyB9XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZShiYWRDaGFycywgZXNjYXBlQ2hhcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0VtcHR5KHZhbHVlKSB7XG4gIGlmICghdmFsdWUgJiYgdmFsdWUgIT09IDApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIGlmIChpc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZyYW1lKG9iamVjdCkge1xuICBsZXQgZnJhbWUgPSBleHRlbmQoe30sIG9iamVjdCk7XG4gIGZyYW1lLl9wYXJlbnQgPSBvYmplY3Q7XG4gIHJldHVybiBmcmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJsb2NrUGFyYW1zKHBhcmFtcywgaWRzKSB7XG4gIHBhcmFtcy5wYXRoID0gaWRzO1xuICByZXR1cm4gcGFyYW1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kQ29udGV4dFBhdGgoY29udGV4dFBhdGgsIGlkKSB7XG4gIHJldHVybiAoY29udGV4dFBhdGggPyBjb250ZXh0UGF0aCArICcuJyA6ICcnKSArIGlkO1xufVxuIl19


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// Create a simple path alias to allow browserify to resolve
// the runtime on a supported path.
module.exports = __webpack_require__(11)['default'];


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

function Exception(message, node) {
  var loc = node && node.loc,
      line = undefined,
      column = undefined;
  if (loc) {
    line = loc.start.line;
    column = loc.start.column;

    message += ' - ' + line + ':' + column;
  }

  var tmp = Error.prototype.constructor.call(this, message);

  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
  for (var idx = 0; idx < errorProps.length; idx++) {
    this[errorProps[idx]] = tmp[errorProps[idx]];
  }

  /* istanbul ignore else */
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, Exception);
  }

  try {
    if (loc) {
      this.lineNumber = line;

      // Work around issue under safari where we can't directly set the column value
      /* istanbul ignore next */
      if (Object.defineProperty) {
        Object.defineProperty(this, 'column', {
          value: column,
          enumerable: true
        });
      } else {
        this.column = column;
      }
    }
  } catch (nop) {
    /* Ignore if the browser is very particular */
  }
}

Exception.prototype = new Error();

exports['default'] = Exception;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2V4Y2VwdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsSUFBTSxVQUFVLEdBQUcsQ0FBQyxhQUFhLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQzs7QUFFbkcsU0FBUyxTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRTtBQUNoQyxNQUFJLEdBQUcsR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLEdBQUc7TUFDdEIsSUFBSSxZQUFBO01BQ0osTUFBTSxZQUFBLENBQUM7QUFDWCxNQUFJLEdBQUcsRUFBRTtBQUNQLFFBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztBQUN0QixVQUFNLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7O0FBRTFCLFdBQU8sSUFBSSxLQUFLLEdBQUcsSUFBSSxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUM7R0FDeEM7O0FBRUQsTUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQzs7O0FBRzFELE9BQUssSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxFQUFFO0FBQ2hELFFBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7R0FDOUM7OztBQUdELE1BQUksS0FBSyxDQUFDLGlCQUFpQixFQUFFO0FBQzNCLFNBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7R0FDMUM7O0FBRUQsTUFBSTtBQUNGLFFBQUksR0FBRyxFQUFFO0FBQ1AsVUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7Ozs7QUFJdkIsVUFBSSxNQUFNLENBQUMsY0FBYyxFQUFFO0FBQ3pCLGNBQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRTtBQUNwQyxlQUFLLEVBQUUsTUFBTTtBQUNiLG9CQUFVLEVBQUUsSUFBSTtTQUNqQixDQUFDLENBQUM7T0FDSixNQUFNO0FBQ0wsWUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7T0FDdEI7S0FDRjtHQUNGLENBQUMsT0FBTyxHQUFHLEVBQUU7O0dBRWI7Q0FDRjs7QUFFRCxTQUFTLENBQUMsU0FBUyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7O3FCQUVuQixTQUFTIiwiZmlsZSI6ImV4Y2VwdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgZXJyb3JQcm9wcyA9IFsnZGVzY3JpcHRpb24nLCAnZmlsZU5hbWUnLCAnbGluZU51bWJlcicsICdtZXNzYWdlJywgJ25hbWUnLCAnbnVtYmVyJywgJ3N0YWNrJ107XG5cbmZ1bmN0aW9uIEV4Y2VwdGlvbihtZXNzYWdlLCBub2RlKSB7XG4gIGxldCBsb2MgPSBub2RlICYmIG5vZGUubG9jLFxuICAgICAgbGluZSxcbiAgICAgIGNvbHVtbjtcbiAgaWYgKGxvYykge1xuICAgIGxpbmUgPSBsb2Muc3RhcnQubGluZTtcbiAgICBjb2x1bW4gPSBsb2Muc3RhcnQuY29sdW1uO1xuXG4gICAgbWVzc2FnZSArPSAnIC0gJyArIGxpbmUgKyAnOicgKyBjb2x1bW47XG4gIH1cblxuICBsZXQgdG1wID0gRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgbWVzc2FnZSk7XG5cbiAgLy8gVW5mb3J0dW5hdGVseSBlcnJvcnMgYXJlIG5vdCBlbnVtZXJhYmxlIGluIENocm9tZSAoYXQgbGVhc3QpLCBzbyBgZm9yIHByb3AgaW4gdG1wYCBkb2Vzbid0IHdvcmsuXG4gIGZvciAobGV0IGlkeCA9IDA7IGlkeCA8IGVycm9yUHJvcHMubGVuZ3RoOyBpZHgrKykge1xuICAgIHRoaXNbZXJyb3JQcm9wc1tpZHhdXSA9IHRtcFtlcnJvclByb3BzW2lkeF1dO1xuICB9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKSB7XG4gICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgRXhjZXB0aW9uKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgaWYgKGxvYykge1xuICAgICAgdGhpcy5saW5lTnVtYmVyID0gbGluZTtcblxuICAgICAgLy8gV29yayBhcm91bmQgaXNzdWUgdW5kZXIgc2FmYXJpIHdoZXJlIHdlIGNhbid0IGRpcmVjdGx5IHNldCB0aGUgY29sdW1uIHZhbHVlXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ2NvbHVtbicsIHtcbiAgICAgICAgICB2YWx1ZTogY29sdW1uLFxuICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbHVtbiA9IGNvbHVtbjtcbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2ggKG5vcCkge1xuICAgIC8qIElnbm9yZSBpZiB0aGUgYnJvd3NlciBpcyB2ZXJ5IHBhcnRpY3VsYXIgKi9cbiAgfVxufVxuXG5FeGNlcHRpb24ucHJvdG90eXBlID0gbmV3IEVycm9yKCk7XG5cbmV4cG9ydCBkZWZhdWx0IEV4Y2VwdGlvbjtcbiJdfQ==


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["d"] = qs;
/* harmony export (immutable) */ __webpack_exports__["e"] = qsa;
/* harmony export (immutable) */ __webpack_exports__["c"] = on;
/* harmony export (immutable) */ __webpack_exports__["a"] = delegate;
/* harmony export (immutable) */ __webpack_exports__["f"] = request;
/* harmony export (immutable) */ __webpack_exports__["g"] = throttle;
/* unused harmony export easeInOutQuad */
/* harmony export (immutable) */ __webpack_exports__["b"] = easeInQuad;
/**
 * querySelector wrapper
 *
 * @param {string} selector Selector to query
 * @param {Element} [scope] Optional scope element for the selector
 */
function qs(selector, scope) {
    return (scope || document).querySelector(selector);
}
function qsa(selector, scope) {
    return (scope || document).querySelectorAll(selector);
}

/**
 * addEventListener wrapper
 *
 * @param {Element|Window} element Target Element
 * @param {string} type Event name to bind to
 * @param {Function} callback Event callback
 * @param {boolean} useCapture Capture the event
 */
function on(element, type, callback, useCapture) {
    element.addEventListener(type, callback, useCapture);
}

/**
 * Delegates event to a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function _delegate(element, selector, type, callback, useCapture) {
    var listenerFn = listener.apply(this, arguments);

    element.addEventListener(type, listenerFn, useCapture);

    return {
        destroy: function () {
            element.removeEventListener(type, listenerFn, useCapture);
        }
    };
}

/**
 * Delegates event to a selector.
 *
 * @param {Element|String|Array} [elements]
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function delegate(elements, selector, type, callback, useCapture) {
    // Handle the regular Element usage
    if (typeof elements.addEventListener === 'function') {
        return _delegate.apply(null, arguments);
    }

    // Handle Element-less usage, it defaults to global delegation
    if (typeof type === 'function') {
        // Use `document` as the first parameter, then apply arguments
        // This is a short way to .unshift `arguments` without running into deoptimizations
        return _delegate.bind(null, document).apply(null, arguments);
    }

    // Handle Selector-based usage
    if (typeof elements === 'string') {
        elements = document.querySelectorAll(elements);
    }

    // Handle Array-like based usage
    return Array.prototype.map.call(elements, function (element) {
        return _delegate(element, selector, type, callback, useCapture);
    });
}

/**
 * Finds closest match and invokes callback.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Function}
 */
function listener(element, selector, type, callback) {
    return function (e) {
        e.delegateTarget = e.target.closest(selector);

        if (e.delegateTarget) {
            callback.call(element, e);
        }
    };
}


/**
 * AJAX request.
 *
 * @param {String} url
 * @return {Object}
 */
function request(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('get', url, true);
        xhr.onload = () => (xhr.status >= 200 && xhr.status < 400) ?
            resolve(JSON.parse(xhr.response)) : reject(xhr.status);
        xhr.ontimeout = () => reject('timeout');
        xhr.send();
    });
}
/**
 * Returns a new function that, when invoked, invokes `func` at most once per `wait` milliseconds.
 *
 * @param {Function} func Function to wrap.
 * @param {Number} limit Number of milliseconds that must elapse between `func` invocations.
 * @return {Function} A new function that wraps the `func` function passed in.
 */

function throttle(func, limit) {
    let wait = false;
    return () => {
        if (!wait) {
            func.apply(null, arguments);
            wait = true;
            setTimeout(() => {
                wait = false;
            }, limit);
        }
    };
}

/**
 * acceleration until halfway, then deceleration
 *
 * @param {Number} t current time
 * @param {Number} b start value
 * @param {Number} c change in value
 * @param {Number} d duration
 * @return {Number} new scrollY
 */

function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
}

/**
 * accelerating from zero velocity
 *
 * @param {Number} t current time
 * @param {Number} b start value
 * @param {Number} c change in value
 * @param {Number} d duration
 * @return {Number} new scrollY
 */

function easeInQuad(t, b, c, d) {
    t /= d / 2;
    return c / 2 * t * t + b;
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.HandlebarsEnvironment = HandlebarsEnvironment;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utils = __webpack_require__(0);

var _exception = __webpack_require__(2);

var _exception2 = _interopRequireDefault(_exception);

var _helpers = __webpack_require__(12);

var _decorators = __webpack_require__(20);

var _logger = __webpack_require__(22);

var _logger2 = _interopRequireDefault(_logger);

var VERSION = '4.0.11';
exports.VERSION = VERSION;
var COMPILER_REVISION = 7;

exports.COMPILER_REVISION = COMPILER_REVISION;
var REVISION_CHANGES = {
  1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
  2: '== 1.0.0-rc.3',
  3: '== 1.0.0-rc.4',
  4: '== 1.x.x',
  5: '== 2.0.0-alpha.x',
  6: '>= 2.0.0-beta.1',
  7: '>= 4.0.0'
};

exports.REVISION_CHANGES = REVISION_CHANGES;
var objectType = '[object Object]';

function HandlebarsEnvironment(helpers, partials, decorators) {
  this.helpers = helpers || {};
  this.partials = partials || {};
  this.decorators = decorators || {};

  _helpers.registerDefaultHelpers(this);
  _decorators.registerDefaultDecorators(this);
}

HandlebarsEnvironment.prototype = {
  constructor: HandlebarsEnvironment,

  logger: _logger2['default'],
  log: _logger2['default'].log,

  registerHelper: function registerHelper(name, fn) {
    if (_utils.toString.call(name) === objectType) {
      if (fn) {
        throw new _exception2['default']('Arg not supported with multiple helpers');
      }
      _utils.extend(this.helpers, name);
    } else {
      this.helpers[name] = fn;
    }
  },
  unregisterHelper: function unregisterHelper(name) {
    delete this.helpers[name];
  },

  registerPartial: function registerPartial(name, partial) {
    if (_utils.toString.call(name) === objectType) {
      _utils.extend(this.partials, name);
    } else {
      if (typeof partial === 'undefined') {
        throw new _exception2['default']('Attempting to register a partial called "' + name + '" as undefined');
      }
      this.partials[name] = partial;
    }
  },
  unregisterPartial: function unregisterPartial(name) {
    delete this.partials[name];
  },

  registerDecorator: function registerDecorator(name, fn) {
    if (_utils.toString.call(name) === objectType) {
      if (fn) {
        throw new _exception2['default']('Arg not supported with multiple decorators');
      }
      _utils.extend(this.decorators, name);
    } else {
      this.decorators[name] = fn;
    }
  },
  unregisterDecorator: function unregisterDecorator(name) {
    delete this.decorators[name];
  }
};

var log = _logger2['default'].log;

exports.log = log;
exports.createFrame = _utils.createFrame;
exports.logger = _logger2['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2Jhc2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7cUJBQTRDLFNBQVM7O3lCQUMvQixhQUFhOzs7O3VCQUNFLFdBQVc7OzBCQUNSLGNBQWM7O3NCQUNuQyxVQUFVOzs7O0FBRXRCLElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQzs7QUFDekIsSUFBTSxpQkFBaUIsR0FBRyxDQUFDLENBQUM7OztBQUU1QixJQUFNLGdCQUFnQixHQUFHO0FBQzlCLEdBQUMsRUFBRSxhQUFhO0FBQ2hCLEdBQUMsRUFBRSxlQUFlO0FBQ2xCLEdBQUMsRUFBRSxlQUFlO0FBQ2xCLEdBQUMsRUFBRSxVQUFVO0FBQ2IsR0FBQyxFQUFFLGtCQUFrQjtBQUNyQixHQUFDLEVBQUUsaUJBQWlCO0FBQ3BCLEdBQUMsRUFBRSxVQUFVO0NBQ2QsQ0FBQzs7O0FBRUYsSUFBTSxVQUFVLEdBQUcsaUJBQWlCLENBQUM7O0FBRTlCLFNBQVMscUJBQXFCLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUU7QUFDbkUsTUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLElBQUksRUFBRSxDQUFDO0FBQzdCLE1BQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxJQUFJLEVBQUUsQ0FBQztBQUMvQixNQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsSUFBSSxFQUFFLENBQUM7O0FBRW5DLGtDQUF1QixJQUFJLENBQUMsQ0FBQztBQUM3Qix3Q0FBMEIsSUFBSSxDQUFDLENBQUM7Q0FDakM7O0FBRUQscUJBQXFCLENBQUMsU0FBUyxHQUFHO0FBQ2hDLGFBQVcsRUFBRSxxQkFBcUI7O0FBRWxDLFFBQU0scUJBQVE7QUFDZCxLQUFHLEVBQUUsb0JBQU8sR0FBRzs7QUFFZixnQkFBYyxFQUFFLHdCQUFTLElBQUksRUFBRSxFQUFFLEVBQUU7QUFDakMsUUFBSSxnQkFBUyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssVUFBVSxFQUFFO0FBQ3RDLFVBQUksRUFBRSxFQUFFO0FBQUUsY0FBTSwyQkFBYyx5Q0FBeUMsQ0FBQyxDQUFDO09BQUU7QUFDM0Usb0JBQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztLQUM1QixNQUFNO0FBQ0wsVUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7S0FDekI7R0FDRjtBQUNELGtCQUFnQixFQUFFLDBCQUFTLElBQUksRUFBRTtBQUMvQixXQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7R0FDM0I7O0FBRUQsaUJBQWUsRUFBRSx5QkFBUyxJQUFJLEVBQUUsT0FBTyxFQUFFO0FBQ3ZDLFFBQUksZ0JBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLFVBQVUsRUFBRTtBQUN0QyxvQkFBTyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQzdCLE1BQU07QUFDTCxVQUFJLE9BQU8sT0FBTyxLQUFLLFdBQVcsRUFBRTtBQUNsQyxjQUFNLHlFQUEwRCxJQUFJLG9CQUFpQixDQUFDO09BQ3ZGO0FBQ0QsVUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUM7S0FDL0I7R0FDRjtBQUNELG1CQUFpQixFQUFFLDJCQUFTLElBQUksRUFBRTtBQUNoQyxXQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7R0FDNUI7O0FBRUQsbUJBQWlCLEVBQUUsMkJBQVMsSUFBSSxFQUFFLEVBQUUsRUFBRTtBQUNwQyxRQUFJLGdCQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxVQUFVLEVBQUU7QUFDdEMsVUFBSSxFQUFFLEVBQUU7QUFBRSxjQUFNLDJCQUFjLDRDQUE0QyxDQUFDLENBQUM7T0FBRTtBQUM5RSxvQkFBTyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQy9CLE1BQU07QUFDTCxVQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztLQUM1QjtHQUNGO0FBQ0QscUJBQW1CLEVBQUUsNkJBQVMsSUFBSSxFQUFFO0FBQ2xDLFdBQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztHQUM5QjtDQUNGLENBQUM7O0FBRUssSUFBSSxHQUFHLEdBQUcsb0JBQU8sR0FBRyxDQUFDOzs7UUFFcEIsV0FBVztRQUFFLE1BQU0iLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlRnJhbWUsIGV4dGVuZCwgdG9TdHJpbmd9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tICcuL2V4Y2VwdGlvbic7XG5pbXBvcnQge3JlZ2lzdGVyRGVmYXVsdEhlbHBlcnN9IGZyb20gJy4vaGVscGVycyc7XG5pbXBvcnQge3JlZ2lzdGVyRGVmYXVsdERlY29yYXRvcnN9IGZyb20gJy4vZGVjb3JhdG9ycyc7XG5pbXBvcnQgbG9nZ2VyIGZyb20gJy4vbG9nZ2VyJztcblxuZXhwb3J0IGNvbnN0IFZFUlNJT04gPSAnNC4wLjExJztcbmV4cG9ydCBjb25zdCBDT01QSUxFUl9SRVZJU0lPTiA9IDc7XG5cbmV4cG9ydCBjb25zdCBSRVZJU0lPTl9DSEFOR0VTID0ge1xuICAxOiAnPD0gMS4wLnJjLjInLCAvLyAxLjAucmMuMiBpcyBhY3R1YWxseSByZXYyIGJ1dCBkb2Vzbid0IHJlcG9ydCBpdFxuICAyOiAnPT0gMS4wLjAtcmMuMycsXG4gIDM6ICc9PSAxLjAuMC1yYy40JyxcbiAgNDogJz09IDEueC54JyxcbiAgNTogJz09IDIuMC4wLWFscGhhLngnLFxuICA2OiAnPj0gMi4wLjAtYmV0YS4xJyxcbiAgNzogJz49IDQuMC4wJ1xufTtcblxuY29uc3Qgb2JqZWN0VHlwZSA9ICdbb2JqZWN0IE9iamVjdF0nO1xuXG5leHBvcnQgZnVuY3Rpb24gSGFuZGxlYmFyc0Vudmlyb25tZW50KGhlbHBlcnMsIHBhcnRpYWxzLCBkZWNvcmF0b3JzKSB7XG4gIHRoaXMuaGVscGVycyA9IGhlbHBlcnMgfHwge307XG4gIHRoaXMucGFydGlhbHMgPSBwYXJ0aWFscyB8fCB7fTtcbiAgdGhpcy5kZWNvcmF0b3JzID0gZGVjb3JhdG9ycyB8fCB7fTtcblxuICByZWdpc3RlckRlZmF1bHRIZWxwZXJzKHRoaXMpO1xuICByZWdpc3RlckRlZmF1bHREZWNvcmF0b3JzKHRoaXMpO1xufVxuXG5IYW5kbGViYXJzRW52aXJvbm1lbnQucHJvdG90eXBlID0ge1xuICBjb25zdHJ1Y3RvcjogSGFuZGxlYmFyc0Vudmlyb25tZW50LFxuXG4gIGxvZ2dlcjogbG9nZ2VyLFxuICBsb2c6IGxvZ2dlci5sb2csXG5cbiAgcmVnaXN0ZXJIZWxwZXI6IGZ1bmN0aW9uKG5hbWUsIGZuKSB7XG4gICAgaWYgKHRvU3RyaW5nLmNhbGwobmFtZSkgPT09IG9iamVjdFR5cGUpIHtcbiAgICAgIGlmIChmbikgeyB0aHJvdyBuZXcgRXhjZXB0aW9uKCdBcmcgbm90IHN1cHBvcnRlZCB3aXRoIG11bHRpcGxlIGhlbHBlcnMnKTsgfVxuICAgICAgZXh0ZW5kKHRoaXMuaGVscGVycywgbmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGVscGVyc1tuYW1lXSA9IGZuO1xuICAgIH1cbiAgfSxcbiAgdW5yZWdpc3RlckhlbHBlcjogZnVuY3Rpb24obmFtZSkge1xuICAgIGRlbGV0ZSB0aGlzLmhlbHBlcnNbbmFtZV07XG4gIH0sXG5cbiAgcmVnaXN0ZXJQYXJ0aWFsOiBmdW5jdGlvbihuYW1lLCBwYXJ0aWFsKSB7XG4gICAgaWYgKHRvU3RyaW5nLmNhbGwobmFtZSkgPT09IG9iamVjdFR5cGUpIHtcbiAgICAgIGV4dGVuZCh0aGlzLnBhcnRpYWxzLCBuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHR5cGVvZiBwYXJ0aWFsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKGBBdHRlbXB0aW5nIHRvIHJlZ2lzdGVyIGEgcGFydGlhbCBjYWxsZWQgXCIke25hbWV9XCIgYXMgdW5kZWZpbmVkYCk7XG4gICAgICB9XG4gICAgICB0aGlzLnBhcnRpYWxzW25hbWVdID0gcGFydGlhbDtcbiAgICB9XG4gIH0sXG4gIHVucmVnaXN0ZXJQYXJ0aWFsOiBmdW5jdGlvbihuYW1lKSB7XG4gICAgZGVsZXRlIHRoaXMucGFydGlhbHNbbmFtZV07XG4gIH0sXG5cbiAgcmVnaXN0ZXJEZWNvcmF0b3I6IGZ1bmN0aW9uKG5hbWUsIGZuKSB7XG4gICAgaWYgKHRvU3RyaW5nLmNhbGwobmFtZSkgPT09IG9iamVjdFR5cGUpIHtcbiAgICAgIGlmIChmbikgeyB0aHJvdyBuZXcgRXhjZXB0aW9uKCdBcmcgbm90IHN1cHBvcnRlZCB3aXRoIG11bHRpcGxlIGRlY29yYXRvcnMnKTsgfVxuICAgICAgZXh0ZW5kKHRoaXMuZGVjb3JhdG9ycywgbmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGVjb3JhdG9yc1tuYW1lXSA9IGZuO1xuICAgIH1cbiAgfSxcbiAgdW5yZWdpc3RlckRlY29yYXRvcjogZnVuY3Rpb24obmFtZSkge1xuICAgIGRlbGV0ZSB0aGlzLmRlY29yYXRvcnNbbmFtZV07XG4gIH1cbn07XG5cbmV4cG9ydCBsZXQgbG9nID0gbG9nZ2VyLmxvZztcblxuZXhwb3J0IHtjcmVhdGVGcmFtZSwgbG9nZ2VyfTtcbiJdfQ==


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(1);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    return "    <div class='badge'>"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"badge_list\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.badge : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(1);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    return "        <li>\r\n            <span>"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</span>\r\n        </li>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class='food_img_hover'>\r\n    <ul>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.delivery_type : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\r\n</div>";
},"useData":true});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__controller__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__commonView__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__infiniteSlideView__ = __webpack_require__(29);





const urlList = {
    mainSlide: 'http://home.dotol.xyz/php/test_api.php',
    bestBanchan: 'http://crong.codesquad.kr:8080/woowa/best',
    side: 'http://crong.codesquad.kr:8080/woowa/side',
    main: 'http://crong.codesquad.kr:8080/woowa/main',
    course: 'http://crong.codesquad.kr:8080/woowa/soup'
};

const commonView = new __WEBPACK_IMPORTED_MODULE_2__commonView__["a" /* default */]();
const sideBanchanView = new __WEBPACK_IMPORTED_MODULE_3__infiniteSlideView__["a" /* default */]('side');
const mainBanchanView = new __WEBPACK_IMPORTED_MODULE_3__infiniteSlideView__["a" /* default */]('main');
const courseBanchanView = new __WEBPACK_IMPORTED_MODULE_3__infiniteSlideView__["a" /* default */]('course');


/**
 * @type {Controller}
 */
const controller = new __WEBPACK_IMPORTED_MODULE_0__controller__["a" /* default */](urlList, commonView, sideBanchanView, mainBanchanView, courseBanchanView);

const setView = () => controller.setView();
Object(__WEBPACK_IMPORTED_MODULE_1__helpers__["c" /* on */])(window, 'load', setView);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers__ = __webpack_require__(3);


class Controller {
    constructor(urlList, commonView, ...infiniteViews) {
        this.urlList = urlList;
        this.commonView = commonView;

        commonView.bind('slidesPrev', this.moveSlides.bind(this));
        commonView.bind('slidesNext', this.moveSlides.bind(this));
        commonView.bind('slidesDots', this.currentSlide.bind(this));
        commonView.bind('scroller', this.moveScroller.bind(this));
        commonView.bind('search', this.autoComplete.bind(this));

        infiniteViews.forEach(infiniteView => {
            infiniteView.bind('slidesPrev', this.moveInfiniteSlides.bind(infiniteView));
            infiniteView.bind('slidesNext', this.moveInfiniteSlides.bind(infiniteView));
            this.initInfiniteBanchan(infiniteView, this.urlList[infiniteView.state.name]);
        });
    }

    setView() {
        this.initSlide(this.urlList.mainSlide);
        this.initBestBanchan(this.urlList.bestBanchan);
        this.commonView.bind('preventDefault');
    }

    async initSlide(url) {
        try {
            this.slideImgs = await Object(__WEBPACK_IMPORTED_MODULE_0__helpers__["f" /* request */])(url);
        } catch (e) {
            console.error(e);
        }
        this.slidesEnd = this.slideImgs.length - 1;
        this.commonView.showSlide(0, this.slideImgs[0]);
    }

    moveSlides(target, n) {
        this.commonView.hideSlide(target.index);
        target.index += n;
        if (target.index > this.slidesEnd) target.index = 0;
        if (target.index < 0) target.index = this.slidesEnd;
        this.commonView.showSlide(target.index, this.slideImgs[target.index]);
    }

    currentSlide(target, n) {
        this.commonView.hideSlide(target.index);
        this.commonView.showSlide(target.index = n, this.slideImgs[target.index]);
    }

    moveScroller(direction) {
        direction === 'up' ? this.moveScroll(0) : this.moveScroll(document.body.clientHeight);
    }

    moveScroll(to) {
        const start = scrollY;
        const change = to - start;
        const duration = Math.abs(change / 4);
        const increment = 20;
        let currentTime = 0;

        const animateScroll = () => {
            currentTime += increment;
            let newY = Object(__WEBPACK_IMPORTED_MODULE_0__helpers__["b" /* easeInQuad */])(currentTime, start, change, duration);
            scrollTo(0, newY);
            if (currentTime < duration) requestAnimationFrame(animateScroll);
        };

        requestAnimationFrame(animateScroll);
    }

    async autoComplete(term, key) {
        if (!key || (key < 35 || key > 40) && key !== 13 && key !== 27) {
            try {
                const suggestions = await Object(__WEBPACK_IMPORTED_MODULE_0__helpers__["f" /* request */])(`http://crong.codesquad.kr:8080/ac/${term}`);
                const results = suggestions[1].map(suggestion => suggestion[0]);
                this.commonView.render('autoComplete', term, results);
            } catch (e) {
                this.commonView.emptyAutoComplete();
                console.error(e);
            }
        }
        // down (40), up (38)
        else if (key === 40 || key === 38) {
            this.commonView.moveAutoComplete(key);
        }
        // esc
        else if (key === 27) {
            this.commonView.emptyAutoComplete();
        }
        // enter
        else if (key === 13) {
            this.commonView.enterAutoComplete();
        }
    }

    async initBestBanchan(url) {
        try {
            const banchan = await Object(__WEBPACK_IMPORTED_MODULE_0__helpers__["f" /* request */])(url);
            this.commonView.render('bestBanchan', banchan);
            this.commonView.bind('foodTab');
        } catch (e) {
            console.error(e);
        }
    }

    async initInfiniteBanchan(targetView, url) {
        try {
            const foodData = await Object(__WEBPACK_IMPORTED_MODULE_0__helpers__["f" /* request */])(url);
            targetView.render('banchan', foodData);
            const [thresholdLeft, thresholdRight] = [-20 - (foodData.length * 2.5), -20 + (foodData.length * 2.5)];
            targetView.bind('slides', this.resetInfiniteSlides.bind(targetView, thresholdLeft, thresholdRight));
        } catch (e) {
            console.error(e);
        }
    }

    moveInfiniteSlides(target, move) {
        this.showSlides(target.el, target.direction += move);
    }

    resetInfiniteSlides(thresholdLeft, thresholdRight, target) {
        if (target.direction === thresholdLeft || target.direction === thresholdRight) {
            this.showSlides(target.el, target.direction = -20, true);
        }
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Controller;


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__template_foodBox_tpl_html__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__template_foodBox_tpl_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__template_foodBox_tpl_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__template_foodTab_tpl_html__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__template_foodTab_tpl_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__template_foodTab_tpl_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template_container_tpl_html__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template_container_tpl_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__template_container_tpl_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__template_badge_tpl_html__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__template_badge_tpl_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__template_badge_tpl_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__template_deliveryType_tpl_html__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__template_deliveryType_tpl_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__template_deliveryType_tpl_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers__ = __webpack_require__(3);







class View {
    constructor() {
        this.foodTabEl = Object(__WEBPACK_IMPORTED_MODULE_5__helpers__["d" /* qs */])('.best_food_tabs');
        this.slidesPrevEl = Object(__WEBPACK_IMPORTED_MODULE_5__helpers__["d" /* qs */])('.slides_prev');
        this.slidesNextEl = Object(__WEBPACK_IMPORTED_MODULE_5__helpers__["d" /* qs */])('.slides_next');
        this.slidesEl = Object(__WEBPACK_IMPORTED_MODULE_5__helpers__["e" /* qsa */])('.main_slides_list > li');
        this.dotsEl = Object(__WEBPACK_IMPORTED_MODULE_5__helpers__["e" /* qsa */])('.slides_dots > li > a');
        this.searchEl = Object(__WEBPACK_IMPORTED_MODULE_5__helpers__["d" /* qs */])('#search_str');
        this.suggestionsEl = Object(__WEBPACK_IMPORTED_MODULE_5__helpers__["d" /* qs */])('.autocomplete_suggestions');

        this.state = {
            index: 0
        };
    }

    bind(bindCmd, handler) {
        const bindCommands = {
            slidesPrev: () => {
                Object(__WEBPACK_IMPORTED_MODULE_5__helpers__["c" /* on */])(this.slidesPrevEl, 'click', Object(__WEBPACK_IMPORTED_MODULE_5__helpers__["g" /* throttle */])(() => handler(this.state, -1), 1000));
            },
            slidesNext: () => {
                Object(__WEBPACK_IMPORTED_MODULE_5__helpers__["c" /* on */])(this.slidesNextEl, 'click', Object(__WEBPACK_IMPORTED_MODULE_5__helpers__["g" /* throttle */])(() => handler(this.state, 1), 1000));
            },
            slidesDots: () => {
                Object(__WEBPACK_IMPORTED_MODULE_5__helpers__["a" /* delegate */])('.slides_dots', '.slides_dots > li > a',
                    'click', (e) => handler(this.state, +e.delegateTarget.textContent));
            },
            scroller: () => {
                Object(__WEBPACK_IMPORTED_MODULE_5__helpers__["a" /* delegate */])('.page_up_down_list', '.page_up_down_list > li > a',
                    'click', (e) => handler(e.delegateTarget.dataset.direction));
            },
            foodTab: () => {
                Object(__WEBPACK_IMPORTED_MODULE_5__helpers__["a" /* delegate */])(this.foodTabEl, 'li > a', 'click', e => {
                    Array.from(this.foodTabListEl).forEach(tab => tab.className =
                        tab === e.delegateTarget ? 'now' : '');
                    Array.from(this.foodBoxListEl).forEach(food => food.style.display =
                        e.delegateTarget.dataset.category_id === food.dataset.category_id ? 'block' : 'none');
                });
            },
            search: () => {
                Object(__WEBPACK_IMPORTED_MODULE_5__helpers__["c" /* on */])(this.searchEl, 'keyup', e => handler(e.target.value, e.keyCode));
            },
            preventDefault: () => {
                Object(__WEBPACK_IMPORTED_MODULE_5__helpers__["a" /* delegate */])('body', 'a', 'click', e => e.preventDefault());
            }
        };

        bindCommands[bindCmd]();
    }

    render(viewCmd, ...parameter) {
        const viewCommands = {
            bestBanchan: () => {
                this.bestBanchan(...parameter);
            },
            autoComplete: () => {
                this.renderAutoComplete(...parameter);
            }
        };

        viewCommands[viewCmd]();
    }

    renderAutoComplete(term, suggestions) {
        this.emptyAutoComplete();
        const target = new RegExp(term, 'g');
        const suggestionsStr = suggestions.map(suggestion =>
            `<li class="autocomplete_suggestion" data-value="${suggestion}">${suggestion.replace(target, `<b>${term}</b>`)}</li>`).join('');
        this.suggestionsEl.insertAdjacentHTML('afterbegin', suggestionsStr);
    }

    enterAutoComplete() {
        if (this.sel && this.suggestionsEl.innerHTML) {
            this.searchEl.value = this.sel.dataset.value;
            setTimeout(() => {
                this.emptyAutoComplete();
            }, 20);
        }
    }

    moveAutoComplete(key) {
        this.sel = Object(__WEBPACK_IMPORTED_MODULE_5__helpers__["d" /* qs */])('.autocomplete_suggestion.selected');
        let target;
        if (this.sel) {
            target = key === 40 ? this.sel.nextSibling : this.sel.previousSibling;
            this.sel.className = 'autocomplete_suggestion';
            if (target) target.className += ' selected';
        } else {
            target = key === 40 ? Object(__WEBPACK_IMPORTED_MODULE_5__helpers__["d" /* qs */])('.autocomplete_suggestion') : this.suggestionsEl.childNodes[this.suggestionsEl.childNodes.length - 1];
            target.className += ' selected';
        }
        this.sel = target;
    }

    emptyAutoComplete() {
        this.suggestionsEl.innerHTML = '';
    }

    bestBanchan(food) {
        this.renderFoodTab(food);
        this.renderFoodContainer(food);
        this.renderFoodBoxList(food);
        this.renderFoodBox(food);
        this.renderFoodTabList(food, Math.floor(Math.random() * 6));
    }


    renderFoodTab(food) {
        const foodTab = food.map(value => __WEBPACK_IMPORTED_MODULE_1__template_foodTab_tpl_html___default()({
            category_id: value.category_id,
            name: value.name
        })).join('');
        this.foodTabEl.insertAdjacentHTML('afterbegin', foodTab);
    }

    renderFoodContainer(food) {
        const foodContainer = food.map(value => __WEBPACK_IMPORTED_MODULE_2__template_container_tpl_html___default()({
            category_id: value.category_id
        })).join('');
        Object(__WEBPACK_IMPORTED_MODULE_5__helpers__["d" /* qs */])('.best_food_container').insertAdjacentHTML('afterbegin', foodContainer);
    }

    renderFoodBoxList(food) {
        this.foodBoxListEl = Object(__WEBPACK_IMPORTED_MODULE_5__helpers__["e" /* qsa */])('.best_food_box_list');
        food.forEach((value, i) => {
            const foodBoxList = value.items.map(item =>
                __WEBPACK_IMPORTED_MODULE_0__template_foodBox_tpl_html___default()({
                    image: item.image,
                    alt: item.alt,
                    title: item.title,
                    description: item.description,
                    old_price: item.n_price,
                    new_price: item.s_price.slice(0, -1),
                    won: item.s_price.slice(-1)
                })).join('');
            this.foodBoxListEl[i].insertAdjacentHTML('afterbegin', foodBoxList);
        });
    }

    renderFoodBox(food) {
        const foodBoxEl = Object(__WEBPACK_IMPORTED_MODULE_5__helpers__["e" /* qsa */])('.best_food_box');
        food.forEach((value, i) => {
            const len = value.items.length;
            value.items.forEach((item, j) => {
                foodBoxEl[i * len + j].insertAdjacentHTML('beforeend', __WEBPACK_IMPORTED_MODULE_3__template_badge_tpl_html___default()({
                    badge: item.badge
                }));
                foodBoxEl[i * len + j].firstElementChild.insertAdjacentHTML('beforeend', __WEBPACK_IMPORTED_MODULE_4__template_deliveryType_tpl_html___default()({
                    delivery_type: item.delivery_type
                }));
            });
        });
    }

    renderFoodTabList(food, initNum) {
        this.foodTabListEl = Object(__WEBPACK_IMPORTED_MODULE_5__helpers__["e" /* qsa */])('.best_food_tabs > li > a');
        this.foodTabListEl[initNum].className = 'now';
        this.foodBoxListEl[initNum].style.display = 'block';
    }

    hideSlide(currentIndex) {
        this.slidesEl[currentIndex].className = 'fadeout';
        this.dotsEl[currentIndex].classList.remove('now');
    }

    showSlide(slideIndex, slideImg) {
        this.slidesEl[slideIndex].className = 'fadein';
        this.slidesEl[slideIndex].style.backgroundImage = `url("${slideImg}")`;
        this.dotsEl[slideIndex].className = 'now';
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = View;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(1);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<a href=\"#\" class=\"best_food_box_wrap\">\r\n    <li class=\"best_food_box\">\r\n        <div class=\"food_img\">\r\n            <img src=\""
    + alias4(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = helpers.alt || (depth0 != null ? depth0.alt : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"alt","hash":{},"data":data}) : helper)))
    + "\">\r\n        </div>\r\n        <dl class=\"food_detail\">\r\n            <dt class=\"food_title\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</dt>\r\n            <dd class=\"food_description\">"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</dd>\r\n            <dd class=\"food_price\">\r\n                <span class=\"old_price\">"
    + alias4(((helper = (helper = helpers.old_price || (depth0 != null ? depth0.old_price : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"old_price","hash":{},"data":data}) : helper)))
    + "</span>\r\n                <span class=\"new_price\">"
    + alias4(((helper = (helper = helpers.new_price || (depth0 != null ? depth0.new_price : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"new_price","hash":{},"data":data}) : helper)))
    + "\r\n                    <span class=\"won\">"
    + alias4(((helper = (helper = helpers.won || (depth0 != null ? depth0.won : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"won","hash":{},"data":data}) : helper)))
    + "</span>\r\n                </span>\r\n            </dd>\r\n        </dl>\r\n    </li>\r\n</a>";
},"useData":true});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// istanbul ignore next

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _handlebarsBase = __webpack_require__(4);

var base = _interopRequireWildcard(_handlebarsBase);

// Each of these augment the Handlebars object. No need to setup here.
// (This is done to easily share code between commonjs and browse envs)

var _handlebarsSafeString = __webpack_require__(23);

var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);

var _handlebarsException = __webpack_require__(2);

var _handlebarsException2 = _interopRequireDefault(_handlebarsException);

var _handlebarsUtils = __webpack_require__(0);

var Utils = _interopRequireWildcard(_handlebarsUtils);

var _handlebarsRuntime = __webpack_require__(24);

var runtime = _interopRequireWildcard(_handlebarsRuntime);

var _handlebarsNoConflict = __webpack_require__(25);

var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

// For compatibility and usage outside of module systems, make the Handlebars object a namespace
function create() {
  var hb = new base.HandlebarsEnvironment();

  Utils.extend(hb, base);
  hb.SafeString = _handlebarsSafeString2['default'];
  hb.Exception = _handlebarsException2['default'];
  hb.Utils = Utils;
  hb.escapeExpression = Utils.escapeExpression;

  hb.VM = runtime;
  hb.template = function (spec) {
    return runtime.template(spec, hb);
  };

  return hb;
}

var inst = create();
inst.create = create;

_handlebarsNoConflict2['default'](inst);

inst['default'] = inst;

exports['default'] = inst;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9oYW5kbGViYXJzLnJ1bnRpbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OEJBQXNCLG1CQUFtQjs7SUFBN0IsSUFBSTs7Ozs7b0NBSU8sMEJBQTBCOzs7O21DQUMzQix3QkFBd0I7Ozs7K0JBQ3ZCLG9CQUFvQjs7SUFBL0IsS0FBSzs7aUNBQ1Esc0JBQXNCOztJQUFuQyxPQUFPOztvQ0FFSSwwQkFBMEI7Ozs7O0FBR2pELFNBQVMsTUFBTSxHQUFHO0FBQ2hCLE1BQUksRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7O0FBRTFDLE9BQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3ZCLElBQUUsQ0FBQyxVQUFVLG9DQUFhLENBQUM7QUFDM0IsSUFBRSxDQUFDLFNBQVMsbUNBQVksQ0FBQztBQUN6QixJQUFFLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUNqQixJQUFFLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixDQUFDOztBQUU3QyxJQUFFLENBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQztBQUNoQixJQUFFLENBQUMsUUFBUSxHQUFHLFVBQVMsSUFBSSxFQUFFO0FBQzNCLFdBQU8sT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7R0FDbkMsQ0FBQzs7QUFFRixTQUFPLEVBQUUsQ0FBQztDQUNYOztBQUVELElBQUksSUFBSSxHQUFHLE1BQU0sRUFBRSxDQUFDO0FBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDOztBQUVyQixrQ0FBVyxJQUFJLENBQUMsQ0FBQzs7QUFFakIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQzs7cUJBRVIsSUFBSSIsImZpbGUiOiJoYW5kbGViYXJzLnJ1bnRpbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBiYXNlIGZyb20gJy4vaGFuZGxlYmFycy9iYXNlJztcblxuLy8gRWFjaCBvZiB0aGVzZSBhdWdtZW50IHRoZSBIYW5kbGViYXJzIG9iamVjdC4gTm8gbmVlZCB0byBzZXR1cCBoZXJlLlxuLy8gKFRoaXMgaXMgZG9uZSB0byBlYXNpbHkgc2hhcmUgY29kZSBiZXR3ZWVuIGNvbW1vbmpzIGFuZCBicm93c2UgZW52cylcbmltcG9ydCBTYWZlU3RyaW5nIGZyb20gJy4vaGFuZGxlYmFycy9zYWZlLXN0cmluZyc7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gJy4vaGFuZGxlYmFycy9leGNlcHRpb24nO1xuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnLi9oYW5kbGViYXJzL3V0aWxzJztcbmltcG9ydCAqIGFzIHJ1bnRpbWUgZnJvbSAnLi9oYW5kbGViYXJzL3J1bnRpbWUnO1xuXG5pbXBvcnQgbm9Db25mbGljdCBmcm9tICcuL2hhbmRsZWJhcnMvbm8tY29uZmxpY3QnO1xuXG4vLyBGb3IgY29tcGF0aWJpbGl0eSBhbmQgdXNhZ2Ugb3V0c2lkZSBvZiBtb2R1bGUgc3lzdGVtcywgbWFrZSB0aGUgSGFuZGxlYmFycyBvYmplY3QgYSBuYW1lc3BhY2VcbmZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgbGV0IGhiID0gbmV3IGJhc2UuSGFuZGxlYmFyc0Vudmlyb25tZW50KCk7XG5cbiAgVXRpbHMuZXh0ZW5kKGhiLCBiYXNlKTtcbiAgaGIuU2FmZVN0cmluZyA9IFNhZmVTdHJpbmc7XG4gIGhiLkV4Y2VwdGlvbiA9IEV4Y2VwdGlvbjtcbiAgaGIuVXRpbHMgPSBVdGlscztcbiAgaGIuZXNjYXBlRXhwcmVzc2lvbiA9IFV0aWxzLmVzY2FwZUV4cHJlc3Npb247XG5cbiAgaGIuVk0gPSBydW50aW1lO1xuICBoYi50ZW1wbGF0ZSA9IGZ1bmN0aW9uKHNwZWMpIHtcbiAgICByZXR1cm4gcnVudGltZS50ZW1wbGF0ZShzcGVjLCBoYik7XG4gIH07XG5cbiAgcmV0dXJuIGhiO1xufVxuXG5sZXQgaW5zdCA9IGNyZWF0ZSgpO1xuaW5zdC5jcmVhdGUgPSBjcmVhdGU7XG5cbm5vQ29uZmxpY3QoaW5zdCk7XG5cbmluc3RbJ2RlZmF1bHQnXSA9IGluc3Q7XG5cbmV4cG9ydCBkZWZhdWx0IGluc3Q7XG4iXX0=


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.registerDefaultHelpers = registerDefaultHelpers;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _helpersBlockHelperMissing = __webpack_require__(13);

var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);

var _helpersEach = __webpack_require__(14);

var _helpersEach2 = _interopRequireDefault(_helpersEach);

var _helpersHelperMissing = __webpack_require__(15);

var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);

var _helpersIf = __webpack_require__(16);

var _helpersIf2 = _interopRequireDefault(_helpersIf);

var _helpersLog = __webpack_require__(17);

var _helpersLog2 = _interopRequireDefault(_helpersLog);

var _helpersLookup = __webpack_require__(18);

var _helpersLookup2 = _interopRequireDefault(_helpersLookup);

var _helpersWith = __webpack_require__(19);

var _helpersWith2 = _interopRequireDefault(_helpersWith);

function registerDefaultHelpers(instance) {
  _helpersBlockHelperMissing2['default'](instance);
  _helpersEach2['default'](instance);
  _helpersHelperMissing2['default'](instance);
  _helpersIf2['default'](instance);
  _helpersLog2['default'](instance);
  _helpersLookup2['default'](instance);
  _helpersWith2['default'](instance);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7eUNBQXVDLGdDQUFnQzs7OzsyQkFDOUMsZ0JBQWdCOzs7O29DQUNQLDBCQUEwQjs7Ozt5QkFDckMsY0FBYzs7OzswQkFDYixlQUFlOzs7OzZCQUNaLGtCQUFrQjs7OzsyQkFDcEIsZ0JBQWdCOzs7O0FBRWxDLFNBQVMsc0JBQXNCLENBQUMsUUFBUSxFQUFFO0FBQy9DLHlDQUEyQixRQUFRLENBQUMsQ0FBQztBQUNyQywyQkFBYSxRQUFRLENBQUMsQ0FBQztBQUN2QixvQ0FBc0IsUUFBUSxDQUFDLENBQUM7QUFDaEMseUJBQVcsUUFBUSxDQUFDLENBQUM7QUFDckIsMEJBQVksUUFBUSxDQUFDLENBQUM7QUFDdEIsNkJBQWUsUUFBUSxDQUFDLENBQUM7QUFDekIsMkJBQWEsUUFBUSxDQUFDLENBQUM7Q0FDeEIiLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZWdpc3RlckJsb2NrSGVscGVyTWlzc2luZyBmcm9tICcuL2hlbHBlcnMvYmxvY2staGVscGVyLW1pc3NpbmcnO1xuaW1wb3J0IHJlZ2lzdGVyRWFjaCBmcm9tICcuL2hlbHBlcnMvZWFjaCc7XG5pbXBvcnQgcmVnaXN0ZXJIZWxwZXJNaXNzaW5nIGZyb20gJy4vaGVscGVycy9oZWxwZXItbWlzc2luZyc7XG5pbXBvcnQgcmVnaXN0ZXJJZiBmcm9tICcuL2hlbHBlcnMvaWYnO1xuaW1wb3J0IHJlZ2lzdGVyTG9nIGZyb20gJy4vaGVscGVycy9sb2cnO1xuaW1wb3J0IHJlZ2lzdGVyTG9va3VwIGZyb20gJy4vaGVscGVycy9sb29rdXAnO1xuaW1wb3J0IHJlZ2lzdGVyV2l0aCBmcm9tICcuL2hlbHBlcnMvd2l0aCc7XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckRlZmF1bHRIZWxwZXJzKGluc3RhbmNlKSB7XG4gIHJlZ2lzdGVyQmxvY2tIZWxwZXJNaXNzaW5nKGluc3RhbmNlKTtcbiAgcmVnaXN0ZXJFYWNoKGluc3RhbmNlKTtcbiAgcmVnaXN0ZXJIZWxwZXJNaXNzaW5nKGluc3RhbmNlKTtcbiAgcmVnaXN0ZXJJZihpbnN0YW5jZSk7XG4gIHJlZ2lzdGVyTG9nKGluc3RhbmNlKTtcbiAgcmVnaXN0ZXJMb29rdXAoaW5zdGFuY2UpO1xuICByZWdpc3RlcldpdGgoaW5zdGFuY2UpO1xufVxuIl19


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _utils = __webpack_require__(0);

exports['default'] = function (instance) {
  instance.registerHelper('blockHelperMissing', function (context, options) {
    var inverse = options.inverse,
        fn = options.fn;

    if (context === true) {
      return fn(this);
    } else if (context === false || context == null) {
      return inverse(this);
    } else if (_utils.isArray(context)) {
      if (context.length > 0) {
        if (options.ids) {
          options.ids = [options.name];
        }

        return instance.helpers.each(context, options);
      } else {
        return inverse(this);
      }
    } else {
      if (options.data && options.ids) {
        var data = _utils.createFrame(options.data);
        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
        options = { data: data };
      }

      return fn(context, options);
    }
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvYmxvY2staGVscGVyLW1pc3NpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztxQkFBc0QsVUFBVTs7cUJBRWpELFVBQVMsUUFBUSxFQUFFO0FBQ2hDLFVBQVEsQ0FBQyxjQUFjLENBQUMsb0JBQW9CLEVBQUUsVUFBUyxPQUFPLEVBQUUsT0FBTyxFQUFFO0FBQ3ZFLFFBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPO1FBQ3pCLEVBQUUsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDOztBQUVwQixRQUFJLE9BQU8sS0FBSyxJQUFJLEVBQUU7QUFDcEIsYUFBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDakIsTUFBTSxJQUFJLE9BQU8sS0FBSyxLQUFLLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtBQUMvQyxhQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN0QixNQUFNLElBQUksZUFBUSxPQUFPLENBQUMsRUFBRTtBQUMzQixVQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQ3RCLFlBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtBQUNmLGlCQUFPLENBQUMsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzlCOztBQUVELGVBQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO09BQ2hELE1BQU07QUFDTCxlQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztPQUN0QjtLQUNGLE1BQU07QUFDTCxVQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtBQUMvQixZQUFJLElBQUksR0FBRyxtQkFBWSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDckMsWUFBSSxDQUFDLFdBQVcsR0FBRyx5QkFBa0IsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzdFLGVBQU8sR0FBRyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUMsQ0FBQztPQUN4Qjs7QUFFRCxhQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDN0I7R0FDRixDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJibG9jay1oZWxwZXItbWlzc2luZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXBwZW5kQ29udGV4dFBhdGgsIGNyZWF0ZUZyYW1lLCBpc0FycmF5fSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGluc3RhbmNlKSB7XG4gIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCdibG9ja0hlbHBlck1pc3NpbmcnLCBmdW5jdGlvbihjb250ZXh0LCBvcHRpb25zKSB7XG4gICAgbGV0IGludmVyc2UgPSBvcHRpb25zLmludmVyc2UsXG4gICAgICAgIGZuID0gb3B0aW9ucy5mbjtcblxuICAgIGlmIChjb250ZXh0ID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gZm4odGhpcyk7XG4gICAgfSBlbHNlIGlmIChjb250ZXh0ID09PSBmYWxzZSB8fCBjb250ZXh0ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBpbnZlcnNlKHRoaXMpO1xuICAgIH0gZWxzZSBpZiAoaXNBcnJheShjb250ZXh0KSkge1xuICAgICAgaWYgKGNvbnRleHQubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAob3B0aW9ucy5pZHMpIHtcbiAgICAgICAgICBvcHRpb25zLmlkcyA9IFtvcHRpb25zLm5hbWVdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLmhlbHBlcnMuZWFjaChjb250ZXh0LCBvcHRpb25zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBpbnZlcnNlKHRoaXMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAob3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuaWRzKSB7XG4gICAgICAgIGxldCBkYXRhID0gY3JlYXRlRnJhbWUob3B0aW9ucy5kYXRhKTtcbiAgICAgICAgZGF0YS5jb250ZXh0UGF0aCA9IGFwcGVuZENvbnRleHRQYXRoKG9wdGlvbnMuZGF0YS5jb250ZXh0UGF0aCwgb3B0aW9ucy5uYW1lKTtcbiAgICAgICAgb3B0aW9ucyA9IHtkYXRhOiBkYXRhfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZuKGNvbnRleHQsIG9wdGlvbnMpO1xuICAgIH1cbiAgfSk7XG59XG4iXX0=


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utils = __webpack_require__(0);

var _exception = __webpack_require__(2);

var _exception2 = _interopRequireDefault(_exception);

exports['default'] = function (instance) {
  instance.registerHelper('each', function (context, options) {
    if (!options) {
      throw new _exception2['default']('Must pass iterator to #each');
    }

    var fn = options.fn,
        inverse = options.inverse,
        i = 0,
        ret = '',
        data = undefined,
        contextPath = undefined;

    if (options.data && options.ids) {
      contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
    }

    if (_utils.isFunction(context)) {
      context = context.call(this);
    }

    if (options.data) {
      data = _utils.createFrame(options.data);
    }

    function execIteration(field, index, last) {
      if (data) {
        data.key = field;
        data.index = index;
        data.first = index === 0;
        data.last = !!last;

        if (contextPath) {
          data.contextPath = contextPath + field;
        }
      }

      ret = ret + fn(context[field], {
        data: data,
        blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])
      });
    }

    if (context && typeof context === 'object') {
      if (_utils.isArray(context)) {
        for (var j = context.length; i < j; i++) {
          if (i in context) {
            execIteration(i, i, i === context.length - 1);
          }
        }
      } else {
        var priorKey = undefined;

        for (var key in context) {
          if (context.hasOwnProperty(key)) {
            // We're running the iterations one step out of sync so we can detect
            // the last iteration without have to scan the object twice and create
            // an itermediate keys array.
            if (priorKey !== undefined) {
              execIteration(priorKey, i - 1);
            }
            priorKey = key;
            i++;
          }
        }
        if (priorKey !== undefined) {
          execIteration(priorKey, i - 1, true);
        }
      }
    }

    if (i === 0) {
      ret = inverse(this);
    }

    return ret;
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvZWFjaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O3FCQUErRSxVQUFVOzt5QkFDbkUsY0FBYzs7OztxQkFFckIsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsVUFBUyxPQUFPLEVBQUUsT0FBTyxFQUFFO0FBQ3pELFFBQUksQ0FBQyxPQUFPLEVBQUU7QUFDWixZQUFNLDJCQUFjLDZCQUE2QixDQUFDLENBQUM7S0FDcEQ7O0FBRUQsUUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDLEVBQUU7UUFDZixPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU87UUFDekIsQ0FBQyxHQUFHLENBQUM7UUFDTCxHQUFHLEdBQUcsRUFBRTtRQUNSLElBQUksWUFBQTtRQUNKLFdBQVcsWUFBQSxDQUFDOztBQUVoQixRQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtBQUMvQixpQkFBVyxHQUFHLHlCQUFrQixPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0tBQ2pGOztBQUVELFFBQUksa0JBQVcsT0FBTyxDQUFDLEVBQUU7QUFBRSxhQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUFFOztBQUUxRCxRQUFJLE9BQU8sQ0FBQyxJQUFJLEVBQUU7QUFDaEIsVUFBSSxHQUFHLG1CQUFZLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNsQzs7QUFFRCxhQUFTLGFBQWEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtBQUN6QyxVQUFJLElBQUksRUFBRTtBQUNSLFlBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO0FBQ2pCLFlBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQ25CLFlBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxLQUFLLENBQUMsQ0FBQztBQUN6QixZQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7O0FBRW5CLFlBQUksV0FBVyxFQUFFO0FBQ2YsY0FBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLEdBQUcsS0FBSyxDQUFDO1NBQ3hDO09BQ0Y7O0FBRUQsU0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO0FBQzdCLFlBQUksRUFBRSxJQUFJO0FBQ1YsbUJBQVcsRUFBRSxtQkFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLFdBQVcsR0FBRyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7T0FDL0UsQ0FBQyxDQUFDO0tBQ0o7O0FBRUQsUUFBSSxPQUFPLElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxFQUFFO0FBQzFDLFVBQUksZUFBUSxPQUFPLENBQUMsRUFBRTtBQUNwQixhQUFLLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUN2QyxjQUFJLENBQUMsSUFBSSxPQUFPLEVBQUU7QUFDaEIseUJBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1dBQy9DO1NBQ0Y7T0FDRixNQUFNO0FBQ0wsWUFBSSxRQUFRLFlBQUEsQ0FBQzs7QUFFYixhQUFLLElBQUksR0FBRyxJQUFJLE9BQU8sRUFBRTtBQUN2QixjQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7Ozs7QUFJL0IsZ0JBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtBQUMxQiwyQkFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDaEM7QUFDRCxvQkFBUSxHQUFHLEdBQUcsQ0FBQztBQUNmLGFBQUMsRUFBRSxDQUFDO1dBQ0w7U0FDRjtBQUNELFlBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtBQUMxQix1QkFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3RDO09BQ0Y7S0FDRjs7QUFFRCxRQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDWCxTQUFHLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3JCOztBQUVELFdBQU8sR0FBRyxDQUFDO0dBQ1osQ0FBQyxDQUFDO0NBQ0oiLCJmaWxlIjoiZWFjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXBwZW5kQ29udGV4dFBhdGgsIGJsb2NrUGFyYW1zLCBjcmVhdGVGcmFtZSwgaXNBcnJheSwgaXNGdW5jdGlvbn0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tICcuLi9leGNlcHRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignZWFjaCcsIGZ1bmN0aW9uKGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ011c3QgcGFzcyBpdGVyYXRvciB0byAjZWFjaCcpO1xuICAgIH1cblxuICAgIGxldCBmbiA9IG9wdGlvbnMuZm4sXG4gICAgICAgIGludmVyc2UgPSBvcHRpb25zLmludmVyc2UsXG4gICAgICAgIGkgPSAwLFxuICAgICAgICByZXQgPSAnJyxcbiAgICAgICAgZGF0YSxcbiAgICAgICAgY29udGV4dFBhdGg7XG5cbiAgICBpZiAob3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuaWRzKSB7XG4gICAgICBjb250ZXh0UGF0aCA9IGFwcGVuZENvbnRleHRQYXRoKG9wdGlvbnMuZGF0YS5jb250ZXh0UGF0aCwgb3B0aW9ucy5pZHNbMF0pICsgJy4nO1xuICAgIH1cblxuICAgIGlmIChpc0Z1bmN0aW9uKGNvbnRleHQpKSB7IGNvbnRleHQgPSBjb250ZXh0LmNhbGwodGhpcyk7IH1cblxuICAgIGlmIChvcHRpb25zLmRhdGEpIHtcbiAgICAgIGRhdGEgPSBjcmVhdGVGcmFtZShvcHRpb25zLmRhdGEpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGV4ZWNJdGVyYXRpb24oZmllbGQsIGluZGV4LCBsYXN0KSB7XG4gICAgICBpZiAoZGF0YSkge1xuICAgICAgICBkYXRhLmtleSA9IGZpZWxkO1xuICAgICAgICBkYXRhLmluZGV4ID0gaW5kZXg7XG4gICAgICAgIGRhdGEuZmlyc3QgPSBpbmRleCA9PT0gMDtcbiAgICAgICAgZGF0YS5sYXN0ID0gISFsYXN0O1xuXG4gICAgICAgIGlmIChjb250ZXh0UGF0aCkge1xuICAgICAgICAgIGRhdGEuY29udGV4dFBhdGggPSBjb250ZXh0UGF0aCArIGZpZWxkO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldCA9IHJldCArIGZuKGNvbnRleHRbZmllbGRdLCB7XG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgIGJsb2NrUGFyYW1zOiBibG9ja1BhcmFtcyhbY29udGV4dFtmaWVsZF0sIGZpZWxkXSwgW2NvbnRleHRQYXRoICsgZmllbGQsIG51bGxdKVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGNvbnRleHQgJiYgdHlwZW9mIGNvbnRleHQgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAoaXNBcnJheShjb250ZXh0KSkge1xuICAgICAgICBmb3IgKGxldCBqID0gY29udGV4dC5sZW5ndGg7IGkgPCBqOyBpKyspIHtcbiAgICAgICAgICBpZiAoaSBpbiBjb250ZXh0KSB7XG4gICAgICAgICAgICBleGVjSXRlcmF0aW9uKGksIGksIGkgPT09IGNvbnRleHQubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgcHJpb3JLZXk7XG5cbiAgICAgICAgZm9yIChsZXQga2V5IGluIGNvbnRleHQpIHtcbiAgICAgICAgICBpZiAoY29udGV4dC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAvLyBXZSdyZSBydW5uaW5nIHRoZSBpdGVyYXRpb25zIG9uZSBzdGVwIG91dCBvZiBzeW5jIHNvIHdlIGNhbiBkZXRlY3RcbiAgICAgICAgICAgIC8vIHRoZSBsYXN0IGl0ZXJhdGlvbiB3aXRob3V0IGhhdmUgdG8gc2NhbiB0aGUgb2JqZWN0IHR3aWNlIGFuZCBjcmVhdGVcbiAgICAgICAgICAgIC8vIGFuIGl0ZXJtZWRpYXRlIGtleXMgYXJyYXkuXG4gICAgICAgICAgICBpZiAocHJpb3JLZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBleGVjSXRlcmF0aW9uKHByaW9yS2V5LCBpIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcmlvcktleSA9IGtleTtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByaW9yS2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBleGVjSXRlcmF0aW9uKHByaW9yS2V5LCBpIC0gMSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgcmV0ID0gaW52ZXJzZSh0aGlzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xuICB9KTtcbn1cbiJdfQ==


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _exception = __webpack_require__(2);

var _exception2 = _interopRequireDefault(_exception);

exports['default'] = function (instance) {
  instance.registerHelper('helperMissing', function () /* [args, ]options */{
    if (arguments.length === 1) {
      // A missing field in a {{foo}} construct.
      return undefined;
    } else {
      // Someone is actually trying to call something, blow up.
      throw new _exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
    }
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvaGVscGVyLW1pc3NpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozt5QkFBc0IsY0FBYzs7OztxQkFFckIsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxlQUFlLEVBQUUsaUNBQWdDO0FBQ3ZFLFFBQUksU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7O0FBRTFCLGFBQU8sU0FBUyxDQUFDO0tBQ2xCLE1BQU07O0FBRUwsWUFBTSwyQkFBYyxtQkFBbUIsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7S0FDdkY7R0FDRixDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJoZWxwZXItbWlzc2luZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFeGNlcHRpb24gZnJvbSAnLi4vZXhjZXB0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2hlbHBlck1pc3NpbmcnLCBmdW5jdGlvbigvKiBbYXJncywgXW9wdGlvbnMgKi8pIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgLy8gQSBtaXNzaW5nIGZpZWxkIGluIGEge3tmb299fSBjb25zdHJ1Y3QuXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTb21lb25lIGlzIGFjdHVhbGx5IHRyeWluZyB0byBjYWxsIHNvbWV0aGluZywgYmxvdyB1cC5cbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ01pc3NpbmcgaGVscGVyOiBcIicgKyBhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aCAtIDFdLm5hbWUgKyAnXCInKTtcbiAgICB9XG4gIH0pO1xufVxuIl19


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _utils = __webpack_require__(0);

exports['default'] = function (instance) {
  instance.registerHelper('if', function (conditional, options) {
    if (_utils.isFunction(conditional)) {
      conditional = conditional.call(this);
    }

    // Default behavior is to render the positive path if the value is truthy and not empty.
    // The `includeZero` option may be set to treat the condtional as purely not empty based on the
    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
    if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {
      return options.inverse(this);
    } else {
      return options.fn(this);
    }
  });

  instance.registerHelper('unless', function (conditional, options) {
    return instance.helpers['if'].call(this, conditional, { fn: options.inverse, inverse: options.fn, hash: options.hash });
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvaWYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztxQkFBa0MsVUFBVTs7cUJBRTdCLFVBQVMsUUFBUSxFQUFFO0FBQ2hDLFVBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLFVBQVMsV0FBVyxFQUFFLE9BQU8sRUFBRTtBQUMzRCxRQUFJLGtCQUFXLFdBQVcsQ0FBQyxFQUFFO0FBQUUsaUJBQVcsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQUU7Ozs7O0FBS3RFLFFBQUksQUFBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsV0FBVyxJQUFLLGVBQVEsV0FBVyxDQUFDLEVBQUU7QUFDdkUsYUFBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzlCLE1BQU07QUFDTCxhQUFPLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDekI7R0FDRixDQUFDLENBQUM7O0FBRUgsVUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsVUFBUyxXQUFXLEVBQUUsT0FBTyxFQUFFO0FBQy9ELFdBQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxFQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztHQUN2SCxDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJpZi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aXNFbXB0eSwgaXNGdW5jdGlvbn0gZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignaWYnLCBmdW5jdGlvbihjb25kaXRpb25hbCwgb3B0aW9ucykge1xuICAgIGlmIChpc0Z1bmN0aW9uKGNvbmRpdGlvbmFsKSkgeyBjb25kaXRpb25hbCA9IGNvbmRpdGlvbmFsLmNhbGwodGhpcyk7IH1cblxuICAgIC8vIERlZmF1bHQgYmVoYXZpb3IgaXMgdG8gcmVuZGVyIHRoZSBwb3NpdGl2ZSBwYXRoIGlmIHRoZSB2YWx1ZSBpcyB0cnV0aHkgYW5kIG5vdCBlbXB0eS5cbiAgICAvLyBUaGUgYGluY2x1ZGVaZXJvYCBvcHRpb24gbWF5IGJlIHNldCB0byB0cmVhdCB0aGUgY29uZHRpb25hbCBhcyBwdXJlbHkgbm90IGVtcHR5IGJhc2VkIG9uIHRoZVxuICAgIC8vIGJlaGF2aW9yIG9mIGlzRW1wdHkuIEVmZmVjdGl2ZWx5IHRoaXMgZGV0ZXJtaW5lcyBpZiAwIGlzIGhhbmRsZWQgYnkgdGhlIHBvc2l0aXZlIHBhdGggb3IgbmVnYXRpdmUuXG4gICAgaWYgKCghb3B0aW9ucy5oYXNoLmluY2x1ZGVaZXJvICYmICFjb25kaXRpb25hbCkgfHwgaXNFbXB0eShjb25kaXRpb25hbCkpIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmludmVyc2UodGhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmZuKHRoaXMpO1xuICAgIH1cbiAgfSk7XG5cbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ3VubGVzcycsIGZ1bmN0aW9uKGNvbmRpdGlvbmFsLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlLmhlbHBlcnNbJ2lmJ10uY2FsbCh0aGlzLCBjb25kaXRpb25hbCwge2ZuOiBvcHRpb25zLmludmVyc2UsIGludmVyc2U6IG9wdGlvbnMuZm4sIGhhc2g6IG9wdGlvbnMuaGFzaH0pO1xuICB9KTtcbn1cbiJdfQ==


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports['default'] = function (instance) {
  instance.registerHelper('log', function () /* message, options */{
    var args = [undefined],
        options = arguments[arguments.length - 1];
    for (var i = 0; i < arguments.length - 1; i++) {
      args.push(arguments[i]);
    }

    var level = 1;
    if (options.hash.level != null) {
      level = options.hash.level;
    } else if (options.data && options.data.level != null) {
      level = options.data.level;
    }
    args[0] = level;

    instance.log.apply(instance, args);
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvbG9nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7cUJBQWUsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsa0NBQWlDO0FBQzlELFFBQUksSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDO1FBQ2xCLE9BQU8sR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztBQUM5QyxTQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDN0MsVUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN6Qjs7QUFFRCxRQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7QUFDZCxRQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksRUFBRTtBQUM5QixXQUFLLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7S0FDNUIsTUFBTSxJQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxFQUFFO0FBQ3JELFdBQUssR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztLQUM1QjtBQUNELFFBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7O0FBRWhCLFlBQVEsQ0FBQyxHQUFHLE1BQUEsQ0FBWixRQUFRLEVBQVMsSUFBSSxDQUFDLENBQUM7R0FDeEIsQ0FBQyxDQUFDO0NBQ0oiLCJmaWxlIjoibG9nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2xvZycsIGZ1bmN0aW9uKC8qIG1lc3NhZ2UsIG9wdGlvbnMgKi8pIHtcbiAgICBsZXQgYXJncyA9IFt1bmRlZmluZWRdLFxuICAgICAgICBvcHRpb25zID0gYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICAgIH1cblxuICAgIGxldCBsZXZlbCA9IDE7XG4gICAgaWYgKG9wdGlvbnMuaGFzaC5sZXZlbCAhPSBudWxsKSB7XG4gICAgICBsZXZlbCA9IG9wdGlvbnMuaGFzaC5sZXZlbDtcbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLmRhdGEubGV2ZWwgIT0gbnVsbCkge1xuICAgICAgbGV2ZWwgPSBvcHRpb25zLmRhdGEubGV2ZWw7XG4gICAgfVxuICAgIGFyZ3NbMF0gPSBsZXZlbDtcblxuICAgIGluc3RhbmNlLmxvZyguLi4gYXJncyk7XG4gIH0pO1xufVxuIl19


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports['default'] = function (instance) {
  instance.registerHelper('lookup', function (obj, field) {
    return obj && obj[field];
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvbG9va3VwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7cUJBQWUsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsVUFBUyxHQUFHLEVBQUUsS0FBSyxFQUFFO0FBQ3JELFdBQU8sR0FBRyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztHQUMxQixDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJsb29rdXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignbG9va3VwJywgZnVuY3Rpb24ob2JqLCBmaWVsZCkge1xuICAgIHJldHVybiBvYmogJiYgb2JqW2ZpZWxkXTtcbiAgfSk7XG59XG4iXX0=


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _utils = __webpack_require__(0);

exports['default'] = function (instance) {
  instance.registerHelper('with', function (context, options) {
    if (_utils.isFunction(context)) {
      context = context.call(this);
    }

    var fn = options.fn;

    if (!_utils.isEmpty(context)) {
      var data = options.data;
      if (options.data && options.ids) {
        data = _utils.createFrame(options.data);
        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
      }

      return fn(context, {
        data: data,
        blockParams: _utils.blockParams([context], [data && data.contextPath])
      });
    } else {
      return options.inverse(this);
    }
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvd2l0aC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O3FCQUErRSxVQUFVOztxQkFFMUUsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsVUFBUyxPQUFPLEVBQUUsT0FBTyxFQUFFO0FBQ3pELFFBQUksa0JBQVcsT0FBTyxDQUFDLEVBQUU7QUFBRSxhQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUFFOztBQUUxRCxRQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDOztBQUVwQixRQUFJLENBQUMsZUFBUSxPQUFPLENBQUMsRUFBRTtBQUNyQixVQUFJLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO0FBQ3hCLFVBQUksT0FBTyxDQUFDLElBQUksSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFO0FBQy9CLFlBQUksR0FBRyxtQkFBWSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDakMsWUFBSSxDQUFDLFdBQVcsR0FBRyx5QkFBa0IsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO09BQ2hGOztBQUVELGFBQU8sRUFBRSxDQUFDLE9BQU8sRUFBRTtBQUNqQixZQUFJLEVBQUUsSUFBSTtBQUNWLG1CQUFXLEVBQUUsbUJBQVksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7T0FDaEUsQ0FBQyxDQUFDO0tBQ0osTUFBTTtBQUNMLGFBQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUM5QjtHQUNGLENBQUMsQ0FBQztDQUNKIiwiZmlsZSI6IndpdGguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2FwcGVuZENvbnRleHRQYXRoLCBibG9ja1BhcmFtcywgY3JlYXRlRnJhbWUsIGlzRW1wdHksIGlzRnVuY3Rpb259IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ3dpdGgnLCBmdW5jdGlvbihjb250ZXh0LCBvcHRpb25zKSB7XG4gICAgaWYgKGlzRnVuY3Rpb24oY29udGV4dCkpIHsgY29udGV4dCA9IGNvbnRleHQuY2FsbCh0aGlzKTsgfVxuXG4gICAgbGV0IGZuID0gb3B0aW9ucy5mbjtcblxuICAgIGlmICghaXNFbXB0eShjb250ZXh0KSkge1xuICAgICAgbGV0IGRhdGEgPSBvcHRpb25zLmRhdGE7XG4gICAgICBpZiAob3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuaWRzKSB7XG4gICAgICAgIGRhdGEgPSBjcmVhdGVGcmFtZShvcHRpb25zLmRhdGEpO1xuICAgICAgICBkYXRhLmNvbnRleHRQYXRoID0gYXBwZW5kQ29udGV4dFBhdGgob3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoLCBvcHRpb25zLmlkc1swXSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmbihjb250ZXh0LCB7XG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgIGJsb2NrUGFyYW1zOiBibG9ja1BhcmFtcyhbY29udGV4dF0sIFtkYXRhICYmIGRhdGEuY29udGV4dFBhdGhdKVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmludmVyc2UodGhpcyk7XG4gICAgfVxuICB9KTtcbn1cbiJdfQ==


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.registerDefaultDecorators = registerDefaultDecorators;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _decoratorsInline = __webpack_require__(21);

var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);

function registerDefaultDecorators(instance) {
  _decoratorsInline2['default'](instance);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2RlY29yYXRvcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Z0NBQTJCLHFCQUFxQjs7OztBQUV6QyxTQUFTLHlCQUF5QixDQUFDLFFBQVEsRUFBRTtBQUNsRCxnQ0FBZSxRQUFRLENBQUMsQ0FBQztDQUMxQiIsImZpbGUiOiJkZWNvcmF0b3JzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlZ2lzdGVySW5saW5lIGZyb20gJy4vZGVjb3JhdG9ycy9pbmxpbmUnO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJEZWZhdWx0RGVjb3JhdG9ycyhpbnN0YW5jZSkge1xuICByZWdpc3RlcklubGluZShpbnN0YW5jZSk7XG59XG5cbiJdfQ==


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _utils = __webpack_require__(0);

exports['default'] = function (instance) {
  instance.registerDecorator('inline', function (fn, props, container, options) {
    var ret = fn;
    if (!props.partials) {
      props.partials = {};
      ret = function (context, options) {
        // Create a new partials stack frame prior to exec.
        var original = container.partials;
        container.partials = _utils.extend({}, original, props.partials);
        var ret = fn(context, options);
        container.partials = original;
        return ret;
      };
    }

    props.partials[options.args[0]] = options.fn;

    return ret;
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2RlY29yYXRvcnMvaW5saW5lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7cUJBQXFCLFVBQVU7O3FCQUVoQixVQUFTLFFBQVEsRUFBRTtBQUNoQyxVQUFRLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLFVBQVMsRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFO0FBQzNFLFFBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztBQUNiLFFBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO0FBQ25CLFdBQUssQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBQ3BCLFNBQUcsR0FBRyxVQUFTLE9BQU8sRUFBRSxPQUFPLEVBQUU7O0FBRS9CLFlBQUksUUFBUSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUM7QUFDbEMsaUJBQVMsQ0FBQyxRQUFRLEdBQUcsY0FBTyxFQUFFLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMxRCxZQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQy9CLGlCQUFTLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztBQUM5QixlQUFPLEdBQUcsQ0FBQztPQUNaLENBQUM7S0FDSDs7QUFFRCxTQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDOztBQUU3QyxXQUFPLEdBQUcsQ0FBQztHQUNaLENBQUMsQ0FBQztDQUNKIiwiZmlsZSI6ImlubGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ZXh0ZW5kfSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGluc3RhbmNlKSB7XG4gIGluc3RhbmNlLnJlZ2lzdGVyRGVjb3JhdG9yKCdpbmxpbmUnLCBmdW5jdGlvbihmbiwgcHJvcHMsIGNvbnRhaW5lciwgb3B0aW9ucykge1xuICAgIGxldCByZXQgPSBmbjtcbiAgICBpZiAoIXByb3BzLnBhcnRpYWxzKSB7XG4gICAgICBwcm9wcy5wYXJ0aWFscyA9IHt9O1xuICAgICAgcmV0ID0gZnVuY3Rpb24oY29udGV4dCwgb3B0aW9ucykge1xuICAgICAgICAvLyBDcmVhdGUgYSBuZXcgcGFydGlhbHMgc3RhY2sgZnJhbWUgcHJpb3IgdG8gZXhlYy5cbiAgICAgICAgbGV0IG9yaWdpbmFsID0gY29udGFpbmVyLnBhcnRpYWxzO1xuICAgICAgICBjb250YWluZXIucGFydGlhbHMgPSBleHRlbmQoe30sIG9yaWdpbmFsLCBwcm9wcy5wYXJ0aWFscyk7XG4gICAgICAgIGxldCByZXQgPSBmbihjb250ZXh0LCBvcHRpb25zKTtcbiAgICAgICAgY29udGFpbmVyLnBhcnRpYWxzID0gb3JpZ2luYWw7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHByb3BzLnBhcnRpYWxzW29wdGlvbnMuYXJnc1swXV0gPSBvcHRpb25zLmZuO1xuXG4gICAgcmV0dXJuIHJldDtcbiAgfSk7XG59XG4iXX0=


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _utils = __webpack_require__(0);

var logger = {
  methodMap: ['debug', 'info', 'warn', 'error'],
  level: 'info',

  // Maps a given level value to the `methodMap` indexes above.
  lookupLevel: function lookupLevel(level) {
    if (typeof level === 'string') {
      var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
      if (levelMap >= 0) {
        level = levelMap;
      } else {
        level = parseInt(level, 10);
      }
    }

    return level;
  },

  // Can be overridden in the host environment
  log: function log(level) {
    level = logger.lookupLevel(level);

    if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {
      var method = logger.methodMap[level];
      if (!console[method]) {
        // eslint-disable-line no-console
        method = 'log';
      }

      for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        message[_key - 1] = arguments[_key];
      }

      console[method].apply(console, message); // eslint-disable-line no-console
    }
  }
};

exports['default'] = logger;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2xvZ2dlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O3FCQUFzQixTQUFTOztBQUUvQixJQUFJLE1BQU0sR0FBRztBQUNYLFdBQVMsRUFBRSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQztBQUM3QyxPQUFLLEVBQUUsTUFBTTs7O0FBR2IsYUFBVyxFQUFFLHFCQUFTLEtBQUssRUFBRTtBQUMzQixRQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtBQUM3QixVQUFJLFFBQVEsR0FBRyxlQUFRLE1BQU0sQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7QUFDOUQsVUFBSSxRQUFRLElBQUksQ0FBQyxFQUFFO0FBQ2pCLGFBQUssR0FBRyxRQUFRLENBQUM7T0FDbEIsTUFBTTtBQUNMLGFBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO09BQzdCO0tBQ0Y7O0FBRUQsV0FBTyxLQUFLLENBQUM7R0FDZDs7O0FBR0QsS0FBRyxFQUFFLGFBQVMsS0FBSyxFQUFjO0FBQy9CLFNBQUssR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDOztBQUVsQyxRQUFJLE9BQU8sT0FBTyxLQUFLLFdBQVcsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLEVBQUU7QUFDL0UsVUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNyQyxVQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFOztBQUNwQixjQUFNLEdBQUcsS0FBSyxDQUFDO09BQ2hCOzt3Q0FQbUIsT0FBTztBQUFQLGVBQU87OztBQVEzQixhQUFPLENBQUMsTUFBTSxPQUFDLENBQWYsT0FBTyxFQUFZLE9BQU8sQ0FBQyxDQUFDO0tBQzdCO0dBQ0Y7Q0FDRixDQUFDOztxQkFFYSxNQUFNIiwiZmlsZSI6ImxvZ2dlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5kZXhPZn0gZnJvbSAnLi91dGlscyc7XG5cbmxldCBsb2dnZXIgPSB7XG4gIG1ldGhvZE1hcDogWydkZWJ1ZycsICdpbmZvJywgJ3dhcm4nLCAnZXJyb3InXSxcbiAgbGV2ZWw6ICdpbmZvJyxcblxuICAvLyBNYXBzIGEgZ2l2ZW4gbGV2ZWwgdmFsdWUgdG8gdGhlIGBtZXRob2RNYXBgIGluZGV4ZXMgYWJvdmUuXG4gIGxvb2t1cExldmVsOiBmdW5jdGlvbihsZXZlbCkge1xuICAgIGlmICh0eXBlb2YgbGV2ZWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICBsZXQgbGV2ZWxNYXAgPSBpbmRleE9mKGxvZ2dlci5tZXRob2RNYXAsIGxldmVsLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgaWYgKGxldmVsTWFwID49IDApIHtcbiAgICAgICAgbGV2ZWwgPSBsZXZlbE1hcDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldmVsID0gcGFyc2VJbnQobGV2ZWwsIDEwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbGV2ZWw7XG4gIH0sXG5cbiAgLy8gQ2FuIGJlIG92ZXJyaWRkZW4gaW4gdGhlIGhvc3QgZW52aXJvbm1lbnRcbiAgbG9nOiBmdW5jdGlvbihsZXZlbCwgLi4ubWVzc2FnZSkge1xuICAgIGxldmVsID0gbG9nZ2VyLmxvb2t1cExldmVsKGxldmVsKTtcblxuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbG9nZ2VyLmxvb2t1cExldmVsKGxvZ2dlci5sZXZlbCkgPD0gbGV2ZWwpIHtcbiAgICAgIGxldCBtZXRob2QgPSBsb2dnZXIubWV0aG9kTWFwW2xldmVsXTtcbiAgICAgIGlmICghY29uc29sZVttZXRob2RdKSB7ICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICAgIG1ldGhvZCA9ICdsb2cnO1xuICAgICAgfVxuICAgICAgY29uc29sZVttZXRob2RdKC4uLm1lc3NhZ2UpOyAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvZ2dlcjtcbiJdfQ==


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Build out our basic SafeString type


exports.__esModule = true;
function SafeString(string) {
  this.string = string;
}

SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
  return '' + this.string;
};

exports['default'] = SafeString;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL3NhZmUtc3RyaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxTQUFTLFVBQVUsQ0FBQyxNQUFNLEVBQUU7QUFDMUIsTUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7Q0FDdEI7O0FBRUQsVUFBVSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsWUFBVztBQUN2RSxTQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0NBQ3pCLENBQUM7O3FCQUVhLFVBQVUiLCJmaWxlIjoic2FmZS1zdHJpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBCdWlsZCBvdXQgb3VyIGJhc2ljIFNhZmVTdHJpbmcgdHlwZVxuZnVuY3Rpb24gU2FmZVN0cmluZyhzdHJpbmcpIHtcbiAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG59XG5cblNhZmVTdHJpbmcucHJvdG90eXBlLnRvU3RyaW5nID0gU2FmZVN0cmluZy5wcm90b3R5cGUudG9IVE1MID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAnJyArIHRoaXMuc3RyaW5nO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2FmZVN0cmluZztcbiJdfQ==


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.checkRevision = checkRevision;
exports.template = template;
exports.wrapProgram = wrapProgram;
exports.resolvePartial = resolvePartial;
exports.invokePartial = invokePartial;
exports.noop = noop;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// istanbul ignore next

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _utils = __webpack_require__(0);

var Utils = _interopRequireWildcard(_utils);

var _exception = __webpack_require__(2);

var _exception2 = _interopRequireDefault(_exception);

var _base = __webpack_require__(4);

function checkRevision(compilerInfo) {
  var compilerRevision = compilerInfo && compilerInfo[0] || 1,
      currentRevision = _base.COMPILER_REVISION;

  if (compilerRevision !== currentRevision) {
    if (compilerRevision < currentRevision) {
      var runtimeVersions = _base.REVISION_CHANGES[currentRevision],
          compilerVersions = _base.REVISION_CHANGES[compilerRevision];
      throw new _exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
    } else {
      // Use the embedded version info since the runtime doesn't know about this revision yet
      throw new _exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
    }
  }
}

function template(templateSpec, env) {
  /* istanbul ignore next */
  if (!env) {
    throw new _exception2['default']('No environment passed to template');
  }
  if (!templateSpec || !templateSpec.main) {
    throw new _exception2['default']('Unknown template object: ' + typeof templateSpec);
  }

  templateSpec.main.decorator = templateSpec.main_d;

  // Note: Using env.VM references rather than local var references throughout this section to allow
  // for external users to override these as psuedo-supported APIs.
  env.VM.checkRevision(templateSpec.compiler);

  function invokePartialWrapper(partial, context, options) {
    if (options.hash) {
      context = Utils.extend({}, context, options.hash);
      if (options.ids) {
        options.ids[0] = true;
      }
    }

    partial = env.VM.resolvePartial.call(this, partial, context, options);
    var result = env.VM.invokePartial.call(this, partial, context, options);

    if (result == null && env.compile) {
      options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
      result = options.partials[options.name](context, options);
    }
    if (result != null) {
      if (options.indent) {
        var lines = result.split('\n');
        for (var i = 0, l = lines.length; i < l; i++) {
          if (!lines[i] && i + 1 === l) {
            break;
          }

          lines[i] = options.indent + lines[i];
        }
        result = lines.join('\n');
      }
      return result;
    } else {
      throw new _exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
    }
  }

  // Just add water
  var container = {
    strict: function strict(obj, name) {
      if (!(name in obj)) {
        throw new _exception2['default']('"' + name + '" not defined in ' + obj);
      }
      return obj[name];
    },
    lookup: function lookup(depths, name) {
      var len = depths.length;
      for (var i = 0; i < len; i++) {
        if (depths[i] && depths[i][name] != null) {
          return depths[i][name];
        }
      }
    },
    lambda: function lambda(current, context) {
      return typeof current === 'function' ? current.call(context) : current;
    },

    escapeExpression: Utils.escapeExpression,
    invokePartial: invokePartialWrapper,

    fn: function fn(i) {
      var ret = templateSpec[i];
      ret.decorator = templateSpec[i + '_d'];
      return ret;
    },

    programs: [],
    program: function program(i, data, declaredBlockParams, blockParams, depths) {
      var programWrapper = this.programs[i],
          fn = this.fn(i);
      if (data || depths || blockParams || declaredBlockParams) {
        programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
      } else if (!programWrapper) {
        programWrapper = this.programs[i] = wrapProgram(this, i, fn);
      }
      return programWrapper;
    },

    data: function data(value, depth) {
      while (value && depth--) {
        value = value._parent;
      }
      return value;
    },
    merge: function merge(param, common) {
      var obj = param || common;

      if (param && common && param !== common) {
        obj = Utils.extend({}, common, param);
      }

      return obj;
    },
    // An empty object to use as replacement for null-contexts
    nullContext: Object.seal({}),

    noop: env.VM.noop,
    compilerInfo: templateSpec.compiler
  };

  function ret(context) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var data = options.data;

    ret._setup(options);
    if (!options.partial && templateSpec.useData) {
      data = initData(context, data);
    }
    var depths = undefined,
        blockParams = templateSpec.useBlockParams ? [] : undefined;
    if (templateSpec.useDepths) {
      if (options.depths) {
        depths = context != options.depths[0] ? [context].concat(options.depths) : options.depths;
      } else {
        depths = [context];
      }
    }

    function main(context /*, options*/) {
      return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
    }
    main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
    return main(context, options);
  }
  ret.isTop = true;

  ret._setup = function (options) {
    if (!options.partial) {
      container.helpers = container.merge(options.helpers, env.helpers);

      if (templateSpec.usePartial) {
        container.partials = container.merge(options.partials, env.partials);
      }
      if (templateSpec.usePartial || templateSpec.useDecorators) {
        container.decorators = container.merge(options.decorators, env.decorators);
      }
    } else {
      container.helpers = options.helpers;
      container.partials = options.partials;
      container.decorators = options.decorators;
    }
  };

  ret._child = function (i, data, blockParams, depths) {
    if (templateSpec.useBlockParams && !blockParams) {
      throw new _exception2['default']('must pass block params');
    }
    if (templateSpec.useDepths && !depths) {
      throw new _exception2['default']('must pass parent depths');
    }

    return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
  };
  return ret;
}

function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
  function prog(context) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var currentDepths = depths;
    if (depths && context != depths[0] && !(context === container.nullContext && depths[0] === null)) {
      currentDepths = [context].concat(depths);
    }

    return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);
  }

  prog = executeDecorators(fn, prog, container, depths, data, blockParams);

  prog.program = i;
  prog.depth = depths ? depths.length : 0;
  prog.blockParams = declaredBlockParams || 0;
  return prog;
}

function resolvePartial(partial, context, options) {
  if (!partial) {
    if (options.name === '@partial-block') {
      partial = options.data['partial-block'];
    } else {
      partial = options.partials[options.name];
    }
  } else if (!partial.call && !options.name) {
    // This is a dynamic partial that returned a string
    options.name = partial;
    partial = options.partials[partial];
  }
  return partial;
}

function invokePartial(partial, context, options) {
  // Use the current closure context to save the partial-block if this partial
  var currentPartialBlock = options.data && options.data['partial-block'];
  options.partial = true;
  if (options.ids) {
    options.data.contextPath = options.ids[0] || options.data.contextPath;
  }

  var partialBlock = undefined;
  if (options.fn && options.fn !== noop) {
    (function () {
      options.data = _base.createFrame(options.data);
      // Wrapper function to get access to currentPartialBlock from the closure
      var fn = options.fn;
      partialBlock = options.data['partial-block'] = function partialBlockWrapper(context) {
        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        // Restore the partial-block from the closure for the execution of the block
        // i.e. the part inside the block of the partial call.
        options.data = _base.createFrame(options.data);
        options.data['partial-block'] = currentPartialBlock;
        return fn(context, options);
      };
      if (fn.partials) {
        options.partials = Utils.extend({}, options.partials, fn.partials);
      }
    })();
  }

  if (partial === undefined && partialBlock) {
    partial = partialBlock;
  }

  if (partial === undefined) {
    throw new _exception2['default']('The partial ' + options.name + ' could not be found');
  } else if (partial instanceof Function) {
    return partial(context, options);
  }
}

function noop() {
  return '';
}

function initData(context, data) {
  if (!data || !('root' in data)) {
    data = data ? _base.createFrame(data) : {};
    data.root = context;
  }
  return data;
}

function executeDecorators(fn, prog, container, depths, data, blockParams) {
  if (fn.decorator) {
    var props = {};
    prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
    Utils.extend(prog, props);
  }
  return prog;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL3J1bnRpbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBQXVCLFNBQVM7O0lBQXBCLEtBQUs7O3lCQUNLLGFBQWE7Ozs7b0JBQzhCLFFBQVE7O0FBRWxFLFNBQVMsYUFBYSxDQUFDLFlBQVksRUFBRTtBQUMxQyxNQUFNLGdCQUFnQixHQUFHLFlBQVksSUFBSSxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztNQUN2RCxlQUFlLDBCQUFvQixDQUFDOztBQUUxQyxNQUFJLGdCQUFnQixLQUFLLGVBQWUsRUFBRTtBQUN4QyxRQUFJLGdCQUFnQixHQUFHLGVBQWUsRUFBRTtBQUN0QyxVQUFNLGVBQWUsR0FBRyx1QkFBaUIsZUFBZSxDQUFDO1VBQ25ELGdCQUFnQixHQUFHLHVCQUFpQixnQkFBZ0IsQ0FBQyxDQUFDO0FBQzVELFlBQU0sMkJBQWMseUZBQXlGLEdBQ3ZHLHFEQUFxRCxHQUFHLGVBQWUsR0FBRyxtREFBbUQsR0FBRyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsQ0FBQztLQUNoSyxNQUFNOztBQUVMLFlBQU0sMkJBQWMsd0ZBQXdGLEdBQ3RHLGlEQUFpRCxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztLQUNuRjtHQUNGO0NBQ0Y7O0FBRU0sU0FBUyxRQUFRLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRTs7QUFFMUMsTUFBSSxDQUFDLEdBQUcsRUFBRTtBQUNSLFVBQU0sMkJBQWMsbUNBQW1DLENBQUMsQ0FBQztHQUMxRDtBQUNELE1BQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFO0FBQ3ZDLFVBQU0sMkJBQWMsMkJBQTJCLEdBQUcsT0FBTyxZQUFZLENBQUMsQ0FBQztHQUN4RTs7QUFFRCxjQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDOzs7O0FBSWxELEtBQUcs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QUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDNUYsU0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7R0FDM0I7QUFDRCxTQUFPLElBQUksQ0FBQztDQUNiIiwiZmlsZSI6InJ1bnRpbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBVdGlscyBmcm9tICcuL3V0aWxzJztcbmltcG9ydCBFeGNlcHRpb24gZnJvbSAnLi9leGNlcHRpb24nO1xuaW1wb3J0IHsgQ09NUElMRVJfUkVWSVNJT04sIFJFVklTSU9OX0NIQU5HRVMsIGNyZWF0ZUZyYW1lIH0gZnJvbSAnLi9iYXNlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrUmV2aXNpb24oY29tcGlsZXJJbmZvKSB7XG4gIGNvbnN0IGNvbXBpbGVyUmV2aXNpb24gPSBjb21waWxlckluZm8gJiYgY29tcGlsZXJJbmZvWzBdIHx8IDEsXG4gICAgICAgIGN1cnJlbnRSZXZpc2lvbiA9IENPTVBJTEVSX1JFVklTSU9OO1xuXG4gIGlmIChjb21waWxlclJldmlzaW9uICE9PSBjdXJyZW50UmV2aXNpb24pIHtcbiAgICBpZiAoY29tcGlsZXJSZXZpc2lvbiA8IGN1cnJlbnRSZXZpc2lvbikge1xuICAgICAgY29uc3QgcnVudGltZVZlcnNpb25zID0gUkVWSVNJT05fQ0hBTkdFU1tjdXJyZW50UmV2aXNpb25dLFxuICAgICAgICAgICAgY29tcGlsZXJWZXJzaW9ucyA9IFJFVklTSU9OX0NIQU5HRVNbY29tcGlsZXJSZXZpc2lvbl07XG4gICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdUZW1wbGF0ZSB3YXMgcHJlY29tcGlsZWQgd2l0aCBhbiBvbGRlciB2ZXJzaW9uIG9mIEhhbmRsZWJhcnMgdGhhbiB0aGUgY3VycmVudCBydW50aW1lLiAnICtcbiAgICAgICAgICAgICdQbGVhc2UgdXBkYXRlIHlvdXIgcHJlY29tcGlsZXIgdG8gYSBuZXdlciB2ZXJzaW9uICgnICsgcnVudGltZVZlcnNpb25zICsgJykgb3IgZG93bmdyYWRlIHlvdXIgcnVudGltZSB0byBhbiBvbGRlciB2ZXJzaW9uICgnICsgY29tcGlsZXJWZXJzaW9ucyArICcpLicpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBVc2UgdGhlIGVtYmVkZGVkIHZlcnNpb24gaW5mbyBzaW5jZSB0aGUgcnVudGltZSBkb2Vzbid0IGtub3cgYWJvdXQgdGhpcyByZXZpc2lvbiB5ZXRcbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ1RlbXBsYXRlIHdhcyBwcmVjb21waWxlZCB3aXRoIGEgbmV3ZXIgdmVyc2lvbiBvZiBIYW5kbGViYXJzIHRoYW4gdGhlIGN1cnJlbnQgcnVudGltZS4gJyArXG4gICAgICAgICAgICAnUGxlYXNlIHVwZGF0ZSB5b3VyIHJ1bnRpbWUgdG8gYSBuZXdlciB2ZXJzaW9uICgnICsgY29tcGlsZXJJbmZvWzFdICsgJykuJyk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZW1wbGF0ZSh0ZW1wbGF0ZVNwZWMsIGVudikge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBpZiAoIWVudikge1xuICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ05vIGVudmlyb25tZW50IHBhc3NlZCB0byB0ZW1wbGF0ZScpO1xuICB9XG4gIGlmICghdGVtcGxhdGVTcGVjIHx8ICF0ZW1wbGF0ZVNwZWMubWFpbikge1xuICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ1Vua25vd24gdGVtcGxhdGUgb2JqZWN0OiAnICsgdHlwZW9mIHRlbXBsYXRlU3BlYyk7XG4gIH1cblxuICB0ZW1wbGF0ZVNwZWMubWFpbi5kZWNvcmF0b3IgPSB0ZW1wbGF0ZVNwZWMubWFpbl9kO1xuXG4gIC8vIE5vdGU6IFVzaW5nIGVudi5WTSByZWZlcmVuY2VzIHJhdGhlciB0aGFuIGxvY2FsIHZhciByZWZlcmVuY2VzIHRocm91Z2hvdXQgdGhpcyBzZWN0aW9uIHRvIGFsbG93XG4gIC8vIGZvciBleHRlcm5hbCB1c2VycyB0byBvdmVycmlkZSB0aGVzZSBhcyBwc3VlZG8tc3VwcG9ydGVkIEFQSXMuXG4gIGVudi5WTS5jaGVja1JldmlzaW9uKHRlbXBsYXRlU3BlYy5jb21waWxlcik7XG5cbiAgZnVuY3Rpb24gaW52b2tlUGFydGlhbFdyYXBwZXIocGFydGlhbCwgY29udGV4dCwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAgIGNvbnRleHQgPSBVdGlscy5leHRlbmQoe30sIGNvbnRleHQsIG9wdGlvbnMuaGFzaCk7XG4gICAgICBpZiAob3B0aW9ucy5pZHMpIHtcbiAgICAgICAgb3B0aW9ucy5pZHNbMF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHBhcnRpYWwgPSBlbnYuVk0ucmVzb2x2ZVBhcnRpYWwuY2FsbCh0aGlzLCBwYXJ0aWFsLCBjb250ZXh0LCBvcHRpb25zKTtcbiAgICBsZXQgcmVzdWx0ID0gZW52LlZNLmludm9rZVBhcnRpYWwuY2FsbCh0aGlzLCBwYXJ0aWFsLCBjb250ZXh0LCBvcHRpb25zKTtcblxuICAgIGlmIChyZXN1bHQgPT0gbnVsbCAmJiBlbnYuY29tcGlsZSkge1xuICAgICAgb3B0aW9ucy5wYXJ0aWFsc1tvcHRpb25zLm5hbWVdID0gZW52LmNvbXBpbGUocGFydGlhbCwgdGVtcGxhdGVTcGVjLmNvbXBpbGVyT3B0aW9ucywgZW52KTtcbiAgICAgIHJlc3VsdCA9IG9wdGlvbnMucGFydGlhbHNbb3B0aW9ucy5uYW1lXShjb250ZXh0LCBvcHRpb25zKTtcbiAgICB9XG4gICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XG4gICAgICBpZiAob3B0aW9ucy5pbmRlbnQpIHtcbiAgICAgICAgbGV0IGxpbmVzID0gcmVzdWx0LnNwbGl0KCdcXG4nKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBsaW5lcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBpZiAoIWxpbmVzW2ldICYmIGkgKyAxID09PSBsKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsaW5lc1tpXSA9IG9wdGlvbnMuaW5kZW50ICsgbGluZXNbaV07XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0ID0gbGluZXMuam9pbignXFxuJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdUaGUgcGFydGlhbCAnICsgb3B0aW9ucy5uYW1lICsgJyBjb3VsZCBub3QgYmUgY29tcGlsZWQgd2hlbiBydW5uaW5nIGluIHJ1bnRpbWUtb25seSBtb2RlJyk7XG4gICAgfVxuICB9XG5cbiAgLy8gSnVzdCBhZGQgd2F0ZXJcbiAgbGV0IGNvbnRhaW5lciA9IHtcbiAgICBzdHJpY3Q6IGZ1bmN0aW9uKG9iaiwgbmFtZSkge1xuICAgICAgaWYgKCEobmFtZSBpbiBvYmopKSB7XG4gICAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ1wiJyArIG5hbWUgKyAnXCIgbm90IGRlZmluZWQgaW4gJyArIG9iaik7XG4gICAgICB9XG4gICAgICByZXR1cm4gb2JqW25hbWVdO1xuICAgIH0sXG4gICAgbG9va3VwOiBmdW5jdGlvbihkZXB0aHMsIG5hbWUpIHtcbiAgICAgIGNvbnN0IGxlbiA9IGRlcHRocy5sZW5ndGg7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGlmIChkZXB0aHNbaV0gJiYgZGVwdGhzW2ldW25hbWVdICE9IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gZGVwdGhzW2ldW25hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBsYW1iZGE6IGZ1bmN0aW9uKGN1cnJlbnQsIGNvbnRleHQpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgY3VycmVudCA9PT0gJ2Z1bmN0aW9uJyA/IGN1cnJlbnQuY2FsbChjb250ZXh0KSA6IGN1cnJlbnQ7XG4gICAgfSxcblxuICAgIGVzY2FwZUV4cHJlc3Npb246IFV0aWxzLmVzY2FwZUV4cHJlc3Npb24sXG4gICAgaW52b2tlUGFydGlhbDogaW52b2tlUGFydGlhbFdyYXBwZXIsXG5cbiAgICBmbjogZnVuY3Rpb24oaSkge1xuICAgICAgbGV0IHJldCA9IHRlbXBsYXRlU3BlY1tpXTtcbiAgICAgIHJldC5kZWNvcmF0b3IgPSB0ZW1wbGF0ZVNwZWNbaSArICdfZCddO1xuICAgICAgcmV0dXJuIHJldDtcbiAgICB9LFxuXG4gICAgcHJvZ3JhbXM6IFtdLFxuICAgIHByb2dyYW06IGZ1bmN0aW9uKGksIGRhdGEsIGRlY2xhcmVkQmxvY2tQYXJhbXMsIGJsb2NrUGFyYW1zLCBkZXB0aHMpIHtcbiAgICAgIGxldCBwcm9ncmFtV3JhcHBlciA9IHRoaXMucHJvZ3JhbXNbaV0sXG4gICAgICAgICAgZm4gPSB0aGlzLmZuKGkpO1xuICAgICAgaWYgKGRhdGEgfHwgZGVwdGhzIHx8IGJsb2NrUGFyYW1zIHx8IGRlY2xhcmVkQmxvY2tQYXJhbXMpIHtcbiAgICAgICAgcHJvZ3JhbVdyYXBwZXIgPSB3cmFwUHJvZ3JhbSh0aGlzLCBpLCBmbiwgZGF0YSwgZGVjbGFyZWRCbG9ja1BhcmFtcywgYmxvY2tQYXJhbXMsIGRlcHRocyk7XG4gICAgICB9IGVsc2UgaWYgKCFwcm9ncmFtV3JhcHBlcikge1xuICAgICAgICBwcm9ncmFtV3JhcHBlciA9IHRoaXMucHJvZ3JhbXNbaV0gPSB3cmFwUHJvZ3JhbSh0aGlzLCBpLCBmbik7XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJvZ3JhbVdyYXBwZXI7XG4gICAgfSxcblxuICAgIGRhdGE6IGZ1bmN0aW9uKHZhbHVlLCBkZXB0aCkge1xuICAgICAgd2hpbGUgKHZhbHVlICYmIGRlcHRoLS0pIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5fcGFyZW50O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sXG4gICAgbWVyZ2U6IGZ1bmN0aW9uKHBhcmFtLCBjb21tb24pIHtcbiAgICAgIGxldCBvYmogPSBwYXJhbSB8fCBjb21tb247XG5cbiAgICAgIGlmIChwYXJhbSAmJiBjb21tb24gJiYgKHBhcmFtICE9PSBjb21tb24pKSB7XG4gICAgICAgIG9iaiA9IFV0aWxzLmV4dGVuZCh7fSwgY29tbW9uLCBwYXJhbSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvYmo7XG4gICAgfSxcbiAgICAvLyBBbiBlbXB0eSBvYmplY3QgdG8gdXNlIGFzIHJlcGxhY2VtZW50IGZvciBudWxsLWNvbnRleHRzXG4gICAgbnVsbENvbnRleHQ6IE9iamVjdC5zZWFsKHt9KSxcblxuICAgIG5vb3A6IGVudi5WTS5ub29wLFxuICAgIGNvbXBpbGVySW5mbzogdGVtcGxhdGVTcGVjLmNvbXBpbGVyXG4gIH07XG5cbiAgZnVuY3Rpb24gcmV0KGNvbnRleHQsIG9wdGlvbnMgPSB7fSkge1xuICAgIGxldCBkYXRhID0gb3B0aW9ucy5kYXRhO1xuXG4gICAgcmV0Ll9zZXR1cChvcHRpb25zKTtcbiAgICBpZiAoIW9wdGlvbnMucGFydGlhbCAmJiB0ZW1wbGF0ZVNwZWMudXNlRGF0YSkge1xuICAgICAgZGF0YSA9IGluaXREYXRhKGNvbnRleHQsIGRhdGEpO1xuICAgIH1cbiAgICBsZXQgZGVwdGhzLFxuICAgICAgICBibG9ja1BhcmFtcyA9IHRlbXBsYXRlU3BlYy51c2VCbG9ja1BhcmFtcyA/IFtdIDogdW5kZWZpbmVkO1xuICAgIGlmICh0ZW1wbGF0ZVNwZWMudXNlRGVwdGhzKSB7XG4gICAgICBpZiAob3B0aW9ucy5kZXB0aHMpIHtcbiAgICAgICAgZGVwdGhzID0gY29udGV4dCAhPSBvcHRpb25zLmRlcHRoc1swXSA/IFtjb250ZXh0XS5jb25jYXQob3B0aW9ucy5kZXB0aHMpIDogb3B0aW9ucy5kZXB0aHM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZXB0aHMgPSBbY29udGV4dF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFpbihjb250ZXh0LyosIG9wdGlvbnMqLykge1xuICAgICAgcmV0dXJuICcnICsgdGVtcGxhdGVTcGVjLm1haW4oY29udGFpbmVyLCBjb250ZXh0LCBjb250YWluZXIuaGVscGVycywgY29udGFpbmVyLnBhcnRpYWxzLCBkYXRhLCBibG9ja1BhcmFtcywgZGVwdGhzKTtcbiAgICB9XG4gICAgbWFpbiA9IGV4ZWN1dGVEZWNvcmF0b3JzKHRlbXBsYXRlU3BlYy5tYWluLCBtYWluLCBjb250YWluZXIsIG9wdGlvbnMuZGVwdGhzIHx8IFtdLCBkYXRhLCBibG9ja1BhcmFtcyk7XG4gICAgcmV0dXJuIG1haW4oY29udGV4dCwgb3B0aW9ucyk7XG4gIH1cbiAgcmV0LmlzVG9wID0gdHJ1ZTtcblxuICByZXQuX3NldHVwID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucy5wYXJ0aWFsKSB7XG4gICAgICBjb250YWluZXIuaGVscGVycyA9IGNvbnRhaW5lci5tZXJnZShvcHRpb25zLmhlbHBlcnMsIGVudi5oZWxwZXJzKTtcblxuICAgICAgaWYgKHRlbXBsYXRlU3BlYy51c2VQYXJ0aWFsKSB7XG4gICAgICAgIGNvbnRhaW5lci5wYXJ0aWFscyA9IGNvbnRhaW5lci5tZXJnZShvcHRpb25zLnBhcnRpYWxzLCBlbnYucGFydGlhbHMpO1xuICAgICAgfVxuICAgICAgaWYgKHRlbXBsYXRlU3BlYy51c2VQYXJ0aWFsIHx8IHRlbXBsYXRlU3BlYy51c2VEZWNvcmF0b3JzKSB7XG4gICAgICAgIGNvbnRhaW5lci5kZWNvcmF0b3JzID0gY29udGFpbmVyLm1lcmdlKG9wdGlvbnMuZGVjb3JhdG9ycywgZW52LmRlY29yYXRvcnMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250YWluZXIuaGVscGVycyA9IG9wdGlvbnMuaGVscGVycztcbiAgICAgIGNvbnRhaW5lci5wYXJ0aWFscyA9IG9wdGlvbnMucGFydGlhbHM7XG4gICAgICBjb250YWluZXIuZGVjb3JhdG9ycyA9IG9wdGlvbnMuZGVjb3JhdG9ycztcbiAgICB9XG4gIH07XG5cbiAgcmV0Ll9jaGlsZCA9IGZ1bmN0aW9uKGksIGRhdGEsIGJsb2NrUGFyYW1zLCBkZXB0aHMpIHtcbiAgICBpZiAodGVtcGxhdGVTcGVjLnVzZUJsb2NrUGFyYW1zICYmICFibG9ja1BhcmFtcykge1xuICAgICAgdGhyb3cgbmV3IEV4Y2VwdGlvbignbXVzdCBwYXNzIGJsb2NrIHBhcmFtcycpO1xuICAgIH1cbiAgICBpZiAodGVtcGxhdGVTcGVjLnVzZURlcHRocyAmJiAhZGVwdGhzKSB7XG4gICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdtdXN0IHBhc3MgcGFyZW50IGRlcHRocycpO1xuICAgIH1cblxuICAgIHJldHVybiB3cmFwUHJvZ3JhbShjb250YWluZXIsIGksIHRlbXBsYXRlU3BlY1tpXSwgZGF0YSwgMCwgYmxvY2tQYXJhbXMsIGRlcHRocyk7XG4gIH07XG4gIHJldHVybiByZXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3cmFwUHJvZ3JhbShjb250YWluZXIsIGksIGZuLCBkYXRhLCBkZWNsYXJlZEJsb2NrUGFyYW1zLCBibG9ja1BhcmFtcywgZGVwdGhzKSB7XG4gIGZ1bmN0aW9uIHByb2coY29udGV4dCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgbGV0IGN1cnJlbnREZXB0aHMgPSBkZXB0aHM7XG4gICAgaWYgKGRlcHRocyAmJiBjb250ZXh0ICE9IGRlcHRoc1swXSAmJiAhKGNvbnRleHQgPT09IGNvbnRhaW5lci5udWxsQ29udGV4dCAmJiBkZXB0aHNbMF0gPT09IG51bGwpKSB7XG4gICAgICBjdXJyZW50RGVwdGhzID0gW2NvbnRleHRdLmNvbmNhdChkZXB0aHMpO1xuICAgIH1cblxuICAgIHJldHVybiBmbihjb250YWluZXIsXG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIGNvbnRhaW5lci5oZWxwZXJzLCBjb250YWluZXIucGFydGlhbHMsXG4gICAgICAgIG9wdGlvbnMuZGF0YSB8fCBkYXRhLFxuICAgICAgICBibG9ja1BhcmFtcyAmJiBbb3B0aW9ucy5ibG9ja1BhcmFtc10uY29uY2F0KGJsb2NrUGFyYW1zKSxcbiAgICAgICAgY3VycmVudERlcHRocyk7XG4gIH1cblxuICBwcm9nID0gZXhlY3V0ZURlY29yYXRvcnMoZm4sIHByb2csIGNvbnRhaW5lciwgZGVwdGhzLCBkYXRhLCBibG9ja1BhcmFtcyk7XG5cbiAgcHJvZy5wcm9ncmFtID0gaTtcbiAgcHJvZy5kZXB0aCA9IGRlcHRocyA/IGRlcHRocy5sZW5ndGggOiAwO1xuICBwcm9nLmJsb2NrUGFyYW1zID0gZGVjbGFyZWRCbG9ja1BhcmFtcyB8fCAwO1xuICByZXR1cm4gcHJvZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVQYXJ0aWFsKHBhcnRpYWwsIGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgaWYgKCFwYXJ0aWFsKSB7XG4gICAgaWYgKG9wdGlvbnMubmFtZSA9PT0gJ0BwYXJ0aWFsLWJsb2NrJykge1xuICAgICAgcGFydGlhbCA9IG9wdGlvbnMuZGF0YVsncGFydGlhbC1ibG9jayddO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJ0aWFsID0gb3B0aW9ucy5wYXJ0aWFsc1tvcHRpb25zLm5hbWVdO1xuICAgIH1cbiAgfSBlbHNlIGlmICghcGFydGlhbC5jYWxsICYmICFvcHRpb25zLm5hbWUpIHtcbiAgICAvLyBUaGlzIGlzIGEgZHluYW1pYyBwYXJ0aWFsIHRoYXQgcmV0dXJuZWQgYSBzdHJpbmdcbiAgICBvcHRpb25zLm5hbWUgPSBwYXJ0aWFsO1xuICAgIHBhcnRpYWwgPSBvcHRpb25zLnBhcnRpYWxzW3BhcnRpYWxdO1xuICB9XG4gIHJldHVybiBwYXJ0aWFsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW52b2tlUGFydGlhbChwYXJ0aWFsLCBjb250ZXh0LCBvcHRpb25zKSB7XG4gIC8vIFVzZSB0aGUgY3VycmVudCBjbG9zdXJlIGNvbnRleHQgdG8gc2F2ZSB0aGUgcGFydGlhbC1ibG9jayBpZiB0aGlzIHBhcnRpYWxcbiAgY29uc3QgY3VycmVudFBhcnRpYWxCbG9jayA9IG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLmRhdGFbJ3BhcnRpYWwtYmxvY2snXTtcbiAgb3B0aW9ucy5wYXJ0aWFsID0gdHJ1ZTtcbiAgaWYgKG9wdGlvbnMuaWRzKSB7XG4gICAgb3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoID0gb3B0aW9ucy5pZHNbMF0gfHwgb3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoO1xuICB9XG5cbiAgbGV0IHBhcnRpYWxCbG9jaztcbiAgaWYgKG9wdGlvbnMuZm4gJiYgb3B0aW9ucy5mbiAhPT0gbm9vcCkge1xuICAgIG9wdGlvbnMuZGF0YSA9IGNyZWF0ZUZyYW1lKG9wdGlvbnMuZGF0YSk7XG4gICAgLy8gV3JhcHBlciBmdW5jdGlvbiB0byBnZXQgYWNjZXNzIHRvIGN1cnJlbnRQYXJ0aWFsQmxvY2sgZnJvbSB0aGUgY2xvc3VyZVxuICAgIGxldCBmbiA9IG9wdGlvbnMuZm47XG4gICAgcGFydGlhbEJsb2NrID0gb3B0aW9ucy5kYXRhWydwYXJ0aWFsLWJsb2NrJ10gPSBmdW5jdGlvbiBwYXJ0aWFsQmxvY2tXcmFwcGVyKGNvbnRleHQsIG9wdGlvbnMgPSB7fSkge1xuXG4gICAgICAvLyBSZXN0b3JlIHRoZSBwYXJ0aWFsLWJsb2NrIGZyb20gdGhlIGNsb3N1cmUgZm9yIHRoZSBleGVjdXRpb24gb2YgdGhlIGJsb2NrXG4gICAgICAvLyBpLmUuIHRoZSBwYXJ0IGluc2lkZSB0aGUgYmxvY2sgb2YgdGhlIHBhcnRpYWwgY2FsbC5cbiAgICAgIG9wdGlvbnMuZGF0YSA9IGNyZWF0ZUZyYW1lKG9wdGlvbnMuZGF0YSk7XG4gICAgICBvcHRpb25zLmRhdGFbJ3BhcnRpYWwtYmxvY2snXSA9IGN1cnJlbnRQYXJ0aWFsQmxvY2s7XG4gICAgICByZXR1cm4gZm4oY29udGV4dCwgb3B0aW9ucyk7XG4gICAgfTtcbiAgICBpZiAoZm4ucGFydGlhbHMpIHtcbiAgICAgIG9wdGlvbnMucGFydGlhbHMgPSBVdGlscy5leHRlbmQoe30sIG9wdGlvbnMucGFydGlhbHMsIGZuLnBhcnRpYWxzKTtcbiAgICB9XG4gIH1cblxuICBpZiAocGFydGlhbCA9PT0gdW5kZWZpbmVkICYmIHBhcnRpYWxCbG9jaykge1xuICAgIHBhcnRpYWwgPSBwYXJ0aWFsQmxvY2s7XG4gIH1cblxuICBpZiAocGFydGlhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEV4Y2VwdGlvbignVGhlIHBhcnRpYWwgJyArIG9wdGlvbnMubmFtZSArICcgY291bGQgbm90IGJlIGZvdW5kJyk7XG4gIH0gZWxzZSBpZiAocGFydGlhbCBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgcmV0dXJuIHBhcnRpYWwoY29udGV4dCwgb3B0aW9ucyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vb3AoKSB7IHJldHVybiAnJzsgfVxuXG5mdW5jdGlvbiBpbml0RGF0YShjb250ZXh0LCBkYXRhKSB7XG4gIGlmICghZGF0YSB8fCAhKCdyb290JyBpbiBkYXRhKSkge1xuICAgIGRhdGEgPSBkYXRhID8gY3JlYXRlRnJhbWUoZGF0YSkgOiB7fTtcbiAgICBkYXRhLnJvb3QgPSBjb250ZXh0O1xuICB9XG4gIHJldHVybiBkYXRhO1xufVxuXG5mdW5jdGlvbiBleGVjdXRlRGVjb3JhdG9ycyhmbiwgcHJvZywgY29udGFpbmVyLCBkZXB0aHMsIGRhdGEsIGJsb2NrUGFyYW1zKSB7XG4gIGlmIChmbi5kZWNvcmF0b3IpIHtcbiAgICBsZXQgcHJvcHMgPSB7fTtcbiAgICBwcm9nID0gZm4uZGVjb3JhdG9yKHByb2csIHByb3BzLCBjb250YWluZXIsIGRlcHRocyAmJiBkZXB0aHNbMF0sIGRhdGEsIGJsb2NrUGFyYW1zLCBkZXB0aHMpO1xuICAgIFV0aWxzLmV4dGVuZChwcm9nLCBwcm9wcyk7XG4gIH1cbiAgcmV0dXJuIHByb2c7XG59XG4iXX0=


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* global window */


exports.__esModule = true;

exports['default'] = function (Handlebars) {
  /* istanbul ignore next */
  var root = typeof global !== 'undefined' ? global : window,
      $Handlebars = root.Handlebars;
  /* istanbul ignore next */
  Handlebars.noConflict = function () {
    if (root.Handlebars === Handlebars) {
      root.Handlebars = $Handlebars;
    }
    return Handlebars;
  };
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL25vLWNvbmZsaWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O3FCQUNlLFVBQVMsVUFBVSxFQUFFOztBQUVsQyxNQUFJLElBQUksR0FBRyxPQUFPLE1BQU0sS0FBSyxXQUFXLEdBQUcsTUFBTSxHQUFHLE1BQU07TUFDdEQsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7O0FBRWxDLFlBQVUsQ0FBQyxVQUFVLEdBQUcsWUFBVztBQUNqQyxRQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssVUFBVSxFQUFFO0FBQ2xDLFVBQUksQ0FBQyxVQUFVLEdBQUcsV0FBVyxDQUFDO0tBQy9CO0FBQ0QsV0FBTyxVQUFVLENBQUM7R0FDbkIsQ0FBQztDQUNIIiwiZmlsZSI6Im5vLWNvbmZsaWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZ2xvYmFsIHdpbmRvdyAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oSGFuZGxlYmFycykge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBsZXQgcm9vdCA9IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogd2luZG93LFxuICAgICAgJEhhbmRsZWJhcnMgPSByb290LkhhbmRsZWJhcnM7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIEhhbmRsZWJhcnMubm9Db25mbGljdCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChyb290LkhhbmRsZWJhcnMgPT09IEhhbmRsZWJhcnMpIHtcbiAgICAgIHJvb3QuSGFuZGxlYmFycyA9ICRIYW5kbGViYXJzO1xuICAgIH1cbiAgICByZXR1cm4gSGFuZGxlYmFycztcbiAgfTtcbn1cbiJdfQ==

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(26)))

/***/ }),
/* 26 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(1);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li>\r\n    <a href=\"#\" data-category_id=\""
    + alias4(((helper = (helper = helpers.category_id || (depth0 != null ? depth0.category_id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"category_id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</a>\r\n</li>";
},"useData":true});

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(1);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<ul class=\"best_food_box_list\" data-category_id=\""
    + container.escapeExpression(((helper = (helper = helpers.category_id || (depth0 != null ? depth0.category_id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"category_id","hash":{},"data":data}) : helper)))
    + "\"></ul>";
},"useData":true});

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__template_foodBoxInfinite_tpl_html__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__template_foodBoxInfinite_tpl_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__template_foodBoxInfinite_tpl_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__template_badge_tpl_html__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__template_badge_tpl_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__template_badge_tpl_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template_deliveryType_tpl_html__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template_deliveryType_tpl_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__template_deliveryType_tpl_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers__ = __webpack_require__(3);





class InfiniteView {
    constructor(name) {
        this.foodBoxEl = Object(__WEBPACK_IMPORTED_MODULE_3__helpers__["d" /* qs */])(`.${name}_food .infinite_food_box_list`);
        this.slidesPrevEl = Object(__WEBPACK_IMPORTED_MODULE_3__helpers__["d" /* qs */])(`.${name}_food .slides_prev`);
        this.slidesNextEl = Object(__WEBPACK_IMPORTED_MODULE_3__helpers__["d" /* qs */])(`.${name}_food .slides_next`);

        this.state = {
            name,
            el: this.foodBoxEl,
            direction: -20
        };
    }

    bind(bindCmd, handler) {
        const bindCommands = {
            slides: () => {
                Object(__WEBPACK_IMPORTED_MODULE_3__helpers__["c" /* on */])(this.foodBoxEl, 'transitionend', () => handler(this.state));
            },
            slidesPrev: () => {
                Object(__WEBPACK_IMPORTED_MODULE_3__helpers__["c" /* on */])(this.slidesPrevEl, 'click', Object(__WEBPACK_IMPORTED_MODULE_3__helpers__["g" /* throttle */])(() => handler(this.state, 10), 600));
            },
            slidesNext: () => {
                Object(__WEBPACK_IMPORTED_MODULE_3__helpers__["c" /* on */])(this.slidesNextEl, 'click', Object(__WEBPACK_IMPORTED_MODULE_3__helpers__["g" /* throttle */])(() => handler(this.state, -10), 600));
            }
        };

        bindCommands[bindCmd]();
    }

    render(viewCmd, parameter) {
        const viewCommands = {
            banchan: () => {
                this.renderBanchan(parameter);
            }
        };

        viewCommands[viewCmd]();
    }

    renderBanchan(food) {
        this.renderFoodBoxList(this.state.el, food);
        this.renderFoodBox(food, Object(__WEBPACK_IMPORTED_MODULE_3__helpers__["e" /* qsa */])(`.${this.state.name}_food .prd_box>a`));
        this.renderSlides(this.state.el, Object(__WEBPACK_IMPORTED_MODULE_3__helpers__["e" /* qsa */])(`.${this.state.name}_food .prd_box`));
        this.showSlides(this.state.el, this.state.direction, true);
    }

    renderFoodBoxList(element, food) {
        const foodBoxList = food.map(item =>
            __WEBPACK_IMPORTED_MODULE_0__template_foodBoxInfinite_tpl_html___default()({
                image: item.image,
                alt: item.alt,
                title: item.title,
                description: item.description,
                old_price: item.n_price,
                new_price: item.s_price.slice(0, -1),
                won: item.s_price.slice(-1)
            })).join('');
        element.insertAdjacentHTML('afterbegin', foodBoxList);
    }

    renderFoodBox(food, prdBox) {
        food.forEach((item, i) => {
            prdBox[i].insertAdjacentHTML('beforeend', __WEBPACK_IMPORTED_MODULE_1__template_badge_tpl_html___default()({
                badge: item.badge
            }));
            prdBox[i].firstElementChild.insertAdjacentHTML('beforeend', __WEBPACK_IMPORTED_MODULE_2__template_deliveryType_tpl_html___default()({
                delivery_type: item.delivery_type
            }));
        });
    }

    renderSlides(element, Slides) {
        const lastSlides = Array.from(Slides).slice(-4);

        Slides.forEach(Slide =>
            element.appendChild(Slide.cloneNode(true)));
        lastSlides.reverse().forEach(lastSlide =>
            element.insertBefore(lastSlide.cloneNode(true), element.childNodes[0]));
    }

    showSlides(element, direction, Immediately) {
        element.style.transitionDuration = Immediately ? '0s' : '0.5s';
        element.style.transform = `translateX(${direction}%)`;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = InfiniteView;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(1);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li class=\"prd_box\">\r\n    <a href=\"#\">\r\n        <div class=\"thumb_img\">\r\n            <p>\r\n                <img src=\""
    + alias4(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = helpers.alt || (depth0 != null ? depth0.alt : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"alt","hash":{},"data":data}) : helper)))
    + "\">\r\n            </p>\r\n            <div class=\"circle_mask\"></div>\r\n        </div>\r\n        <dl>\r\n            <dt class=\"prd_title\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</dt>\r\n            <dd class=\"prd_description\">"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</dd>\r\n            <dd class=\"prd_price\">\r\n                <span class=\"old_price\">"
    + alias4(((helper = (helper = helpers.old_price || (depth0 != null ? depth0.old_price : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"old_price","hash":{},"data":data}) : helper)))
    + "</span>\r\n                <span class=\"new_price\">"
    + alias4(((helper = (helper = helpers.new_price || (depth0 != null ? depth0.new_price : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"new_price","hash":{},"data":data}) : helper)))
    + "\r\n                    <span class=\"won\">"
    + alias4(((helper = (helper = helpers.won || (depth0 != null ? depth0.won : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"won","hash":{},"data":data}) : helper)))
    + "</span>\r\n                </span>\r\n            </dd>\r\n        </dl>\r\n    </a>\r\n</li>";
},"useData":true});

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjFhNjdiZTQ0OTU1OGVkZGE3MTgiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMvZXhjZXB0aW9uLmpzIiwid2VicGFjazovLy8uL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi4vdGVtcGxhdGUvYmFkZ2UtdHBsLmh0bWwiLCJ3ZWJwYWNrOi8vLy4uL3RlbXBsYXRlL2RlbGl2ZXJ5VHlwZS10cGwuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21tb25WaWV3LmpzIiwid2VicGFjazovLy8uLi90ZW1wbGF0ZS9mb29kQm94LXRwbC5odG1sIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzLnJ1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy9oZWxwZXJzL2Jsb2NrLWhlbHBlci1taXNzaW5nLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL2hlbHBlcnMvZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy9oZWxwZXJzL2hlbHBlci1taXNzaW5nLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL2hlbHBlcnMvaWYuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMvaGVscGVycy9sb2cuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMvaGVscGVycy9sb29rdXAuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMvaGVscGVycy93aXRoLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL2RlY29yYXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMvZGVjb3JhdG9ycy9pbmxpbmUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMvbG9nZ2VyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL3NhZmUtc3RyaW5nLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMvbm8tY29uZmxpY3QuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi4vdGVtcGxhdGUvZm9vZFRhYi10cGwuaHRtbCIsIndlYnBhY2s6Ly8vLi4vdGVtcGxhdGUvY29udGFpbmVyLXRwbC5odG1sIiwid2VicGFjazovLy8uL2luZmluaXRlU2xpZGVWaWV3LmpzIiwid2VicGFjazovLy8uLi90ZW1wbGF0ZS9mb29kQm94SW5maW5pdGUtdHBsLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQzdEQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsWUFBWTtBQUNaLFlBQVk7QUFDWixjQUFjO0FBQ2QsY0FBYztBQUNkLGNBQWM7QUFDZCxjQUFjO0FBQ2Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EscUNBQXFDLFNBQVM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxL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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpSkFBdUYsS0FBSztBQUM1RjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0M7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFF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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEVBQTBFOztBQUUxRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4RUFBOEU7O0FBRTlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxjQUFjOzs7Ozs7OztBQ2xUekQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQ0FBMkMsY0FBYzs7Ozs7Ozs7QUNuQnpEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDOzs7Ozs7O0FDcEJBO0FBQ0EseUJBQXlCLHVEQUF1RDtBQUNoRixpRUFBaUU7QUFDakUsNkVBQTZFOztBQUU3RTtBQUNBLG9MQUFvTCw4QkFBOEIsYUFBYTtBQUMvTjtBQUNBLHNLQUFzSyx1QkFBdUIsYUFBYTtBQUMxTTtBQUNBLENBQUMsZ0JBQWdCLEU7Ozs7OztBQ1ZqQjtBQUNBLHlCQUF5Qix1REFBdUQ7QUFDaEYsaUVBQWlFO0FBQ2pFOztBQUVBO0FBQ0EseVFBQXlRLEdBQUcsOEJBQThCLGFBQWE7QUFDdlQ7QUFDQSxDQUFDLGdCQUFnQixFOzs7Ozs7Ozs7Ozs7OztBQ1JqQjtBQUNBO0FBQ0E7QUFNQzs7QUFFRDtBQUNBO0FBQ0EsMEZBQWdDLEtBQUs7QUFDckMsNkZBQW1DLEtBQUs7QUFDeEMsNkZBQW1DLEtBQUs7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1HQUF5QyxnQkFBZ0I7QUFDekQsMkdBQWlELGdCQUFnQjtBQUNqRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnREFBZ0QsVUFBVTtBQUMxRDtBQUNBLEM7Ozs7Ozs7O0FDOUZBO0FBQ0EseUJBQXlCLHVEQUF1RDtBQUNoRixpRUFBaUU7QUFDakUsNkVBQTZFOztBQUU3RTtBQUNBLHdLQUF3Syx3QkFBd0IsYUFBYTtBQUM3TTtBQUNBLG9LQUFvSyxzQkFBc0IsYUFBYTtBQUN2TTtBQUNBLHdLQUF3Syx3QkFBd0IsYUFBYTtBQUM3TTtBQUNBLG9MQUFvTCw4QkFBOEIsYUFBYTtBQUMvTjtBQUNBLGdMQUFnTCw0QkFBNEIsYUFBYTtBQUN6TjtBQUNBLGdMQUFnTCw0QkFBNEIsYUFBYTtBQUN6TjtBQUNBLG9LQUFvSyxzQkFBc0IsYUFBYTtBQUN2TTtBQUNBLENBQUMsZ0JBQWdCLEUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYjFhNjdiZTQ0OTU1OGVkZGE3MTgiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmV4dGVuZCA9IGV4dGVuZDtcbmV4cG9ydHMuaW5kZXhPZiA9IGluZGV4T2Y7XG5leHBvcnRzLmVzY2FwZUV4cHJlc3Npb24gPSBlc2NhcGVFeHByZXNzaW9uO1xuZXhwb3J0cy5pc0VtcHR5ID0gaXNFbXB0eTtcbmV4cG9ydHMuY3JlYXRlRnJhbWUgPSBjcmVhdGVGcmFtZTtcbmV4cG9ydHMuYmxvY2tQYXJhbXMgPSBibG9ja1BhcmFtcztcbmV4cG9ydHMuYXBwZW5kQ29udGV4dFBhdGggPSBhcHBlbmRDb250ZXh0UGF0aDtcbnZhciBlc2NhcGUgPSB7XG4gICcmJzogJyZhbXA7JyxcbiAgJzwnOiAnJmx0OycsXG4gICc+JzogJyZndDsnLFxuICAnXCInOiAnJnF1b3Q7JyxcbiAgXCInXCI6ICcmI3gyNzsnLFxuICAnYCc6ICcmI3g2MDsnLFxuICAnPSc6ICcmI3gzRDsnXG59O1xuXG52YXIgYmFkQ2hhcnMgPSAvWyY8PlwiJ2A9XS9nLFxuICAgIHBvc3NpYmxlID0gL1smPD5cIidgPV0vO1xuXG5mdW5jdGlvbiBlc2NhcGVDaGFyKGNocikge1xuICByZXR1cm4gZXNjYXBlW2Nocl07XG59XG5cbmZ1bmN0aW9uIGV4dGVuZChvYmogLyogLCAuLi5zb3VyY2UgKi8pIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gYXJndW1lbnRzW2ldKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFyZ3VtZW50c1tpXSwga2V5KSkge1xuICAgICAgICBvYmpba2V5XSA9IGFyZ3VtZW50c1tpXVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbmV4cG9ydHMudG9TdHJpbmcgPSB0b1N0cmluZztcbi8vIFNvdXJjZWQgZnJvbSBsb2Rhc2hcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9iZXN0aWVqcy9sb2Rhc2gvYmxvYi9tYXN0ZXIvTElDRU5TRS50eHRcbi8qIGVzbGludC1kaXNhYmxlIGZ1bmMtc3R5bGUgKi9cbnZhciBpc0Z1bmN0aW9uID0gZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xufTtcbi8vIGZhbGxiYWNrIGZvciBvbGRlciB2ZXJzaW9ucyBvZiBDaHJvbWUgYW5kIFNhZmFyaVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmlmIChpc0Z1bmN0aW9uKC94LykpIHtcbiAgZXhwb3J0cy5pc0Z1bmN0aW9uID0gaXNGdW5jdGlvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgJiYgdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG4gIH07XG59XG5leHBvcnRzLmlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uO1xuXG4vKiBlc2xpbnQtZW5hYmxlIGZ1bmMtc3R5bGUgKi9cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgPyB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgQXJyYXldJyA6IGZhbHNlO1xufTtcblxuZXhwb3J0cy5pc0FycmF5ID0gaXNBcnJheTtcbi8vIE9sZGVyIElFIHZlcnNpb25zIGRvIG5vdCBkaXJlY3RseSBzdXBwb3J0IGluZGV4T2Ygc28gd2UgbXVzdCBpbXBsZW1lbnQgb3VyIG93biwgc2FkbHkuXG5cbmZ1bmN0aW9uIGluZGV4T2YoYXJyYXksIHZhbHVlKSB7XG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhcnJheS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGlmIChhcnJheVtpXSA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybiBpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbmZ1bmN0aW9uIGVzY2FwZUV4cHJlc3Npb24oc3RyaW5nKSB7XG4gIGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJykge1xuICAgIC8vIGRvbid0IGVzY2FwZSBTYWZlU3RyaW5ncywgc2luY2UgdGhleSdyZSBhbHJlYWR5IHNhZmVcbiAgICBpZiAoc3RyaW5nICYmIHN0cmluZy50b0hUTUwpIHtcbiAgICAgIHJldHVybiBzdHJpbmcudG9IVE1MKCk7XG4gICAgfSBlbHNlIGlmIChzdHJpbmcgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH0gZWxzZSBpZiAoIXN0cmluZykge1xuICAgICAgcmV0dXJuIHN0cmluZyArICcnO1xuICAgIH1cblxuICAgIC8vIEZvcmNlIGEgc3RyaW5nIGNvbnZlcnNpb24gYXMgdGhpcyB3aWxsIGJlIGRvbmUgYnkgdGhlIGFwcGVuZCByZWdhcmRsZXNzIGFuZFxuICAgIC8vIHRoZSByZWdleCB0ZXN0IHdpbGwgZG8gdGhpcyB0cmFuc3BhcmVudGx5IGJlaGluZCB0aGUgc2NlbmVzLCBjYXVzaW5nIGlzc3VlcyBpZlxuICAgIC8vIGFuIG9iamVjdCdzIHRvIHN0cmluZyBoYXMgZXNjYXBlZCBjaGFyYWN0ZXJzIGluIGl0LlxuICAgIHN0cmluZyA9ICcnICsgc3RyaW5nO1xuICB9XG5cbiAgaWYgKCFwb3NzaWJsZS50ZXN0KHN0cmluZykpIHtcbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZShiYWRDaGFycywgZXNjYXBlQ2hhcik7XG59XG5cbmZ1bmN0aW9uIGlzRW1wdHkodmFsdWUpIHtcbiAgaWYgKCF2YWx1ZSAmJiB2YWx1ZSAhPT0gMCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVGcmFtZShvYmplY3QpIHtcbiAgdmFyIGZyYW1lID0gZXh0ZW5kKHt9LCBvYmplY3QpO1xuICBmcmFtZS5fcGFyZW50ID0gb2JqZWN0O1xuICByZXR1cm4gZnJhbWU7XG59XG5cbmZ1bmN0aW9uIGJsb2NrUGFyYW1zKHBhcmFtcywgaWRzKSB7XG4gIHBhcmFtcy5wYXRoID0gaWRzO1xuICByZXR1cm4gcGFyYW1zO1xufVxuXG5mdW5jdGlvbiBhcHBlbmRDb250ZXh0UGF0aChjb250ZXh0UGF0aCwgaWQpIHtcbiAgcmV0dXJuIChjb250ZXh0UGF0aCA/IGNvbnRleHRQYXRoICsgJy4nIDogJycpICsgaWQ7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUx5NHVMMnhwWWk5b1lXNWtiR1ZpWVhKekwzVjBhV3h6TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3T3pzN1FVRkJRU3hKUVVGTkxFMUJRVTBzUjBGQlJ6dEJRVU5pTEV0QlFVY3NSVUZCUlN4UFFVRlBPMEZCUTFvc1MwRkJSeXhGUVVGRkxFMUJRVTA3UVVGRFdDeExRVUZITEVWQlFVVXNUVUZCVFR0QlFVTllMRXRCUVVjc1JVRkJSU3hSUVVGUk8wRkJRMklzUzBGQlJ5eEZRVUZGTEZGQlFWRTdRVUZEWWl4TFFVRkhMRVZCUVVVc1VVRkJVVHRCUVVOaUxFdEJRVWNzUlVGQlJTeFJRVUZSTzBOQlEyUXNRMEZCUXpzN1FVRkZSaXhKUVVGTkxGRkJRVkVzUjBGQlJ5eFpRVUZaTzBsQlEzWkNMRkZCUVZFc1IwRkJSeXhYUVVGWExFTkJRVU03TzBGQlJUZENMRk5CUVZNc1ZVRkJWU3hEUVVGRExFZEJRVWNzUlVGQlJUdEJRVU4yUWl4VFFVRlBMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dERRVU53UWpzN1FVRkZUU3hUUVVGVExFMUJRVTBzUTBGQlF5eEhRVUZITEc5Q1FVRnRRanRCUVVNelF5eFBRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzVTBGQlV5eERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRCUVVONlF5eFRRVUZMTEVsQlFVa3NSMEZCUnl4SlFVRkpMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJUdEJRVU0xUWl4VlFVRkpMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zWTBGQll5eERRVUZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUjBGQlJ5eERRVUZETEVWQlFVVTdRVUZETTBRc1YwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFBRVU01UWp0TFFVTkdPMGRCUTBZN08wRkJSVVFzVTBGQlR5eEhRVUZITEVOQlFVTTdRMEZEV2pzN1FVRkZUU3hKUVVGSkxGRkJRVkVzUjBGQlJ5eE5RVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMRkZCUVZFc1EwRkJRenM3T3pzN08wRkJTMmhFTEVsQlFVa3NWVUZCVlN4SFFVRkhMRzlDUVVGVExFdEJRVXNzUlVGQlJUdEJRVU12UWl4VFFVRlBMRTlCUVU4c1MwRkJTeXhMUVVGTExGVkJRVlVzUTBGQlF6dERRVU53UXl4RFFVRkRPenM3UVVGSFJpeEpRVUZKTEZWQlFWVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSVHRCUVVOdVFpeFZRVWxOTEZWQlFWVXNSMEZLYUVJc1ZVRkJWU3hIUVVGSExGVkJRVk1zUzBGQlN5eEZRVUZGTzBGQlF6TkNMRmRCUVU4c1QwRkJUeXhMUVVGTExFdEJRVXNzVlVGQlZTeEpRVUZKTEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFdEJRVXNzYlVKQlFXMUNMRU5CUVVNN1IwRkRjRVlzUTBGQlF6dERRVU5JTzFGQlEwOHNWVUZCVlN4SFFVRldMRlZCUVZVN096czdPMEZCU1Znc1NVRkJUU3hQUVVGUExFZEJRVWNzUzBGQlN5eERRVUZETEU5QlFVOHNTVUZCU1N4VlFVRlRMRXRCUVVzc1JVRkJSVHRCUVVOMFJDeFRRVUZQTEVGQlFVTXNTMEZCU3l4SlFVRkpMRTlCUVU4c1MwRkJTeXhMUVVGTExGRkJRVkVzUjBGQlNTeFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhMUVVGTExHZENRVUZuUWl4SFFVRkhMRXRCUVVzc1EwRkJRenREUVVOcVJ5eERRVUZET3pzN096dEJRVWRMTEZOQlFWTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1JVRkJSU3hMUVVGTExFVkJRVVU3UVVGRGNFTXNUMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUjBGQlJ5eEhRVUZITEV0QlFVc3NRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0QlFVTm9SQ3hSUVVGSkxFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4TFFVRkxMRVZCUVVVN1FVRkRkRUlzWVVGQlR5eERRVUZETEVOQlFVTTdTMEZEVmp0SFFVTkdPMEZCUTBRc1UwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF6dERRVU5ZT3p0QlFVZE5MRk5CUVZNc1owSkJRV2RDTEVOQlFVTXNUVUZCVFN4RlFVRkZPMEZCUTNaRExFMUJRVWtzVDBGQlR5eE5RVUZOTEV0QlFVc3NVVUZCVVN4RlFVRkZPenRCUVVVNVFpeFJRVUZKTEUxQlFVMHNTVUZCU1N4TlFVRk5MRU5CUVVNc1RVRkJUU3hGUVVGRk8wRkJRek5DTEdGQlFVOHNUVUZCVFN4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRE8wdEJRM2hDTEUxQlFVMHNTVUZCU1N4TlFVRk5MRWxCUVVrc1NVRkJTU3hGUVVGRk8wRkJRM3BDTEdGQlFVOHNSVUZCUlN4RFFVRkRPMHRCUTFnc1RVRkJUU3hKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTzBGQlEyeENMR0ZCUVU4c1RVRkJUU3hIUVVGSExFVkJRVVVzUTBGQlF6dExRVU53UWpzN096czdRVUZMUkN4VlFVRk5MRWRCUVVjc1JVRkJSU3hIUVVGSExFMUJRVTBzUTBGQlF6dEhRVU4wUWpzN1FVRkZSQ3hOUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1JVRkJSVHRCUVVGRkxGZEJRVThzVFVGQlRTeERRVUZETzBkQlFVVTdRVUZET1VNc1UwRkJUeXhOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEZGQlFWRXNSVUZCUlN4VlFVRlZMRU5CUVVNc1EwRkJRenREUVVNM1F6czdRVUZGVFN4VFFVRlRMRTlCUVU4c1EwRkJReXhMUVVGTExFVkJRVVU3UVVGRE4wSXNUVUZCU1N4RFFVRkRMRXRCUVVzc1NVRkJTU3hMUVVGTExFdEJRVXNzUTBGQlF5eEZRVUZGTzBGQlEzcENMRmRCUVU4c1NVRkJTU3hEUVVGRE8wZEJRMklzVFVGQlRTeEpRVUZKTEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hMUVVGTExFTkJRVU1zVFVGQlRTeExRVUZMTEVOQlFVTXNSVUZCUlR0QlFVTXZReXhYUVVGUExFbEJRVWtzUTBGQlF6dEhRVU5pTEUxQlFVMDdRVUZEVEN4WFFVRlBMRXRCUVVzc1EwRkJRenRIUVVOa08wTkJRMFk3TzBGQlJVMHNVMEZCVXl4WFFVRlhMRU5CUVVNc1RVRkJUU3hGUVVGRk8wRkJRMnhETEUxQlFVa3NTMEZCU3l4SFFVRkhMRTFCUVUwc1EwRkJReXhGUVVGRkxFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTTdRVUZETDBJc1QwRkJTeXhEUVVGRExFOUJRVThzUjBGQlJ5eE5RVUZOTEVOQlFVTTdRVUZEZGtJc1UwRkJUeXhMUVVGTExFTkJRVU03UTBGRFpEczdRVUZGVFN4VFFVRlRMRmRCUVZjc1EwRkJReXhOUVVGTkxFVkJRVVVzUjBGQlJ5eEZRVUZGTzBGQlEzWkRMRkZCUVUwc1EwRkJReXhKUVVGSkxFZEJRVWNzUjBGQlJ5eERRVUZETzBGQlEyeENMRk5CUVU4c1RVRkJUU3hEUVVGRE8wTkJRMlk3TzBGQlJVMHNVMEZCVXl4cFFrRkJhVUlzUTBGQlF5eFhRVUZYTEVWQlFVVXNSVUZCUlN4RlFVRkZPMEZCUTJwRUxGTkJRVThzUTBGQlF5eFhRVUZYTEVkQlFVY3NWMEZCVnl4SFFVRkhMRWRCUVVjc1IwRkJSeXhGUVVGRkxFTkJRVUVzUjBGQlNTeEZRVUZGTEVOQlFVTTdRMEZEY0VRaUxDSm1hV3hsSWpvaWRYUnBiSE11YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SmpiMjV6ZENCbGMyTmhjR1VnUFNCN1hHNGdJQ2NtSnpvZ0p5WmhiWEE3Snl4Y2JpQWdKenduT2lBbkpteDBPeWNzWEc0Z0lDYytKem9nSnlabmREc25MRnh1SUNBblhDSW5PaUFuSm5GMWIzUTdKeXhjYmlBZ1hDSW5YQ0k2SUNjbUkzZ3lOenNuTEZ4dUlDQW5ZQ2M2SUNjbUkzZzJNRHNuTEZ4dUlDQW5QU2M2SUNjbUkzZ3pSRHNuWEc1OU8xeHVYRzVqYjI1emRDQmlZV1JEYUdGeWN5QTlJQzliSmp3K1hDSW5ZRDFkTDJjc1hHNGdJQ0FnSUNCd2IzTnphV0pzWlNBOUlDOWJKancrWENJbllEMWRMenRjYmx4dVpuVnVZM1JwYjI0Z1pYTmpZWEJsUTJoaGNpaGphSElwSUh0Y2JpQWdjbVYwZFhKdUlHVnpZMkZ3WlZ0amFISmRPMXh1ZlZ4dVhHNWxlSEJ2Y25RZ1puVnVZM1JwYjI0Z1pYaDBaVzVrS0c5aWFpOHFJQ3dnTGk0dWMyOTFjbU5sSUNvdktTQjdYRzRnSUdadmNpQW9iR1YwSUdrZ1BTQXhPeUJwSUR3Z1lYSm5kVzFsYm5SekxteGxibWQwYURzZ2FTc3JLU0I3WEc0Z0lDQWdabTl5SUNoc1pYUWdhMlY1SUdsdUlHRnlaM1Z0Wlc1MGMxdHBYU2tnZTF4dUlDQWdJQ0FnYVdZZ0tFOWlhbVZqZEM1d2NtOTBiM1I1Y0dVdWFHRnpUM2R1VUhKdmNHVnlkSGt1WTJGc2JDaGhjbWQxYldWdWRITmJhVjBzSUd0bGVTa3BJSHRjYmlBZ0lDQWdJQ0FnYjJKcVcydGxlVjBnUFNCaGNtZDFiV1Z1ZEhOYmFWMWJhMlY1WFR0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc0Z0lIMWNibHh1SUNCeVpYUjFjbTRnYjJKcU8xeHVmVnh1WEc1bGVIQnZjblFnYkdWMElIUnZVM1J5YVc1bklEMGdUMkpxWldOMExuQnliM1J2ZEhsd1pTNTBiMU4wY21sdVp6dGNibHh1THk4Z1UyOTFjbU5sWkNCbWNtOXRJR3h2WkdGemFGeHVMeThnYUhSMGNITTZMeTluYVhSb2RXSXVZMjl0TDJKbGMzUnBaV3B6TDJ4dlpHRnphQzlpYkc5aUwyMWhjM1JsY2k5TVNVTkZUbE5GTG5SNGRGeHVMeW9nWlhOc2FXNTBMV1JwYzJGaWJHVWdablZ1WXkxemRIbHNaU0FxTDF4dWJHVjBJR2x6Um5WdVkzUnBiMjRnUFNCbWRXNWpkR2x2YmloMllXeDFaU2tnZTF4dUlDQnlaWFIxY200Z2RIbHdaVzltSUhaaGJIVmxJRDA5UFNBblpuVnVZM1JwYjI0bk8xeHVmVHRjYmk4dklHWmhiR3hpWVdOcklHWnZjaUJ2YkdSbGNpQjJaWEp6YVc5dWN5QnZaaUJEYUhKdmJXVWdZVzVrSUZOaFptRnlhVnh1THlvZ2FYTjBZVzVpZFd3Z2FXZHViM0psSUc1bGVIUWdLaTljYm1sbUlDaHBjMFoxYm1OMGFXOXVLQzk0THlrcElIdGNiaUFnYVhOR2RXNWpkR2x2YmlBOUlHWjFibU4wYVc5dUtIWmhiSFZsS1NCN1hHNGdJQ0FnY21WMGRYSnVJSFI1Y0dWdlppQjJZV3gxWlNBOVBUMGdKMloxYm1OMGFXOXVKeUFtSmlCMGIxTjBjbWx1Wnk1allXeHNLSFpoYkhWbEtTQTlQVDBnSjF0dlltcGxZM1FnUm5WdVkzUnBiMjVkSnp0Y2JpQWdmVHRjYm4xY2JtVjRjRzl5ZENCN2FYTkdkVzVqZEdsdmJuMDdYRzR2S2lCbGMyeHBiblF0Wlc1aFlteGxJR1oxYm1NdGMzUjViR1VnS2k5Y2JseHVMeW9nYVhOMFlXNWlkV3dnYVdkdWIzSmxJRzVsZUhRZ0tpOWNibVY0Y0c5eWRDQmpiMjV6ZENCcGMwRnljbUY1SUQwZ1FYSnlZWGt1YVhOQmNuSmhlU0I4ZkNCbWRXNWpkR2x2YmloMllXeDFaU2tnZTF4dUlDQnlaWFIxY200Z0tIWmhiSFZsSUNZbUlIUjVjR1Z2WmlCMllXeDFaU0E5UFQwZ0oyOWlhbVZqZENjcElEOGdkRzlUZEhKcGJtY3VZMkZzYkNoMllXeDFaU2tnUFQwOUlDZGJiMkpxWldOMElFRnljbUY1WFNjZ09pQm1ZV3h6WlR0Y2JuMDdYRzVjYmk4dklFOXNaR1Z5SUVsRklIWmxjbk5wYjI1eklHUnZJRzV2ZENCa2FYSmxZM1JzZVNCemRYQndiM0owSUdsdVpHVjRUMllnYzI4Z2QyVWdiWFZ6ZENCcGJYQnNaVzFsYm5RZ2IzVnlJRzkzYml3Z2MyRmtiSGt1WEc1bGVIQnZjblFnWm5WdVkzUnBiMjRnYVc1a1pYaFBaaWhoY25KaGVTd2dkbUZzZFdVcElIdGNiaUFnWm05eUlDaHNaWFFnYVNBOUlEQXNJR3hsYmlBOUlHRnljbUY1TG14bGJtZDBhRHNnYVNBOElHeGxianNnYVNzcktTQjdYRzRnSUNBZ2FXWWdLR0Z5Y21GNVcybGRJRDA5UFNCMllXeDFaU2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJR2s3WEc0Z0lDQWdmVnh1SUNCOVhHNGdJSEpsZEhWeWJpQXRNVHRjYm4xY2JseHVYRzVsZUhCdmNuUWdablZ1WTNScGIyNGdaWE5qWVhCbFJYaHdjbVZ6YzJsdmJpaHpkSEpwYm1jcElIdGNiaUFnYVdZZ0tIUjVjR1Z2WmlCemRISnBibWNnSVQwOUlDZHpkSEpwYm1jbktTQjdYRzRnSUNBZ0x5OGdaRzl1SjNRZ1pYTmpZWEJsSUZOaFptVlRkSEpwYm1kekxDQnphVzVqWlNCMGFHVjVKM0psSUdGc2NtVmhaSGtnYzJGbVpWeHVJQ0FnSUdsbUlDaHpkSEpwYm1jZ0ppWWdjM1J5YVc1bkxuUnZTRlJOVENrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUhOMGNtbHVaeTUwYjBoVVRVd29LVHRjYmlBZ0lDQjlJR1ZzYzJVZ2FXWWdLSE4wY21sdVp5QTlQU0J1ZFd4c0tTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z0p5YzdYRzRnSUNBZ2ZTQmxiSE5sSUdsbUlDZ2hjM1J5YVc1bktTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z2MzUnlhVzVuSUNzZ0p5YzdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5OGdSbTl5WTJVZ1lTQnpkSEpwYm1jZ1kyOXVkbVZ5YzJsdmJpQmhjeUIwYUdseklIZHBiR3dnWW1VZ1pHOXVaU0JpZVNCMGFHVWdZWEJ3Wlc1a0lISmxaMkZ5Wkd4bGMzTWdZVzVrWEc0Z0lDQWdMeThnZEdobElISmxaMlY0SUhSbGMzUWdkMmxzYkNCa2J5QjBhR2x6SUhSeVlXNXpjR0Z5Wlc1MGJIa2dZbVZvYVc1a0lIUm9aU0J6WTJWdVpYTXNJR05oZFhOcGJtY2dhWE56ZFdWeklHbG1YRzRnSUNBZ0x5OGdZVzRnYjJKcVpXTjBKM01nZEc4Z2MzUnlhVzVuSUdoaGN5QmxjMk5oY0dWa0lHTm9ZWEpoWTNSbGNuTWdhVzRnYVhRdVhHNGdJQ0FnYzNSeWFXNW5JRDBnSnljZ0t5QnpkSEpwYm1jN1hHNGdJSDFjYmx4dUlDQnBaaUFvSVhCdmMzTnBZbXhsTG5SbGMzUW9jM1J5YVc1bktTa2dleUJ5WlhSMWNtNGdjM1J5YVc1bk95QjlYRzRnSUhKbGRIVnliaUJ6ZEhKcGJtY3VjbVZ3YkdGalpTaGlZV1JEYUdGeWN5d2daWE5qWVhCbFEyaGhjaWs3WEc1OVhHNWNibVY0Y0c5eWRDQm1kVzVqZEdsdmJpQnBjMFZ0Y0hSNUtIWmhiSFZsS1NCN1hHNGdJR2xtSUNnaGRtRnNkV1VnSmlZZ2RtRnNkV1VnSVQwOUlEQXBJSHRjYmlBZ0lDQnlaWFIxY200Z2RISjFaVHRjYmlBZ2ZTQmxiSE5sSUdsbUlDaHBjMEZ5Y21GNUtIWmhiSFZsS1NBbUppQjJZV3gxWlM1c1pXNW5kR2dnUFQwOUlEQXBJSHRjYmlBZ0lDQnlaWFIxY200Z2RISjFaVHRjYmlBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0J5WlhSMWNtNGdabUZzYzJVN1hHNGdJSDFjYm4xY2JseHVaWGh3YjNKMElHWjFibU4wYVc5dUlHTnlaV0YwWlVaeVlXMWxLRzlpYW1WamRDa2dlMXh1SUNCc1pYUWdabkpoYldVZ1BTQmxlSFJsYm1Rb2UzMHNJRzlpYW1WamRDazdYRzRnSUdaeVlXMWxMbDl3WVhKbGJuUWdQU0J2WW1wbFkzUTdYRzRnSUhKbGRIVnliaUJtY21GdFpUdGNibjFjYmx4dVpYaHdiM0owSUdaMWJtTjBhVzl1SUdKc2IyTnJVR0Z5WVcxektIQmhjbUZ0Y3l3Z2FXUnpLU0I3WEc0Z0lIQmhjbUZ0Y3k1d1lYUm9JRDBnYVdSek8xeHVJQ0J5WlhSMWNtNGdjR0Z5WVcxek8xeHVmVnh1WEc1bGVIQnZjblFnWm5WdVkzUnBiMjRnWVhCd1pXNWtRMjl1ZEdWNGRGQmhkR2dvWTI5dWRHVjRkRkJoZEdnc0lHbGtLU0I3WEc0Z0lISmxkSFZ5YmlBb1kyOXVkR1Y0ZEZCaGRHZ2dQeUJqYjI1MFpYaDBVR0YwYUNBcklDY3VKeUE2SUNjbktTQXJJR2xrTzF4dWZWeHVJbDE5XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL3V0aWxzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIENyZWF0ZSBhIHNpbXBsZSBwYXRoIGFsaWFzIHRvIGFsbG93IGJyb3dzZXJpZnkgdG8gcmVzb2x2ZVxuLy8gdGhlIHJ1bnRpbWUgb24gYSBzdXBwb3J0ZWQgcGF0aC5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2Nqcy9oYW5kbGViYXJzLnJ1bnRpbWUnKVsnZGVmYXVsdCddO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvcnVudGltZS5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBlcnJvclByb3BzID0gWydkZXNjcmlwdGlvbicsICdmaWxlTmFtZScsICdsaW5lTnVtYmVyJywgJ21lc3NhZ2UnLCAnbmFtZScsICdudW1iZXInLCAnc3RhY2snXTtcblxuZnVuY3Rpb24gRXhjZXB0aW9uKG1lc3NhZ2UsIG5vZGUpIHtcbiAgdmFyIGxvYyA9IG5vZGUgJiYgbm9kZS5sb2MsXG4gICAgICBsaW5lID0gdW5kZWZpbmVkLFxuICAgICAgY29sdW1uID0gdW5kZWZpbmVkO1xuICBpZiAobG9jKSB7XG4gICAgbGluZSA9IGxvYy5zdGFydC5saW5lO1xuICAgIGNvbHVtbiA9IGxvYy5zdGFydC5jb2x1bW47XG5cbiAgICBtZXNzYWdlICs9ICcgLSAnICsgbGluZSArICc6JyArIGNvbHVtbjtcbiAgfVxuXG4gIHZhciB0bXAgPSBFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IuY2FsbCh0aGlzLCBtZXNzYWdlKTtcblxuICAvLyBVbmZvcnR1bmF0ZWx5IGVycm9ycyBhcmUgbm90IGVudW1lcmFibGUgaW4gQ2hyb21lIChhdCBsZWFzdCksIHNvIGBmb3IgcHJvcCBpbiB0bXBgIGRvZXNuJ3Qgd29yay5cbiAgZm9yICh2YXIgaWR4ID0gMDsgaWR4IDwgZXJyb3JQcm9wcy5sZW5ndGg7IGlkeCsrKSB7XG4gICAgdGhpc1tlcnJvclByb3BzW2lkeF1dID0gdG1wW2Vycm9yUHJvcHNbaWR4XV07XG4gIH1cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAoRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UpIHtcbiAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCBFeGNlcHRpb24pO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBpZiAobG9jKSB7XG4gICAgICB0aGlzLmxpbmVOdW1iZXIgPSBsaW5lO1xuXG4gICAgICAvLyBXb3JrIGFyb3VuZCBpc3N1ZSB1bmRlciBzYWZhcmkgd2hlcmUgd2UgY2FuJ3QgZGlyZWN0bHkgc2V0IHRoZSBjb2x1bW4gdmFsdWVcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnY29sdW1uJywge1xuICAgICAgICAgIHZhbHVlOiBjb2x1bW4sXG4gICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29sdW1uID0gY29sdW1uO1xuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCAobm9wKSB7XG4gICAgLyogSWdub3JlIGlmIHRoZSBicm93c2VyIGlzIHZlcnkgcGFydGljdWxhciAqL1xuICB9XG59XG5cbkV4Y2VwdGlvbi5wcm90b3R5cGUgPSBuZXcgRXJyb3IoKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gRXhjZXB0aW9uO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUx5NHVMMnhwWWk5b1lXNWtiR1ZpWVhKekwyVjRZMlZ3ZEdsdmJpNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3TzBGQlEwRXNTVUZCVFN4VlFVRlZMRWRCUVVjc1EwRkJReXhoUVVGaExFVkJRVVVzVlVGQlZTeEZRVUZGTEZsQlFWa3NSVUZCUlN4VFFVRlRMRVZCUVVVc1RVRkJUU3hGUVVGRkxGRkJRVkVzUlVGQlJTeFBRVUZQTEVOQlFVTXNRMEZCUXpzN1FVRkZia2NzVTBGQlV5eFRRVUZUTEVOQlFVTXNUMEZCVHl4RlFVRkZMRWxCUVVrc1JVRkJSVHRCUVVOb1F5eE5RVUZKTEVkQlFVY3NSMEZCUnl4SlFVRkpMRWxCUVVrc1NVRkJTU3hEUVVGRExFZEJRVWM3VFVGRGRFSXNTVUZCU1N4WlFVRkJPMDFCUTBvc1RVRkJUU3haUVVGQkxFTkJRVU03UVVGRFdDeE5RVUZKTEVkQlFVY3NSVUZCUlR0QlFVTlFMRkZCUVVrc1IwRkJSeXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXp0QlFVTjBRaXhWUVVGTkxFZEJRVWNzUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4TlFVRk5MRU5CUVVNN08wRkJSVEZDTEZkQlFVOHNTVUZCU1N4TFFVRkxMRWRCUVVjc1NVRkJTU3hIUVVGSExFZEJRVWNzUjBGQlJ5eE5RVUZOTEVOQlFVTTdSMEZEZUVNN08wRkJSVVFzVFVGQlNTeEhRVUZITEVkQlFVY3NTMEZCU3l4RFFVRkRMRk5CUVZNc1EwRkJReXhYUVVGWExFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NSVUZCUlN4UFFVRlBMRU5CUVVNc1EwRkJRenM3TzBGQlJ6RkVMRTlCUVVzc1NVRkJTU3hIUVVGSExFZEJRVWNzUTBGQlF5eEZRVUZGTEVkQlFVY3NSMEZCUnl4VlFVRlZMRU5CUVVNc1RVRkJUU3hGUVVGRkxFZEJRVWNzUlVGQlJTeEZRVUZGTzBGQlEyaEVMRkZCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1ZVRkJWU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdSMEZET1VNN096dEJRVWRFTEUxQlFVa3NTMEZCU3l4RFFVRkRMR2xDUVVGcFFpeEZRVUZGTzBGQlF6TkNMRk5CUVVzc1EwRkJReXhwUWtGQmFVSXNRMEZCUXl4SlFVRkpMRVZCUVVVc1UwRkJVeXhEUVVGRExFTkJRVU03UjBGRE1VTTdPMEZCUlVRc1RVRkJTVHRCUVVOR0xGRkJRVWtzUjBGQlJ5eEZRVUZGTzBGQlExQXNWVUZCU1N4RFFVRkRMRlZCUVZVc1IwRkJSeXhKUVVGSkxFTkJRVU03T3pzN1FVRkpka0lzVlVGQlNTeE5RVUZOTEVOQlFVTXNZMEZCWXl4RlFVRkZPMEZCUTNwQ0xHTkJRVTBzUTBGQlF5eGpRVUZqTEVOQlFVTXNTVUZCU1N4RlFVRkZMRkZCUVZFc1JVRkJSVHRCUVVOd1F5eGxRVUZMTEVWQlFVVXNUVUZCVFR0QlFVTmlMRzlDUVVGVkxFVkJRVVVzU1VGQlNUdFRRVU5xUWl4RFFVRkRMRU5CUVVNN1QwRkRTaXhOUVVGTk8wRkJRMHdzV1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4TlFVRk5MRU5CUVVNN1QwRkRkRUk3UzBGRFJqdEhRVU5HTEVOQlFVTXNUMEZCVHl4SFFVRkhMRVZCUVVVN08wZEJSV0k3UTBGRFJqczdRVUZGUkN4VFFVRlRMRU5CUVVNc1UwRkJVeXhIUVVGSExFbEJRVWtzUzBGQlN5eEZRVUZGTEVOQlFVTTdPM0ZDUVVWdVFpeFRRVUZUSWl3aVptbHNaU0k2SW1WNFkyVndkR2x2Ymk1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbHh1WTI5dWMzUWdaWEp5YjNKUWNtOXdjeUE5SUZzblpHVnpZM0pwY0hScGIyNG5MQ0FuWm1sc1pVNWhiV1VuTENBbmJHbHVaVTUxYldKbGNpY3NJQ2R0WlhOellXZGxKeXdnSjI1aGJXVW5MQ0FuYm5WdFltVnlKeXdnSjNOMFlXTnJKMTA3WEc1Y2JtWjFibU4wYVc5dUlFVjRZMlZ3ZEdsdmJpaHRaWE56WVdkbExDQnViMlJsS1NCN1hHNGdJR3hsZENCc2IyTWdQU0J1YjJSbElDWW1JRzV2WkdVdWJHOWpMRnh1SUNBZ0lDQWdiR2x1WlN4Y2JpQWdJQ0FnSUdOdmJIVnRianRjYmlBZ2FXWWdLR3h2WXlrZ2UxeHVJQ0FnSUd4cGJtVWdQU0JzYjJNdWMzUmhjblF1YkdsdVpUdGNiaUFnSUNCamIyeDFiVzRnUFNCc2IyTXVjM1JoY25RdVkyOXNkVzF1TzF4dVhHNGdJQ0FnYldWemMyRm5aU0FyUFNBbklDMGdKeUFySUd4cGJtVWdLeUFuT2ljZ0t5QmpiMngxYlc0N1hHNGdJSDFjYmx4dUlDQnNaWFFnZEcxd0lEMGdSWEp5YjNJdWNISnZkRzkwZVhCbExtTnZibk4wY25WamRHOXlMbU5oYkd3b2RHaHBjeXdnYldWemMyRm5aU2s3WEc1Y2JpQWdMeThnVlc1bWIzSjBkVzVoZEdWc2VTQmxjbkp2Y25NZ1lYSmxJRzV2ZENCbGJuVnRaWEpoWW14bElHbHVJRU5vY205dFpTQW9ZWFFnYkdWaGMzUXBMQ0J6YnlCZ1ptOXlJSEJ5YjNBZ2FXNGdkRzF3WUNCa2IyVnpiaWQwSUhkdmNtc3VYRzRnSUdadmNpQW9iR1YwSUdsa2VDQTlJREE3SUdsa2VDQThJR1Z5Y205eVVISnZjSE11YkdWdVozUm9PeUJwWkhnckt5a2dlMXh1SUNBZ0lIUm9hWE5iWlhKeWIzSlFjbTl3YzF0cFpIaGRYU0E5SUhSdGNGdGxjbkp2Y2xCeWIzQnpXMmxrZUYxZE8xeHVJQ0I5WEc1Y2JpQWdMeW9nYVhOMFlXNWlkV3dnYVdkdWIzSmxJR1ZzYzJVZ0tpOWNiaUFnYVdZZ0tFVnljbTl5TG1OaGNIUjFjbVZUZEdGamExUnlZV05sS1NCN1hHNGdJQ0FnUlhKeWIzSXVZMkZ3ZEhWeVpWTjBZV05yVkhKaFkyVW9kR2hwY3l3Z1JYaGpaWEIwYVc5dUtUdGNiaUFnZlZ4dVhHNGdJSFJ5ZVNCN1hHNGdJQ0FnYVdZZ0tHeHZZeWtnZTF4dUlDQWdJQ0FnZEdocGN5NXNhVzVsVG5WdFltVnlJRDBnYkdsdVpUdGNibHh1SUNBZ0lDQWdMeThnVjI5eWF5QmhjbTkxYm1RZ2FYTnpkV1VnZFc1a1pYSWdjMkZtWVhKcElIZG9aWEpsSUhkbElHTmhiaWQwSUdScGNtVmpkR3g1SUhObGRDQjBhR1VnWTI5c2RXMXVJSFpoYkhWbFhHNGdJQ0FnSUNBdktpQnBjM1JoYm1KMWJDQnBaMjV2Y21VZ2JtVjRkQ0FxTDF4dUlDQWdJQ0FnYVdZZ0tFOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2tnZTF4dUlDQWdJQ0FnSUNCUFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29kR2hwY3l3Z0oyTnZiSFZ0Ymljc0lIdGNiaUFnSUNBZ0lDQWdJQ0IyWVd4MVpUb2dZMjlzZFcxdUxGeHVJQ0FnSUNBZ0lDQWdJR1Z1ZFcxbGNtRmliR1U2SUhSeWRXVmNiaUFnSUNBZ0lDQWdmU2s3WEc0Z0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0IwYUdsekxtTnZiSFZ0YmlBOUlHTnZiSFZ0Ymp0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc0Z0lIMGdZMkYwWTJnZ0tHNXZjQ2tnZTF4dUlDQWdJQzhxSUVsbmJtOXlaU0JwWmlCMGFHVWdZbkp2ZDNObGNpQnBjeUIyWlhKNUlIQmhjblJwWTNWc1lYSWdLaTljYmlBZ2ZWeHVmVnh1WEc1RmVHTmxjSFJwYjI0dWNISnZkRzkwZVhCbElEMGdibVYzSUVWeWNtOXlLQ2s3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUVWNFkyVndkR2x2Ymp0Y2JpSmRmUT09XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL2V4Y2VwdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcclxuICogcXVlcnlTZWxlY3RvciB3cmFwcGVyXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvciBTZWxlY3RvciB0byBxdWVyeVxyXG4gKiBAcGFyYW0ge0VsZW1lbnR9IFtzY29wZV0gT3B0aW9uYWwgc2NvcGUgZWxlbWVudCBmb3IgdGhlIHNlbGVjdG9yXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcXMoc2VsZWN0b3IsIHNjb3BlKSB7XHJcbiAgICByZXR1cm4gKHNjb3BlIHx8IGRvY3VtZW50KS5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcXNhKHNlbGVjdG9yLCBzY29wZSkge1xyXG4gICAgcmV0dXJuIChzY29wZSB8fCBkb2N1bWVudCkucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBhZGRFdmVudExpc3RlbmVyIHdyYXBwZXJcclxuICpcclxuICogQHBhcmFtIHtFbGVtZW50fFdpbmRvd30gZWxlbWVudCBUYXJnZXQgRWxlbWVudFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBFdmVudCBuYW1lIHRvIGJpbmQgdG9cclxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgRXZlbnQgY2FsbGJhY2tcclxuICogQHBhcmFtIHtib29sZWFufSB1c2VDYXB0dXJlIENhcHR1cmUgdGhlIGV2ZW50XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gb24oZWxlbWVudCwgdHlwZSwgY2FsbGJhY2ssIHVzZUNhcHR1cmUpIHtcclxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjaywgdXNlQ2FwdHVyZSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZWxlZ2F0ZXMgZXZlbnQgdG8gYSBzZWxlY3Rvci5cclxuICpcclxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvclxyXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHVzZUNhcHR1cmVcclxuICogQHJldHVybiB7T2JqZWN0fVxyXG4gKi9cclxuZnVuY3Rpb24gX2RlbGVnYXRlKGVsZW1lbnQsIHNlbGVjdG9yLCB0eXBlLCBjYWxsYmFjaywgdXNlQ2FwdHVyZSkge1xyXG4gICAgdmFyIGxpc3RlbmVyRm4gPSBsaXN0ZW5lci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cclxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lckZuLCB1c2VDYXB0dXJlKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyRm4sIHVzZUNhcHR1cmUpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZWxlZ2F0ZXMgZXZlbnQgdG8gYSBzZWxlY3Rvci5cclxuICpcclxuICogQHBhcmFtIHtFbGVtZW50fFN0cmluZ3xBcnJheX0gW2VsZW1lbnRzXVxyXG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcclxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcclxuICogQHBhcmFtIHtCb29sZWFufSB1c2VDYXB0dXJlXHJcbiAqIEByZXR1cm4ge09iamVjdH1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWxlZ2F0ZShlbGVtZW50cywgc2VsZWN0b3IsIHR5cGUsIGNhbGxiYWNrLCB1c2VDYXB0dXJlKSB7XHJcbiAgICAvLyBIYW5kbGUgdGhlIHJlZ3VsYXIgRWxlbWVudCB1c2FnZVxyXG4gICAgaWYgKHR5cGVvZiBlbGVtZW50cy5hZGRFdmVudExpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgcmV0dXJuIF9kZWxlZ2F0ZS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEhhbmRsZSBFbGVtZW50LWxlc3MgdXNhZ2UsIGl0IGRlZmF1bHRzIHRvIGdsb2JhbCBkZWxlZ2F0aW9uXHJcbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAvLyBVc2UgYGRvY3VtZW50YCBhcyB0aGUgZmlyc3QgcGFyYW1ldGVyLCB0aGVuIGFwcGx5IGFyZ3VtZW50c1xyXG4gICAgICAgIC8vIFRoaXMgaXMgYSBzaG9ydCB3YXkgdG8gLnVuc2hpZnQgYGFyZ3VtZW50c2Agd2l0aG91dCBydW5uaW5nIGludG8gZGVvcHRpbWl6YXRpb25zXHJcbiAgICAgICAgcmV0dXJuIF9kZWxlZ2F0ZS5iaW5kKG51bGwsIGRvY3VtZW50KS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEhhbmRsZSBTZWxlY3Rvci1iYXNlZCB1c2FnZVxyXG4gICAgaWYgKHR5cGVvZiBlbGVtZW50cyA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxlbWVudHMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEhhbmRsZSBBcnJheS1saWtlIGJhc2VkIHVzYWdlXHJcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKGVsZW1lbnRzLCBmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gICAgICAgIHJldHVybiBfZGVsZWdhdGUoZWxlbWVudCwgc2VsZWN0b3IsIHR5cGUsIGNhbGxiYWNrLCB1c2VDYXB0dXJlKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogRmluZHMgY2xvc2VzdCBtYXRjaCBhbmQgaW52b2tlcyBjYWxsYmFjay5cclxuICpcclxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvclxyXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xyXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cclxuICovXHJcbmZ1bmN0aW9uIGxpc3RlbmVyKGVsZW1lbnQsIHNlbGVjdG9yLCB0eXBlLCBjYWxsYmFjaykge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5kZWxlZ2F0ZVRhcmdldCA9IGUudGFyZ2V0LmNsb3Nlc3Qoc2VsZWN0b3IpO1xyXG5cclxuICAgICAgICBpZiAoZS5kZWxlZ2F0ZVRhcmdldCkge1xyXG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKGVsZW1lbnQsIGUpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogQUpBWCByZXF1ZXN0LlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXHJcbiAqIEByZXR1cm4ge09iamVjdH1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZXF1ZXN0KHVybCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICB4aHIub3BlbignZ2V0JywgdXJsLCB0cnVlKTtcclxuICAgICAgICB4aHIub25sb2FkID0gKCkgPT4gKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCA0MDApID9cclxuICAgICAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKHhoci5yZXNwb25zZSkpIDogcmVqZWN0KHhoci5zdGF0dXMpO1xyXG4gICAgICAgIHhoci5vbnRpbWVvdXQgPSAoKSA9PiByZWplY3QoJ3RpbWVvdXQnKTtcclxuICAgICAgICB4aHIuc2VuZCgpO1xyXG4gICAgfSk7XHJcbn1cclxuLyoqXHJcbiAqIFJldHVybnMgYSBuZXcgZnVuY3Rpb24gdGhhdCwgd2hlbiBpbnZva2VkLCBpbnZva2VzIGBmdW5jYCBhdCBtb3N0IG9uY2UgcGVyIGB3YWl0YCBtaWxsaXNlY29uZHMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgRnVuY3Rpb24gdG8gd3JhcC5cclxuICogQHBhcmFtIHtOdW1iZXJ9IGxpbWl0IE51bWJlciBvZiBtaWxsaXNlY29uZHMgdGhhdCBtdXN0IGVsYXBzZSBiZXR3ZWVuIGBmdW5jYCBpbnZvY2F0aW9ucy5cclxuICogQHJldHVybiB7RnVuY3Rpb259IEEgbmV3IGZ1bmN0aW9uIHRoYXQgd3JhcHMgdGhlIGBmdW5jYCBmdW5jdGlvbiBwYXNzZWQgaW4uXHJcbiAqL1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRocm90dGxlKGZ1bmMsIGxpbWl0KSB7XHJcbiAgICBsZXQgd2FpdCA9IGZhbHNlO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICBpZiAoIXdhaXQpIHtcclxuICAgICAgICAgICAgZnVuYy5hcHBseShudWxsLCBhcmd1bWVudHMpO1xyXG4gICAgICAgICAgICB3YWl0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB3YWl0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0sIGxpbWl0KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG4vKipcclxuICogYWNjZWxlcmF0aW9uIHVudGlsIGhhbGZ3YXksIHRoZW4gZGVjZWxlcmF0aW9uXHJcbiAqXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB0IGN1cnJlbnQgdGltZVxyXG4gKiBAcGFyYW0ge051bWJlcn0gYiBzdGFydCB2YWx1ZVxyXG4gKiBAcGFyYW0ge051bWJlcn0gYyBjaGFuZ2UgaW4gdmFsdWVcclxuICogQHBhcmFtIHtOdW1iZXJ9IGQgZHVyYXRpb25cclxuICogQHJldHVybiB7TnVtYmVyfSBuZXcgc2Nyb2xsWVxyXG4gKi9cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBlYXNlSW5PdXRRdWFkKHQsIGIsIGMsIGQpIHtcclxuICAgIHQgLz0gZCAvIDI7XHJcbiAgICBpZiAodCA8IDEpIHJldHVybiBjIC8gMiAqIHQgKiB0ICsgYjtcclxuICAgIHQtLTtcclxuICAgIHJldHVybiAtYyAvIDIgKiAodCAqICh0IC0gMikgLSAxKSArIGI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBhY2NlbGVyYXRpbmcgZnJvbSB6ZXJvIHZlbG9jaXR5XHJcbiAqXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB0IGN1cnJlbnQgdGltZVxyXG4gKiBAcGFyYW0ge051bWJlcn0gYiBzdGFydCB2YWx1ZVxyXG4gKiBAcGFyYW0ge051bWJlcn0gYyBjaGFuZ2UgaW4gdmFsdWVcclxuICogQHBhcmFtIHtOdW1iZXJ9IGQgZHVyYXRpb25cclxuICogQHJldHVybiB7TnVtYmVyfSBuZXcgc2Nyb2xsWVxyXG4gKi9cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBlYXNlSW5RdWFkKHQsIGIsIGMsIGQpIHtcclxuICAgIHQgLz0gZCAvIDI7XHJcbiAgICByZXR1cm4gYyAvIDIgKiB0ICogdCArIGI7XHJcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2hlbHBlcnMuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5IYW5kbGViYXJzRW52aXJvbm1lbnQgPSBIYW5kbGViYXJzRW52aXJvbm1lbnQ7XG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbnZhciBfZXhjZXB0aW9uID0gcmVxdWlyZSgnLi9leGNlcHRpb24nKTtcblxudmFyIF9leGNlcHRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXhjZXB0aW9uKTtcblxudmFyIF9oZWxwZXJzID0gcmVxdWlyZSgnLi9oZWxwZXJzJyk7XG5cbnZhciBfZGVjb3JhdG9ycyA9IHJlcXVpcmUoJy4vZGVjb3JhdG9ycycpO1xuXG52YXIgX2xvZ2dlciA9IHJlcXVpcmUoJy4vbG9nZ2VyJyk7XG5cbnZhciBfbG9nZ2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvZ2dlcik7XG5cbnZhciBWRVJTSU9OID0gJzQuMC4xMSc7XG5leHBvcnRzLlZFUlNJT04gPSBWRVJTSU9OO1xudmFyIENPTVBJTEVSX1JFVklTSU9OID0gNztcblxuZXhwb3J0cy5DT01QSUxFUl9SRVZJU0lPTiA9IENPTVBJTEVSX1JFVklTSU9OO1xudmFyIFJFVklTSU9OX0NIQU5HRVMgPSB7XG4gIDE6ICc8PSAxLjAucmMuMicsIC8vIDEuMC5yYy4yIGlzIGFjdHVhbGx5IHJldjIgYnV0IGRvZXNuJ3QgcmVwb3J0IGl0XG4gIDI6ICc9PSAxLjAuMC1yYy4zJyxcbiAgMzogJz09IDEuMC4wLXJjLjQnLFxuICA0OiAnPT0gMS54LngnLFxuICA1OiAnPT0gMi4wLjAtYWxwaGEueCcsXG4gIDY6ICc+PSAyLjAuMC1iZXRhLjEnLFxuICA3OiAnPj0gNC4wLjAnXG59O1xuXG5leHBvcnRzLlJFVklTSU9OX0NIQU5HRVMgPSBSRVZJU0lPTl9DSEFOR0VTO1xudmFyIG9iamVjdFR5cGUgPSAnW29iamVjdCBPYmplY3RdJztcblxuZnVuY3Rpb24gSGFuZGxlYmFyc0Vudmlyb25tZW50KGhlbHBlcnMsIHBhcnRpYWxzLCBkZWNvcmF0b3JzKSB7XG4gIHRoaXMuaGVscGVycyA9IGhlbHBlcnMgfHwge307XG4gIHRoaXMucGFydGlhbHMgPSBwYXJ0aWFscyB8fCB7fTtcbiAgdGhpcy5kZWNvcmF0b3JzID0gZGVjb3JhdG9ycyB8fCB7fTtcblxuICBfaGVscGVycy5yZWdpc3RlckRlZmF1bHRIZWxwZXJzKHRoaXMpO1xuICBfZGVjb3JhdG9ycy5yZWdpc3RlckRlZmF1bHREZWNvcmF0b3JzKHRoaXMpO1xufVxuXG5IYW5kbGViYXJzRW52aXJvbm1lbnQucHJvdG90eXBlID0ge1xuICBjb25zdHJ1Y3RvcjogSGFuZGxlYmFyc0Vudmlyb25tZW50LFxuXG4gIGxvZ2dlcjogX2xvZ2dlcjJbJ2RlZmF1bHQnXSxcbiAgbG9nOiBfbG9nZ2VyMlsnZGVmYXVsdCddLmxvZyxcblxuICByZWdpc3RlckhlbHBlcjogZnVuY3Rpb24gcmVnaXN0ZXJIZWxwZXIobmFtZSwgZm4pIHtcbiAgICBpZiAoX3V0aWxzLnRvU3RyaW5nLmNhbGwobmFtZSkgPT09IG9iamVjdFR5cGUpIHtcbiAgICAgIGlmIChmbikge1xuICAgICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnQXJnIG5vdCBzdXBwb3J0ZWQgd2l0aCBtdWx0aXBsZSBoZWxwZXJzJyk7XG4gICAgICB9XG4gICAgICBfdXRpbHMuZXh0ZW5kKHRoaXMuaGVscGVycywgbmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGVscGVyc1tuYW1lXSA9IGZuO1xuICAgIH1cbiAgfSxcbiAgdW5yZWdpc3RlckhlbHBlcjogZnVuY3Rpb24gdW5yZWdpc3RlckhlbHBlcihuYW1lKSB7XG4gICAgZGVsZXRlIHRoaXMuaGVscGVyc1tuYW1lXTtcbiAgfSxcblxuICByZWdpc3RlclBhcnRpYWw6IGZ1bmN0aW9uIHJlZ2lzdGVyUGFydGlhbChuYW1lLCBwYXJ0aWFsKSB7XG4gICAgaWYgKF91dGlscy50b1N0cmluZy5jYWxsKG5hbWUpID09PSBvYmplY3RUeXBlKSB7XG4gICAgICBfdXRpbHMuZXh0ZW5kKHRoaXMucGFydGlhbHMsIG5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodHlwZW9mIHBhcnRpYWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdBdHRlbXB0aW5nIHRvIHJlZ2lzdGVyIGEgcGFydGlhbCBjYWxsZWQgXCInICsgbmFtZSArICdcIiBhcyB1bmRlZmluZWQnKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucGFydGlhbHNbbmFtZV0gPSBwYXJ0aWFsO1xuICAgIH1cbiAgfSxcbiAgdW5yZWdpc3RlclBhcnRpYWw6IGZ1bmN0aW9uIHVucmVnaXN0ZXJQYXJ0aWFsKG5hbWUpIHtcbiAgICBkZWxldGUgdGhpcy5wYXJ0aWFsc1tuYW1lXTtcbiAgfSxcblxuICByZWdpc3RlckRlY29yYXRvcjogZnVuY3Rpb24gcmVnaXN0ZXJEZWNvcmF0b3IobmFtZSwgZm4pIHtcbiAgICBpZiAoX3V0aWxzLnRvU3RyaW5nLmNhbGwobmFtZSkgPT09IG9iamVjdFR5cGUpIHtcbiAgICAgIGlmIChmbikge1xuICAgICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnQXJnIG5vdCBzdXBwb3J0ZWQgd2l0aCBtdWx0aXBsZSBkZWNvcmF0b3JzJyk7XG4gICAgICB9XG4gICAgICBfdXRpbHMuZXh0ZW5kKHRoaXMuZGVjb3JhdG9ycywgbmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGVjb3JhdG9yc1tuYW1lXSA9IGZuO1xuICAgIH1cbiAgfSxcbiAgdW5yZWdpc3RlckRlY29yYXRvcjogZnVuY3Rpb24gdW5yZWdpc3RlckRlY29yYXRvcihuYW1lKSB7XG4gICAgZGVsZXRlIHRoaXMuZGVjb3JhdG9yc1tuYW1lXTtcbiAgfVxufTtcblxudmFyIGxvZyA9IF9sb2dnZXIyWydkZWZhdWx0J10ubG9nO1xuXG5leHBvcnRzLmxvZyA9IGxvZztcbmV4cG9ydHMuY3JlYXRlRnJhbWUgPSBfdXRpbHMuY3JlYXRlRnJhbWU7XG5leHBvcnRzLmxvZ2dlciA9IF9sb2dnZXIyWydkZWZhdWx0J107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUx5NHVMMnhwWWk5b1lXNWtiR1ZpWVhKekwySmhjMlV1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3Y1VKQlFUUkRMRk5CUVZNN08zbENRVU12UWl4aFFVRmhPenM3TzNWQ1FVTkZMRmRCUVZjN096QkNRVU5TTEdOQlFXTTdPM05DUVVOdVF5eFZRVUZWT3pzN08wRkJSWFJDTEVsQlFVMHNUMEZCVHl4SFFVRkhMRkZCUVZFc1EwRkJRenM3UVVGRGVrSXNTVUZCVFN4cFFrRkJhVUlzUjBGQlJ5eERRVUZETEVOQlFVTTdPenRCUVVVMVFpeEpRVUZOTEdkQ1FVRm5RaXhIUVVGSE8wRkJRemxDTEVkQlFVTXNSVUZCUlN4aFFVRmhPMEZCUTJoQ0xFZEJRVU1zUlVGQlJTeGxRVUZsTzBGQlEyeENMRWRCUVVNc1JVRkJSU3hsUVVGbE8wRkJRMnhDTEVkQlFVTXNSVUZCUlN4VlFVRlZPMEZCUTJJc1IwRkJReXhGUVVGRkxHdENRVUZyUWp0QlFVTnlRaXhIUVVGRExFVkJRVVVzYVVKQlFXbENPMEZCUTNCQ0xFZEJRVU1zUlVGQlJTeFZRVUZWTzBOQlEyUXNRMEZCUXpzN08wRkJSVVlzU1VGQlRTeFZRVUZWTEVkQlFVY3NhVUpCUVdsQ0xFTkJRVU03TzBGQlJUbENMRk5CUVZNc2NVSkJRWEZDTEVOQlFVTXNUMEZCVHl4RlFVRkZMRkZCUVZFc1JVRkJSU3hWUVVGVkxFVkJRVVU3UVVGRGJrVXNUVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhQUVVGUExFbEJRVWtzUlVGQlJTeERRVUZETzBGQlF6ZENMRTFCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWNzVVVGQlVTeEpRVUZKTEVWQlFVVXNRMEZCUXp0QlFVTXZRaXhOUVVGSkxFTkJRVU1zVlVGQlZTeEhRVUZITEZWQlFWVXNTVUZCU1N4RlFVRkZMRU5CUVVNN08wRkJSVzVETEd0RFFVRjFRaXhKUVVGSkxFTkJRVU1zUTBGQlF6dEJRVU0zUWl4M1EwRkJNRUlzU1VGQlNTeERRVUZETEVOQlFVTTdRMEZEYWtNN08wRkJSVVFzY1VKQlFYRkNMRU5CUVVNc1UwRkJVeXhIUVVGSE8wRkJRMmhETEdGQlFWY3NSVUZCUlN4eFFrRkJjVUk3TzBGQlJXeERMRkZCUVUwc2NVSkJRVkU3UVVGRFpDeExRVUZITEVWQlFVVXNiMEpCUVU4c1IwRkJSenM3UVVGRlppeG5Ra0ZCWXl4RlFVRkZMSGRDUVVGVExFbEJRVWtzUlVGQlJTeEZRVUZGTEVWQlFVVTdRVUZEYWtNc1VVRkJTU3huUWtGQlV5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1ZVRkJWU3hGUVVGRk8wRkJRM1JETEZWQlFVa3NSVUZCUlN4RlFVRkZPMEZCUVVVc1kwRkJUU3d5UWtGQll5eDVRMEZCZVVNc1EwRkJReXhEUVVGRE8wOUJRVVU3UVVGRE0wVXNiMEpCUVU4c1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0TFFVTTFRaXhOUVVGTk8wRkJRMHdzVlVGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU03UzBGRGVrSTdSMEZEUmp0QlFVTkVMR3RDUVVGblFpeEZRVUZGTERCQ1FVRlRMRWxCUVVrc1JVRkJSVHRCUVVNdlFpeFhRVUZQTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03UjBGRE0wSTdPMEZCUlVRc2FVSkJRV1VzUlVGQlJTeDVRa0ZCVXl4SlFVRkpMRVZCUVVVc1QwRkJUeXhGUVVGRk8wRkJRM1pETEZGQlFVa3NaMEpCUVZNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEZWQlFWVXNSVUZCUlR0QlFVTjBReXh2UWtGQlR5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8wdEJRemRDTEUxQlFVMDdRVUZEVEN4VlFVRkpMRTlCUVU4c1QwRkJUeXhMUVVGTExGZEJRVmNzUlVGQlJUdEJRVU5zUXl4alFVRk5MSGxGUVVFd1JDeEpRVUZKTEc5Q1FVRnBRaXhEUVVGRE8wOUJRM1pHTzBGQlEwUXNWVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eFBRVUZQTEVOQlFVTTdTMEZETDBJN1IwRkRSanRCUVVORUxHMUNRVUZwUWl4RlFVRkZMREpDUVVGVExFbEJRVWtzUlVGQlJUdEJRVU5vUXl4WFFVRlBMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdSMEZETlVJN08wRkJSVVFzYlVKQlFXbENMRVZCUVVVc01rSkJRVk1zU1VGQlNTeEZRVUZGTEVWQlFVVXNSVUZCUlR0QlFVTndReXhSUVVGSkxHZENRVUZUTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhWUVVGVkxFVkJRVVU3UVVGRGRFTXNWVUZCU1N4RlFVRkZMRVZCUVVVN1FVRkJSU3hqUVVGTkxESkNRVUZqTERSRFFVRTBReXhEUVVGRExFTkJRVU03VDBGQlJUdEJRVU01UlN4dlFrRkJUeXhKUVVGSkxFTkJRVU1zVlVGQlZTeEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMHRCUXk5Q0xFMUJRVTA3UVVGRFRDeFZRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF6dExRVU0xUWp0SFFVTkdPMEZCUTBRc2NVSkJRVzFDTEVWQlFVVXNOa0pCUVZNc1NVRkJTU3hGUVVGRk8wRkJRMnhETEZkQlFVOHNTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dEhRVU01UWp0RFFVTkdMRU5CUVVNN08wRkJSVXNzU1VGQlNTeEhRVUZITEVkQlFVY3NiMEpCUVU4c1IwRkJSeXhEUVVGRE96czdVVUZGY0VJc1YwRkJWenRSUVVGRkxFMUJRVTBpTENKbWFXeGxJam9pWW1GelpTNXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3WTNKbFlYUmxSbkpoYldVc0lHVjRkR1Z1WkN3Z2RHOVRkSEpwYm1kOUlHWnliMjBnSnk0dmRYUnBiSE1uTzF4dWFXMXdiM0owSUVWNFkyVndkR2x2YmlCbWNtOXRJQ2N1TDJWNFkyVndkR2x2YmljN1hHNXBiWEJ2Y25RZ2UzSmxaMmx6ZEdWeVJHVm1ZWFZzZEVobGJIQmxjbk45SUdaeWIyMGdKeTR2YUdWc2NHVnljeWM3WEc1cGJYQnZjblFnZTNKbFoybHpkR1Z5UkdWbVlYVnNkRVJsWTI5eVlYUnZjbk45SUdaeWIyMGdKeTR2WkdWamIzSmhkRzl5Y3ljN1hHNXBiWEJ2Y25RZ2JHOW5aMlZ5SUdaeWIyMGdKeTR2Ykc5bloyVnlKenRjYmx4dVpYaHdiM0owSUdOdmJuTjBJRlpGVWxOSlQwNGdQU0FuTkM0d0xqRXhKenRjYm1WNGNHOXlkQ0JqYjI1emRDQkRUMDFRU1V4RlVsOVNSVlpKVTBsUFRpQTlJRGM3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JTUlZaSlUwbFBUbDlEU0VGT1IwVlRJRDBnZTF4dUlDQXhPaUFuUEQwZ01TNHdMbkpqTGpJbkxDQXZMeUF4TGpBdWNtTXVNaUJwY3lCaFkzUjFZV3hzZVNCeVpYWXlJR0oxZENCa2IyVnpiaWQwSUhKbGNHOXlkQ0JwZEZ4dUlDQXlPaUFuUFQwZ01TNHdMakF0Y21NdU15Y3NYRzRnSURNNklDYzlQU0F4TGpBdU1DMXlZeTQwSnl4Y2JpQWdORG9nSnowOUlERXVlQzU0Snl4Y2JpQWdOVG9nSnowOUlESXVNQzR3TFdGc2NHaGhMbmduTEZ4dUlDQTJPaUFuUGowZ01pNHdMakF0WW1WMFlTNHhKeXhjYmlBZ056b2dKejQ5SURRdU1DNHdKMXh1ZlR0Y2JseHVZMjl1YzNRZ2IySnFaV04wVkhsd1pTQTlJQ2RiYjJKcVpXTjBJRTlpYW1WamRGMG5PMXh1WEc1bGVIQnZjblFnWm5WdVkzUnBiMjRnU0dGdVpHeGxZbUZ5YzBWdWRtbHliMjV0Wlc1MEtHaGxiSEJsY25Nc0lIQmhjblJwWVd4ekxDQmtaV052Y21GMGIzSnpLU0I3WEc0Z0lIUm9hWE11YUdWc2NHVnljeUE5SUdobGJIQmxjbk1nZkh3Z2UzMDdYRzRnSUhSb2FYTXVjR0Z5ZEdsaGJITWdQU0J3WVhKMGFXRnNjeUI4ZkNCN2ZUdGNiaUFnZEdocGN5NWtaV052Y21GMGIzSnpJRDBnWkdWamIzSmhkRzl5Y3lCOGZDQjdmVHRjYmx4dUlDQnlaV2RwYzNSbGNrUmxabUYxYkhSSVpXeHdaWEp6S0hSb2FYTXBPMXh1SUNCeVpXZHBjM1JsY2tSbFptRjFiSFJFWldOdmNtRjBiM0p6S0hSb2FYTXBPMXh1ZlZ4dVhHNUlZVzVrYkdWaVlYSnpSVzUyYVhKdmJtMWxiblF1Y0hKdmRHOTBlWEJsSUQwZ2UxeHVJQ0JqYjI1emRISjFZM1J2Y2pvZ1NHRnVaR3hsWW1GeWMwVnVkbWx5YjI1dFpXNTBMRnh1WEc0Z0lHeHZaMmRsY2pvZ2JHOW5aMlZ5TEZ4dUlDQnNiMmM2SUd4dloyZGxjaTVzYjJjc1hHNWNiaUFnY21WbmFYTjBaWEpJWld4d1pYSTZJR1oxYm1OMGFXOXVLRzVoYldVc0lHWnVLU0I3WEc0Z0lDQWdhV1lnS0hSdlUzUnlhVzVuTG1OaGJHd29ibUZ0WlNrZ1BUMDlJRzlpYW1WamRGUjVjR1VwSUh0Y2JpQWdJQ0FnSUdsbUlDaG1iaWtnZXlCMGFISnZkeUJ1WlhjZ1JYaGpaWEIwYVc5dUtDZEJjbWNnYm05MElITjFjSEJ2Y25SbFpDQjNhWFJvSUcxMWJIUnBjR3hsSUdobGJIQmxjbk1uS1RzZ2ZWeHVJQ0FnSUNBZ1pYaDBaVzVrS0hSb2FYTXVhR1ZzY0dWeWN5d2dibUZ0WlNrN1hHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJSFJvYVhNdWFHVnNjR1Z5YzF0dVlXMWxYU0E5SUdadU8xeHVJQ0FnSUgxY2JpQWdmU3hjYmlBZ2RXNXlaV2RwYzNSbGNraGxiSEJsY2pvZ1puVnVZM1JwYjI0b2JtRnRaU2tnZTF4dUlDQWdJR1JsYkdWMFpTQjBhR2x6TG1obGJIQmxjbk5iYm1GdFpWMDdYRzRnSUgwc1hHNWNiaUFnY21WbmFYTjBaWEpRWVhKMGFXRnNPaUJtZFc1amRHbHZiaWh1WVcxbExDQndZWEowYVdGc0tTQjdYRzRnSUNBZ2FXWWdLSFJ2VTNSeWFXNW5MbU5oYkd3b2JtRnRaU2tnUFQwOUlHOWlhbVZqZEZSNWNHVXBJSHRjYmlBZ0lDQWdJR1Y0ZEdWdVpDaDBhR2x6TG5CaGNuUnBZV3h6TENCdVlXMWxLVHRjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ2FXWWdLSFI1Y0dWdlppQndZWEowYVdGc0lEMDlQU0FuZFc1a1pXWnBibVZrSnlrZ2UxeHVJQ0FnSUNBZ0lDQjBhSEp2ZHlCdVpYY2dSWGhqWlhCMGFXOXVLR0JCZEhSbGJYQjBhVzVuSUhSdklISmxaMmx6ZEdWeUlHRWdjR0Z5ZEdsaGJDQmpZV3hzWldRZ1hDSWtlMjVoYldWOVhDSWdZWE1nZFc1a1pXWnBibVZrWUNrN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnSUNCMGFHbHpMbkJoY25ScFlXeHpXMjVoYldWZElEMGdjR0Z5ZEdsaGJEdGNiaUFnSUNCOVhHNGdJSDBzWEc0Z0lIVnVjbVZuYVhOMFpYSlFZWEowYVdGc09pQm1kVzVqZEdsdmJpaHVZVzFsS1NCN1hHNGdJQ0FnWkdWc1pYUmxJSFJvYVhNdWNHRnlkR2xoYkhOYmJtRnRaVjA3WEc0Z0lIMHNYRzVjYmlBZ2NtVm5hWE4wWlhKRVpXTnZjbUYwYjNJNklHWjFibU4wYVc5dUtHNWhiV1VzSUdadUtTQjdYRzRnSUNBZ2FXWWdLSFJ2VTNSeWFXNW5MbU5oYkd3b2JtRnRaU2tnUFQwOUlHOWlhbVZqZEZSNWNHVXBJSHRjYmlBZ0lDQWdJR2xtSUNobWJpa2dleUIwYUhKdmR5QnVaWGNnUlhoalpYQjBhVzl1S0NkQmNtY2dibTkwSUhOMWNIQnZjblJsWkNCM2FYUm9JRzExYkhScGNHeGxJR1JsWTI5eVlYUnZjbk1uS1RzZ2ZWeHVJQ0FnSUNBZ1pYaDBaVzVrS0hSb2FYTXVaR1ZqYjNKaGRHOXljeXdnYm1GdFpTazdYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUhSb2FYTXVaR1ZqYjNKaGRHOXljMXR1WVcxbFhTQTlJR1p1TzF4dUlDQWdJSDFjYmlBZ2ZTeGNiaUFnZFc1eVpXZHBjM1JsY2tSbFkyOXlZWFJ2Y2pvZ1puVnVZM1JwYjI0b2JtRnRaU2tnZTF4dUlDQWdJR1JsYkdWMFpTQjBhR2x6TG1SbFkyOXlZWFJ2Y25OYmJtRnRaVjA3WEc0Z0lIMWNibjA3WEc1Y2JtVjRjRzl5ZENCc1pYUWdiRzluSUQwZ2JHOW5aMlZ5TG14dlp6dGNibHh1Wlhod2IzSjBJSHRqY21WaGRHVkdjbUZ0WlN3Z2JHOW5aMlZ5ZlR0Y2JpSmRmUT09XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL2Jhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcVGltXFxcXERvY3VtZW50c1xcXFxqYXZhc2NyaXB0LWZvb2RcXFxcbm9kZV9tb2R1bGVzXFxcXGhhbmRsZWJhcnNcXFxccnVudGltZS5qc1wiKTtcbmZ1bmN0aW9uIF9fZGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiAob2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqKTsgfVxubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgcmV0dXJuIFwiICAgIDxkaXYgY2xhc3M9J2JhZGdlJz5cIlxuICAgICsgY29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24oY29udGFpbmVyLmxhbWJkYShkZXB0aDAsIGRlcHRoMCkpXG4gICAgKyBcIjwvZGl2PlxcclxcblwiO1xufSxcImNvbXBpbGVyXCI6WzcsXCI+PSA0LjAuMFwiXSxcIm1haW5cIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazE7XG5cbiAgcmV0dXJuIFwiPGRpdiBjbGFzcz1cXFwiYmFkZ2VfbGlzdFxcXCI+XFxyXFxuXCJcbiAgICArICgoc3RhY2sxID0gaGVscGVycy5lYWNoLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuYmFkZ2UgOiBkZXB0aDApLHtcIm5hbWVcIjpcImVhY2hcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMSwgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiPC9kaXY+XCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi90ZW1wbGF0ZS9iYWRnZS10cGwuaHRtbFxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxUaW1cXFxcRG9jdW1lbnRzXFxcXGphdmFzY3JpcHQtZm9vZFxcXFxub2RlX21vZHVsZXNcXFxcaGFuZGxlYmFyc1xcXFxydW50aW1lLmpzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCIxXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICByZXR1cm4gXCIgICAgICAgIDxsaT5cXHJcXG4gICAgICAgICAgICA8c3Bhbj5cIlxuICAgICsgY29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24oY29udGFpbmVyLmxhbWJkYShkZXB0aDAsIGRlcHRoMCkpXG4gICAgKyBcIjwvc3Bhbj5cXHJcXG4gICAgICAgIDwvbGk+XFxyXFxuXCI7XG59LFwiY29tcGlsZXJcIjpbNyxcIj49IDQuMC4wXCJdLFwibWFpblwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMTtcblxuICByZXR1cm4gXCI8ZGl2IGNsYXNzPSdmb29kX2ltZ19ob3Zlcic+XFxyXFxuICAgIDx1bD5cXHJcXG5cIlxuICAgICsgKChzdGFjazEgPSBoZWxwZXJzLmVhY2guY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5kZWxpdmVyeV90eXBlIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJlYWNoXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDEsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiAgICA8L3VsPlxcclxcbjwvZGl2PlwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vdGVtcGxhdGUvZGVsaXZlcnlUeXBlLXRwbC5odG1sXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcic7XHJcbmltcG9ydCB7XHJcbiAgICBvblxyXG59IGZyb20gJy4vaGVscGVycyc7XHJcbmltcG9ydCBDb21tb25WaWV3IGZyb20gJy4vY29tbW9uVmlldyc7XHJcbmltcG9ydCBJbmZpbml0ZVNsaWRlVmlldyBmcm9tICcuL2luZmluaXRlU2xpZGVWaWV3JztcclxuXHJcbmNvbnN0IHVybExpc3QgPSB7XHJcbiAgICBtYWluU2xpZGU6ICdodHRwOi8vaG9tZS5kb3RvbC54eXovcGhwL3Rlc3RfYXBpLnBocCcsXHJcbiAgICBiZXN0QmFuY2hhbjogJ2h0dHA6Ly9jcm9uZy5jb2Rlc3F1YWQua3I6ODA4MC93b293YS9iZXN0JyxcclxuICAgIHNpZGU6ICdodHRwOi8vY3JvbmcuY29kZXNxdWFkLmtyOjgwODAvd29vd2Evc2lkZScsXHJcbiAgICBtYWluOiAnaHR0cDovL2Nyb25nLmNvZGVzcXVhZC5rcjo4MDgwL3dvb3dhL21haW4nLFxyXG4gICAgY291cnNlOiAnaHR0cDovL2Nyb25nLmNvZGVzcXVhZC5rcjo4MDgwL3dvb3dhL3NvdXAnXHJcbn07XHJcblxyXG5jb25zdCBjb21tb25WaWV3ID0gbmV3IENvbW1vblZpZXcoKTtcclxuY29uc3Qgc2lkZUJhbmNoYW5WaWV3ID0gbmV3IEluZmluaXRlU2xpZGVWaWV3KCdzaWRlJyk7XHJcbmNvbnN0IG1haW5CYW5jaGFuVmlldyA9IG5ldyBJbmZpbml0ZVNsaWRlVmlldygnbWFpbicpO1xyXG5jb25zdCBjb3Vyc2VCYW5jaGFuVmlldyA9IG5ldyBJbmZpbml0ZVNsaWRlVmlldygnY291cnNlJyk7XHJcblxyXG5cclxuLyoqXHJcbiAqIEB0eXBlIHtDb250cm9sbGVyfVxyXG4gKi9cclxuY29uc3QgY29udHJvbGxlciA9IG5ldyBDb250cm9sbGVyKHVybExpc3QsIGNvbW1vblZpZXcsIHNpZGVCYW5jaGFuVmlldywgbWFpbkJhbmNoYW5WaWV3LCBjb3Vyc2VCYW5jaGFuVmlldyk7XHJcblxyXG5jb25zdCBzZXRWaWV3ID0gKCkgPT4gY29udHJvbGxlci5zZXRWaWV3KCk7XHJcbm9uKHdpbmRvdywgJ2xvYWQnLCBzZXRWaWV3KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcC5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge1xyXG4gICAgcmVxdWVzdCxcclxuICAgIGVhc2VJblF1YWRcclxufSBmcm9tICcuL2hlbHBlcnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcih1cmxMaXN0LCBjb21tb25WaWV3LCAuLi5pbmZpbml0ZVZpZXdzKSB7XHJcbiAgICAgICAgdGhpcy51cmxMaXN0ID0gdXJsTGlzdDtcclxuICAgICAgICB0aGlzLmNvbW1vblZpZXcgPSBjb21tb25WaWV3O1xyXG5cclxuICAgICAgICBjb21tb25WaWV3LmJpbmQoJ3NsaWRlc1ByZXYnLCB0aGlzLm1vdmVTbGlkZXMuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgY29tbW9uVmlldy5iaW5kKCdzbGlkZXNOZXh0JywgdGhpcy5tb3ZlU2xpZGVzLmJpbmQodGhpcykpO1xyXG4gICAgICAgIGNvbW1vblZpZXcuYmluZCgnc2xpZGVzRG90cycsIHRoaXMuY3VycmVudFNsaWRlLmJpbmQodGhpcykpO1xyXG4gICAgICAgIGNvbW1vblZpZXcuYmluZCgnc2Nyb2xsZXInLCB0aGlzLm1vdmVTY3JvbGxlci5iaW5kKHRoaXMpKTtcclxuICAgICAgICBjb21tb25WaWV3LmJpbmQoJ3NlYXJjaCcsIHRoaXMuYXV0b0NvbXBsZXRlLmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICBpbmZpbml0ZVZpZXdzLmZvckVhY2goaW5maW5pdGVWaWV3ID0+IHtcclxuICAgICAgICAgICAgaW5maW5pdGVWaWV3LmJpbmQoJ3NsaWRlc1ByZXYnLCB0aGlzLm1vdmVJbmZpbml0ZVNsaWRlcy5iaW5kKGluZmluaXRlVmlldykpO1xyXG4gICAgICAgICAgICBpbmZpbml0ZVZpZXcuYmluZCgnc2xpZGVzTmV4dCcsIHRoaXMubW92ZUluZmluaXRlU2xpZGVzLmJpbmQoaW5maW5pdGVWaWV3KSk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdEluZmluaXRlQmFuY2hhbihpbmZpbml0ZVZpZXcsIHRoaXMudXJsTGlzdFtpbmZpbml0ZVZpZXcuc3RhdGUubmFtZV0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFZpZXcoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0U2xpZGUodGhpcy51cmxMaXN0Lm1haW5TbGlkZSk7XHJcbiAgICAgICAgdGhpcy5pbml0QmVzdEJhbmNoYW4odGhpcy51cmxMaXN0LmJlc3RCYW5jaGFuKTtcclxuICAgICAgICB0aGlzLmNvbW1vblZpZXcuYmluZCgncHJldmVudERlZmF1bHQnKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBpbml0U2xpZGUodXJsKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdGhpcy5zbGlkZUltZ3MgPSBhd2FpdCByZXF1ZXN0KHVybCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNsaWRlc0VuZCA9IHRoaXMuc2xpZGVJbWdzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgdGhpcy5jb21tb25WaWV3LnNob3dTbGlkZSgwLCB0aGlzLnNsaWRlSW1nc1swXSk7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZVNsaWRlcyh0YXJnZXQsIG4pIHtcclxuICAgICAgICB0aGlzLmNvbW1vblZpZXcuaGlkZVNsaWRlKHRhcmdldC5pbmRleCk7XHJcbiAgICAgICAgdGFyZ2V0LmluZGV4ICs9IG47XHJcbiAgICAgICAgaWYgKHRhcmdldC5pbmRleCA+IHRoaXMuc2xpZGVzRW5kKSB0YXJnZXQuaW5kZXggPSAwO1xyXG4gICAgICAgIGlmICh0YXJnZXQuaW5kZXggPCAwKSB0YXJnZXQuaW5kZXggPSB0aGlzLnNsaWRlc0VuZDtcclxuICAgICAgICB0aGlzLmNvbW1vblZpZXcuc2hvd1NsaWRlKHRhcmdldC5pbmRleCwgdGhpcy5zbGlkZUltZ3NbdGFyZ2V0LmluZGV4XSk7XHJcbiAgICB9XHJcblxyXG4gICAgY3VycmVudFNsaWRlKHRhcmdldCwgbikge1xyXG4gICAgICAgIHRoaXMuY29tbW9uVmlldy5oaWRlU2xpZGUodGFyZ2V0LmluZGV4KTtcclxuICAgICAgICB0aGlzLmNvbW1vblZpZXcuc2hvd1NsaWRlKHRhcmdldC5pbmRleCA9IG4sIHRoaXMuc2xpZGVJbWdzW3RhcmdldC5pbmRleF0pO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmVTY3JvbGxlcihkaXJlY3Rpb24pIHtcclxuICAgICAgICBkaXJlY3Rpb24gPT09ICd1cCcgPyB0aGlzLm1vdmVTY3JvbGwoMCkgOiB0aGlzLm1vdmVTY3JvbGwoZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmVTY3JvbGwodG8pIHtcclxuICAgICAgICBjb25zdCBzdGFydCA9IHNjcm9sbFk7XHJcbiAgICAgICAgY29uc3QgY2hhbmdlID0gdG8gLSBzdGFydDtcclxuICAgICAgICBjb25zdCBkdXJhdGlvbiA9IE1hdGguYWJzKGNoYW5nZSAvIDQpO1xyXG4gICAgICAgIGNvbnN0IGluY3JlbWVudCA9IDIwO1xyXG4gICAgICAgIGxldCBjdXJyZW50VGltZSA9IDA7XHJcblxyXG4gICAgICAgIGNvbnN0IGFuaW1hdGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRUaW1lICs9IGluY3JlbWVudDtcclxuICAgICAgICAgICAgbGV0IG5ld1kgPSBlYXNlSW5RdWFkKGN1cnJlbnRUaW1lLCBzdGFydCwgY2hhbmdlLCBkdXJhdGlvbik7XHJcbiAgICAgICAgICAgIHNjcm9sbFRvKDAsIG5ld1kpO1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudFRpbWUgPCBkdXJhdGlvbikgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGVTY3JvbGwpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlU2Nyb2xsKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBhdXRvQ29tcGxldGUodGVybSwga2V5KSB7XHJcbiAgICAgICAgaWYgKCFrZXkgfHwgKGtleSA8IDM1IHx8IGtleSA+IDQwKSAmJiBrZXkgIT09IDEzICYmIGtleSAhPT0gMjcpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN1Z2dlc3Rpb25zID0gYXdhaXQgcmVxdWVzdChgaHR0cDovL2Nyb25nLmNvZGVzcXVhZC5rcjo4MDgwL2FjLyR7dGVybX1gKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdHMgPSBzdWdnZXN0aW9uc1sxXS5tYXAoc3VnZ2VzdGlvbiA9PiBzdWdnZXN0aW9uWzBdKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tbW9uVmlldy5yZW5kZXIoJ2F1dG9Db21wbGV0ZScsIHRlcm0sIHJlc3VsdHMpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbW1vblZpZXcuZW1wdHlBdXRvQ29tcGxldGUoKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZG93biAoNDApLCB1cCAoMzgpXHJcbiAgICAgICAgZWxzZSBpZiAoa2V5ID09PSA0MCB8fCBrZXkgPT09IDM4KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tbW9uVmlldy5tb3ZlQXV0b0NvbXBsZXRlKGtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGVzY1xyXG4gICAgICAgIGVsc2UgaWYgKGtleSA9PT0gMjcpIHtcclxuICAgICAgICAgICAgdGhpcy5jb21tb25WaWV3LmVtcHR5QXV0b0NvbXBsZXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGVudGVyXHJcbiAgICAgICAgZWxzZSBpZiAoa2V5ID09PSAxMykge1xyXG4gICAgICAgICAgICB0aGlzLmNvbW1vblZpZXcuZW50ZXJBdXRvQ29tcGxldGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgaW5pdEJlc3RCYW5jaGFuKHVybCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJhbmNoYW4gPSBhd2FpdCByZXF1ZXN0KHVybCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29tbW9uVmlldy5yZW5kZXIoJ2Jlc3RCYW5jaGFuJywgYmFuY2hhbik7XHJcbiAgICAgICAgICAgIHRoaXMuY29tbW9uVmlldy5iaW5kKCdmb29kVGFiJyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBpbml0SW5maW5pdGVCYW5jaGFuKHRhcmdldFZpZXcsIHVybCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvb2REYXRhID0gYXdhaXQgcmVxdWVzdCh1cmwpO1xyXG4gICAgICAgICAgICB0YXJnZXRWaWV3LnJlbmRlcignYmFuY2hhbicsIGZvb2REYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgW3RocmVzaG9sZExlZnQsIHRocmVzaG9sZFJpZ2h0XSA9IFstMjAgLSAoZm9vZERhdGEubGVuZ3RoICogMi41KSwgLTIwICsgKGZvb2REYXRhLmxlbmd0aCAqIDIuNSldO1xyXG4gICAgICAgICAgICB0YXJnZXRWaWV3LmJpbmQoJ3NsaWRlcycsIHRoaXMucmVzZXRJbmZpbml0ZVNsaWRlcy5iaW5kKHRhcmdldFZpZXcsIHRocmVzaG9sZExlZnQsIHRocmVzaG9sZFJpZ2h0KSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtb3ZlSW5maW5pdGVTbGlkZXModGFyZ2V0LCBtb3ZlKSB7XHJcbiAgICAgICAgdGhpcy5zaG93U2xpZGVzKHRhcmdldC5lbCwgdGFyZ2V0LmRpcmVjdGlvbiArPSBtb3ZlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNldEluZmluaXRlU2xpZGVzKHRocmVzaG9sZExlZnQsIHRocmVzaG9sZFJpZ2h0LCB0YXJnZXQpIHtcclxuICAgICAgICBpZiAodGFyZ2V0LmRpcmVjdGlvbiA9PT0gdGhyZXNob2xkTGVmdCB8fCB0YXJnZXQuZGlyZWN0aW9uID09PSB0aHJlc2hvbGRSaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dTbGlkZXModGFyZ2V0LmVsLCB0YXJnZXQuZGlyZWN0aW9uID0gLTIwLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb250cm9sbGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBmb29kQm94VGVtcGxhdGUgZnJvbSAnLi4vdGVtcGxhdGUvZm9vZEJveC10cGwuaHRtbCc7XHJcbmltcG9ydCBmb29kVGFiVGVtcGxhdGUgZnJvbSAnLi4vdGVtcGxhdGUvZm9vZFRhYi10cGwuaHRtbCc7XHJcbmltcG9ydCBjb250YWluZXJUZW1wbGF0ZSBmcm9tICcuLi90ZW1wbGF0ZS9jb250YWluZXItdHBsLmh0bWwnO1xyXG5pbXBvcnQgYmFkZ2VUZW1wbGF0ZSBmcm9tICcuLi90ZW1wbGF0ZS9iYWRnZS10cGwuaHRtbCc7XHJcbmltcG9ydCBkZWxpdmVyeVR5cGVUZW1wbGF0ZSBmcm9tICcuLi90ZW1wbGF0ZS9kZWxpdmVyeVR5cGUtdHBsLmh0bWwnO1xyXG5pbXBvcnQge1xyXG4gICAgcXMsXHJcbiAgICBxc2EsXHJcbiAgICBvbixcclxuICAgIHRocm90dGxlLFxyXG4gICAgZGVsZWdhdGVcclxufSBmcm9tICcuL2hlbHBlcnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlldyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmZvb2RUYWJFbCA9IHFzKCcuYmVzdF9mb29kX3RhYnMnKTtcclxuICAgICAgICB0aGlzLnNsaWRlc1ByZXZFbCA9IHFzKCcuc2xpZGVzX3ByZXYnKTtcclxuICAgICAgICB0aGlzLnNsaWRlc05leHRFbCA9IHFzKCcuc2xpZGVzX25leHQnKTtcclxuICAgICAgICB0aGlzLnNsaWRlc0VsID0gcXNhKCcubWFpbl9zbGlkZXNfbGlzdCA+IGxpJyk7XHJcbiAgICAgICAgdGhpcy5kb3RzRWwgPSBxc2EoJy5zbGlkZXNfZG90cyA+IGxpID4gYScpO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoRWwgPSBxcygnI3NlYXJjaF9zdHInKTtcclxuICAgICAgICB0aGlzLnN1Z2dlc3Rpb25zRWwgPSBxcygnLmF1dG9jb21wbGV0ZV9zdWdnZXN0aW9ucycpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBpbmRleDogMFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgYmluZChiaW5kQ21kLCBoYW5kbGVyKSB7XHJcbiAgICAgICAgY29uc3QgYmluZENvbW1hbmRzID0ge1xyXG4gICAgICAgICAgICBzbGlkZXNQcmV2OiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBvbih0aGlzLnNsaWRlc1ByZXZFbCwgJ2NsaWNrJywgdGhyb3R0bGUoKCkgPT4gaGFuZGxlcih0aGlzLnN0YXRlLCAtMSksIDEwMDApKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2xpZGVzTmV4dDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgb24odGhpcy5zbGlkZXNOZXh0RWwsICdjbGljaycsIHRocm90dGxlKCgpID0+IGhhbmRsZXIodGhpcy5zdGF0ZSwgMSksIDEwMDApKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2xpZGVzRG90czogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGVsZWdhdGUoJy5zbGlkZXNfZG90cycsICcuc2xpZGVzX2RvdHMgPiBsaSA+IGEnLFxyXG4gICAgICAgICAgICAgICAgICAgICdjbGljaycsIChlKSA9PiBoYW5kbGVyKHRoaXMuc3RhdGUsICtlLmRlbGVnYXRlVGFyZ2V0LnRleHRDb250ZW50KSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNjcm9sbGVyOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkZWxlZ2F0ZSgnLnBhZ2VfdXBfZG93bl9saXN0JywgJy5wYWdlX3VwX2Rvd25fbGlzdCA+IGxpID4gYScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NsaWNrJywgKGUpID0+IGhhbmRsZXIoZS5kZWxlZ2F0ZVRhcmdldC5kYXRhc2V0LmRpcmVjdGlvbikpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmb29kVGFiOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkZWxlZ2F0ZSh0aGlzLmZvb2RUYWJFbCwgJ2xpID4gYScsICdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIEFycmF5LmZyb20odGhpcy5mb29kVGFiTGlzdEVsKS5mb3JFYWNoKHRhYiA9PiB0YWIuY2xhc3NOYW1lID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFiID09PSBlLmRlbGVnYXRlVGFyZ2V0ID8gJ25vdycgOiAnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgQXJyYXkuZnJvbSh0aGlzLmZvb2RCb3hMaXN0RWwpLmZvckVhY2goZm9vZCA9PiBmb29kLnN0eWxlLmRpc3BsYXkgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLmRlbGVnYXRlVGFyZ2V0LmRhdGFzZXQuY2F0ZWdvcnlfaWQgPT09IGZvb2QuZGF0YXNldC5jYXRlZ29yeV9pZCA/ICdibG9jaycgOiAnbm9uZScpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNlYXJjaDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgb24odGhpcy5zZWFyY2hFbCwgJ2tleXVwJywgZSA9PiBoYW5kbGVyKGUudGFyZ2V0LnZhbHVlLCBlLmtleUNvZGUpKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcHJldmVudERlZmF1bHQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGRlbGVnYXRlKCdib2R5JywgJ2EnLCAnY2xpY2snLCBlID0+IGUucHJldmVudERlZmF1bHQoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBiaW5kQ29tbWFuZHNbYmluZENtZF0oKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIodmlld0NtZCwgLi4ucGFyYW1ldGVyKSB7XHJcbiAgICAgICAgY29uc3Qgdmlld0NvbW1hbmRzID0ge1xyXG4gICAgICAgICAgICBiZXN0QmFuY2hhbjogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iZXN0QmFuY2hhbiguLi5wYXJhbWV0ZXIpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyQXV0b0NvbXBsZXRlKC4uLnBhcmFtZXRlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2aWV3Q29tbWFuZHNbdmlld0NtZF0oKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJBdXRvQ29tcGxldGUodGVybSwgc3VnZ2VzdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmVtcHR5QXV0b0NvbXBsZXRlKCk7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gbmV3IFJlZ0V4cCh0ZXJtLCAnZycpO1xyXG4gICAgICAgIGNvbnN0IHN1Z2dlc3Rpb25zU3RyID0gc3VnZ2VzdGlvbnMubWFwKHN1Z2dlc3Rpb24gPT5cclxuICAgICAgICAgICAgYDxsaSBjbGFzcz1cImF1dG9jb21wbGV0ZV9zdWdnZXN0aW9uXCIgZGF0YS12YWx1ZT1cIiR7c3VnZ2VzdGlvbn1cIj4ke3N1Z2dlc3Rpb24ucmVwbGFjZSh0YXJnZXQsIGA8Yj4ke3Rlcm19PC9iPmApfTwvbGk+YCkuam9pbignJyk7XHJcbiAgICAgICAgdGhpcy5zdWdnZXN0aW9uc0VsLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIHN1Z2dlc3Rpb25zU3RyKTtcclxuICAgIH1cclxuXHJcbiAgICBlbnRlckF1dG9Db21wbGV0ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5zZWwgJiYgdGhpcy5zdWdnZXN0aW9uc0VsLmlubmVySFRNTCkge1xyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaEVsLnZhbHVlID0gdGhpcy5zZWwuZGF0YXNldC52YWx1ZTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVtcHR5QXV0b0NvbXBsZXRlKCk7XHJcbiAgICAgICAgICAgIH0sIDIwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZUF1dG9Db21wbGV0ZShrZXkpIHtcclxuICAgICAgICB0aGlzLnNlbCA9IHFzKCcuYXV0b2NvbXBsZXRlX3N1Z2dlc3Rpb24uc2VsZWN0ZWQnKTtcclxuICAgICAgICBsZXQgdGFyZ2V0O1xyXG4gICAgICAgIGlmICh0aGlzLnNlbCkge1xyXG4gICAgICAgICAgICB0YXJnZXQgPSBrZXkgPT09IDQwID8gdGhpcy5zZWwubmV4dFNpYmxpbmcgOiB0aGlzLnNlbC5wcmV2aW91c1NpYmxpbmc7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsLmNsYXNzTmFtZSA9ICdhdXRvY29tcGxldGVfc3VnZ2VzdGlvbic7XHJcbiAgICAgICAgICAgIGlmICh0YXJnZXQpIHRhcmdldC5jbGFzc05hbWUgKz0gJyBzZWxlY3RlZCc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGFyZ2V0ID0ga2V5ID09PSA0MCA/IHFzKCcuYXV0b2NvbXBsZXRlX3N1Z2dlc3Rpb24nKSA6IHRoaXMuc3VnZ2VzdGlvbnNFbC5jaGlsZE5vZGVzW3RoaXMuc3VnZ2VzdGlvbnNFbC5jaGlsZE5vZGVzLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgICAgICB0YXJnZXQuY2xhc3NOYW1lICs9ICcgc2VsZWN0ZWQnO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNlbCA9IHRhcmdldDtcclxuICAgIH1cclxuXHJcbiAgICBlbXB0eUF1dG9Db21wbGV0ZSgpIHtcclxuICAgICAgICB0aGlzLnN1Z2dlc3Rpb25zRWwuaW5uZXJIVE1MID0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgYmVzdEJhbmNoYW4oZm9vZCkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyRm9vZFRhYihmb29kKTtcclxuICAgICAgICB0aGlzLnJlbmRlckZvb2RDb250YWluZXIoZm9vZCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJGb29kQm94TGlzdChmb29kKTtcclxuICAgICAgICB0aGlzLnJlbmRlckZvb2RCb3goZm9vZCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJGb29kVGFiTGlzdChmb29kLCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA2KSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlbmRlckZvb2RUYWIoZm9vZCkge1xyXG4gICAgICAgIGNvbnN0IGZvb2RUYWIgPSBmb29kLm1hcCh2YWx1ZSA9PiBmb29kVGFiVGVtcGxhdGUoe1xyXG4gICAgICAgICAgICBjYXRlZ29yeV9pZDogdmFsdWUuY2F0ZWdvcnlfaWQsXHJcbiAgICAgICAgICAgIG5hbWU6IHZhbHVlLm5hbWVcclxuICAgICAgICB9KSkuam9pbignJyk7XHJcbiAgICAgICAgdGhpcy5mb29kVGFiRWwuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgZm9vZFRhYik7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyRm9vZENvbnRhaW5lcihmb29kKSB7XHJcbiAgICAgICAgY29uc3QgZm9vZENvbnRhaW5lciA9IGZvb2QubWFwKHZhbHVlID0+IGNvbnRhaW5lclRlbXBsYXRlKHtcclxuICAgICAgICAgICAgY2F0ZWdvcnlfaWQ6IHZhbHVlLmNhdGVnb3J5X2lkXHJcbiAgICAgICAgfSkpLmpvaW4oJycpO1xyXG4gICAgICAgIHFzKCcuYmVzdF9mb29kX2NvbnRhaW5lcicpLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGZvb2RDb250YWluZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckZvb2RCb3hMaXN0KGZvb2QpIHtcclxuICAgICAgICB0aGlzLmZvb2RCb3hMaXN0RWwgPSBxc2EoJy5iZXN0X2Zvb2RfYm94X2xpc3QnKTtcclxuICAgICAgICBmb29kLmZvckVhY2goKHZhbHVlLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvb2RCb3hMaXN0ID0gdmFsdWUuaXRlbXMubWFwKGl0ZW0gPT5cclxuICAgICAgICAgICAgICAgIGZvb2RCb3hUZW1wbGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IGl0ZW0uaW1hZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0OiBpdGVtLmFsdCxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogaXRlbS50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogaXRlbS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBvbGRfcHJpY2U6IGl0ZW0ubl9wcmljZSxcclxuICAgICAgICAgICAgICAgICAgICBuZXdfcHJpY2U6IGl0ZW0uc19wcmljZS5zbGljZSgwLCAtMSksXHJcbiAgICAgICAgICAgICAgICAgICAgd29uOiBpdGVtLnNfcHJpY2Uuc2xpY2UoLTEpXHJcbiAgICAgICAgICAgICAgICB9KSkuam9pbignJyk7XHJcbiAgICAgICAgICAgIHRoaXMuZm9vZEJveExpc3RFbFtpXS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBmb29kQm94TGlzdCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyRm9vZEJveChmb29kKSB7XHJcbiAgICAgICAgY29uc3QgZm9vZEJveEVsID0gcXNhKCcuYmVzdF9mb29kX2JveCcpO1xyXG4gICAgICAgIGZvb2QuZm9yRWFjaCgodmFsdWUsIGkpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbGVuID0gdmFsdWUuaXRlbXMubGVuZ3RoO1xyXG4gICAgICAgICAgICB2YWx1ZS5pdGVtcy5mb3JFYWNoKChpdGVtLCBqKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmb29kQm94RWxbaSAqIGxlbiArIGpdLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYmFkZ2VUZW1wbGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFkZ2U6IGl0ZW0uYmFkZ2VcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgIGZvb2RCb3hFbFtpICogbGVuICsgal0uZmlyc3RFbGVtZW50Q2hpbGQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBkZWxpdmVyeVR5cGVUZW1wbGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsaXZlcnlfdHlwZTogaXRlbS5kZWxpdmVyeV90eXBlXHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckZvb2RUYWJMaXN0KGZvb2QsIGluaXROdW0pIHtcclxuICAgICAgICB0aGlzLmZvb2RUYWJMaXN0RWwgPSBxc2EoJy5iZXN0X2Zvb2RfdGFicyA+IGxpID4gYScpO1xyXG4gICAgICAgIHRoaXMuZm9vZFRhYkxpc3RFbFtpbml0TnVtXS5jbGFzc05hbWUgPSAnbm93JztcclxuICAgICAgICB0aGlzLmZvb2RCb3hMaXN0RWxbaW5pdE51bV0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZVNsaWRlKGN1cnJlbnRJbmRleCkge1xyXG4gICAgICAgIHRoaXMuc2xpZGVzRWxbY3VycmVudEluZGV4XS5jbGFzc05hbWUgPSAnZmFkZW91dCc7XHJcbiAgICAgICAgdGhpcy5kb3RzRWxbY3VycmVudEluZGV4XS5jbGFzc0xpc3QucmVtb3ZlKCdub3cnKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93U2xpZGUoc2xpZGVJbmRleCwgc2xpZGVJbWcpIHtcclxuICAgICAgICB0aGlzLnNsaWRlc0VsW3NsaWRlSW5kZXhdLmNsYXNzTmFtZSA9ICdmYWRlaW4nO1xyXG4gICAgICAgIHRoaXMuc2xpZGVzRWxbc2xpZGVJbmRleF0uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChcIiR7c2xpZGVJbWd9XCIpYDtcclxuICAgICAgICB0aGlzLmRvdHNFbFtzbGlkZUluZGV4XS5jbGFzc05hbWUgPSAnbm93JztcclxuICAgIH1cclxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tbW9uVmlldy5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxUaW1cXFxcRG9jdW1lbnRzXFxcXGphdmFzY3JpcHQtZm9vZFxcXFxub2RlX21vZHVsZXNcXFxcaGFuZGxlYmFyc1xcXFxydW50aW1lLmpzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCJjb21waWxlclwiOls3LFwiPj0gNC4wLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgaGVscGVyLCBhbGlhczE9ZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwgYWxpYXMyPWhlbHBlcnMuaGVscGVyTWlzc2luZywgYWxpYXMzPVwiZnVuY3Rpb25cIiwgYWxpYXM0PWNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uO1xuXG4gIHJldHVybiBcIjxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJiZXN0X2Zvb2RfYm94X3dyYXBcXFwiPlxcclxcbiAgICA8bGkgY2xhc3M9XFxcImJlc3RfZm9vZF9ib3hcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9vZF9pbWdcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbWcgc3JjPVxcXCJcIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMuaW1hZ2UgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmltYWdlIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJpbWFnZVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiIGFsdD1cXFwiXCJcbiAgICArIGFsaWFzNCgoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLmFsdCB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuYWx0IDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJhbHRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRsIGNsYXNzPVxcXCJmb29kX2RldGFpbFxcXCI+XFxyXFxuICAgICAgICAgICAgPGR0IGNsYXNzPVxcXCJmb29kX3RpdGxlXFxcIj5cIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMudGl0bGUgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnRpdGxlIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJ0aXRsZVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCI8L2R0PlxcclxcbiAgICAgICAgICAgIDxkZCBjbGFzcz1cXFwiZm9vZF9kZXNjcmlwdGlvblxcXCI+XCJcbiAgICArIGFsaWFzNCgoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLmRlc2NyaXB0aW9uIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5kZXNjcmlwdGlvbiA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwiZGVzY3JpcHRpb25cIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSlcbiAgICArIFwiPC9kZD5cXHJcXG4gICAgICAgICAgICA8ZGQgY2xhc3M9XFxcImZvb2RfcHJpY2VcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwib2xkX3ByaWNlXFxcIj5cIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMub2xkX3ByaWNlIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5vbGRfcHJpY2UgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMyKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMzID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcIm9sZF9wcmljZVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCI8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJuZXdfcHJpY2VcXFwiPlwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5uZXdfcHJpY2UgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLm5ld19wcmljZSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwibmV3X3ByaWNlXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcIndvblxcXCI+XCJcbiAgICArIGFsaWFzNCgoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLndvbiB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAud29uIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJ3b25cIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSlcbiAgICArIFwiPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICAgICAgPC9kZD5cXHJcXG4gICAgICAgIDwvZGw+XFxyXFxuICAgIDwvbGk+XFxyXFxuPC9hPlwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vdGVtcGxhdGUvZm9vZEJveC10cGwuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqWydkZWZhdWx0J10gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG52YXIgX2hhbmRsZWJhcnNCYXNlID0gcmVxdWlyZSgnLi9oYW5kbGViYXJzL2Jhc2UnKTtcblxudmFyIGJhc2UgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfaGFuZGxlYmFyc0Jhc2UpO1xuXG4vLyBFYWNoIG9mIHRoZXNlIGF1Z21lbnQgdGhlIEhhbmRsZWJhcnMgb2JqZWN0LiBObyBuZWVkIHRvIHNldHVwIGhlcmUuXG4vLyAoVGhpcyBpcyBkb25lIHRvIGVhc2lseSBzaGFyZSBjb2RlIGJldHdlZW4gY29tbW9uanMgYW5kIGJyb3dzZSBlbnZzKVxuXG52YXIgX2hhbmRsZWJhcnNTYWZlU3RyaW5nID0gcmVxdWlyZSgnLi9oYW5kbGViYXJzL3NhZmUtc3RyaW5nJyk7XG5cbnZhciBfaGFuZGxlYmFyc1NhZmVTdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGFuZGxlYmFyc1NhZmVTdHJpbmcpO1xuXG52YXIgX2hhbmRsZWJhcnNFeGNlcHRpb24gPSByZXF1aXJlKCcuL2hhbmRsZWJhcnMvZXhjZXB0aW9uJyk7XG5cbnZhciBfaGFuZGxlYmFyc0V4Y2VwdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oYW5kbGViYXJzRXhjZXB0aW9uKTtcblxudmFyIF9oYW5kbGViYXJzVXRpbHMgPSByZXF1aXJlKCcuL2hhbmRsZWJhcnMvdXRpbHMnKTtcblxudmFyIFV0aWxzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2hhbmRsZWJhcnNVdGlscyk7XG5cbnZhciBfaGFuZGxlYmFyc1J1bnRpbWUgPSByZXF1aXJlKCcuL2hhbmRsZWJhcnMvcnVudGltZScpO1xuXG52YXIgcnVudGltZSA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9oYW5kbGViYXJzUnVudGltZSk7XG5cbnZhciBfaGFuZGxlYmFyc05vQ29uZmxpY3QgPSByZXF1aXJlKCcuL2hhbmRsZWJhcnMvbm8tY29uZmxpY3QnKTtcblxudmFyIF9oYW5kbGViYXJzTm9Db25mbGljdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oYW5kbGViYXJzTm9Db25mbGljdCk7XG5cbi8vIEZvciBjb21wYXRpYmlsaXR5IGFuZCB1c2FnZSBvdXRzaWRlIG9mIG1vZHVsZSBzeXN0ZW1zLCBtYWtlIHRoZSBIYW5kbGViYXJzIG9iamVjdCBhIG5hbWVzcGFjZVxuZnVuY3Rpb24gY3JlYXRlKCkge1xuICB2YXIgaGIgPSBuZXcgYmFzZS5IYW5kbGViYXJzRW52aXJvbm1lbnQoKTtcblxuICBVdGlscy5leHRlbmQoaGIsIGJhc2UpO1xuICBoYi5TYWZlU3RyaW5nID0gX2hhbmRsZWJhcnNTYWZlU3RyaW5nMlsnZGVmYXVsdCddO1xuICBoYi5FeGNlcHRpb24gPSBfaGFuZGxlYmFyc0V4Y2VwdGlvbjJbJ2RlZmF1bHQnXTtcbiAgaGIuVXRpbHMgPSBVdGlscztcbiAgaGIuZXNjYXBlRXhwcmVzc2lvbiA9IFV0aWxzLmVzY2FwZUV4cHJlc3Npb247XG5cbiAgaGIuVk0gPSBydW50aW1lO1xuICBoYi50ZW1wbGF0ZSA9IGZ1bmN0aW9uIChzcGVjKSB7XG4gICAgcmV0dXJuIHJ1bnRpbWUudGVtcGxhdGUoc3BlYywgaGIpO1xuICB9O1xuXG4gIHJldHVybiBoYjtcbn1cblxudmFyIGluc3QgPSBjcmVhdGUoKTtcbmluc3QuY3JlYXRlID0gY3JlYXRlO1xuXG5faGFuZGxlYmFyc05vQ29uZmxpY3QyWydkZWZhdWx0J10oaW5zdCk7XG5cbmluc3RbJ2RlZmF1bHQnXSA9IGluc3Q7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGluc3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDJ4cFlpOW9ZVzVrYkdWaVlYSnpMbkoxYm5ScGJXVXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenM3T0VKQlFYTkNMRzFDUVVGdFFqczdTVUZCTjBJc1NVRkJTVHM3T3pzN2IwTkJTVThzTUVKQlFUQkNPenM3TzIxRFFVTXpRaXgzUWtGQmQwSTdPenM3SzBKQlEzWkNMRzlDUVVGdlFqczdTVUZCTDBJc1MwRkJTenM3YVVOQlExRXNjMEpCUVhOQ096dEpRVUZ1UXl4UFFVRlBPenR2UTBGRlNTd3dRa0ZCTUVJN096czdPMEZCUjJwRUxGTkJRVk1zVFVGQlRTeEhRVUZITzBGQlEyaENMRTFCUVVrc1JVRkJSU3hIUVVGSExFbEJRVWtzU1VGQlNTeERRVUZETEhGQ1FVRnhRaXhGUVVGRkxFTkJRVU03TzBGQlJURkRMRTlCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMEZCUTNaQ0xFbEJRVVVzUTBGQlF5eFZRVUZWTEc5RFFVRmhMRU5CUVVNN1FVRkRNMElzU1VGQlJTeERRVUZETEZOQlFWTXNiVU5CUVZrc1EwRkJRenRCUVVONlFpeEpRVUZGTEVOQlFVTXNTMEZCU3l4SFFVRkhMRXRCUVVzc1EwRkJRenRCUVVOcVFpeEpRVUZGTEVOQlFVTXNaMEpCUVdkQ0xFZEJRVWNzUzBGQlN5eERRVUZETEdkQ1FVRm5RaXhEUVVGRE96dEJRVVUzUXl4SlFVRkZMRU5CUVVNc1JVRkJSU3hIUVVGSExFOUJRVThzUTBGQlF6dEJRVU5vUWl4SlFVRkZMRU5CUVVNc1VVRkJVU3hIUVVGSExGVkJRVk1zU1VGQlNTeEZRVUZGTzBGQlF6TkNMRmRCUVU4c1QwRkJUeXhEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNN1IwRkRia01zUTBGQlF6czdRVUZGUml4VFFVRlBMRVZCUVVVc1EwRkJRenREUVVOWU96dEJRVVZFTEVsQlFVa3NTVUZCU1N4SFFVRkhMRTFCUVUwc1JVRkJSU3hEUVVGRE8wRkJRM0JDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1RVRkJUU3hEUVVGRE96dEJRVVZ5UWl4clEwRkJWeXhKUVVGSkxFTkJRVU1zUTBGQlF6czdRVUZGYWtJc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXpzN2NVSkJSVklzU1VGQlNTSXNJbVpwYkdVaU9pSm9ZVzVrYkdWaVlYSnpMbkoxYm5ScGJXVXVhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnS2lCaGN5QmlZWE5sSUdaeWIyMGdKeTR2YUdGdVpHeGxZbUZ5Y3k5aVlYTmxKenRjYmx4dUx5OGdSV0ZqYUNCdlppQjBhR1Z6WlNCaGRXZHRaVzUwSUhSb1pTQklZVzVrYkdWaVlYSnpJRzlpYW1WamRDNGdUbThnYm1WbFpDQjBieUJ6WlhSMWNDQm9aWEpsTGx4dUx5OGdLRlJvYVhNZ2FYTWdaRzl1WlNCMGJ5QmxZWE5wYkhrZ2MyaGhjbVVnWTI5a1pTQmlaWFIzWldWdUlHTnZiVzF2Ym1weklHRnVaQ0JpY205M2MyVWdaVzUyY3lsY2JtbHRjRzl5ZENCVFlXWmxVM1J5YVc1bklHWnliMjBnSnk0dmFHRnVaR3hsWW1GeWN5OXpZV1psTFhOMGNtbHVaeWM3WEc1cGJYQnZjblFnUlhoalpYQjBhVzl1SUdaeWIyMGdKeTR2YUdGdVpHeGxZbUZ5Y3k5bGVHTmxjSFJwYjI0bk8xeHVhVzF3YjNKMElDb2dZWE1nVlhScGJITWdabkp2YlNBbkxpOW9ZVzVrYkdWaVlYSnpMM1YwYVd4ekp6dGNibWx0Y0c5eWRDQXFJR0Z6SUhKMWJuUnBiV1VnWm5KdmJTQW5MaTlvWVc1a2JHVmlZWEp6TDNKMWJuUnBiV1VuTzF4dVhHNXBiWEJ2Y25RZ2JtOURiMjVtYkdsamRDQm1jbTl0SUNjdUwyaGhibVJzWldKaGNuTXZibTh0WTI5dVpteHBZM1FuTzF4dVhHNHZMeUJHYjNJZ1kyOXRjR0YwYVdKcGJHbDBlU0JoYm1RZ2RYTmhaMlVnYjNWMGMybGtaU0J2WmlCdGIyUjFiR1VnYzNsemRHVnRjeXdnYldGclpTQjBhR1VnU0dGdVpHeGxZbUZ5Y3lCdlltcGxZM1FnWVNCdVlXMWxjM0JoWTJWY2JtWjFibU4wYVc5dUlHTnlaV0YwWlNncElIdGNiaUFnYkdWMElHaGlJRDBnYm1WM0lHSmhjMlV1U0dGdVpHeGxZbUZ5YzBWdWRtbHliMjV0Wlc1MEtDazdYRzVjYmlBZ1ZYUnBiSE11WlhoMFpXNWtLR2hpTENCaVlYTmxLVHRjYmlBZ2FHSXVVMkZtWlZOMGNtbHVaeUE5SUZOaFptVlRkSEpwYm1jN1hHNGdJR2hpTGtWNFkyVndkR2x2YmlBOUlFVjRZMlZ3ZEdsdmJqdGNiaUFnYUdJdVZYUnBiSE1nUFNCVmRHbHNjenRjYmlBZ2FHSXVaWE5qWVhCbFJYaHdjbVZ6YzJsdmJpQTlJRlYwYVd4ekxtVnpZMkZ3WlVWNGNISmxjM05wYjI0N1hHNWNiaUFnYUdJdVZrMGdQU0J5ZFc1MGFXMWxPMXh1SUNCb1lpNTBaVzF3YkdGMFpTQTlJR1oxYm1OMGFXOXVLSE53WldNcElIdGNiaUFnSUNCeVpYUjFjbTRnY25WdWRHbHRaUzUwWlcxd2JHRjBaU2h6Y0dWakxDQm9ZaWs3WEc0Z0lIMDdYRzVjYmlBZ2NtVjBkWEp1SUdoaU8xeHVmVnh1WEc1c1pYUWdhVzV6ZENBOUlHTnlaV0YwWlNncE8xeHVhVzV6ZEM1amNtVmhkR1VnUFNCamNtVmhkR1U3WEc1Y2JtNXZRMjl1Wm14cFkzUW9hVzV6ZENrN1hHNWNibWx1YzNSYkoyUmxabUYxYkhRblhTQTlJR2x1YzNRN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHbHVjM1E3WEc0aVhYMD1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMucnVudGltZS5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5yZWdpc3RlckRlZmF1bHRIZWxwZXJzID0gcmVnaXN0ZXJEZWZhdWx0SGVscGVycztcbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9oZWxwZXJzQmxvY2tIZWxwZXJNaXNzaW5nID0gcmVxdWlyZSgnLi9oZWxwZXJzL2Jsb2NrLWhlbHBlci1taXNzaW5nJyk7XG5cbnZhciBfaGVscGVyc0Jsb2NrSGVscGVyTWlzc2luZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oZWxwZXJzQmxvY2tIZWxwZXJNaXNzaW5nKTtcblxudmFyIF9oZWxwZXJzRWFjaCA9IHJlcXVpcmUoJy4vaGVscGVycy9lYWNoJyk7XG5cbnZhciBfaGVscGVyc0VhY2gyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGVscGVyc0VhY2gpO1xuXG52YXIgX2hlbHBlcnNIZWxwZXJNaXNzaW5nID0gcmVxdWlyZSgnLi9oZWxwZXJzL2hlbHBlci1taXNzaW5nJyk7XG5cbnZhciBfaGVscGVyc0hlbHBlck1pc3NpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGVscGVyc0hlbHBlck1pc3NpbmcpO1xuXG52YXIgX2hlbHBlcnNJZiA9IHJlcXVpcmUoJy4vaGVscGVycy9pZicpO1xuXG52YXIgX2hlbHBlcnNJZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oZWxwZXJzSWYpO1xuXG52YXIgX2hlbHBlcnNMb2cgPSByZXF1aXJlKCcuL2hlbHBlcnMvbG9nJyk7XG5cbnZhciBfaGVscGVyc0xvZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oZWxwZXJzTG9nKTtcblxudmFyIF9oZWxwZXJzTG9va3VwID0gcmVxdWlyZSgnLi9oZWxwZXJzL2xvb2t1cCcpO1xuXG52YXIgX2hlbHBlcnNMb29rdXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGVscGVyc0xvb2t1cCk7XG5cbnZhciBfaGVscGVyc1dpdGggPSByZXF1aXJlKCcuL2hlbHBlcnMvd2l0aCcpO1xuXG52YXIgX2hlbHBlcnNXaXRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hlbHBlcnNXaXRoKTtcblxuZnVuY3Rpb24gcmVnaXN0ZXJEZWZhdWx0SGVscGVycyhpbnN0YW5jZSkge1xuICBfaGVscGVyc0Jsb2NrSGVscGVyTWlzc2luZzJbJ2RlZmF1bHQnXShpbnN0YW5jZSk7XG4gIF9oZWxwZXJzRWFjaDJbJ2RlZmF1bHQnXShpbnN0YW5jZSk7XG4gIF9oZWxwZXJzSGVscGVyTWlzc2luZzJbJ2RlZmF1bHQnXShpbnN0YW5jZSk7XG4gIF9oZWxwZXJzSWYyWydkZWZhdWx0J10oaW5zdGFuY2UpO1xuICBfaGVscGVyc0xvZzJbJ2RlZmF1bHQnXShpbnN0YW5jZSk7XG4gIF9oZWxwZXJzTG9va3VwMlsnZGVmYXVsdCddKGluc3RhbmNlKTtcbiAgX2hlbHBlcnNXaXRoMlsnZGVmYXVsdCddKGluc3RhbmNlKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1THk0dUwyeHBZaTlvWVc1a2JHVmlZWEp6TDJobGJIQmxjbk11YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3ZVVOQlFYVkRMR2REUVVGblF6czdPenN5UWtGRE9VTXNaMEpCUVdkQ096czdPMjlEUVVOUUxEQkNRVUV3UWpzN096dDVRa0ZEY2tNc1kwRkJZenM3T3pzd1FrRkRZaXhsUVVGbE96czdPelpDUVVOYUxHdENRVUZyUWpzN096c3lRa0ZEY0VJc1owSkJRV2RDT3pzN08wRkJSV3hETEZOQlFWTXNjMEpCUVhOQ0xFTkJRVU1zVVVGQlVTeEZRVUZGTzBGQlF5OURMSGxEUVVFeVFpeFJRVUZSTEVOQlFVTXNRMEZCUXp0QlFVTnlReXd5UWtGQllTeFJRVUZSTEVOQlFVTXNRMEZCUXp0QlFVTjJRaXh2UTBGQmMwSXNVVUZCVVN4RFFVRkRMRU5CUVVNN1FVRkRhRU1zZVVKQlFWY3NVVUZCVVN4RFFVRkRMRU5CUVVNN1FVRkRja0lzTUVKQlFWa3NVVUZCVVN4RFFVRkRMRU5CUVVNN1FVRkRkRUlzTmtKQlFXVXNVVUZCVVN4RFFVRkRMRU5CUVVNN1FVRkRla0lzTWtKQlFXRXNVVUZCVVN4RFFVRkRMRU5CUVVNN1EwRkRlRUlpTENKbWFXeGxJam9pYUdWc2NHVnljeTVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCeVpXZHBjM1JsY2tKc2IyTnJTR1ZzY0dWeVRXbHpjMmx1WnlCbWNtOXRJQ2N1TDJobGJIQmxjbk12WW14dlkyc3RhR1ZzY0dWeUxXMXBjM05wYm1jbk8xeHVhVzF3YjNKMElISmxaMmx6ZEdWeVJXRmphQ0JtY205dElDY3VMMmhsYkhCbGNuTXZaV0ZqYUNjN1hHNXBiWEJ2Y25RZ2NtVm5hWE4wWlhKSVpXeHdaWEpOYVhOemFXNW5JR1p5YjIwZ0p5NHZhR1ZzY0dWeWN5OW9aV3h3WlhJdGJXbHpjMmx1WnljN1hHNXBiWEJ2Y25RZ2NtVm5hWE4wWlhKSlppQm1jbTl0SUNjdUwyaGxiSEJsY25NdmFXWW5PMXh1YVcxd2IzSjBJSEpsWjJsemRHVnlURzluSUdaeWIyMGdKeTR2YUdWc2NHVnljeTlzYjJjbk8xeHVhVzF3YjNKMElISmxaMmx6ZEdWeVRHOXZhM1Z3SUdaeWIyMGdKeTR2YUdWc2NHVnljeTlzYjI5cmRYQW5PMXh1YVcxd2IzSjBJSEpsWjJsemRHVnlWMmwwYUNCbWNtOXRJQ2N1TDJobGJIQmxjbk12ZDJsMGFDYzdYRzVjYm1WNGNHOXlkQ0JtZFc1amRHbHZiaUJ5WldkcGMzUmxja1JsWm1GMWJIUklaV3h3WlhKektHbHVjM1JoYm1ObEtTQjdYRzRnSUhKbFoybHpkR1Z5UW14dlkydElaV3h3WlhKTmFYTnphVzVuS0dsdWMzUmhibU5sS1R0Y2JpQWdjbVZuYVhOMFpYSkZZV05vS0dsdWMzUmhibU5sS1R0Y2JpQWdjbVZuYVhOMFpYSklaV3h3WlhKTmFYTnphVzVuS0dsdWMzUmhibU5sS1R0Y2JpQWdjbVZuYVhOMFpYSkpaaWhwYm5OMFlXNWpaU2s3WEc0Z0lISmxaMmx6ZEdWeVRHOW5LR2x1YzNSaGJtTmxLVHRjYmlBZ2NtVm5hWE4wWlhKTWIyOXJkWEFvYVc1emRHRnVZMlVwTzF4dUlDQnlaV2RwYzNSbGNsZHBkR2dvYVc1emRHRnVZMlVwTzF4dWZWeHVJbDE5XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL2hlbHBlcnMuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignYmxvY2tIZWxwZXJNaXNzaW5nJywgZnVuY3Rpb24gKGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgICB2YXIgaW52ZXJzZSA9IG9wdGlvbnMuaW52ZXJzZSxcbiAgICAgICAgZm4gPSBvcHRpb25zLmZuO1xuXG4gICAgaWYgKGNvbnRleHQgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBmbih0aGlzKTtcbiAgICB9IGVsc2UgaWYgKGNvbnRleHQgPT09IGZhbHNlIHx8IGNvbnRleHQgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGludmVyc2UodGhpcyk7XG4gICAgfSBlbHNlIGlmIChfdXRpbHMuaXNBcnJheShjb250ZXh0KSkge1xuICAgICAgaWYgKGNvbnRleHQubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAob3B0aW9ucy5pZHMpIHtcbiAgICAgICAgICBvcHRpb25zLmlkcyA9IFtvcHRpb25zLm5hbWVdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLmhlbHBlcnMuZWFjaChjb250ZXh0LCBvcHRpb25zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBpbnZlcnNlKHRoaXMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAob3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuaWRzKSB7XG4gICAgICAgIHZhciBkYXRhID0gX3V0aWxzLmNyZWF0ZUZyYW1lKG9wdGlvbnMuZGF0YSk7XG4gICAgICAgIGRhdGEuY29udGV4dFBhdGggPSBfdXRpbHMuYXBwZW5kQ29udGV4dFBhdGgob3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoLCBvcHRpb25zLm5hbWUpO1xuICAgICAgICBvcHRpb25zID0geyBkYXRhOiBkYXRhIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmbihjb250ZXh0LCBvcHRpb25zKTtcbiAgICB9XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUx5NHVMeTR1TDJ4cFlpOW9ZVzVrYkdWaVlYSnpMMmhsYkhCbGNuTXZZbXh2WTJzdGFHVnNjR1Z5TFcxcGMzTnBibWN1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dHhRa0ZCYzBRc1ZVRkJWVHM3Y1VKQlJXcEVMRlZCUVZNc1VVRkJVU3hGUVVGRk8wRkJRMmhETEZWQlFWRXNRMEZCUXl4alFVRmpMRU5CUVVNc2IwSkJRVzlDTEVWQlFVVXNWVUZCVXl4UFFVRlBMRVZCUVVVc1QwRkJUeXhGUVVGRk8wRkJRM1pGTEZGQlFVa3NUMEZCVHl4SFFVRkhMRTlCUVU4c1EwRkJReXhQUVVGUE8xRkJRM3BDTEVWQlFVVXNSMEZCUnl4UFFVRlBMRU5CUVVNc1JVRkJSU3hEUVVGRE96dEJRVVZ3UWl4UlFVRkpMRTlCUVU4c1MwRkJTeXhKUVVGSkxFVkJRVVU3UVVGRGNFSXNZVUZCVHl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03UzBGRGFrSXNUVUZCVFN4SlFVRkpMRTlCUVU4c1MwRkJTeXhMUVVGTExFbEJRVWtzVDBGQlR5eEpRVUZKTEVsQlFVa3NSVUZCUlR0QlFVTXZReXhoUVVGUExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0TFFVTjBRaXhOUVVGTkxFbEJRVWtzWlVGQlVTeFBRVUZQTEVOQlFVTXNSVUZCUlR0QlFVTXpRaXhWUVVGSkxFOUJRVThzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RlFVRkZPMEZCUTNSQ0xGbEJRVWtzVDBGQlR5eERRVUZETEVkQlFVY3NSVUZCUlR0QlFVTm1MR2xDUVVGUExFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xTkJRemxDT3p0QlFVVkVMR1ZCUVU4c1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZMRTlCUVU4c1EwRkJReXhEUVVGRE8wOUJRMmhFTEUxQlFVMDdRVUZEVEN4bFFVRlBMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFBRVU4wUWp0TFFVTkdMRTFCUVUwN1FVRkRUQ3hWUVVGSkxFOUJRVThzUTBGQlF5eEpRVUZKTEVsQlFVa3NUMEZCVHl4RFFVRkRMRWRCUVVjc1JVRkJSVHRCUVVNdlFpeFpRVUZKTEVsQlFVa3NSMEZCUnl4dFFrRkJXU3hQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdRVUZEY2tNc1dVRkJTU3hEUVVGRExGZEJRVmNzUjBGQlJ5eDVRa0ZCYTBJc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8wRkJRemRGTEdWQlFVOHNSMEZCUnl4RlFVRkRMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVU1zUTBGQlF6dFBRVU40UWpzN1FVRkZSQ3hoUVVGUExFVkJRVVVzUTBGQlF5eFBRVUZQTEVWQlFVVXNUMEZCVHl4RFFVRkRMRU5CUVVNN1MwRkROMEk3UjBGRFJpeERRVUZETEVOQlFVTTdRMEZEU2lJc0ltWnBiR1VpT2lKaWJHOWpheTFvWld4d1pYSXRiV2x6YzJsdVp5NXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3WVhCd1pXNWtRMjl1ZEdWNGRGQmhkR2dzSUdOeVpXRjBaVVp5WVcxbExDQnBjMEZ5Y21GNWZTQm1jbTl0SUNjdUxpOTFkR2xzY3ljN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHWjFibU4wYVc5dUtHbHVjM1JoYm1ObEtTQjdYRzRnSUdsdWMzUmhibU5sTG5KbFoybHpkR1Z5U0dWc2NHVnlLQ2RpYkc5amEwaGxiSEJsY2sxcGMzTnBibWNuTENCbWRXNWpkR2x2YmloamIyNTBaWGgwTENCdmNIUnBiMjV6S1NCN1hHNGdJQ0FnYkdWMElHbHVkbVZ5YzJVZ1BTQnZjSFJwYjI1ekxtbHVkbVZ5YzJVc1hHNGdJQ0FnSUNBZ0lHWnVJRDBnYjNCMGFXOXVjeTVtYmp0Y2JseHVJQ0FnSUdsbUlDaGpiMjUwWlhoMElEMDlQU0IwY25WbEtTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z1ptNG9kR2hwY3lrN1hHNGdJQ0FnZlNCbGJITmxJR2xtSUNoamIyNTBaWGgwSUQwOVBTQm1ZV3h6WlNCOGZDQmpiMjUwWlhoMElEMDlJRzUxYkd3cElIdGNiaUFnSUNBZ0lISmxkSFZ5YmlCcGJuWmxjbk5sS0hSb2FYTXBPMXh1SUNBZ0lIMGdaV3h6WlNCcFppQW9hWE5CY25KaGVTaGpiMjUwWlhoMEtTa2dlMXh1SUNBZ0lDQWdhV1lnS0dOdmJuUmxlSFF1YkdWdVozUm9JRDRnTUNrZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvYjNCMGFXOXVjeTVwWkhNcElIdGNiaUFnSUNBZ0lDQWdJQ0J2Y0hScGIyNXpMbWxrY3lBOUlGdHZjSFJwYjI1ekxtNWhiV1ZkTzF4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHbHVjM1JoYm1ObExtaGxiSEJsY25NdVpXRmphQ2hqYjI1MFpYaDBMQ0J2Y0hScGIyNXpLVHRjYmlBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnBiblpsY25ObEtIUm9hWE1wTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQnBaaUFvYjNCMGFXOXVjeTVrWVhSaElDWW1JRzl3ZEdsdmJuTXVhV1J6S1NCN1hHNGdJQ0FnSUNBZ0lHeGxkQ0JrWVhSaElEMGdZM0psWVhSbFJuSmhiV1VvYjNCMGFXOXVjeTVrWVhSaEtUdGNiaUFnSUNBZ0lDQWdaR0YwWVM1amIyNTBaWGgwVUdGMGFDQTlJR0Z3Y0dWdVpFTnZiblJsZUhSUVlYUm9LRzl3ZEdsdmJuTXVaR0YwWVM1amIyNTBaWGgwVUdGMGFDd2diM0IwYVc5dWN5NXVZVzFsS1R0Y2JpQWdJQ0FnSUNBZ2IzQjBhVzl1Y3lBOUlIdGtZWFJoT2lCa1lYUmhmVHRjYmlBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnY21WMGRYSnVJR1p1S0dOdmJuUmxlSFFzSUc5d2RHbHZibk1wTzF4dUlDQWdJSDFjYmlBZ2ZTazdYRzU5WEc0aVhYMD1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMvaGVscGVycy9ibG9jay1oZWxwZXItbWlzc2luZy5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxudmFyIF9leGNlcHRpb24gPSByZXF1aXJlKCcuLi9leGNlcHRpb24nKTtcblxudmFyIF9leGNlcHRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXhjZXB0aW9uKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCdlYWNoJywgZnVuY3Rpb24gKGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdNdXN0IHBhc3MgaXRlcmF0b3IgdG8gI2VhY2gnKTtcbiAgICB9XG5cbiAgICB2YXIgZm4gPSBvcHRpb25zLmZuLFxuICAgICAgICBpbnZlcnNlID0gb3B0aW9ucy5pbnZlcnNlLFxuICAgICAgICBpID0gMCxcbiAgICAgICAgcmV0ID0gJycsXG4gICAgICAgIGRhdGEgPSB1bmRlZmluZWQsXG4gICAgICAgIGNvbnRleHRQYXRoID0gdW5kZWZpbmVkO1xuXG4gICAgaWYgKG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLmlkcykge1xuICAgICAgY29udGV4dFBhdGggPSBfdXRpbHMuYXBwZW5kQ29udGV4dFBhdGgob3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoLCBvcHRpb25zLmlkc1swXSkgKyAnLic7XG4gICAgfVxuXG4gICAgaWYgKF91dGlscy5pc0Z1bmN0aW9uKGNvbnRleHQpKSB7XG4gICAgICBjb250ZXh0ID0gY29udGV4dC5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmRhdGEpIHtcbiAgICAgIGRhdGEgPSBfdXRpbHMuY3JlYXRlRnJhbWUob3B0aW9ucy5kYXRhKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBleGVjSXRlcmF0aW9uKGZpZWxkLCBpbmRleCwgbGFzdCkge1xuICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgZGF0YS5rZXkgPSBmaWVsZDtcbiAgICAgICAgZGF0YS5pbmRleCA9IGluZGV4O1xuICAgICAgICBkYXRhLmZpcnN0ID0gaW5kZXggPT09IDA7XG4gICAgICAgIGRhdGEubGFzdCA9ICEhbGFzdDtcblxuICAgICAgICBpZiAoY29udGV4dFBhdGgpIHtcbiAgICAgICAgICBkYXRhLmNvbnRleHRQYXRoID0gY29udGV4dFBhdGggKyBmaWVsZDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXQgPSByZXQgKyBmbihjb250ZXh0W2ZpZWxkXSwge1xuICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICBibG9ja1BhcmFtczogX3V0aWxzLmJsb2NrUGFyYW1zKFtjb250ZXh0W2ZpZWxkXSwgZmllbGRdLCBbY29udGV4dFBhdGggKyBmaWVsZCwgbnVsbF0pXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoY29udGV4dCAmJiB0eXBlb2YgY29udGV4dCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChfdXRpbHMuaXNBcnJheShjb250ZXh0KSkge1xuICAgICAgICBmb3IgKHZhciBqID0gY29udGV4dC5sZW5ndGg7IGkgPCBqOyBpKyspIHtcbiAgICAgICAgICBpZiAoaSBpbiBjb250ZXh0KSB7XG4gICAgICAgICAgICBleGVjSXRlcmF0aW9uKGksIGksIGkgPT09IGNvbnRleHQubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcHJpb3JLZXkgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIGNvbnRleHQpIHtcbiAgICAgICAgICBpZiAoY29udGV4dC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAvLyBXZSdyZSBydW5uaW5nIHRoZSBpdGVyYXRpb25zIG9uZSBzdGVwIG91dCBvZiBzeW5jIHNvIHdlIGNhbiBkZXRlY3RcbiAgICAgICAgICAgIC8vIHRoZSBsYXN0IGl0ZXJhdGlvbiB3aXRob3V0IGhhdmUgdG8gc2NhbiB0aGUgb2JqZWN0IHR3aWNlIGFuZCBjcmVhdGVcbiAgICAgICAgICAgIC8vIGFuIGl0ZXJtZWRpYXRlIGtleXMgYXJyYXkuXG4gICAgICAgICAgICBpZiAocHJpb3JLZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBleGVjSXRlcmF0aW9uKHByaW9yS2V5LCBpIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcmlvcktleSA9IGtleTtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByaW9yS2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBleGVjSXRlcmF0aW9uKHByaW9yS2V5LCBpIC0gMSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgcmV0ID0gaW52ZXJzZSh0aGlzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMeTR1THk0dUwyeHBZaTlvWVc1a2JHVmlZWEp6TDJobGJIQmxjbk12WldGamFDNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN08zRkNRVUVyUlN4VlFVRlZPenQ1UWtGRGJrVXNZMEZCWXpzN096dHhRa0ZGY2tJc1ZVRkJVeXhSUVVGUkxFVkJRVVU3UVVGRGFFTXNWVUZCVVN4RFFVRkRMR05CUVdNc1EwRkJReXhOUVVGTkxFVkJRVVVzVlVGQlV5eFBRVUZQTEVWQlFVVXNUMEZCVHl4RlFVRkZPMEZCUTNwRUxGRkJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVTdRVUZEV2l4WlFVRk5MREpDUVVGakxEWkNRVUUyUWl4RFFVRkRMRU5CUVVNN1MwRkRjRVE3TzBGQlJVUXNVVUZCU1N4RlFVRkZMRWRCUVVjc1QwRkJUeXhEUVVGRExFVkJRVVU3VVVGRFppeFBRVUZQTEVkQlFVY3NUMEZCVHl4RFFVRkRMRTlCUVU4N1VVRkRla0lzUTBGQlF5eEhRVUZITEVOQlFVTTdVVUZEVEN4SFFVRkhMRWRCUVVjc1JVRkJSVHRSUVVOU0xFbEJRVWtzV1VGQlFUdFJRVU5LTEZkQlFWY3NXVUZCUVN4RFFVRkRPenRCUVVWb1FpeFJRVUZKTEU5QlFVOHNRMEZCUXl4SlFVRkpMRWxCUVVrc1QwRkJUeXhEUVVGRExFZEJRVWNzUlVGQlJUdEJRVU12UWl4cFFrRkJWeXhIUVVGSExIbENRVUZyUWl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJTeFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETzB0QlEycEdPenRCUVVWRUxGRkJRVWtzYTBKQlFWY3NUMEZCVHl4RFFVRkRMRVZCUVVVN1FVRkJSU3hoUVVGUExFZEJRVWNzVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRMUVVGRk96dEJRVVV4UkN4UlFVRkpMRTlCUVU4c1EwRkJReXhKUVVGSkxFVkJRVVU3UVVGRGFFSXNWVUZCU1N4SFFVRkhMRzFDUVVGWkxFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0TFFVTnNRenM3UVVGRlJDeGhRVUZUTEdGQlFXRXNRMEZCUXl4TFFVRkxMRVZCUVVVc1MwRkJTeXhGUVVGRkxFbEJRVWtzUlVGQlJUdEJRVU42UXl4VlFVRkpMRWxCUVVrc1JVRkJSVHRCUVVOU0xGbEJRVWtzUTBGQlF5eEhRVUZITEVkQlFVY3NTMEZCU3l4RFFVRkRPMEZCUTJwQ0xGbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NTMEZCU3l4RFFVRkRPMEZCUTI1Q0xGbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NTMEZCU3l4TFFVRkxMRU5CUVVNc1EwRkJRenRCUVVONlFpeFpRVUZKTEVOQlFVTXNTVUZCU1N4SFFVRkhMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU03TzBGQlJXNUNMRmxCUVVrc1YwRkJWeXhGUVVGRk8wRkJRMllzWTBGQlNTeERRVUZETEZkQlFWY3NSMEZCUnl4WFFVRlhMRWRCUVVjc1MwRkJTeXhEUVVGRE8xTkJRM2hETzA5QlEwWTdPMEZCUlVRc1UwRkJSeXhIUVVGSExFZEJRVWNzUjBGQlJ5eEZRVUZGTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJReXhGUVVGRk8wRkJRemRDTEZsQlFVa3NSVUZCUlN4SlFVRkpPMEZCUTFZc2JVSkJRVmNzUlVGQlJTeHRRa0ZCV1N4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zUlVGQlJTeExRVUZMTEVOQlFVTXNSVUZCUlN4RFFVRkRMRmRCUVZjc1IwRkJSeXhMUVVGTExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdUMEZETDBVc1EwRkJReXhEUVVGRE8wdEJRMG83TzBGQlJVUXNVVUZCU1N4UFFVRlBMRWxCUVVrc1QwRkJUeXhQUVVGUExFdEJRVXNzVVVGQlVTeEZRVUZGTzBGQlF6RkRMRlZCUVVrc1pVRkJVU3hQUVVGUExFTkJRVU1zUlVGQlJUdEJRVU53UWl4aFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFOUJRVThzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdEJRVU4yUXl4alFVRkpMRU5CUVVNc1NVRkJTU3hQUVVGUExFVkJRVVU3UVVGRGFFSXNlVUpCUVdFc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4UFFVRlBMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzFkQlF5OURPMU5CUTBZN1QwRkRSaXhOUVVGTk8wRkJRMHdzV1VGQlNTeFJRVUZSTEZsQlFVRXNRMEZCUXpzN1FVRkZZaXhoUVVGTExFbEJRVWtzUjBGQlJ5eEpRVUZKTEU5QlFVOHNSVUZCUlR0QlFVTjJRaXhqUVVGSkxFOUJRVThzUTBGQlF5eGpRVUZqTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVN096czdRVUZKTDBJc1owSkJRVWtzVVVGQlVTeExRVUZMTEZOQlFWTXNSVUZCUlR0QlFVTXhRaXd5UWtGQllTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03WVVGRGFFTTdRVUZEUkN4dlFrRkJVU3hIUVVGSExFZEJRVWNzUTBGQlF6dEJRVU5tTEdGQlFVTXNSVUZCUlN4RFFVRkRPMWRCUTB3N1UwRkRSanRCUVVORUxGbEJRVWtzVVVGQlVTeExRVUZMTEZOQlFWTXNSVUZCUlR0QlFVTXhRaXgxUWtGQllTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzFOQlEzUkRPMDlCUTBZN1MwRkRSanM3UVVGRlJDeFJRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRVZCUVVVN1FVRkRXQ3hUUVVGSExFZEJRVWNzVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMHRCUTNKQ096dEJRVVZFTEZkQlFVOHNSMEZCUnl4RFFVRkRPMGRCUTFvc1EwRkJReXhEUVVGRE8wTkJRMG9pTENKbWFXeGxJam9pWldGamFDNXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3WVhCd1pXNWtRMjl1ZEdWNGRGQmhkR2dzSUdKc2IyTnJVR0Z5WVcxekxDQmpjbVZoZEdWR2NtRnRaU3dnYVhOQmNuSmhlU3dnYVhOR2RXNWpkR2x2Ym4wZ1puSnZiU0FuTGk0dmRYUnBiSE1uTzF4dWFXMXdiM0owSUVWNFkyVndkR2x2YmlCbWNtOXRJQ2N1TGk5bGVHTmxjSFJwYjI0bk8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQm1kVzVqZEdsdmJpaHBibk4wWVc1alpTa2dlMXh1SUNCcGJuTjBZVzVqWlM1eVpXZHBjM1JsY2tobGJIQmxjaWduWldGamFDY3NJR1oxYm1OMGFXOXVLR052Ym5SbGVIUXNJRzl3ZEdsdmJuTXBJSHRjYmlBZ0lDQnBaaUFvSVc5d2RHbHZibk1wSUh0Y2JpQWdJQ0FnSUhSb2NtOTNJRzVsZHlCRmVHTmxjSFJwYjI0b0owMTFjM1FnY0dGemN5QnBkR1Z5WVhSdmNpQjBieUFqWldGamFDY3BPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHeGxkQ0JtYmlBOUlHOXdkR2x2Ym5NdVptNHNYRzRnSUNBZ0lDQWdJR2x1ZG1WeWMyVWdQU0J2Y0hScGIyNXpMbWx1ZG1WeWMyVXNYRzRnSUNBZ0lDQWdJR2tnUFNBd0xGeHVJQ0FnSUNBZ0lDQnlaWFFnUFNBbkp5eGNiaUFnSUNBZ0lDQWdaR0YwWVN4Y2JpQWdJQ0FnSUNBZ1kyOXVkR1Y0ZEZCaGRHZzdYRzVjYmlBZ0lDQnBaaUFvYjNCMGFXOXVjeTVrWVhSaElDWW1JRzl3ZEdsdmJuTXVhV1J6S1NCN1hHNGdJQ0FnSUNCamIyNTBaWGgwVUdGMGFDQTlJR0Z3Y0dWdVpFTnZiblJsZUhSUVlYUm9LRzl3ZEdsdmJuTXVaR0YwWVM1amIyNTBaWGgwVUdGMGFDd2diM0IwYVc5dWN5NXBaSE5iTUYwcElDc2dKeTRuTzF4dUlDQWdJSDFjYmx4dUlDQWdJR2xtSUNocGMwWjFibU4wYVc5dUtHTnZiblJsZUhRcEtTQjdJR052Ym5SbGVIUWdQU0JqYjI1MFpYaDBMbU5oYkd3b2RHaHBjeWs3SUgxY2JseHVJQ0FnSUdsbUlDaHZjSFJwYjI1ekxtUmhkR0VwSUh0Y2JpQWdJQ0FnSUdSaGRHRWdQU0JqY21WaGRHVkdjbUZ0WlNodmNIUnBiMjV6TG1SaGRHRXBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHWjFibU4wYVc5dUlHVjRaV05KZEdWeVlYUnBiMjRvWm1sbGJHUXNJR2x1WkdWNExDQnNZWE4wS1NCN1hHNGdJQ0FnSUNCcFppQW9aR0YwWVNrZ2UxeHVJQ0FnSUNBZ0lDQmtZWFJoTG10bGVTQTlJR1pwWld4a08xeHVJQ0FnSUNBZ0lDQmtZWFJoTG1sdVpHVjRJRDBnYVc1a1pYZzdYRzRnSUNBZ0lDQWdJR1JoZEdFdVptbHljM1FnUFNCcGJtUmxlQ0E5UFQwZ01EdGNiaUFnSUNBZ0lDQWdaR0YwWVM1c1lYTjBJRDBnSVNGc1lYTjBPMXh1WEc0Z0lDQWdJQ0FnSUdsbUlDaGpiMjUwWlhoMFVHRjBhQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lHUmhkR0V1WTI5dWRHVjRkRkJoZEdnZ1BTQmpiMjUwWlhoMFVHRjBhQ0FySUdacFpXeGtPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUhKbGRDQTlJSEpsZENBcklHWnVLR052Ym5SbGVIUmJabWxsYkdSZExDQjdYRzRnSUNBZ0lDQWdJR1JoZEdFNklHUmhkR0VzWEc0Z0lDQWdJQ0FnSUdKc2IyTnJVR0Z5WVcxek9pQmliRzlqYTFCaGNtRnRjeWhiWTI5dWRHVjRkRnRtYVdWc1pGMHNJR1pwWld4a1hTd2dXMk52Ym5SbGVIUlFZWFJvSUNzZ1ptbGxiR1FzSUc1MWJHeGRLVnh1SUNBZ0lDQWdmU2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdhV1lnS0dOdmJuUmxlSFFnSmlZZ2RIbHdaVzltSUdOdmJuUmxlSFFnUFQwOUlDZHZZbXBsWTNRbktTQjdYRzRnSUNBZ0lDQnBaaUFvYVhOQmNuSmhlU2hqYjI1MFpYaDBLU2tnZTF4dUlDQWdJQ0FnSUNCbWIzSWdLR3hsZENCcUlEMGdZMjl1ZEdWNGRDNXNaVzVuZEdnN0lHa2dQQ0JxT3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnSUNCcFppQW9hU0JwYmlCamIyNTBaWGgwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JsZUdWalNYUmxjbUYwYVc5dUtHa3NJR2tzSUdrZ1BUMDlJR052Ym5SbGVIUXViR1Z1WjNSb0lDMGdNU2s3WEc0Z0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQnNaWFFnY0hKcGIzSkxaWGs3WEc1Y2JpQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2EyVjVJR2x1SUdOdmJuUmxlSFFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQnBaaUFvWTI5dWRHVjRkQzVvWVhOUGQyNVFjbTl3WlhKMGVTaHJaWGtwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCWFpTZHlaU0J5ZFc1dWFXNW5JSFJvWlNCcGRHVnlZWFJwYjI1eklHOXVaU0J6ZEdWd0lHOTFkQ0J2WmlCemVXNWpJSE52SUhkbElHTmhiaUJrWlhSbFkzUmNiaUFnSUNBZ0lDQWdJQ0FnSUM4dklIUm9aU0JzWVhOMElHbDBaWEpoZEdsdmJpQjNhWFJvYjNWMElHaGhkbVVnZEc4Z2MyTmhiaUIwYUdVZ2IySnFaV04wSUhSM2FXTmxJR0Z1WkNCamNtVmhkR1ZjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJR0Z1SUdsMFpYSnRaV1JwWVhSbElHdGxlWE1nWVhKeVlYa3VYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9jSEpwYjNKTFpYa2dJVDA5SUhWdVpHVm1hVzVsWkNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCbGVHVmpTWFJsY21GMGFXOXVLSEJ5YVc5eVMyVjVMQ0JwSUMwZ01TazdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0J3Y21sdmNrdGxlU0E5SUd0bGVUdGNiaUFnSUNBZ0lDQWdJQ0FnSUdrckt6dGNiaUFnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2FXWWdLSEJ5YVc5eVMyVjVJQ0U5UFNCMWJtUmxabWx1WldRcElIdGNiaUFnSUNBZ0lDQWdJQ0JsZUdWalNYUmxjbUYwYVc5dUtIQnlhVzl5UzJWNUxDQnBJQzBnTVN3Z2RISjFaU2s3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0JwWmlBb2FTQTlQVDBnTUNrZ2UxeHVJQ0FnSUNBZ2NtVjBJRDBnYVc1MlpYSnpaU2gwYUdsektUdGNiaUFnSUNCOVhHNWNiaUFnSUNCeVpYUjFjbTRnY21WME8xeHVJQ0I5S1R0Y2JuMWNiaUpkZlE9PVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy9oZWxwZXJzL2VhY2guanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9leGNlcHRpb24gPSByZXF1aXJlKCcuLi9leGNlcHRpb24nKTtcblxudmFyIF9leGNlcHRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXhjZXB0aW9uKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCdoZWxwZXJNaXNzaW5nJywgZnVuY3Rpb24gKCkgLyogW2FyZ3MsIF1vcHRpb25zICove1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAvLyBBIG1pc3NpbmcgZmllbGQgaW4gYSB7e2Zvb319IGNvbnN0cnVjdC5cbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFNvbWVvbmUgaXMgYWN0dWFsbHkgdHJ5aW5nIHRvIGNhbGwgc29tZXRoaW5nLCBibG93IHVwLlxuICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ01pc3NpbmcgaGVscGVyOiBcIicgKyBhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aCAtIDFdLm5hbWUgKyAnXCInKTtcbiAgICB9XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUx5NHVMeTR1TDJ4cFlpOW9ZVzVrYkdWaVlYSnpMMmhsYkhCbGNuTXZhR1ZzY0dWeUxXMXBjM05wYm1jdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3p0NVFrRkJjMElzWTBGQll6czdPenR4UWtGRmNrSXNWVUZCVXl4UlFVRlJMRVZCUVVVN1FVRkRhRU1zVlVGQlVTeERRVUZETEdOQlFXTXNRMEZCUXl4bFFVRmxMRVZCUVVVc2FVTkJRV2RETzBGQlEzWkZMRkZCUVVrc1UwRkJVeXhEUVVGRExFMUJRVTBzUzBGQlN5eERRVUZETEVWQlFVVTdPMEZCUlRGQ0xHRkJRVThzVTBGQlV5eERRVUZETzB0QlEyeENMRTFCUVUwN08wRkJSVXdzV1VGQlRTd3lRa0ZCWXl4dFFrRkJiVUlzUjBGQlJ5eFRRVUZUTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1MwRkRka1k3UjBGRFJpeERRVUZETEVOQlFVTTdRMEZEU2lJc0ltWnBiR1VpT2lKb1pXeHdaWEl0YldsemMybHVaeTVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCRmVHTmxjSFJwYjI0Z1puSnZiU0FuTGk0dlpYaGpaWEIwYVc5dUp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdablZ1WTNScGIyNG9hVzV6ZEdGdVkyVXBJSHRjYmlBZ2FXNXpkR0Z1WTJVdWNtVm5hWE4wWlhKSVpXeHdaWElvSjJobGJIQmxjazFwYzNOcGJtY25MQ0JtZFc1amRHbHZiaWd2S2lCYllYSm5jeXdnWFc5d2RHbHZibk1nS2k4cElIdGNiaUFnSUNCcFppQW9ZWEpuZFcxbGJuUnpMbXhsYm1kMGFDQTlQVDBnTVNrZ2UxeHVJQ0FnSUNBZ0x5OGdRU0J0YVhOemFXNW5JR1pwWld4a0lHbHVJR0VnZTN0bWIyOTlmU0JqYjI1emRISjFZM1F1WEc0Z0lDQWdJQ0J5WlhSMWNtNGdkVzVrWldacGJtVmtPMXh1SUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBdkx5QlRiMjFsYjI1bElHbHpJR0ZqZEhWaGJHeDVJSFJ5ZVdsdVp5QjBieUJqWVd4c0lITnZiV1YwYUdsdVp5d2dZbXh2ZHlCMWNDNWNiaUFnSUNBZ0lIUm9jbTkzSUc1bGR5QkZlR05sY0hScGIyNG9KMDFwYzNOcGJtY2dhR1ZzY0dWeU9pQmNJaWNnS3lCaGNtZDFiV1Z1ZEhOYllYSm5kVzFsYm5SekxteGxibWQwYUNBdElERmRMbTVoYldVZ0t5QW5YQ0luS1R0Y2JpQWdJQ0I5WEc0Z0lIMHBPMXh1ZlZ4dUlsMTlcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMvaGVscGVycy9oZWxwZXItbWlzc2luZy5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCdpZicsIGZ1bmN0aW9uIChjb25kaXRpb25hbCwgb3B0aW9ucykge1xuICAgIGlmIChfdXRpbHMuaXNGdW5jdGlvbihjb25kaXRpb25hbCkpIHtcbiAgICAgIGNvbmRpdGlvbmFsID0gY29uZGl0aW9uYWwuY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IGJlaGF2aW9yIGlzIHRvIHJlbmRlciB0aGUgcG9zaXRpdmUgcGF0aCBpZiB0aGUgdmFsdWUgaXMgdHJ1dGh5IGFuZCBub3QgZW1wdHkuXG4gICAgLy8gVGhlIGBpbmNsdWRlWmVyb2Agb3B0aW9uIG1heSBiZSBzZXQgdG8gdHJlYXQgdGhlIGNvbmR0aW9uYWwgYXMgcHVyZWx5IG5vdCBlbXB0eSBiYXNlZCBvbiB0aGVcbiAgICAvLyBiZWhhdmlvciBvZiBpc0VtcHR5LiBFZmZlY3RpdmVseSB0aGlzIGRldGVybWluZXMgaWYgMCBpcyBoYW5kbGVkIGJ5IHRoZSBwb3NpdGl2ZSBwYXRoIG9yIG5lZ2F0aXZlLlxuICAgIGlmICghb3B0aW9ucy5oYXNoLmluY2x1ZGVaZXJvICYmICFjb25kaXRpb25hbCB8fCBfdXRpbHMuaXNFbXB0eShjb25kaXRpb25hbCkpIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmludmVyc2UodGhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmZuKHRoaXMpO1xuICAgIH1cbiAgfSk7XG5cbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ3VubGVzcycsIGZ1bmN0aW9uIChjb25kaXRpb25hbCwgb3B0aW9ucykge1xuICAgIHJldHVybiBpbnN0YW5jZS5oZWxwZXJzWydpZiddLmNhbGwodGhpcywgY29uZGl0aW9uYWwsIHsgZm46IG9wdGlvbnMuaW52ZXJzZSwgaW52ZXJzZTogb3B0aW9ucy5mbiwgaGFzaDogb3B0aW9ucy5oYXNoIH0pO1xuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMeTR1THk0dUwyeHBZaTlvWVc1a2JHVmlZWEp6TDJobGJIQmxjbk12YVdZdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenR4UWtGQmEwTXNWVUZCVlRzN2NVSkJSVGRDTEZWQlFWTXNVVUZCVVN4RlFVRkZPMEZCUTJoRExGVkJRVkVzUTBGQlF5eGpRVUZqTEVOQlFVTXNTVUZCU1N4RlFVRkZMRlZCUVZNc1YwRkJWeXhGUVVGRkxFOUJRVThzUlVGQlJUdEJRVU16UkN4UlFVRkpMR3RDUVVGWExGZEJRVmNzUTBGQlF5eEZRVUZGTzBGQlFVVXNhVUpCUVZjc1IwRkJSeXhYUVVGWExFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMHRCUVVVN096czdPMEZCUzNSRkxGRkJRVWtzUVVGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEpRVUZMTEdWQlFWRXNWMEZCVnl4RFFVRkRMRVZCUVVVN1FVRkRka1VzWVVGQlR5eFBRVUZQTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8wdEJRemxDTEUxQlFVMDdRVUZEVEN4aFFVRlBMRTlCUVU4c1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdTMEZEZWtJN1IwRkRSaXhEUVVGRExFTkJRVU03TzBGQlJVZ3NWVUZCVVN4RFFVRkRMR05CUVdNc1EwRkJReXhSUVVGUkxFVkJRVVVzVlVGQlV5eFhRVUZYTEVWQlFVVXNUMEZCVHl4RlFVRkZPMEZCUXk5RUxGZEJRVThzVVVGQlVTeERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeEZRVUZGTEZkQlFWY3NSVUZCUlN4RlFVRkRMRVZCUVVVc1JVRkJSU3hQUVVGUExFTkJRVU1zVDBGQlR5eEZRVUZGTEU5QlFVOHNSVUZCUlN4UFFVRlBMRU5CUVVNc1JVRkJSU3hGUVVGRkxFbEJRVWtzUlVGQlJTeFBRVUZQTEVOQlFVTXNTVUZCU1N4RlFVRkRMRU5CUVVNc1EwRkJRenRIUVVOMlNDeERRVUZETEVOQlFVTTdRMEZEU2lJc0ltWnBiR1VpT2lKcFppNXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3YVhORmJYQjBlU3dnYVhOR2RXNWpkR2x2Ym4wZ1puSnZiU0FuTGk0dmRYUnBiSE1uTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCbWRXNWpkR2x2YmlocGJuTjBZVzVqWlNrZ2UxeHVJQ0JwYm5OMFlXNWpaUzV5WldkcGMzUmxja2hsYkhCbGNpZ25hV1luTENCbWRXNWpkR2x2YmloamIyNWthWFJwYjI1aGJDd2diM0IwYVc5dWN5a2dlMXh1SUNBZ0lHbG1JQ2hwYzBaMWJtTjBhVzl1S0dOdmJtUnBkR2x2Ym1Gc0tTa2dleUJqYjI1a2FYUnBiMjVoYkNBOUlHTnZibVJwZEdsdmJtRnNMbU5oYkd3b2RHaHBjeWs3SUgxY2JseHVJQ0FnSUM4dklFUmxabUYxYkhRZ1ltVm9ZWFpwYjNJZ2FYTWdkRzhnY21WdVpHVnlJSFJvWlNCd2IzTnBkR2wyWlNCd1lYUm9JR2xtSUhSb1pTQjJZV3gxWlNCcGN5QjBjblYwYUhrZ1lXNWtJRzV2ZENCbGJYQjBlUzVjYmlBZ0lDQXZMeUJVYUdVZ1lHbHVZMngxWkdWYVpYSnZZQ0J2Y0hScGIyNGdiV0Y1SUdKbElITmxkQ0IwYnlCMGNtVmhkQ0IwYUdVZ1kyOXVaSFJwYjI1aGJDQmhjeUJ3ZFhKbGJIa2dibTkwSUdWdGNIUjVJR0poYzJWa0lHOXVJSFJvWlZ4dUlDQWdJQzh2SUdKbGFHRjJhVzl5SUc5bUlHbHpSVzF3ZEhrdUlFVm1abVZqZEdsMlpXeDVJSFJvYVhNZ1pHVjBaWEp0YVc1bGN5QnBaaUF3SUdseklHaGhibVJzWldRZ1lua2dkR2hsSUhCdmMybDBhWFpsSUhCaGRHZ2diM0lnYm1WbllYUnBkbVV1WEc0Z0lDQWdhV1lnS0NnaGIzQjBhVzl1Y3k1b1lYTm9MbWx1WTJ4MVpHVmFaWEp2SUNZbUlDRmpiMjVrYVhScGIyNWhiQ2tnZkh3Z2FYTkZiWEIwZVNoamIyNWthWFJwYjI1aGJDa3BJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQnZjSFJwYjI1ekxtbHVkbVZ5YzJVb2RHaHBjeWs3WEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lISmxkSFZ5YmlCdmNIUnBiMjV6TG1adUtIUm9hWE1wTzF4dUlDQWdJSDFjYmlBZ2ZTazdYRzVjYmlBZ2FXNXpkR0Z1WTJVdWNtVm5hWE4wWlhKSVpXeHdaWElvSjNWdWJHVnpjeWNzSUdaMWJtTjBhVzl1S0dOdmJtUnBkR2x2Ym1Gc0xDQnZjSFJwYjI1ektTQjdYRzRnSUNBZ2NtVjBkWEp1SUdsdWMzUmhibU5sTG1obGJIQmxjbk5iSjJsbUoxMHVZMkZzYkNoMGFHbHpMQ0JqYjI1a2FYUnBiMjVoYkN3Z2UyWnVPaUJ2Y0hScGIyNXpMbWx1ZG1WeWMyVXNJR2x1ZG1WeWMyVTZJRzl3ZEdsdmJuTXVabTRzSUdoaGMyZzZJRzl3ZEdsdmJuTXVhR0Z6YUgwcE8xeHVJQ0I5S1R0Y2JuMWNiaUpkZlE9PVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy9oZWxwZXJzL2lmLmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignbG9nJywgZnVuY3Rpb24gKCkgLyogbWVzc2FnZSwgb3B0aW9ucyAqL3tcbiAgICB2YXIgYXJncyA9IFt1bmRlZmluZWRdLFxuICAgICAgICBvcHRpb25zID0gYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICAgIH1cblxuICAgIHZhciBsZXZlbCA9IDE7XG4gICAgaWYgKG9wdGlvbnMuaGFzaC5sZXZlbCAhPSBudWxsKSB7XG4gICAgICBsZXZlbCA9IG9wdGlvbnMuaGFzaC5sZXZlbDtcbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLmRhdGEubGV2ZWwgIT0gbnVsbCkge1xuICAgICAgbGV2ZWwgPSBvcHRpb25zLmRhdGEubGV2ZWw7XG4gICAgfVxuICAgIGFyZ3NbMF0gPSBsZXZlbDtcblxuICAgIGluc3RhbmNlLmxvZy5hcHBseShpbnN0YW5jZSwgYXJncyk7XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUx5NHVMeTR1TDJ4cFlpOW9ZVzVrYkdWaVlYSnpMMmhsYkhCbGNuTXZiRzluTG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdjVUpCUVdVc1ZVRkJVeXhSUVVGUkxFVkJRVVU3UVVGRGFFTXNWVUZCVVN4RFFVRkRMR05CUVdNc1EwRkJReXhMUVVGTExFVkJRVVVzYTBOQlFXbERPMEZCUXpsRUxGRkJRVWtzU1VGQlNTeEhRVUZITEVOQlFVTXNVMEZCVXl4RFFVRkRPMUZCUTJ4Q0xFOUJRVThzUjBGQlJ5eFRRVUZUTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dEJRVU01UXl4VFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NVMEZCVXl4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdRVUZETjBNc1ZVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRMUVVONlFqczdRVUZGUkN4UlFVRkpMRXRCUVVzc1IwRkJSeXhEUVVGRExFTkJRVU03UVVGRFpDeFJRVUZKTEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhKUVVGSkxFbEJRVWtzUlVGQlJUdEJRVU01UWl4WFFVRkxMRWRCUVVjc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTTdTMEZETlVJc1RVRkJUU3hKUVVGSkxFOUJRVThzUTBGQlF5eEpRVUZKTEVsQlFVa3NUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFbEJRVWtzU1VGQlNTeEZRVUZGTzBGQlEzSkVMRmRCUVVzc1IwRkJSeXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXp0TFFVTTFRanRCUVVORUxGRkJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4TFFVRkxMRU5CUVVNN08wRkJSV2hDTEZsQlFWRXNRMEZCUXl4SFFVRkhMRTFCUVVFc1EwRkJXaXhSUVVGUkxFVkJRVk1zU1VGQlNTeERRVUZETEVOQlFVTTdSMEZEZUVJc1EwRkJReXhEUVVGRE8wTkJRMG9pTENKbWFXeGxJam9pYkc5bkxtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpWlhod2IzSjBJR1JsWm1GMWJIUWdablZ1WTNScGIyNG9hVzV6ZEdGdVkyVXBJSHRjYmlBZ2FXNXpkR0Z1WTJVdWNtVm5hWE4wWlhKSVpXeHdaWElvSjJ4dlp5Y3NJR1oxYm1OMGFXOXVLQzhxSUcxbGMzTmhaMlVzSUc5d2RHbHZibk1nS2k4cElIdGNiaUFnSUNCc1pYUWdZWEpuY3lBOUlGdDFibVJsWm1sdVpXUmRMRnh1SUNBZ0lDQWdJQ0J2Y0hScGIyNXpJRDBnWVhKbmRXMWxiblJ6VzJGeVozVnRaVzUwY3k1c1pXNW5kR2dnTFNBeFhUdGNiaUFnSUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElHRnlaM1Z0Wlc1MGN5NXNaVzVuZEdnZ0xTQXhPeUJwS3lzcElIdGNiaUFnSUNBZ0lHRnlaM011Y0hWemFDaGhjbWQxYldWdWRITmJhVjBwTzF4dUlDQWdJSDFjYmx4dUlDQWdJR3hsZENCc1pYWmxiQ0E5SURFN1hHNGdJQ0FnYVdZZ0tHOXdkR2x2Ym5NdWFHRnphQzVzWlhabGJDQWhQU0J1ZFd4c0tTQjdYRzRnSUNBZ0lDQnNaWFpsYkNBOUlHOXdkR2x2Ym5NdWFHRnphQzVzWlhabGJEdGNiaUFnSUNCOUlHVnNjMlVnYVdZZ0tHOXdkR2x2Ym5NdVpHRjBZU0FtSmlCdmNIUnBiMjV6TG1SaGRHRXViR1YyWld3Z0lUMGdiblZzYkNrZ2UxeHVJQ0FnSUNBZ2JHVjJaV3dnUFNCdmNIUnBiMjV6TG1SaGRHRXViR1YyWld3N1hHNGdJQ0FnZlZ4dUlDQWdJR0Z5WjNOYk1GMGdQU0JzWlhabGJEdGNibHh1SUNBZ0lHbHVjM1JoYm1ObExteHZaeWd1TGk0Z1lYSm5jeWs3WEc0Z0lIMHBPMXh1ZlZ4dUlsMTlcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMvaGVscGVycy9sb2cuanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCdsb29rdXAnLCBmdW5jdGlvbiAob2JqLCBmaWVsZCkge1xuICAgIHJldHVybiBvYmogJiYgb2JqW2ZpZWxkXTtcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1THk0dUx5NHVMMnhwWWk5b1lXNWtiR1ZpWVhKekwyaGxiSEJsY25NdmJHOXZhM1Z3TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdjVUpCUVdVc1ZVRkJVeXhSUVVGUkxFVkJRVVU3UVVGRGFFTXNWVUZCVVN4RFFVRkRMR05CUVdNc1EwRkJReXhSUVVGUkxFVkJRVVVzVlVGQlV5eEhRVUZITEVWQlFVVXNTMEZCU3l4RlFVRkZPMEZCUTNKRUxGZEJRVThzUjBGQlJ5eEpRVUZKTEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRIUVVNeFFpeERRVUZETEVOQlFVTTdRMEZEU2lJc0ltWnBiR1VpT2lKc2IyOXJkWEF1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SmxlSEJ2Y25RZ1pHVm1ZWFZzZENCbWRXNWpkR2x2YmlocGJuTjBZVzVqWlNrZ2UxeHVJQ0JwYm5OMFlXNWpaUzV5WldkcGMzUmxja2hsYkhCbGNpZ25iRzl2YTNWd0p5d2dablZ1WTNScGIyNG9iMkpxTENCbWFXVnNaQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQnZZbW9nSmlZZ2IySnFXMlpwWld4a1hUdGNiaUFnZlNrN1hHNTlYRzRpWFgwPVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy9oZWxwZXJzL2xvb2t1cC5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCd3aXRoJywgZnVuY3Rpb24gKGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgICBpZiAoX3V0aWxzLmlzRnVuY3Rpb24oY29udGV4dCkpIHtcbiAgICAgIGNvbnRleHQgPSBjb250ZXh0LmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgdmFyIGZuID0gb3B0aW9ucy5mbjtcblxuICAgIGlmICghX3V0aWxzLmlzRW1wdHkoY29udGV4dCkpIHtcbiAgICAgIHZhciBkYXRhID0gb3B0aW9ucy5kYXRhO1xuICAgICAgaWYgKG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLmlkcykge1xuICAgICAgICBkYXRhID0gX3V0aWxzLmNyZWF0ZUZyYW1lKG9wdGlvbnMuZGF0YSk7XG4gICAgICAgIGRhdGEuY29udGV4dFBhdGggPSBfdXRpbHMuYXBwZW5kQ29udGV4dFBhdGgob3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoLCBvcHRpb25zLmlkc1swXSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmbihjb250ZXh0LCB7XG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgIGJsb2NrUGFyYW1zOiBfdXRpbHMuYmxvY2tQYXJhbXMoW2NvbnRleHRdLCBbZGF0YSAmJiBkYXRhLmNvbnRleHRQYXRoXSlcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gb3B0aW9ucy5pbnZlcnNlKHRoaXMpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1THk0dUx5NHVMMnhwWWk5b1lXNWtiR1ZpWVhKekwyaGxiSEJsY25NdmQybDBhQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN08zRkNRVUVyUlN4VlFVRlZPenR4UWtGRk1VVXNWVUZCVXl4UlFVRlJMRVZCUVVVN1FVRkRhRU1zVlVGQlVTeERRVUZETEdOQlFXTXNRMEZCUXl4TlFVRk5MRVZCUVVVc1ZVRkJVeXhQUVVGUExFVkJRVVVzVDBGQlR5eEZRVUZGTzBGQlEzcEVMRkZCUVVrc2EwSkJRVmNzVDBGQlR5eERRVUZETEVWQlFVVTdRVUZCUlN4aFFVRlBMRWRCUVVjc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0TFFVRkZPenRCUVVVeFJDeFJRVUZKTEVWQlFVVXNSMEZCUnl4UFFVRlBMRU5CUVVNc1JVRkJSU3hEUVVGRE96dEJRVVZ3UWl4UlFVRkpMRU5CUVVNc1pVRkJVU3hQUVVGUExFTkJRVU1zUlVGQlJUdEJRVU55UWl4VlFVRkpMRWxCUVVrc1IwRkJSeXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETzBGQlEzaENMRlZCUVVrc1QwRkJUeXhEUVVGRExFbEJRVWtzU1VGQlNTeFBRVUZQTEVOQlFVTXNSMEZCUnl4RlFVRkZPMEZCUXk5Q0xGbEJRVWtzUjBGQlJ5eHRRa0ZCV1N4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03UVVGRGFrTXNXVUZCU1N4RFFVRkRMRmRCUVZjc1IwRkJSeXg1UWtGQmEwSXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVVzVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wOUJRMmhHT3p0QlFVVkVMR0ZCUVU4c1JVRkJSU3hEUVVGRExFOUJRVThzUlVGQlJUdEJRVU5xUWl4WlFVRkpMRVZCUVVVc1NVRkJTVHRCUVVOV0xHMUNRVUZYTEVWQlFVVXNiVUpCUVZrc1EwRkJReXhQUVVGUExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NTVUZCU1N4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU03VDBGRGFFVXNRMEZCUXl4RFFVRkRPMHRCUTBvc1RVRkJUVHRCUVVOTUxHRkJRVThzVDBGQlR5eERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRMUVVNNVFqdEhRVU5HTEVOQlFVTXNRMEZCUXp0RFFVTktJaXdpWm1sc1pTSTZJbmRwZEdndWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdlMkZ3Y0dWdVpFTnZiblJsZUhSUVlYUm9MQ0JpYkc5amExQmhjbUZ0Y3l3Z1kzSmxZWFJsUm5KaGJXVXNJR2x6Ulcxd2RIa3NJR2x6Um5WdVkzUnBiMjU5SUdaeWIyMGdKeTR1TDNWMGFXeHpKenRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnWm5WdVkzUnBiMjRvYVc1emRHRnVZMlVwSUh0Y2JpQWdhVzV6ZEdGdVkyVXVjbVZuYVhOMFpYSklaV3h3WlhJb0ozZHBkR2duTENCbWRXNWpkR2x2YmloamIyNTBaWGgwTENCdmNIUnBiMjV6S1NCN1hHNGdJQ0FnYVdZZ0tHbHpSblZ1WTNScGIyNG9ZMjl1ZEdWNGRDa3BJSHNnWTI5dWRHVjRkQ0E5SUdOdmJuUmxlSFF1WTJGc2JDaDBhR2x6S1RzZ2ZWeHVYRzRnSUNBZ2JHVjBJR1p1SUQwZ2IzQjBhVzl1Y3k1bWJqdGNibHh1SUNBZ0lHbG1JQ2doYVhORmJYQjBlU2hqYjI1MFpYaDBLU2tnZTF4dUlDQWdJQ0FnYkdWMElHUmhkR0VnUFNCdmNIUnBiMjV6TG1SaGRHRTdYRzRnSUNBZ0lDQnBaaUFvYjNCMGFXOXVjeTVrWVhSaElDWW1JRzl3ZEdsdmJuTXVhV1J6S1NCN1hHNGdJQ0FnSUNBZ0lHUmhkR0VnUFNCamNtVmhkR1ZHY21GdFpTaHZjSFJwYjI1ekxtUmhkR0VwTzF4dUlDQWdJQ0FnSUNCa1lYUmhMbU52Ym5SbGVIUlFZWFJvSUQwZ1lYQndaVzVrUTI5dWRHVjRkRkJoZEdnb2IzQjBhVzl1Y3k1a1lYUmhMbU52Ym5SbGVIUlFZWFJvTENCdmNIUnBiMjV6TG1sa2Mxc3dYU2s3WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUhKbGRIVnliaUJtYmloamIyNTBaWGgwTENCN1hHNGdJQ0FnSUNBZ0lHUmhkR0U2SUdSaGRHRXNYRzRnSUNBZ0lDQWdJR0pzYjJOclVHRnlZVzF6T2lCaWJHOWphMUJoY21GdGN5aGJZMjl1ZEdWNGRGMHNJRnRrWVhSaElDWW1JR1JoZEdFdVkyOXVkR1Y0ZEZCaGRHaGRLVnh1SUNBZ0lDQWdmU2s3WEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lISmxkSFZ5YmlCdmNIUnBiMjV6TG1sdWRtVnljMlVvZEdocGN5azdYRzRnSUNBZ2ZWeHVJQ0I5S1R0Y2JuMWNiaUpkZlE9PVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy9oZWxwZXJzL3dpdGguanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMucmVnaXN0ZXJEZWZhdWx0RGVjb3JhdG9ycyA9IHJlZ2lzdGVyRGVmYXVsdERlY29yYXRvcnM7XG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfZGVjb3JhdG9yc0lubGluZSA9IHJlcXVpcmUoJy4vZGVjb3JhdG9ycy9pbmxpbmUnKTtcblxudmFyIF9kZWNvcmF0b3JzSW5saW5lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlY29yYXRvcnNJbmxpbmUpO1xuXG5mdW5jdGlvbiByZWdpc3RlckRlZmF1bHREZWNvcmF0b3JzKGluc3RhbmNlKSB7XG4gIF9kZWNvcmF0b3JzSW5saW5lMlsnZGVmYXVsdCddKGluc3RhbmNlKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1THk0dUwyeHBZaTlvWVc1a2JHVmlZWEp6TDJSbFkyOXlZWFJ2Y25NdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN1owTkJRVEpDTEhGQ1FVRnhRanM3T3p0QlFVVjZReXhUUVVGVExIbENRVUY1UWl4RFFVRkRMRkZCUVZFc1JVRkJSVHRCUVVOc1JDeG5RMEZCWlN4UlFVRlJMRU5CUVVNc1EwRkJRenREUVVNeFFpSXNJbVpwYkdVaU9pSmtaV052Y21GMGIzSnpMbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhKbFoybHpkR1Z5U1c1c2FXNWxJR1p5YjIwZ0p5NHZaR1ZqYjNKaGRHOXljeTlwYm14cGJtVW5PMXh1WEc1bGVIQnZjblFnWm5WdVkzUnBiMjRnY21WbmFYTjBaWEpFWldaaGRXeDBSR1ZqYjNKaGRHOXljeWhwYm5OMFlXNWpaU2tnZTF4dUlDQnlaV2RwYzNSbGNrbHViR2x1WlNocGJuTjBZVzVqWlNrN1hHNTlYRzVjYmlKZGZRPT1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMvZGVjb3JhdG9ycy5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gIGluc3RhbmNlLnJlZ2lzdGVyRGVjb3JhdG9yKCdpbmxpbmUnLCBmdW5jdGlvbiAoZm4sIHByb3BzLCBjb250YWluZXIsIG9wdGlvbnMpIHtcbiAgICB2YXIgcmV0ID0gZm47XG4gICAgaWYgKCFwcm9wcy5wYXJ0aWFscykge1xuICAgICAgcHJvcHMucGFydGlhbHMgPSB7fTtcbiAgICAgIHJldCA9IGZ1bmN0aW9uIChjb250ZXh0LCBvcHRpb25zKSB7XG4gICAgICAgIC8vIENyZWF0ZSBhIG5ldyBwYXJ0aWFscyBzdGFjayBmcmFtZSBwcmlvciB0byBleGVjLlxuICAgICAgICB2YXIgb3JpZ2luYWwgPSBjb250YWluZXIucGFydGlhbHM7XG4gICAgICAgIGNvbnRhaW5lci5wYXJ0aWFscyA9IF91dGlscy5leHRlbmQoe30sIG9yaWdpbmFsLCBwcm9wcy5wYXJ0aWFscyk7XG4gICAgICAgIHZhciByZXQgPSBmbihjb250ZXh0LCBvcHRpb25zKTtcbiAgICAgICAgY29udGFpbmVyLnBhcnRpYWxzID0gb3JpZ2luYWw7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHByb3BzLnBhcnRpYWxzW29wdGlvbnMuYXJnc1swXV0gPSBvcHRpb25zLmZuO1xuXG4gICAgcmV0dXJuIHJldDtcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1THk0dUx5NHVMMnhwWWk5b1lXNWtiR1ZpWVhKekwyUmxZMjl5WVhSdmNuTXZhVzVzYVc1bExtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3Y1VKQlFYRkNMRlZCUVZVN08zRkNRVVZvUWl4VlFVRlRMRkZCUVZFc1JVRkJSVHRCUVVOb1F5eFZRVUZSTEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU1zVVVGQlVTeEZRVUZGTEZWQlFWTXNSVUZCUlN4RlFVRkZMRXRCUVVzc1JVRkJSU3hUUVVGVExFVkJRVVVzVDBGQlR5eEZRVUZGTzBGQlF6TkZMRkZCUVVrc1IwRkJSeXhIUVVGSExFVkJRVVVzUTBGQlF6dEJRVU5pTEZGQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1VVRkJVU3hGUVVGRk8wRkJRMjVDTEZkQlFVc3NRMEZCUXl4UlFVRlJMRWRCUVVjc1JVRkJSU3hEUVVGRE8wRkJRM0JDTEZOQlFVY3NSMEZCUnl4VlFVRlRMRTlCUVU4c1JVRkJSU3hQUVVGUExFVkJRVVU3TzBGQlJTOUNMRmxCUVVrc1VVRkJVU3hIUVVGSExGTkJRVk1zUTBGQlF5eFJRVUZSTEVOQlFVTTdRVUZEYkVNc2FVSkJRVk1zUTBGQlF5eFJRVUZSTEVkQlFVY3NZMEZCVHl4RlFVRkZMRVZCUVVVc1VVRkJVU3hGUVVGRkxFdEJRVXNzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0QlFVTXhSQ3haUVVGSkxFZEJRVWNzUjBGQlJ5eEZRVUZGTEVOQlFVTXNUMEZCVHl4RlFVRkZMRTlCUVU4c1EwRkJReXhEUVVGRE8wRkJReTlDTEdsQ1FVRlRMRU5CUVVNc1VVRkJVU3hIUVVGSExGRkJRVkVzUTBGQlF6dEJRVU01UWl4bFFVRlBMRWRCUVVjc1EwRkJRenRQUVVOYUxFTkJRVU03UzBGRFNEczdRVUZGUkN4VFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhQUVVGUExFTkJRVU1zUlVGQlJTeERRVUZET3p0QlFVVTNReXhYUVVGUExFZEJRVWNzUTBGQlF6dEhRVU5hTEVOQlFVTXNRMEZCUXp0RFFVTktJaXdpWm1sc1pTSTZJbWx1YkdsdVpTNXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3WlhoMFpXNWtmU0JtY205dElDY3VMaTkxZEdsc2N5YzdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR1oxYm1OMGFXOXVLR2x1YzNSaGJtTmxLU0I3WEc0Z0lHbHVjM1JoYm1ObExuSmxaMmx6ZEdWeVJHVmpiM0poZEc5eUtDZHBibXhwYm1VbkxDQm1kVzVqZEdsdmJpaG1iaXdnY0hKdmNITXNJR052Ym5SaGFXNWxjaXdnYjNCMGFXOXVjeWtnZTF4dUlDQWdJR3hsZENCeVpYUWdQU0JtYmp0Y2JpQWdJQ0JwWmlBb0lYQnliM0J6TG5CaGNuUnBZV3h6S1NCN1hHNGdJQ0FnSUNCd2NtOXdjeTV3WVhKMGFXRnNjeUE5SUh0OU8xeHVJQ0FnSUNBZ2NtVjBJRDBnWm5WdVkzUnBiMjRvWTI5dWRHVjRkQ3dnYjNCMGFXOXVjeWtnZTF4dUlDQWdJQ0FnSUNBdkx5QkRjbVZoZEdVZ1lTQnVaWGNnY0dGeWRHbGhiSE1nYzNSaFkyc2dabkpoYldVZ2NISnBiM0lnZEc4Z1pYaGxZeTVjYmlBZ0lDQWdJQ0FnYkdWMElHOXlhV2RwYm1Gc0lEMGdZMjl1ZEdGcGJtVnlMbkJoY25ScFlXeHpPMXh1SUNBZ0lDQWdJQ0JqYjI1MFlXbHVaWEl1Y0dGeWRHbGhiSE1nUFNCbGVIUmxibVFvZTMwc0lHOXlhV2RwYm1Gc0xDQndjbTl3Y3k1d1lYSjBhV0ZzY3lrN1hHNGdJQ0FnSUNBZ0lHeGxkQ0J5WlhRZ1BTQm1iaWhqYjI1MFpYaDBMQ0J2Y0hScGIyNXpLVHRjYmlBZ0lDQWdJQ0FnWTI5dWRHRnBibVZ5TG5CaGNuUnBZV3h6SUQwZ2IzSnBaMmx1WVd3N1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCeVpYUTdYRzRnSUNBZ0lDQjlPMXh1SUNBZ0lIMWNibHh1SUNBZ0lIQnliM0J6TG5CaGNuUnBZV3h6VzI5d2RHbHZibk11WVhKbmMxc3dYVjBnUFNCdmNIUnBiMjV6TG1adU8xeHVYRzRnSUNBZ2NtVjBkWEp1SUhKbGREdGNiaUFnZlNrN1hHNTlYRzRpWFgwPVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy9kZWNvcmF0b3JzL2lubGluZS5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgbG9nZ2VyID0ge1xuICBtZXRob2RNYXA6IFsnZGVidWcnLCAnaW5mbycsICd3YXJuJywgJ2Vycm9yJ10sXG4gIGxldmVsOiAnaW5mbycsXG5cbiAgLy8gTWFwcyBhIGdpdmVuIGxldmVsIHZhbHVlIHRvIHRoZSBgbWV0aG9kTWFwYCBpbmRleGVzIGFib3ZlLlxuICBsb29rdXBMZXZlbDogZnVuY3Rpb24gbG9va3VwTGV2ZWwobGV2ZWwpIHtcbiAgICBpZiAodHlwZW9mIGxldmVsID09PSAnc3RyaW5nJykge1xuICAgICAgdmFyIGxldmVsTWFwID0gX3V0aWxzLmluZGV4T2YobG9nZ2VyLm1ldGhvZE1hcCwgbGV2ZWwudG9Mb3dlckNhc2UoKSk7XG4gICAgICBpZiAobGV2ZWxNYXAgPj0gMCkge1xuICAgICAgICBsZXZlbCA9IGxldmVsTWFwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV2ZWwgPSBwYXJzZUludChsZXZlbCwgMTApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBsZXZlbDtcbiAgfSxcblxuICAvLyBDYW4gYmUgb3ZlcnJpZGRlbiBpbiB0aGUgaG9zdCBlbnZpcm9ubWVudFxuICBsb2c6IGZ1bmN0aW9uIGxvZyhsZXZlbCkge1xuICAgIGxldmVsID0gbG9nZ2VyLmxvb2t1cExldmVsKGxldmVsKTtcblxuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbG9nZ2VyLmxvb2t1cExldmVsKGxvZ2dlci5sZXZlbCkgPD0gbGV2ZWwpIHtcbiAgICAgIHZhciBtZXRob2QgPSBsb2dnZXIubWV0aG9kTWFwW2xldmVsXTtcbiAgICAgIGlmICghY29uc29sZVttZXRob2RdKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgICAgICBtZXRob2QgPSAnbG9nJztcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIG1lc3NhZ2UgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIG1lc3NhZ2VbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICBjb25zb2xlW21ldGhvZF0uYXBwbHkoY29uc29sZSwgbWVzc2FnZSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gbG9nZ2VyO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUx5NHVMMnhwWWk5b1lXNWtiR1ZpWVhKekwyeHZaMmRsY2k1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPM0ZDUVVGelFpeFRRVUZUT3p0QlFVVXZRaXhKUVVGSkxFMUJRVTBzUjBGQlJ6dEJRVU5ZTEZkQlFWTXNSVUZCUlN4RFFVRkRMRTlCUVU4c1JVRkJSU3hOUVVGTkxFVkJRVVVzVFVGQlRTeEZRVUZGTEU5QlFVOHNRMEZCUXp0QlFVTTNReXhQUVVGTExFVkJRVVVzVFVGQlRUczdPMEZCUjJJc1lVRkJWeXhGUVVGRkxIRkNRVUZUTEV0QlFVc3NSVUZCUlR0QlFVTXpRaXhSUVVGSkxFOUJRVThzUzBGQlN5eExRVUZMTEZGQlFWRXNSVUZCUlR0QlFVTTNRaXhWUVVGSkxGRkJRVkVzUjBGQlJ5eGxRVUZSTEUxQlFVMHNRMEZCUXl4VFFVRlRMRVZCUVVVc1MwRkJTeXhEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETEVOQlFVTTdRVUZET1VRc1ZVRkJTU3hSUVVGUkxFbEJRVWtzUTBGQlF5eEZRVUZGTzBGQlEycENMR0ZCUVVzc1IwRkJSeXhSUVVGUkxFTkJRVU03VDBGRGJFSXNUVUZCVFR0QlFVTk1MR0ZCUVVzc1IwRkJSeXhSUVVGUkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRPMDlCUXpkQ08wdEJRMFk3TzBGQlJVUXNWMEZCVHl4TFFVRkxMRU5CUVVNN1IwRkRaRHM3TzBGQlIwUXNTMEZCUnl4RlFVRkZMR0ZCUVZNc1MwRkJTeXhGUVVGak8wRkJReTlDTEZOQlFVc3NSMEZCUnl4TlFVRk5MRU5CUVVNc1YwRkJWeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZET3p0QlFVVnNReXhSUVVGSkxFOUJRVThzVDBGQlR5eExRVUZMTEZkQlFWY3NTVUZCU1N4TlFVRk5MRU5CUVVNc1YwRkJWeXhEUVVGRExFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4TFFVRkxMRVZCUVVVN1FVRkRMMFVzVlVGQlNTeE5RVUZOTEVkQlFVY3NUVUZCVFN4RFFVRkRMRk5CUVZNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dEJRVU55UXl4VlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFMUJRVTBzUTBGQlF5eEZRVUZGT3p0QlFVTndRaXhqUVVGTkxFZEJRVWNzUzBGQlN5eERRVUZETzA5QlEyaENPenQzUTBGUWJVSXNUMEZCVHp0QlFVRlFMR1ZCUVU4N096dEJRVkV6UWl4aFFVRlBMRU5CUVVNc1RVRkJUU3hQUVVGRExFTkJRV1lzVDBGQlR5eEZRVUZaTEU5QlFVOHNRMEZCUXl4RFFVRkRPMHRCUXpkQ08wZEJRMFk3UTBGRFJpeERRVUZET3p0eFFrRkZZU3hOUVVGTklpd2labWxzWlNJNklteHZaMmRsY2k1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQjdhVzVrWlhoUFpuMGdabkp2YlNBbkxpOTFkR2xzY3ljN1hHNWNibXhsZENCc2IyZG5aWElnUFNCN1hHNGdJRzFsZEdodlpFMWhjRG9nV3lka1pXSjFaeWNzSUNkcGJtWnZKeXdnSjNkaGNtNG5MQ0FuWlhKeWIzSW5YU3hjYmlBZ2JHVjJaV3c2SUNkcGJtWnZKeXhjYmx4dUlDQXZMeUJOWVhCeklHRWdaMmwyWlc0Z2JHVjJaV3dnZG1Gc2RXVWdkRzhnZEdobElHQnRaWFJvYjJSTllYQmdJR2x1WkdWNFpYTWdZV0p2ZG1VdVhHNGdJR3h2YjJ0MWNFeGxkbVZzT2lCbWRXNWpkR2x2Ymloc1pYWmxiQ2tnZTF4dUlDQWdJR2xtSUNoMGVYQmxiMllnYkdWMlpXd2dQVDA5SUNkemRISnBibWNuS1NCN1hHNGdJQ0FnSUNCc1pYUWdiR1YyWld4TllYQWdQU0JwYm1SbGVFOW1LR3h2WjJkbGNpNXRaWFJvYjJSTllYQXNJR3hsZG1Wc0xuUnZURzkzWlhKRFlYTmxLQ2twTzF4dUlDQWdJQ0FnYVdZZ0tHeGxkbVZzVFdGd0lENDlJREFwSUh0Y2JpQWdJQ0FnSUNBZ2JHVjJaV3dnUFNCc1pYWmxiRTFoY0R0Y2JpQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUd4bGRtVnNJRDBnY0dGeWMyVkpiblFvYkdWMlpXd3NJREV3S1R0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0J5WlhSMWNtNGdiR1YyWld3N1hHNGdJSDBzWEc1Y2JpQWdMeThnUTJGdUlHSmxJRzkyWlhKeWFXUmtaVzRnYVc0Z2RHaGxJR2h2YzNRZ1pXNTJhWEp2Ym0xbGJuUmNiaUFnYkc5bk9pQm1kVzVqZEdsdmJpaHNaWFpsYkN3Z0xpNHViV1Z6YzJGblpTa2dlMXh1SUNBZ0lHeGxkbVZzSUQwZ2JHOW5aMlZ5TG14dmIydDFjRXhsZG1Wc0tHeGxkbVZzS1R0Y2JseHVJQ0FnSUdsbUlDaDBlWEJsYjJZZ1kyOXVjMjlzWlNBaFBUMGdKM1Z1WkdWbWFXNWxaQ2NnSmlZZ2JHOW5aMlZ5TG14dmIydDFjRXhsZG1Wc0tHeHZaMmRsY2k1c1pYWmxiQ2tnUEQwZ2JHVjJaV3dwSUh0Y2JpQWdJQ0FnSUd4bGRDQnRaWFJvYjJRZ1BTQnNiMmRuWlhJdWJXVjBhRzlrVFdGd1cyeGxkbVZzWFR0Y2JpQWdJQ0FnSUdsbUlDZ2hZMjl1YzI5c1pWdHRaWFJvYjJSZEtTQjdJQ0FnTHk4Z1pYTnNhVzUwTFdScGMyRmliR1V0YkdsdVpTQnVieTFqYjI1emIyeGxYRzRnSUNBZ0lDQWdJRzFsZEdodlpDQTlJQ2RzYjJjbk8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ1kyOXVjMjlzWlZ0dFpYUm9iMlJkS0M0dUxtMWxjM05oWjJVcE95QWdJQ0F2THlCbGMyeHBiblF0WkdsellXSnNaUzFzYVc1bElHNXZMV052Ym5OdmJHVmNiaUFnSUNCOVhHNGdJSDFjYm4wN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHeHZaMmRsY2p0Y2JpSmRmUT09XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL2xvZ2dlci5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gQnVpbGQgb3V0IG91ciBiYXNpYyBTYWZlU3RyaW5nIHR5cGVcbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmZ1bmN0aW9uIFNhZmVTdHJpbmcoc3RyaW5nKSB7XG4gIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xufVxuXG5TYWZlU3RyaW5nLnByb3RvdHlwZS50b1N0cmluZyA9IFNhZmVTdHJpbmcucHJvdG90eXBlLnRvSFRNTCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICcnICsgdGhpcy5zdHJpbmc7XG59O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBTYWZlU3RyaW5nO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUx5NHVMMnhwWWk5b1lXNWtiR1ZpWVhKekwzTmhabVV0YzNSeWFXNW5MbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN1FVRkRRU3hUUVVGVExGVkJRVlVzUTBGQlF5eE5RVUZOTEVWQlFVVTdRVUZETVVJc1RVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eE5RVUZOTEVOQlFVTTdRMEZEZEVJN08wRkJSVVFzVlVGQlZTeERRVUZETEZOQlFWTXNRMEZCUXl4UlFVRlJMRWRCUVVjc1ZVRkJWU3hEUVVGRExGTkJRVk1zUTBGQlF5eE5RVUZOTEVkQlFVY3NXVUZCVnp0QlFVTjJSU3hUUVVGUExFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRPME5CUTNwQ0xFTkJRVU03TzNGQ1FVVmhMRlZCUVZVaUxDSm1hV3hsSWpvaWMyRm1aUzF6ZEhKcGJtY3Vhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJdkx5QkNkV2xzWkNCdmRYUWdiM1Z5SUdKaGMybGpJRk5oWm1WVGRISnBibWNnZEhsd1pWeHVablZ1WTNScGIyNGdVMkZtWlZOMGNtbHVaeWh6ZEhKcGJtY3BJSHRjYmlBZ2RHaHBjeTV6ZEhKcGJtY2dQU0J6ZEhKcGJtYzdYRzU5WEc1Y2JsTmhabVZUZEhKcGJtY3VjSEp2ZEc5MGVYQmxMblJ2VTNSeWFXNW5JRDBnVTJGbVpWTjBjbWx1Wnk1d2NtOTBiM1I1Y0dVdWRHOUlWRTFNSUQwZ1puVnVZM1JwYjI0b0tTQjdYRzRnSUhKbGRIVnliaUFuSnlBcklIUm9hWE11YzNSeWFXNW5PMXh1ZlR0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1UyRm1aVk4wY21sdVp6dGNiaUpkZlE9PVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy9zYWZlLXN0cmluZy5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5jaGVja1JldmlzaW9uID0gY2hlY2tSZXZpc2lvbjtcbmV4cG9ydHMudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbmV4cG9ydHMud3JhcFByb2dyYW0gPSB3cmFwUHJvZ3JhbTtcbmV4cG9ydHMucmVzb2x2ZVBhcnRpYWwgPSByZXNvbHZlUGFydGlhbDtcbmV4cG9ydHMuaW52b2tlUGFydGlhbCA9IGludm9rZVBhcnRpYWw7XG5leHBvcnRzLm5vb3AgPSBub29wO1xuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqWydkZWZhdWx0J10gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgVXRpbHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdXRpbHMpO1xuXG52YXIgX2V4Y2VwdGlvbiA9IHJlcXVpcmUoJy4vZXhjZXB0aW9uJyk7XG5cbnZhciBfZXhjZXB0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4Y2VwdGlvbik7XG5cbnZhciBfYmFzZSA9IHJlcXVpcmUoJy4vYmFzZScpO1xuXG5mdW5jdGlvbiBjaGVja1JldmlzaW9uKGNvbXBpbGVySW5mbykge1xuICB2YXIgY29tcGlsZXJSZXZpc2lvbiA9IGNvbXBpbGVySW5mbyAmJiBjb21waWxlckluZm9bMF0gfHwgMSxcbiAgICAgIGN1cnJlbnRSZXZpc2lvbiA9IF9iYXNlLkNPTVBJTEVSX1JFVklTSU9OO1xuXG4gIGlmIChjb21waWxlclJldmlzaW9uICE9PSBjdXJyZW50UmV2aXNpb24pIHtcbiAgICBpZiAoY29tcGlsZXJSZXZpc2lvbiA8IGN1cnJlbnRSZXZpc2lvbikge1xuICAgICAgdmFyIHJ1bnRpbWVWZXJzaW9ucyA9IF9iYXNlLlJFVklTSU9OX0NIQU5HRVNbY3VycmVudFJldmlzaW9uXSxcbiAgICAgICAgICBjb21waWxlclZlcnNpb25zID0gX2Jhc2UuUkVWSVNJT05fQ0hBTkdFU1tjb21waWxlclJldmlzaW9uXTtcbiAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdUZW1wbGF0ZSB3YXMgcHJlY29tcGlsZWQgd2l0aCBhbiBvbGRlciB2ZXJzaW9uIG9mIEhhbmRsZWJhcnMgdGhhbiB0aGUgY3VycmVudCBydW50aW1lLiAnICsgJ1BsZWFzZSB1cGRhdGUgeW91ciBwcmVjb21waWxlciB0byBhIG5ld2VyIHZlcnNpb24gKCcgKyBydW50aW1lVmVyc2lvbnMgKyAnKSBvciBkb3duZ3JhZGUgeW91ciBydW50aW1lIHRvIGFuIG9sZGVyIHZlcnNpb24gKCcgKyBjb21waWxlclZlcnNpb25zICsgJykuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFVzZSB0aGUgZW1iZWRkZWQgdmVyc2lvbiBpbmZvIHNpbmNlIHRoZSBydW50aW1lIGRvZXNuJ3Qga25vdyBhYm91dCB0aGlzIHJldmlzaW9uIHlldFxuICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ1RlbXBsYXRlIHdhcyBwcmVjb21waWxlZCB3aXRoIGEgbmV3ZXIgdmVyc2lvbiBvZiBIYW5kbGViYXJzIHRoYW4gdGhlIGN1cnJlbnQgcnVudGltZS4gJyArICdQbGVhc2UgdXBkYXRlIHlvdXIgcnVudGltZSB0byBhIG5ld2VyIHZlcnNpb24gKCcgKyBjb21waWxlckluZm9bMV0gKyAnKS4nKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdGVtcGxhdGUodGVtcGxhdGVTcGVjLCBlbnYpIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgaWYgKCFlbnYpIHtcbiAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnTm8gZW52aXJvbm1lbnQgcGFzc2VkIHRvIHRlbXBsYXRlJyk7XG4gIH1cbiAgaWYgKCF0ZW1wbGF0ZVNwZWMgfHwgIXRlbXBsYXRlU3BlYy5tYWluKSB7XG4gICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ1Vua25vd24gdGVtcGxhdGUgb2JqZWN0OiAnICsgdHlwZW9mIHRlbXBsYXRlU3BlYyk7XG4gIH1cblxuICB0ZW1wbGF0ZVNwZWMubWFpbi5kZWNvcmF0b3IgPSB0ZW1wbGF0ZVNwZWMubWFpbl9kO1xuXG4gIC8vIE5vdGU6IFVzaW5nIGVudi5WTSByZWZlcmVuY2VzIHJhdGhlciB0aGFuIGxvY2FsIHZhciByZWZlcmVuY2VzIHRocm91Z2hvdXQgdGhpcyBzZWN0aW9uIHRvIGFsbG93XG4gIC8vIGZvciBleHRlcm5hbCB1c2VycyB0byBvdmVycmlkZSB0aGVzZSBhcyBwc3VlZG8tc3VwcG9ydGVkIEFQSXMuXG4gIGVudi5WTS5jaGVja1JldmlzaW9uKHRlbXBsYXRlU3BlYy5jb21waWxlcik7XG5cbiAgZnVuY3Rpb24gaW52b2tlUGFydGlhbFdyYXBwZXIocGFydGlhbCwgY29udGV4dCwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAgIGNvbnRleHQgPSBVdGlscy5leHRlbmQoe30sIGNvbnRleHQsIG9wdGlvbnMuaGFzaCk7XG4gICAgICBpZiAob3B0aW9ucy5pZHMpIHtcbiAgICAgICAgb3B0aW9ucy5pZHNbMF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHBhcnRpYWwgPSBlbnYuVk0ucmVzb2x2ZVBhcnRpYWwuY2FsbCh0aGlzLCBwYXJ0aWFsLCBjb250ZXh0LCBvcHRpb25zKTtcbiAgICB2YXIgcmVzdWx0ID0gZW52LlZNLmludm9rZVBhcnRpYWwuY2FsbCh0aGlzLCBwYXJ0aWFsLCBjb250ZXh0LCBvcHRpb25zKTtcblxuICAgIGlmIChyZXN1bHQgPT0gbnVsbCAmJiBlbnYuY29tcGlsZSkge1xuICAgICAgb3B0aW9ucy5wYXJ0aWFsc1tvcHRpb25zLm5hbWVdID0gZW52LmNvbXBpbGUocGFydGlhbCwgdGVtcGxhdGVTcGVjLmNvbXBpbGVyT3B0aW9ucywgZW52KTtcbiAgICAgIHJlc3VsdCA9IG9wdGlvbnMucGFydGlhbHNbb3B0aW9ucy5uYW1lXShjb250ZXh0LCBvcHRpb25zKTtcbiAgICB9XG4gICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XG4gICAgICBpZiAob3B0aW9ucy5pbmRlbnQpIHtcbiAgICAgICAgdmFyIGxpbmVzID0gcmVzdWx0LnNwbGl0KCdcXG4nKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBsaW5lcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBpZiAoIWxpbmVzW2ldICYmIGkgKyAxID09PSBsKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsaW5lc1tpXSA9IG9wdGlvbnMuaW5kZW50ICsgbGluZXNbaV07XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0ID0gbGluZXMuam9pbignXFxuJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnVGhlIHBhcnRpYWwgJyArIG9wdGlvbnMubmFtZSArICcgY291bGQgbm90IGJlIGNvbXBpbGVkIHdoZW4gcnVubmluZyBpbiBydW50aW1lLW9ubHkgbW9kZScpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEp1c3QgYWRkIHdhdGVyXG4gIHZhciBjb250YWluZXIgPSB7XG4gICAgc3RyaWN0OiBmdW5jdGlvbiBzdHJpY3Qob2JqLCBuYW1lKSB7XG4gICAgICBpZiAoIShuYW1lIGluIG9iaikpIHtcbiAgICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ1wiJyArIG5hbWUgKyAnXCIgbm90IGRlZmluZWQgaW4gJyArIG9iaik7XG4gICAgICB9XG4gICAgICByZXR1cm4gb2JqW25hbWVdO1xuICAgIH0sXG4gICAgbG9va3VwOiBmdW5jdGlvbiBsb29rdXAoZGVwdGhzLCBuYW1lKSB7XG4gICAgICB2YXIgbGVuID0gZGVwdGhzLmxlbmd0aDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaWYgKGRlcHRoc1tpXSAmJiBkZXB0aHNbaV1bbmFtZV0gIT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBkZXB0aHNbaV1bbmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGxhbWJkYTogZnVuY3Rpb24gbGFtYmRhKGN1cnJlbnQsIGNvbnRleHQpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgY3VycmVudCA9PT0gJ2Z1bmN0aW9uJyA/IGN1cnJlbnQuY2FsbChjb250ZXh0KSA6IGN1cnJlbnQ7XG4gICAgfSxcblxuICAgIGVzY2FwZUV4cHJlc3Npb246IFV0aWxzLmVzY2FwZUV4cHJlc3Npb24sXG4gICAgaW52b2tlUGFydGlhbDogaW52b2tlUGFydGlhbFdyYXBwZXIsXG5cbiAgICBmbjogZnVuY3Rpb24gZm4oaSkge1xuICAgICAgdmFyIHJldCA9IHRlbXBsYXRlU3BlY1tpXTtcbiAgICAgIHJldC5kZWNvcmF0b3IgPSB0ZW1wbGF0ZVNwZWNbaSArICdfZCddO1xuICAgICAgcmV0dXJuIHJldDtcbiAgICB9LFxuXG4gICAgcHJvZ3JhbXM6IFtdLFxuICAgIHByb2dyYW06IGZ1bmN0aW9uIHByb2dyYW0oaSwgZGF0YSwgZGVjbGFyZWRCbG9ja1BhcmFtcywgYmxvY2tQYXJhbXMsIGRlcHRocykge1xuICAgICAgdmFyIHByb2dyYW1XcmFwcGVyID0gdGhpcy5wcm9ncmFtc1tpXSxcbiAgICAgICAgICBmbiA9IHRoaXMuZm4oaSk7XG4gICAgICBpZiAoZGF0YSB8fCBkZXB0aHMgfHwgYmxvY2tQYXJhbXMgfHwgZGVjbGFyZWRCbG9ja1BhcmFtcykge1xuICAgICAgICBwcm9ncmFtV3JhcHBlciA9IHdyYXBQcm9ncmFtKHRoaXMsIGksIGZuLCBkYXRhLCBkZWNsYXJlZEJsb2NrUGFyYW1zLCBibG9ja1BhcmFtcywgZGVwdGhzKTtcbiAgICAgIH0gZWxzZSBpZiAoIXByb2dyYW1XcmFwcGVyKSB7XG4gICAgICAgIHByb2dyYW1XcmFwcGVyID0gdGhpcy5wcm9ncmFtc1tpXSA9IHdyYXBQcm9ncmFtKHRoaXMsIGksIGZuKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwcm9ncmFtV3JhcHBlcjtcbiAgICB9LFxuXG4gICAgZGF0YTogZnVuY3Rpb24gZGF0YSh2YWx1ZSwgZGVwdGgpIHtcbiAgICAgIHdoaWxlICh2YWx1ZSAmJiBkZXB0aC0tKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUuX3BhcmVudDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9LFxuICAgIG1lcmdlOiBmdW5jdGlvbiBtZXJnZShwYXJhbSwgY29tbW9uKSB7XG4gICAgICB2YXIgb2JqID0gcGFyYW0gfHwgY29tbW9uO1xuXG4gICAgICBpZiAocGFyYW0gJiYgY29tbW9uICYmIHBhcmFtICE9PSBjb21tb24pIHtcbiAgICAgICAgb2JqID0gVXRpbHMuZXh0ZW5kKHt9LCBjb21tb24sIHBhcmFtKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG9iajtcbiAgICB9LFxuICAgIC8vIEFuIGVtcHR5IG9iamVjdCB0byB1c2UgYXMgcmVwbGFjZW1lbnQgZm9yIG51bGwtY29udGV4dHNcbiAgICBudWxsQ29udGV4dDogT2JqZWN0LnNlYWwoe30pLFxuXG4gICAgbm9vcDogZW52LlZNLm5vb3AsXG4gICAgY29tcGlsZXJJbmZvOiB0ZW1wbGF0ZVNwZWMuY29tcGlsZXJcbiAgfTtcblxuICBmdW5jdGlvbiByZXQoY29udGV4dCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMV07XG5cbiAgICB2YXIgZGF0YSA9IG9wdGlvbnMuZGF0YTtcblxuICAgIHJldC5fc2V0dXAob3B0aW9ucyk7XG4gICAgaWYgKCFvcHRpb25zLnBhcnRpYWwgJiYgdGVtcGxhdGVTcGVjLnVzZURhdGEpIHtcbiAgICAgIGRhdGEgPSBpbml0RGF0YShjb250ZXh0LCBkYXRhKTtcbiAgICB9XG4gICAgdmFyIGRlcHRocyA9IHVuZGVmaW5lZCxcbiAgICAgICAgYmxvY2tQYXJhbXMgPSB0ZW1wbGF0ZVNwZWMudXNlQmxvY2tQYXJhbXMgPyBbXSA6IHVuZGVmaW5lZDtcbiAgICBpZiAodGVtcGxhdGVTcGVjLnVzZURlcHRocykge1xuICAgICAgaWYgKG9wdGlvbnMuZGVwdGhzKSB7XG4gICAgICAgIGRlcHRocyA9IGNvbnRleHQgIT0gb3B0aW9ucy5kZXB0aHNbMF0gPyBbY29udGV4dF0uY29uY2F0KG9wdGlvbnMuZGVwdGhzKSA6IG9wdGlvbnMuZGVwdGhzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVwdGhzID0gW2NvbnRleHRdO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1haW4oY29udGV4dCAvKiwgb3B0aW9ucyovKSB7XG4gICAgICByZXR1cm4gJycgKyB0ZW1wbGF0ZVNwZWMubWFpbihjb250YWluZXIsIGNvbnRleHQsIGNvbnRhaW5lci5oZWxwZXJzLCBjb250YWluZXIucGFydGlhbHMsIGRhdGEsIGJsb2NrUGFyYW1zLCBkZXB0aHMpO1xuICAgIH1cbiAgICBtYWluID0gZXhlY3V0ZURlY29yYXRvcnModGVtcGxhdGVTcGVjLm1haW4sIG1haW4sIGNvbnRhaW5lciwgb3B0aW9ucy5kZXB0aHMgfHwgW10sIGRhdGEsIGJsb2NrUGFyYW1zKTtcbiAgICByZXR1cm4gbWFpbihjb250ZXh0LCBvcHRpb25zKTtcbiAgfVxuICByZXQuaXNUb3AgPSB0cnVlO1xuXG4gIHJldC5fc2V0dXAgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucy5wYXJ0aWFsKSB7XG4gICAgICBjb250YWluZXIuaGVscGVycyA9IGNvbnRhaW5lci5tZXJnZShvcHRpb25zLmhlbHBlcnMsIGVudi5oZWxwZXJzKTtcblxuICAgICAgaWYgKHRlbXBsYXRlU3BlYy51c2VQYXJ0aWFsKSB7XG4gICAgICAgIGNvbnRhaW5lci5wYXJ0aWFscyA9IGNvbnRhaW5lci5tZXJnZShvcHRpb25zLnBhcnRpYWxzLCBlbnYucGFydGlhbHMpO1xuICAgICAgfVxuICAgICAgaWYgKHRlbXBsYXRlU3BlYy51c2VQYXJ0aWFsIHx8IHRlbXBsYXRlU3BlYy51c2VEZWNvcmF0b3JzKSB7XG4gICAgICAgIGNvbnRhaW5lci5kZWNvcmF0b3JzID0gY29udGFpbmVyLm1lcmdlKG9wdGlvbnMuZGVjb3JhdG9ycywgZW52LmRlY29yYXRvcnMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250YWluZXIuaGVscGVycyA9IG9wdGlvbnMuaGVscGVycztcbiAgICAgIGNvbnRhaW5lci5wYXJ0aWFscyA9IG9wdGlvbnMucGFydGlhbHM7XG4gICAgICBjb250YWluZXIuZGVjb3JhdG9ycyA9IG9wdGlvbnMuZGVjb3JhdG9ycztcbiAgICB9XG4gIH07XG5cbiAgcmV0Ll9jaGlsZCA9IGZ1bmN0aW9uIChpLCBkYXRhLCBibG9ja1BhcmFtcywgZGVwdGhzKSB7XG4gICAgaWYgKHRlbXBsYXRlU3BlYy51c2VCbG9ja1BhcmFtcyAmJiAhYmxvY2tQYXJhbXMpIHtcbiAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdtdXN0IHBhc3MgYmxvY2sgcGFyYW1zJyk7XG4gICAgfVxuICAgIGlmICh0ZW1wbGF0ZVNwZWMudXNlRGVwdGhzICYmICFkZXB0aHMpIHtcbiAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdtdXN0IHBhc3MgcGFyZW50IGRlcHRocycpO1xuICAgIH1cblxuICAgIHJldHVybiB3cmFwUHJvZ3JhbShjb250YWluZXIsIGksIHRlbXBsYXRlU3BlY1tpXSwgZGF0YSwgMCwgYmxvY2tQYXJhbXMsIGRlcHRocyk7XG4gIH07XG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIHdyYXBQcm9ncmFtKGNvbnRhaW5lciwgaSwgZm4sIGRhdGEsIGRlY2xhcmVkQmxvY2tQYXJhbXMsIGJsb2NrUGFyYW1zLCBkZXB0aHMpIHtcbiAgZnVuY3Rpb24gcHJvZyhjb250ZXh0KSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1sxXTtcblxuICAgIHZhciBjdXJyZW50RGVwdGhzID0gZGVwdGhzO1xuICAgIGlmIChkZXB0aHMgJiYgY29udGV4dCAhPSBkZXB0aHNbMF0gJiYgIShjb250ZXh0ID09PSBjb250YWluZXIubnVsbENvbnRleHQgJiYgZGVwdGhzWzBdID09PSBudWxsKSkge1xuICAgICAgY3VycmVudERlcHRocyA9IFtjb250ZXh0XS5jb25jYXQoZGVwdGhzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZm4oY29udGFpbmVyLCBjb250ZXh0LCBjb250YWluZXIuaGVscGVycywgY29udGFpbmVyLnBhcnRpYWxzLCBvcHRpb25zLmRhdGEgfHwgZGF0YSwgYmxvY2tQYXJhbXMgJiYgW29wdGlvbnMuYmxvY2tQYXJhbXNdLmNvbmNhdChibG9ja1BhcmFtcyksIGN1cnJlbnREZXB0aHMpO1xuICB9XG5cbiAgcHJvZyA9IGV4ZWN1dGVEZWNvcmF0b3JzKGZuLCBwcm9nLCBjb250YWluZXIsIGRlcHRocywgZGF0YSwgYmxvY2tQYXJhbXMpO1xuXG4gIHByb2cucHJvZ3JhbSA9IGk7XG4gIHByb2cuZGVwdGggPSBkZXB0aHMgPyBkZXB0aHMubGVuZ3RoIDogMDtcbiAgcHJvZy5ibG9ja1BhcmFtcyA9IGRlY2xhcmVkQmxvY2tQYXJhbXMgfHwgMDtcbiAgcmV0dXJuIHByb2c7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVQYXJ0aWFsKHBhcnRpYWwsIGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgaWYgKCFwYXJ0aWFsKSB7XG4gICAgaWYgKG9wdGlvbnMubmFtZSA9PT0gJ0BwYXJ0aWFsLWJsb2NrJykge1xuICAgICAgcGFydGlhbCA9IG9wdGlvbnMuZGF0YVsncGFydGlhbC1ibG9jayddO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJ0aWFsID0gb3B0aW9ucy5wYXJ0aWFsc1tvcHRpb25zLm5hbWVdO1xuICAgIH1cbiAgfSBlbHNlIGlmICghcGFydGlhbC5jYWxsICYmICFvcHRpb25zLm5hbWUpIHtcbiAgICAvLyBUaGlzIGlzIGEgZHluYW1pYyBwYXJ0aWFsIHRoYXQgcmV0dXJuZWQgYSBzdHJpbmdcbiAgICBvcHRpb25zLm5hbWUgPSBwYXJ0aWFsO1xuICAgIHBhcnRpYWwgPSBvcHRpb25zLnBhcnRpYWxzW3BhcnRpYWxdO1xuICB9XG4gIHJldHVybiBwYXJ0aWFsO1xufVxuXG5mdW5jdGlvbiBpbnZva2VQYXJ0aWFsKHBhcnRpYWwsIGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgLy8gVXNlIHRoZSBjdXJyZW50IGNsb3N1cmUgY29udGV4dCB0byBzYXZlIHRoZSBwYXJ0aWFsLWJsb2NrIGlmIHRoaXMgcGFydGlhbFxuICB2YXIgY3VycmVudFBhcnRpYWxCbG9jayA9IG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLmRhdGFbJ3BhcnRpYWwtYmxvY2snXTtcbiAgb3B0aW9ucy5wYXJ0aWFsID0gdHJ1ZTtcbiAgaWYgKG9wdGlvbnMuaWRzKSB7XG4gICAgb3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoID0gb3B0aW9ucy5pZHNbMF0gfHwgb3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoO1xuICB9XG5cbiAgdmFyIHBhcnRpYWxCbG9jayA9IHVuZGVmaW5lZDtcbiAgaWYgKG9wdGlvbnMuZm4gJiYgb3B0aW9ucy5mbiAhPT0gbm9vcCkge1xuICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICBvcHRpb25zLmRhdGEgPSBfYmFzZS5jcmVhdGVGcmFtZShvcHRpb25zLmRhdGEpO1xuICAgICAgLy8gV3JhcHBlciBmdW5jdGlvbiB0byBnZXQgYWNjZXNzIHRvIGN1cnJlbnRQYXJ0aWFsQmxvY2sgZnJvbSB0aGUgY2xvc3VyZVxuICAgICAgdmFyIGZuID0gb3B0aW9ucy5mbjtcbiAgICAgIHBhcnRpYWxCbG9jayA9IG9wdGlvbnMuZGF0YVsncGFydGlhbC1ibG9jayddID0gZnVuY3Rpb24gcGFydGlhbEJsb2NrV3JhcHBlcihjb250ZXh0KSB7XG4gICAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMV07XG5cbiAgICAgICAgLy8gUmVzdG9yZSB0aGUgcGFydGlhbC1ibG9jayBmcm9tIHRoZSBjbG9zdXJlIGZvciB0aGUgZXhlY3V0aW9uIG9mIHRoZSBibG9ja1xuICAgICAgICAvLyBpLmUuIHRoZSBwYXJ0IGluc2lkZSB0aGUgYmxvY2sgb2YgdGhlIHBhcnRpYWwgY2FsbC5cbiAgICAgICAgb3B0aW9ucy5kYXRhID0gX2Jhc2UuY3JlYXRlRnJhbWUob3B0aW9ucy5kYXRhKTtcbiAgICAgICAgb3B0aW9ucy5kYXRhWydwYXJ0aWFsLWJsb2NrJ10gPSBjdXJyZW50UGFydGlhbEJsb2NrO1xuICAgICAgICByZXR1cm4gZm4oY29udGV4dCwgb3B0aW9ucyk7XG4gICAgICB9O1xuICAgICAgaWYgKGZuLnBhcnRpYWxzKSB7XG4gICAgICAgIG9wdGlvbnMucGFydGlhbHMgPSBVdGlscy5leHRlbmQoe30sIG9wdGlvbnMucGFydGlhbHMsIGZuLnBhcnRpYWxzKTtcbiAgICAgIH1cbiAgICB9KSgpO1xuICB9XG5cbiAgaWYgKHBhcnRpYWwgPT09IHVuZGVmaW5lZCAmJiBwYXJ0aWFsQmxvY2spIHtcbiAgICBwYXJ0aWFsID0gcGFydGlhbEJsb2NrO1xuICB9XG5cbiAgaWYgKHBhcnRpYWwgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdUaGUgcGFydGlhbCAnICsgb3B0aW9ucy5uYW1lICsgJyBjb3VsZCBub3QgYmUgZm91bmQnKTtcbiAgfSBlbHNlIGlmIChwYXJ0aWFsIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICByZXR1cm4gcGFydGlhbChjb250ZXh0LCBvcHRpb25zKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBub29wKCkge1xuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIGluaXREYXRhKGNvbnRleHQsIGRhdGEpIHtcbiAgaWYgKCFkYXRhIHx8ICEoJ3Jvb3QnIGluIGRhdGEpKSB7XG4gICAgZGF0YSA9IGRhdGEgPyBfYmFzZS5jcmVhdGVGcmFtZShkYXRhKSA6IHt9O1xuICAgIGRhdGEucm9vdCA9IGNvbnRleHQ7XG4gIH1cbiAgcmV0dXJuIGRhdGE7XG59XG5cbmZ1bmN0aW9uIGV4ZWN1dGVEZWNvcmF0b3JzKGZuLCBwcm9nLCBjb250YWluZXIsIGRlcHRocywgZGF0YSwgYmxvY2tQYXJhbXMpIHtcbiAgaWYgKGZuLmRlY29yYXRvcikge1xuICAgIHZhciBwcm9wcyA9IHt9O1xuICAgIHByb2cgPSBmbi5kZWNvcmF0b3IocHJvZywgcHJvcHMsIGNvbnRhaW5lciwgZGVwdGhzICYmIGRlcHRoc1swXSwgZGF0YSwgYmxvY2tQYXJhbXMsIGRlcHRocyk7XG4gICAgVXRpbHMuZXh0ZW5kKHByb2csIHByb3BzKTtcbiAgfVxuICByZXR1cm4gcHJvZztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1THk0dUwyeHBZaTlvWVc1a2JHVmlZWEp6TDNKMWJuUnBiV1V1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3T3pzN096czdPenM3Y1VKQlFYVkNMRk5CUVZNN08wbEJRWEJDTEV0QlFVczdPM2xDUVVOTExHRkJRV0U3T3pzN2IwSkJRemhDTEZGQlFWRTdPMEZCUld4RkxGTkJRVk1zWVVGQllTeERRVUZETEZsQlFWa3NSVUZCUlR0QlFVTXhReXhOUVVGTkxHZENRVUZuUWl4SFFVRkhMRmxCUVZrc1NVRkJTU3haUVVGWkxFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXp0TlFVTjJSQ3hsUVVGbExEQkNRVUZ2UWl4RFFVRkRPenRCUVVVeFF5eE5RVUZKTEdkQ1FVRm5RaXhMUVVGTExHVkJRV1VzUlVGQlJUdEJRVU40UXl4UlFVRkpMR2RDUVVGblFpeEhRVUZITEdWQlFXVXNSVUZCUlR0QlFVTjBReXhWUVVGTkxHVkJRV1VzUjBGQlJ5eDFRa0ZCYVVJc1pVRkJaU3hEUVVGRE8xVkJRMjVFTEdkQ1FVRm5RaXhIUVVGSExIVkNRVUZwUWl4blFrRkJaMElzUTBGQlF5eERRVUZETzBGQlF6VkVMRmxCUVUwc01rSkJRV01zZVVaQlFYbEdMRWRCUTNaSExIRkVRVUZ4UkN4SFFVRkhMR1ZCUVdVc1IwRkJSeXh0UkVGQmJVUXNSMEZCUnl4blFrRkJaMElzUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXp0TFFVTm9TeXhOUVVGTk96dEJRVVZNTEZsQlFVMHNNa0pCUVdNc2QwWkJRWGRHTEVkQlEzUkhMR2xFUVVGcFJDeEhRVUZITEZsQlFWa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF6dExRVU51Ump0SFFVTkdPME5CUTBZN08wRkJSVTBzVTBGQlV5eFJRVUZSTEVOQlFVTXNXVUZCV1N4RlFVRkZMRWRCUVVjc1JVRkJSVHM3UVVGRk1VTXNUVUZCU1N4RFFVRkRMRWRCUVVjc1JVRkJSVHRCUVVOU0xGVkJRVTBzTWtKQlFXTXNiVU5CUVcxRExFTkJRVU1zUTBGQlF6dEhRVU14UkR0QlFVTkVMRTFCUVVrc1EwRkJReXhaUVVGWkxFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RlFVRkZPMEZCUTNaRExGVkJRVTBzTWtKQlFXTXNNa0pCUVRKQ0xFZEJRVWNzVDBGQlR5eFpRVUZaTEVOQlFVTXNRMEZCUXp0SFFVTjRSVHM3UVVGRlJDeGpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1IwRkJSeXhaUVVGWkxFTkJRVU1zVFVGQlRTeERRVUZET3pzN08wRkJTV3hFTEV0QlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1lVRkJZU3hEUVVGRExGbEJRVmtzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXpzN1FVRkZOVU1zVjBGQlV5eHZRa0ZCYjBJc1EwRkJReXhQUVVGUExFVkJRVVVzVDBGQlR5eEZRVUZGTEU5QlFVOHNSVUZCUlR0QlFVTjJSQ3hSUVVGSkxFOUJRVThzUTBGQlF5eEpRVUZKTEVWQlFVVTdRVUZEYUVJc1lVRkJUeXhIUVVGSExFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNSVUZCUlN4RlFVRkZMRTlCUVU4c1JVRkJSU3hQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdRVUZEYkVRc1ZVRkJTU3hQUVVGUExFTkJRVU1zUjBGQlJ5eEZRVUZGTzBGQlEyWXNaVUZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTTdUMEZEZGtJN1MwRkRSanM3UVVGRlJDeFhRVUZQTEVkQlFVY3NSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhqUVVGakxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NSVUZCUlN4UFFVRlBMRVZCUVVVc1QwRkJUeXhGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZETzBGQlEzUkZMRkZCUVVrc1RVRkJUU3hIUVVGSExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNZVUZCWVN4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFVkJRVVVzVDBGQlR5eEZRVUZGTEU5QlFVOHNSVUZCUlN4UFFVRlBMRU5CUVVNc1EwRkJRenM3UVVGRmVFVXNVVUZCU1N4TlFVRk5MRWxCUVVrc1NVRkJTU3hKUVVGSkxFZEJRVWNzUTBGQlF5eFBRVUZQTEVWQlFVVTdRVUZEYWtNc1lVRkJUeXhEUVVGRExGRkJRVkVzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFOUJRVThzUTBGQlF5eFBRVUZQTEVWQlFVVXNXVUZCV1N4RFFVRkRMR1ZCUVdVc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF6dEJRVU42Uml4WlFVRk5MRWRCUVVjc1QwRkJUeXhEUVVGRExGRkJRVkVzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1QwRkJUeXhGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZETzB0QlF6TkVPMEZCUTBRc1VVRkJTU3hOUVVGTkxFbEJRVWtzU1VGQlNTeEZRVUZGTzBGQlEyeENMRlZCUVVrc1QwRkJUeXhEUVVGRExFMUJRVTBzUlVGQlJUdEJRVU5zUWl4WlFVRkpMRXRCUVVzc1IwRkJSeXhOUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMEZCUXk5Q0xHRkJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhMUVVGTExFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3UVVGRE5VTXNZMEZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1JVRkJSVHRCUVVNMVFpeHJRa0ZCVFR0WFFVTlFPenRCUVVWRUxHVkJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4UFFVRlBMRU5CUVVNc1RVRkJUU3hIUVVGSExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0VFFVTjBRenRCUVVORUxHTkJRVTBzUjBGQlJ5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8wOUJRek5DTzBGQlEwUXNZVUZCVHl4TlFVRk5MRU5CUVVNN1MwRkRaaXhOUVVGTk8wRkJRMHdzV1VGQlRTd3lRa0ZCWXl4alFVRmpMRWRCUVVjc1QwRkJUeXhEUVVGRExFbEJRVWtzUjBGQlJ5d3dSRUZCTUVRc1EwRkJReXhEUVVGRE8wdEJRMnBJTzBkQlEwWTdPenRCUVVkRUxFMUJRVWtzVTBGQlV5eEhRVUZITzBGQlEyUXNWVUZCVFN4RlFVRkZMR2RDUVVGVExFZEJRVWNzUlVGQlJTeEpRVUZKTEVWQlFVVTdRVUZETVVJc1ZVRkJTU3hGUVVGRkxFbEJRVWtzU1VGQlNTeEhRVUZITEVOQlFVRXNRVUZCUXl4RlFVRkZPMEZCUTJ4Q0xHTkJRVTBzTWtKQlFXTXNSMEZCUnl4SFFVRkhMRWxCUVVrc1IwRkJSeXh0UWtGQmJVSXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenRQUVVNM1JEdEJRVU5FTEdGQlFVOHNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8wdEJRMnhDTzBGQlEwUXNWVUZCVFN4RlFVRkZMR2RDUVVGVExFMUJRVTBzUlVGQlJTeEpRVUZKTEVWQlFVVTdRVUZETjBJc1ZVRkJUU3hIUVVGSExFZEJRVWNzVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXp0QlFVTXhRaXhYUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzBGQlF6VkNMRmxCUVVrc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeEpRVUZKTEVWQlFVVTdRVUZEZUVNc2FVSkJRVThzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xTkJRM2hDTzA5QlEwWTdTMEZEUmp0QlFVTkVMRlZCUVUwc1JVRkJSU3huUWtGQlV5eFBRVUZQTEVWQlFVVXNUMEZCVHl4RlFVRkZPMEZCUTJwRExHRkJRVThzVDBGQlR5eFBRVUZQTEV0QlFVc3NWVUZCVlN4SFFVRkhMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVkQlFVY3NUMEZCVHl4RFFVRkRPMHRCUTNoRk96dEJRVVZFTEc5Q1FVRm5RaXhGUVVGRkxFdEJRVXNzUTBGQlF5eG5Ra0ZCWjBJN1FVRkRlRU1zYVVKQlFXRXNSVUZCUlN4dlFrRkJiMEk3TzBGQlJXNURMRTFCUVVVc1JVRkJSU3haUVVGVExFTkJRVU1zUlVGQlJUdEJRVU5rTEZWQlFVa3NSMEZCUnl4SFFVRkhMRmxCUVZrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEJRVU14UWl4VFFVRkhMRU5CUVVNc1UwRkJVeXhIUVVGSExGbEJRVmtzUTBGQlF5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVNN1FVRkRka01zWVVGQlR5eEhRVUZITEVOQlFVTTdTMEZEV2pzN1FVRkZSQ3haUVVGUkxFVkJRVVVzUlVGQlJUdEJRVU5hTEZkQlFVOHNSVUZCUlN4cFFrRkJVeXhEUVVGRExFVkJRVVVzU1VGQlNTeEZRVUZGTEcxQ1FVRnRRaXhGUVVGRkxGZEJRVmNzUlVGQlJTeE5RVUZOTEVWQlFVVTdRVUZEYmtVc1ZVRkJTU3hqUVVGakxFZEJRVWNzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNN1ZVRkRha01zUlVGQlJTeEhRVUZITEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03UVVGRGNFSXNWVUZCU1N4SlFVRkpMRWxCUVVrc1RVRkJUU3hKUVVGSkxGZEJRVmNzU1VGQlNTeHRRa0ZCYlVJc1JVRkJSVHRCUVVONFJDeHpRa0ZCWXl4SFFVRkhMRmRCUVZjc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4SlFVRkpMRVZCUVVVc2JVSkJRVzFDTEVWQlFVVXNWMEZCVnl4RlFVRkZMRTFCUVUwc1EwRkJReXhEUVVGRE8wOUJRek5HTEUxQlFVMHNTVUZCU1N4RFFVRkRMR05CUVdNc1JVRkJSVHRCUVVNeFFpeHpRa0ZCWXl4SFFVRkhMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NWMEZCVnl4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTTdUMEZET1VRN1FVRkRSQ3hoUVVGUExHTkJRV01zUTBGQlF6dExRVU4yUWpzN1FVRkZSQ3hSUVVGSkxFVkJRVVVzWTBGQlV5eExRVUZMTEVWQlFVVXNTMEZCU3l4RlFVRkZPMEZCUXpOQ0xHRkJRVThzUzBGQlN5eEpRVUZKTEV0QlFVc3NSVUZCUlN4RlFVRkZPMEZCUTNaQ0xHRkJRVXNzUjBGQlJ5eExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRPMDlCUTNaQ08wRkJRMFFzWVVGQlR5eExRVUZMTEVOQlFVTTdTMEZEWkR0QlFVTkVMRk5CUVVzc1JVRkJSU3hsUVVGVExFdEJRVXNzUlVGQlJTeE5RVUZOTEVWQlFVVTdRVUZETjBJc1ZVRkJTU3hIUVVGSExFZEJRVWNzUzBGQlN5eEpRVUZKTEUxQlFVMHNRMEZCUXpzN1FVRkZNVUlzVlVGQlNTeExRVUZMTEVsQlFVa3NUVUZCVFN4SlFVRkxMRXRCUVVzc1MwRkJTeXhOUVVGTkxFRkJRVU1zUlVGQlJUdEJRVU42UXl4WFFVRkhMRWRCUVVjc1MwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF5eEZRVUZGTEVWQlFVVXNUVUZCVFN4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8wOUJRM1pET3p0QlFVVkVMR0ZCUVU4c1IwRkJSeXhEUVVGRE8wdEJRMW83TzBGQlJVUXNaVUZCVnl4RlFVRkZMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZET3p0QlFVVTFRaXhSUVVGSkxFVkJRVVVzUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpPMEZCUTJwQ0xHZENRVUZaTEVWQlFVVXNXVUZCV1N4RFFVRkRMRkZCUVZFN1IwRkRjRU1zUTBGQlF6czdRVUZGUml4WFFVRlRMRWRCUVVjc1EwRkJReXhQUVVGUExFVkJRV2RDTzFGQlFXUXNUMEZCVHl4NVJFRkJSeXhGUVVGRk96dEJRVU5vUXl4UlFVRkpMRWxCUVVrc1IwRkJSeXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZET3p0QlFVVjRRaXhQUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMEZCUTNCQ0xGRkJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNUMEZCVHl4SlFVRkpMRmxCUVZrc1EwRkJReXhQUVVGUExFVkJRVVU3UVVGRE5VTXNWVUZCU1N4SFFVRkhMRkZCUVZFc1EwRkJReXhQUVVGUExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdTMEZEYUVNN1FVRkRSQ3hSUVVGSkxFMUJRVTBzV1VGQlFUdFJRVU5PTEZkQlFWY3NSMEZCUnl4WlFVRlpMRU5CUVVNc1kwRkJZeXhIUVVGSExFVkJRVVVzUjBGQlJ5eFRRVUZUTEVOQlFVTTdRVUZETDBRc1VVRkJTU3haUVVGWkxFTkJRVU1zVTBGQlV5eEZRVUZGTzBGQlF6RkNMRlZCUVVrc1QwRkJUeXhEUVVGRExFMUJRVTBzUlVGQlJUdEJRVU5zUWl4alFVRk5MRWRCUVVjc1QwRkJUeXhKUVVGSkxFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTTdUMEZETTBZc1RVRkJUVHRCUVVOTUxHTkJRVTBzUjBGQlJ5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMDlCUTNCQ08wdEJRMFk3TzBGQlJVUXNZVUZCVXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhuUWtGQlpUdEJRVU5zUXl4aFFVRlBMRVZCUVVVc1IwRkJSeXhaUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNSVUZCUlN4UFFVRlBMRVZCUVVVc1UwRkJVeXhEUVVGRExFOUJRVThzUlVGQlJTeFRRVUZUTEVOQlFVTXNVVUZCVVN4RlFVRkZMRWxCUVVrc1JVRkJSU3hYUVVGWExFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTTdTMEZEY2tnN1FVRkRSQ3hSUVVGSkxFZEJRVWNzYVVKQlFXbENMRU5CUVVNc1dVRkJXU3hEUVVGRExFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNVMEZCVXl4RlFVRkZMRTlCUVU4c1EwRkJReXhOUVVGTkxFbEJRVWtzUlVGQlJTeEZRVUZGTEVsQlFVa3NSVUZCUlN4WFFVRlhMRU5CUVVNc1EwRkJRenRCUVVOMFJ5eFhRVUZQTEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1QwRkJUeXhEUVVGRExFTkJRVU03UjBGREwwSTdRVUZEUkN4TFFVRkhMRU5CUVVNc1MwRkJTeXhIUVVGSExFbEJRVWtzUTBGQlF6czdRVUZGYWtJc1MwRkJSeXhEUVVGRExFMUJRVTBzUjBGQlJ5eFZRVUZUTEU5QlFVOHNSVUZCUlR0QlFVTTNRaXhSUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEU5QlFVOHNSVUZCUlR0QlFVTndRaXhsUVVGVExFTkJRVU1zVDBGQlR5eEhRVUZITEZOQlFWTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExFOUJRVThzUlVGQlJTeEhRVUZITEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN08wRkJSV3hGTEZWQlFVa3NXVUZCV1N4RFFVRkRMRlZCUVZVc1JVRkJSVHRCUVVNelFpeHBRa0ZCVXl4RFFVRkRMRkZCUVZFc1IwRkJSeXhUUVVGVExFTkJRVU1zUzBGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4UlFVRlJMRVZCUVVVc1IwRkJSeXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzA5QlEzUkZPMEZCUTBRc1ZVRkJTU3haUVVGWkxFTkJRVU1zVlVGQlZTeEpRVUZKTEZsQlFWa3NRMEZCUXl4aFFVRmhMRVZCUVVVN1FVRkRla1FzYVVKQlFWTXNRMEZCUXl4VlFVRlZMRWRCUVVjc1UwRkJVeXhEUVVGRExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNWVUZCVlN4RlFVRkZMRWRCUVVjc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF6dFBRVU0xUlR0TFFVTkdMRTFCUVUwN1FVRkRUQ3hsUVVGVExFTkJRVU1zVDBGQlR5eEhRVUZITEU5QlFVOHNRMEZCUXl4UFFVRlBMRU5CUVVNN1FVRkRjRU1zWlVGQlV5eERRVUZETEZGQlFWRXNSMEZCUnl4UFFVRlBMRU5CUVVNc1VVRkJVU3hEUVVGRE8wRkJRM1JETEdWQlFWTXNRMEZCUXl4VlFVRlZMRWRCUVVjc1QwRkJUeXhEUVVGRExGVkJRVlVzUTBGQlF6dExRVU16UXp0SFFVTkdMRU5CUVVNN08wRkJSVVlzUzBGQlJ5eERRVUZETEUxQlFVMHNSMEZCUnl4VlFVRlRMRU5CUVVNc1JVRkJSU3hKUVVGSkxFVkJRVVVzVjBGQlZ5eEZRVUZGTEUxQlFVMHNSVUZCUlR0QlFVTnNSQ3hSUVVGSkxGbEJRVmtzUTBGQlF5eGpRVUZqTEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVN1FVRkRMME1zV1VGQlRTd3lRa0ZCWXl4M1FrRkJkMElzUTBGQlF5eERRVUZETzB0QlF5OURPMEZCUTBRc1VVRkJTU3haUVVGWkxFTkJRVU1zVTBGQlV5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZPMEZCUTNKRExGbEJRVTBzTWtKQlFXTXNlVUpCUVhsQ0xFTkJRVU1zUTBGQlF6dExRVU5vUkRzN1FVRkZSQ3hYUVVGUExGZEJRVmNzUTBGQlF5eFRRVUZUTEVWQlFVVXNRMEZCUXl4RlFVRkZMRmxCUVZrc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeEpRVUZKTEVWQlFVVXNRMEZCUXl4RlFVRkZMRmRCUVZjc1JVRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF6dEhRVU5xUml4RFFVRkRPMEZCUTBZc1UwRkJUeXhIUVVGSExFTkJRVU03UTBGRFdqczdRVUZGVFN4VFFVRlRMRmRCUVZjc1EwRkJReXhUUVVGVExFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4SlFVRkpMRVZCUVVVc2JVSkJRVzFDTEVWQlFVVXNWMEZCVnl4RlFVRkZMRTFCUVUwc1JVRkJSVHRCUVVNMVJpeFhRVUZUTEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVdkQ08xRkJRV1FzVDBGQlR5eDVSRUZCUnl4RlFVRkZPenRCUVVOcVF5eFJRVUZKTEdGQlFXRXNSMEZCUnl4TlFVRk5MRU5CUVVNN1FVRkRNMElzVVVGQlNTeE5RVUZOTEVsQlFVa3NUMEZCVHl4SlFVRkpMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeEZRVUZGTEU5QlFVOHNTMEZCU3l4VFFVRlRMRU5CUVVNc1YwRkJWeXhKUVVGSkxFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4SlFVRkpMRU5CUVVFc1FVRkJReXhGUVVGRk8wRkJRMmhITEcxQ1FVRmhMRWRCUVVjc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1MwRkRNVU03TzBGQlJVUXNWMEZCVHl4RlFVRkZMRU5CUVVNc1UwRkJVeXhGUVVObUxFOUJRVThzUlVGRFVDeFRRVUZUTEVOQlFVTXNUMEZCVHl4RlFVRkZMRk5CUVZNc1EwRkJReXhSUVVGUkxFVkJRM0pETEU5QlFVOHNRMEZCUXl4SlFVRkpMRWxCUVVrc1NVRkJTU3hGUVVOd1FpeFhRVUZYTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEZkQlFWY3NRMEZCUXl4RlFVTjRSQ3hoUVVGaExFTkJRVU1zUTBGQlF6dEhRVU53UWpzN1FVRkZSQ3hOUVVGSkxFZEJRVWNzYVVKQlFXbENMRU5CUVVNc1JVRkJSU3hGUVVGRkxFbEJRVWtzUlVGQlJTeFRRVUZUTEVWQlFVVXNUVUZCVFN4RlFVRkZMRWxCUVVrc1JVRkJSU3hYUVVGWExFTkJRVU1zUTBGQlF6czdRVUZGZWtVc1RVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ5eERRVUZETEVOQlFVTTdRVUZEYWtJc1RVRkJTU3hEUVVGRExFdEJRVXNzUjBGQlJ5eE5RVUZOTEVkQlFVY3NUVUZCVFN4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU03UVVGRGVFTXNUVUZCU1N4RFFVRkRMRmRCUVZjc1IwRkJSeXh0UWtGQmJVSXNTVUZCU1N4RFFVRkRMRU5CUVVNN1FVRkROVU1zVTBGQlR5eEpRVUZKTEVOQlFVTTdRMEZEWWpzN1FVRkZUU3hUUVVGVExHTkJRV01zUTBGQlF5eFBRVUZQTEVWQlFVVXNUMEZCVHl4RlFVRkZMRTlCUVU4c1JVRkJSVHRCUVVONFJDeE5RVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZPMEZCUTFvc1VVRkJTU3hQUVVGUExFTkJRVU1zU1VGQlNTeExRVUZMTEdkQ1FVRm5RaXhGUVVGRk8wRkJRM0pETEdGQlFVOHNSMEZCUnl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExHVkJRV1VzUTBGQlF5eERRVUZETzB0QlEzcERMRTFCUVUwN1FVRkRUQ3hoUVVGUExFZEJRVWNzVDBGQlR5eERRVUZETEZGQlFWRXNRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03UzBGRE1VTTdSMEZEUml4TlFVRk5MRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1JVRkJSVHM3UVVGRmVrTXNWMEZCVHl4RFFVRkRMRWxCUVVrc1IwRkJSeXhQUVVGUExFTkJRVU03UVVGRGRrSXNWMEZCVHl4SFFVRkhMRTlCUVU4c1EwRkJReXhSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdSMEZEY2tNN1FVRkRSQ3hUUVVGUExFOUJRVThzUTBGQlF6dERRVU5vUWpzN1FVRkZUU3hUUVVGVExHRkJRV0VzUTBGQlF5eFBRVUZQTEVWQlFVVXNUMEZCVHl4RlFVRkZMRTlCUVU4c1JVRkJSVHM3UVVGRmRrUXNUVUZCVFN4dFFrRkJiVUlzUjBGQlJ5eFBRVUZQTEVOQlFVTXNTVUZCU1N4SlFVRkpMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zWlVGQlpTeERRVUZETEVOQlFVTTdRVUZETVVVc1UwRkJUeXhEUVVGRExFOUJRVThzUjBGQlJ5eEpRVUZKTEVOQlFVTTdRVUZEZGtJc1RVRkJTU3hQUVVGUExFTkJRVU1zUjBGQlJ5eEZRVUZGTzBGQlEyWXNWMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFZEJRVWNzVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXp0SFFVTjJSVHM3UVVGRlJDeE5RVUZKTEZsQlFWa3NXVUZCUVN4RFFVRkRPMEZCUTJwQ0xFMUJRVWtzVDBGQlR5eERRVUZETEVWQlFVVXNTVUZCU1N4UFFVRlBMRU5CUVVNc1JVRkJSU3hMUVVGTExFbEJRVWtzUlVGQlJUczdRVUZEY2tNc1lVRkJUeXhEUVVGRExFbEJRVWtzUjBGQlJ5eHJRa0ZCV1N4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03TzBGQlJYcERMRlZCUVVrc1JVRkJSU3hIUVVGSExFOUJRVThzUTBGQlF5eEZRVUZGTEVOQlFVTTdRVUZEY0VJc2EwSkJRVmtzUjBGQlJ5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMR1ZCUVdVc1EwRkJReXhIUVVGSExGTkJRVk1zYlVKQlFXMUNMRU5CUVVNc1QwRkJUeXhGUVVGblFqdFpRVUZrTEU5QlFVOHNlVVJCUVVjc1JVRkJSVHM3T3p0QlFVa3ZSaXhsUVVGUExFTkJRVU1zU1VGQlNTeEhRVUZITEd0Q1FVRlpMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dEJRVU42UXl4bFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExHVkJRV1VzUTBGQlF5eEhRVUZITEcxQ1FVRnRRaXhEUVVGRE8wRkJRM0JFTEdWQlFVOHNSVUZCUlN4RFFVRkRMRTlCUVU4c1JVRkJSU3hQUVVGUExFTkJRVU1zUTBGQlF6dFBRVU0zUWl4RFFVRkRPMEZCUTBZc1ZVRkJTU3hGUVVGRkxFTkJRVU1zVVVGQlVTeEZRVUZGTzBGQlEyWXNaVUZCVHl4RFFVRkRMRkZCUVZFc1IwRkJSeXhMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEVWQlFVVXNSVUZCUlN4UFFVRlBMRU5CUVVNc1VVRkJVU3hGUVVGRkxFVkJRVVVzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0UFFVTndSVHM3UjBGRFJqczdRVUZGUkN4TlFVRkpMRTlCUVU4c1MwRkJTeXhUUVVGVExFbEJRVWtzV1VGQldTeEZRVUZGTzBGQlEzcERMRmRCUVU4c1IwRkJSeXhaUVVGWkxFTkJRVU03UjBGRGVFSTdPMEZCUlVRc1RVRkJTU3hQUVVGUExFdEJRVXNzVTBGQlV5eEZRVUZGTzBGQlEzcENMRlZCUVUwc01rSkJRV01zWTBGQll5eEhRVUZITEU5QlFVOHNRMEZCUXl4SlFVRkpMRWRCUVVjc2NVSkJRWEZDTEVOQlFVTXNRMEZCUXp0SFFVTTFSU3hOUVVGTkxFbEJRVWtzVDBGQlR5eFpRVUZaTEZGQlFWRXNSVUZCUlR0QlFVTjBReXhYUVVGUExFOUJRVThzUTBGQlF5eFBRVUZQTEVWQlFVVXNUMEZCVHl4RFFVRkRMRU5CUVVNN1IwRkRiRU03UTBGRFJqczdRVUZGVFN4VFFVRlRMRWxCUVVrc1IwRkJSenRCUVVGRkxGTkJRVThzUlVGQlJTeERRVUZETzBOQlFVVTdPMEZCUlhKRExGTkJRVk1zVVVGQlVTeERRVUZETEU5QlFVOHNSVUZCUlN4SlFVRkpMRVZCUVVVN1FVRkRMMElzVFVGQlNTeERRVUZETEVsQlFVa3NTVUZCU1N4RlFVRkZMRTFCUVUwc1NVRkJTU3hKUVVGSkxFTkJRVUVzUVVGQlF5eEZRVUZGTzBGQlF6bENMRkZCUVVrc1IwRkJSeXhKUVVGSkxFZEJRVWNzYTBKQlFWa3NTVUZCU1N4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRE8wRkJRM0pETEZGQlFVa3NRMEZCUXl4SlFVRkpMRWRCUVVjc1QwRkJUeXhEUVVGRE8wZEJRM0pDTzBGQlEwUXNVMEZCVHl4SlFVRkpMRU5CUVVNN1EwRkRZanM3UVVGRlJDeFRRVUZUTEdsQ1FVRnBRaXhEUVVGRExFVkJRVVVzUlVGQlJTeEpRVUZKTEVWQlFVVXNVMEZCVXl4RlFVRkZMRTFCUVUwc1JVRkJSU3hKUVVGSkxFVkJRVVVzVjBGQlZ5eEZRVUZGTzBGQlEzcEZMRTFCUVVrc1JVRkJSU3hEUVVGRExGTkJRVk1zUlVGQlJUdEJRVU5vUWl4UlFVRkpMRXRCUVVzc1IwRkJSeXhGUVVGRkxFTkJRVU03UVVGRFppeFJRVUZKTEVkQlFVY3NSVUZCUlN4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFVkJRVVVzUzBGQlN5eEZRVUZGTEZOQlFWTXNSVUZCUlN4TlFVRk5MRWxCUVVrc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVsQlFVa3NSVUZCUlN4WFFVRlhMRVZCUVVVc1RVRkJUU3hEUVVGRExFTkJRVU03UVVGRE5VWXNVMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdSMEZETTBJN1FVRkRSQ3hUUVVGUExFbEJRVWtzUTBGQlF6dERRVU5pSWl3aVptbHNaU0k2SW5KMWJuUnBiV1V1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ0tpQmhjeUJWZEdsc2N5Qm1jbTl0SUNjdUwzVjBhV3h6Snp0Y2JtbHRjRzl5ZENCRmVHTmxjSFJwYjI0Z1puSnZiU0FuTGk5bGVHTmxjSFJwYjI0bk8xeHVhVzF3YjNKMElIc2dRMDlOVUVsTVJWSmZVa1ZXU1ZOSlQwNHNJRkpGVmtsVFNVOU9YME5JUVU1SFJWTXNJR055WldGMFpVWnlZVzFsSUgwZ1puSnZiU0FuTGk5aVlYTmxKenRjYmx4dVpYaHdiM0owSUdaMWJtTjBhVzl1SUdOb1pXTnJVbVYyYVhOcGIyNG9ZMjl0Y0dsc1pYSkpibVp2S1NCN1hHNGdJR052Ym5OMElHTnZiWEJwYkdWeVVtVjJhWE5wYjI0Z1BTQmpiMjF3YVd4bGNrbHVabThnSmlZZ1kyOXRjR2xzWlhKSmJtWnZXekJkSUh4OElERXNYRzRnSUNBZ0lDQWdJR04xY25KbGJuUlNaWFpwYzJsdmJpQTlJRU5QVFZCSlRFVlNYMUpGVmtsVFNVOU9PMXh1WEc0Z0lHbG1JQ2hqYjIxd2FXeGxjbEpsZG1semFXOXVJQ0U5UFNCamRYSnlaVzUwVW1WMmFYTnBiMjRwSUh0Y2JpQWdJQ0JwWmlBb1kyOXRjR2xzWlhKU1pYWnBjMmx2YmlBOElHTjFjbkpsYm5SU1pYWnBjMmx2YmlrZ2UxeHVJQ0FnSUNBZ1kyOXVjM1FnY25WdWRHbHRaVlpsY25OcGIyNXpJRDBnVWtWV1NWTkpUMDVmUTBoQlRrZEZVMXRqZFhKeVpXNTBVbVYyYVhOcGIyNWRMRnh1SUNBZ0lDQWdJQ0FnSUNBZ1kyOXRjR2xzWlhKV1pYSnphVzl1Y3lBOUlGSkZWa2xUU1U5T1gwTklRVTVIUlZOYlkyOXRjR2xzWlhKU1pYWnBjMmx2YmwwN1hHNGdJQ0FnSUNCMGFISnZkeUJ1WlhjZ1JYaGpaWEIwYVc5dUtDZFVaVzF3YkdGMFpTQjNZWE1nY0hKbFkyOXRjR2xzWldRZ2QybDBhQ0JoYmlCdmJHUmxjaUIyWlhKemFXOXVJRzltSUVoaGJtUnNaV0poY25NZ2RHaGhiaUIwYUdVZ1kzVnljbVZ1ZENCeWRXNTBhVzFsTGlBbklDdGNiaUFnSUNBZ0lDQWdJQ0FnSUNkUWJHVmhjMlVnZFhCa1lYUmxJSGx2ZFhJZ2NISmxZMjl0Y0dsc1pYSWdkRzhnWVNCdVpYZGxjaUIyWlhKemFXOXVJQ2duSUNzZ2NuVnVkR2x0WlZabGNuTnBiMjV6SUNzZ0p5a2diM0lnWkc5M2JtZHlZV1JsSUhsdmRYSWdjblZ1ZEdsdFpTQjBieUJoYmlCdmJHUmxjaUIyWlhKemFXOXVJQ2duSUNzZ1kyOXRjR2xzWlhKV1pYSnphVzl1Y3lBcklDY3BMaWNwTzF4dUlDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQXZMeUJWYzJVZ2RHaGxJR1Z0WW1Wa1pHVmtJSFpsY25OcGIyNGdhVzVtYnlCemFXNWpaU0IwYUdVZ2NuVnVkR2x0WlNCa2IyVnpiaWQwSUd0dWIzY2dZV0p2ZFhRZ2RHaHBjeUJ5WlhacGMybHZiaUI1WlhSY2JpQWdJQ0FnSUhSb2NtOTNJRzVsZHlCRmVHTmxjSFJwYjI0b0oxUmxiWEJzWVhSbElIZGhjeUJ3Y21WamIyMXdhV3hsWkNCM2FYUm9JR0VnYm1WM1pYSWdkbVZ5YzJsdmJpQnZaaUJJWVc1a2JHVmlZWEp6SUhSb1lXNGdkR2hsSUdOMWNuSmxiblFnY25WdWRHbHRaUzRnSnlBclhHNGdJQ0FnSUNBZ0lDQWdJQ0FuVUd4bFlYTmxJSFZ3WkdGMFpTQjViM1Z5SUhKMWJuUnBiV1VnZEc4Z1lTQnVaWGRsY2lCMlpYSnphVzl1SUNnbklDc2dZMjl0Y0dsc1pYSkpibVp2V3pGZElDc2dKeWt1SnlrN1hHNGdJQ0FnZlZ4dUlDQjlYRzU5WEc1Y2JtVjRjRzl5ZENCbWRXNWpkR2x2YmlCMFpXMXdiR0YwWlNoMFpXMXdiR0YwWlZOd1pXTXNJR1Z1ZGlrZ2UxeHVJQ0F2S2lCcGMzUmhibUoxYkNCcFoyNXZjbVVnYm1WNGRDQXFMMXh1SUNCcFppQW9JV1Z1ZGlrZ2UxeHVJQ0FnSUhSb2NtOTNJRzVsZHlCRmVHTmxjSFJwYjI0b0owNXZJR1Z1ZG1seWIyNXRaVzUwSUhCaGMzTmxaQ0IwYnlCMFpXMXdiR0YwWlNjcE8xeHVJQ0I5WEc0Z0lHbG1JQ2doZEdWdGNHeGhkR1ZUY0dWaklIeDhJQ0YwWlcxd2JHRjBaVk53WldNdWJXRnBiaWtnZTF4dUlDQWdJSFJvY205M0lHNWxkeUJGZUdObGNIUnBiMjRvSjFWdWEyNXZkMjRnZEdWdGNHeGhkR1VnYjJKcVpXTjBPaUFuSUNzZ2RIbHdaVzltSUhSbGJYQnNZWFJsVTNCbFl5azdYRzRnSUgxY2JseHVJQ0IwWlcxd2JHRjBaVk53WldNdWJXRnBiaTVrWldOdmNtRjBiM0lnUFNCMFpXMXdiR0YwWlZOd1pXTXViV0ZwYmw5a08xeHVYRzRnSUM4dklFNXZkR1U2SUZWemFXNW5JR1Z1ZGk1V1RTQnlaV1psY21WdVkyVnpJSEpoZEdobGNpQjBhR0Z1SUd4dlkyRnNJSFpoY2lCeVpXWmxjbVZ1WTJWeklIUm9jbTkxWjJodmRYUWdkR2hwY3lCelpXTjBhVzl1SUhSdklHRnNiRzkzWEc0Z0lDOHZJR1p2Y2lCbGVIUmxjbTVoYkNCMWMyVnljeUIwYnlCdmRtVnljbWxrWlNCMGFHVnpaU0JoY3lCd2MzVmxaRzh0YzNWd2NHOXlkR1ZrSUVGUVNYTXVYRzRnSUdWdWRpNVdUUzVqYUdWamExSmxkbWx6YVc5dUtIUmxiWEJzWVhSbFUzQmxZeTVqYjIxd2FXeGxjaWs3WEc1Y2JpQWdablZ1WTNScGIyNGdhVzUyYjJ0bFVHRnlkR2xoYkZkeVlYQndaWElvY0dGeWRHbGhiQ3dnWTI5dWRHVjRkQ3dnYjNCMGFXOXVjeWtnZTF4dUlDQWdJR2xtSUNodmNIUnBiMjV6TG1oaGMyZ3BJSHRjYmlBZ0lDQWdJR052Ym5SbGVIUWdQU0JWZEdsc2N5NWxlSFJsYm1Rb2UzMHNJR052Ym5SbGVIUXNJRzl3ZEdsdmJuTXVhR0Z6YUNrN1hHNGdJQ0FnSUNCcFppQW9iM0IwYVc5dWN5NXBaSE1wSUh0Y2JpQWdJQ0FnSUNBZ2IzQjBhVzl1Y3k1cFpITmJNRjBnUFNCMGNuVmxPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lIQmhjblJwWVd3Z1BTQmxibll1VmswdWNtVnpiMngyWlZCaGNuUnBZV3d1WTJGc2JDaDBhR2x6TENCd1lYSjBhV0ZzTENCamIyNTBaWGgwTENCdmNIUnBiMjV6S1R0Y2JpQWdJQ0JzWlhRZ2NtVnpkV3gwSUQwZ1pXNTJMbFpOTG1sdWRtOXJaVkJoY25ScFlXd3VZMkZzYkNoMGFHbHpMQ0J3WVhKMGFXRnNMQ0JqYjI1MFpYaDBMQ0J2Y0hScGIyNXpLVHRjYmx4dUlDQWdJR2xtSUNoeVpYTjFiSFFnUFQwZ2JuVnNiQ0FtSmlCbGJuWXVZMjl0Y0dsc1pTa2dlMXh1SUNBZ0lDQWdiM0IwYVc5dWN5NXdZWEowYVdGc2MxdHZjSFJwYjI1ekxtNWhiV1ZkSUQwZ1pXNTJMbU52YlhCcGJHVW9jR0Z5ZEdsaGJDd2dkR1Z0Y0d4aGRHVlRjR1ZqTG1OdmJYQnBiR1Z5VDNCMGFXOXVjeXdnWlc1MktUdGNiaUFnSUNBZ0lISmxjM1ZzZENBOUlHOXdkR2x2Ym5NdWNHRnlkR2xoYkhOYmIzQjBhVzl1Y3k1dVlXMWxYU2hqYjI1MFpYaDBMQ0J2Y0hScGIyNXpLVHRjYmlBZ0lDQjlYRzRnSUNBZ2FXWWdLSEpsYzNWc2RDQWhQU0J1ZFd4c0tTQjdYRzRnSUNBZ0lDQnBaaUFvYjNCMGFXOXVjeTVwYm1SbGJuUXBJSHRjYmlBZ0lDQWdJQ0FnYkdWMElHeHBibVZ6SUQwZ2NtVnpkV3gwTG5Od2JHbDBLQ2RjWEc0bktUdGNiaUFnSUNBZ0lDQWdabTl5SUNoc1pYUWdhU0E5SURBc0lHd2dQU0JzYVc1bGN5NXNaVzVuZEdnN0lHa2dQQ0JzT3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnSUNCcFppQW9JV3hwYm1WelcybGRJQ1ltSUdrZ0t5QXhJRDA5UFNCc0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCaWNtVmhhenRjYmlBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0JzYVc1bGMxdHBYU0E5SUc5d2RHbHZibk11YVc1a1pXNTBJQ3NnYkdsdVpYTmJhVjA3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2NtVnpkV3gwSUQwZ2JHbHVaWE11YW05cGJpZ25YRnh1SnlrN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnSUNCeVpYUjFjbTRnY21WemRXeDBPMXh1SUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNCMGFISnZkeUJ1WlhjZ1JYaGpaWEIwYVc5dUtDZFVhR1VnY0dGeWRHbGhiQ0FuSUNzZ2IzQjBhVzl1Y3k1dVlXMWxJQ3NnSnlCamIzVnNaQ0J1YjNRZ1ltVWdZMjl0Y0dsc1pXUWdkMmhsYmlCeWRXNXVhVzVuSUdsdUlISjFiblJwYldVdGIyNXNlU0J0YjJSbEp5azdYRzRnSUNBZ2ZWeHVJQ0I5WEc1Y2JpQWdMeThnU25WemRDQmhaR1FnZDJGMFpYSmNiaUFnYkdWMElHTnZiblJoYVc1bGNpQTlJSHRjYmlBZ0lDQnpkSEpwWTNRNklHWjFibU4wYVc5dUtHOWlhaXdnYm1GdFpTa2dlMXh1SUNBZ0lDQWdhV1lnS0NFb2JtRnRaU0JwYmlCdlltb3BLU0I3WEc0Z0lDQWdJQ0FnSUhSb2NtOTNJRzVsZHlCRmVHTmxjSFJwYjI0b0oxd2lKeUFySUc1aGJXVWdLeUFuWENJZ2JtOTBJR1JsWm1sdVpXUWdhVzRnSnlBcklHOWlhaWs3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdJQ0J5WlhSMWNtNGdiMkpxVzI1aGJXVmRPMXh1SUNBZ0lIMHNYRzRnSUNBZ2JHOXZhM1Z3T2lCbWRXNWpkR2x2Ymloa1pYQjBhSE1zSUc1aGJXVXBJSHRjYmlBZ0lDQWdJR052Ym5OMElHeGxiaUE5SUdSbGNIUm9jeTVzWlc1bmRHZzdYRzRnSUNBZ0lDQm1iM0lnS0d4bGRDQnBJRDBnTURzZ2FTQThJR3hsYmpzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDaGtaWEIwYUhOYmFWMGdKaVlnWkdWd2RHaHpXMmxkVzI1aGJXVmRJQ0U5SUc1MWJHd3BJSHRjYmlBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnWkdWd2RHaHpXMmxkVzI1aGJXVmRPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmU3hjYmlBZ0lDQnNZVzFpWkdFNklHWjFibU4wYVc5dUtHTjFjbkpsYm5Rc0lHTnZiblJsZUhRcElIdGNiaUFnSUNBZ0lISmxkSFZ5YmlCMGVYQmxiMllnWTNWeWNtVnVkQ0E5UFQwZ0oyWjFibU4wYVc5dUp5QS9JR04xY25KbGJuUXVZMkZzYkNoamIyNTBaWGgwS1NBNklHTjFjbkpsYm5RN1hHNGdJQ0FnZlN4Y2JseHVJQ0FnSUdWelkyRndaVVY0Y0hKbGMzTnBiMjQ2SUZWMGFXeHpMbVZ6WTJGd1pVVjRjSEpsYzNOcGIyNHNYRzRnSUNBZ2FXNTJiMnRsVUdGeWRHbGhiRG9nYVc1MmIydGxVR0Z5ZEdsaGJGZHlZWEJ3WlhJc1hHNWNiaUFnSUNCbWJqb2dablZ1WTNScGIyNG9hU2tnZTF4dUlDQWdJQ0FnYkdWMElISmxkQ0E5SUhSbGJYQnNZWFJsVTNCbFkxdHBYVHRjYmlBZ0lDQWdJSEpsZEM1a1pXTnZjbUYwYjNJZ1BTQjBaVzF3YkdGMFpWTndaV05iYVNBcklDZGZaQ2RkTzF4dUlDQWdJQ0FnY21WMGRYSnVJSEpsZER0Y2JpQWdJQ0I5TEZ4dVhHNGdJQ0FnY0hKdlozSmhiWE02SUZ0ZExGeHVJQ0FnSUhCeWIyZHlZVzA2SUdaMWJtTjBhVzl1S0drc0lHUmhkR0VzSUdSbFkyeGhjbVZrUW14dlkydFFZWEpoYlhNc0lHSnNiMk5yVUdGeVlXMXpMQ0JrWlhCMGFITXBJSHRjYmlBZ0lDQWdJR3hsZENCd2NtOW5jbUZ0VjNKaGNIQmxjaUE5SUhSb2FYTXVjSEp2WjNKaGJYTmJhVjBzWEc0Z0lDQWdJQ0FnSUNBZ1ptNGdQU0IwYUdsekxtWnVLR2twTzF4dUlDQWdJQ0FnYVdZZ0tHUmhkR0VnZkh3Z1pHVndkR2h6SUh4OElHSnNiMk5yVUdGeVlXMXpJSHg4SUdSbFkyeGhjbVZrUW14dlkydFFZWEpoYlhNcElIdGNiaUFnSUNBZ0lDQWdjSEp2WjNKaGJWZHlZWEJ3WlhJZ1BTQjNjbUZ3VUhKdlozSmhiU2gwYUdsekxDQnBMQ0JtYml3Z1pHRjBZU3dnWkdWamJHRnlaV1JDYkc5amExQmhjbUZ0Y3l3Z1lteHZZMnRRWVhKaGJYTXNJR1JsY0hSb2N5azdYRzRnSUNBZ0lDQjlJR1ZzYzJVZ2FXWWdLQ0Z3Y205bmNtRnRWM0poY0hCbGNpa2dlMXh1SUNBZ0lDQWdJQ0J3Y205bmNtRnRWM0poY0hCbGNpQTlJSFJvYVhNdWNISnZaM0poYlhOYmFWMGdQU0IzY21Gd1VISnZaM0poYlNoMGFHbHpMQ0JwTENCbWJpazdYRzRnSUNBZ0lDQjlYRzRnSUNBZ0lDQnlaWFIxY200Z2NISnZaM0poYlZkeVlYQndaWEk3WEc0Z0lDQWdmU3hjYmx4dUlDQWdJR1JoZEdFNklHWjFibU4wYVc5dUtIWmhiSFZsTENCa1pYQjBhQ2tnZTF4dUlDQWdJQ0FnZDJocGJHVWdLSFpoYkhWbElDWW1JR1JsY0hSb0xTMHBJSHRjYmlBZ0lDQWdJQ0FnZG1Gc2RXVWdQU0IyWVd4MVpTNWZjR0Z5Wlc1ME8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ2NtVjBkWEp1SUhaaGJIVmxPMXh1SUNBZ0lIMHNYRzRnSUNBZ2JXVnlaMlU2SUdaMWJtTjBhVzl1S0hCaGNtRnRMQ0JqYjIxdGIyNHBJSHRjYmlBZ0lDQWdJR3hsZENCdlltb2dQU0J3WVhKaGJTQjhmQ0JqYjIxdGIyNDdYRzVjYmlBZ0lDQWdJR2xtSUNod1lYSmhiU0FtSmlCamIyMXRiMjRnSmlZZ0tIQmhjbUZ0SUNFOVBTQmpiMjF0YjI0cEtTQjdYRzRnSUNBZ0lDQWdJRzlpYWlBOUlGVjBhV3h6TG1WNGRHVnVaQ2g3ZlN3Z1kyOXRiVzl1TENCd1lYSmhiU2s3WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUhKbGRIVnliaUJ2WW1vN1hHNGdJQ0FnZlN4Y2JpQWdJQ0F2THlCQmJpQmxiWEIwZVNCdlltcGxZM1FnZEc4Z2RYTmxJR0Z6SUhKbGNHeGhZMlZ0Wlc1MElHWnZjaUJ1ZFd4c0xXTnZiblJsZUhSelhHNGdJQ0FnYm5Wc2JFTnZiblJsZUhRNklFOWlhbVZqZEM1elpXRnNLSHQ5S1N4Y2JseHVJQ0FnSUc1dmIzQTZJR1Z1ZGk1V1RTNXViMjl3TEZ4dUlDQWdJR052YlhCcGJHVnlTVzVtYnpvZ2RHVnRjR3hoZEdWVGNHVmpMbU52YlhCcGJHVnlYRzRnSUgwN1hHNWNiaUFnWm5WdVkzUnBiMjRnY21WMEtHTnZiblJsZUhRc0lHOXdkR2x2Ym5NZ1BTQjdmU2tnZTF4dUlDQWdJR3hsZENCa1lYUmhJRDBnYjNCMGFXOXVjeTVrWVhSaE8xeHVYRzRnSUNBZ2NtVjBMbDl6WlhSMWNDaHZjSFJwYjI1ektUdGNiaUFnSUNCcFppQW9JVzl3ZEdsdmJuTXVjR0Z5ZEdsaGJDQW1KaUIwWlcxd2JHRjBaVk53WldNdWRYTmxSR0YwWVNrZ2UxeHVJQ0FnSUNBZ1pHRjBZU0E5SUdsdWFYUkVZWFJoS0dOdmJuUmxlSFFzSUdSaGRHRXBPMXh1SUNBZ0lIMWNiaUFnSUNCc1pYUWdaR1Z3ZEdoekxGeHVJQ0FnSUNBZ0lDQmliRzlqYTFCaGNtRnRjeUE5SUhSbGJYQnNZWFJsVTNCbFl5NTFjMlZDYkc5amExQmhjbUZ0Y3lBL0lGdGRJRG9nZFc1a1pXWnBibVZrTzF4dUlDQWdJR2xtSUNoMFpXMXdiR0YwWlZOd1pXTXVkWE5sUkdWd2RHaHpLU0I3WEc0Z0lDQWdJQ0JwWmlBb2IzQjBhVzl1Y3k1a1pYQjBhSE1wSUh0Y2JpQWdJQ0FnSUNBZ1pHVndkR2h6SUQwZ1kyOXVkR1Y0ZENBaFBTQnZjSFJwYjI1ekxtUmxjSFJvYzFzd1hTQS9JRnRqYjI1MFpYaDBYUzVqYjI1allYUW9iM0IwYVc5dWN5NWtaWEIwYUhNcElEb2diM0IwYVc5dWN5NWtaWEIwYUhNN1hHNGdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNCa1pYQjBhSE1nUFNCYlkyOXVkR1Y0ZEYwN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnWm5WdVkzUnBiMjRnYldGcGJpaGpiMjUwWlhoMEx5b3NJRzl3ZEdsdmJuTXFMeWtnZTF4dUlDQWdJQ0FnY21WMGRYSnVJQ2NuSUNzZ2RHVnRjR3hoZEdWVGNHVmpMbTFoYVc0b1kyOXVkR0ZwYm1WeUxDQmpiMjUwWlhoMExDQmpiMjUwWVdsdVpYSXVhR1ZzY0dWeWN5d2dZMjl1ZEdGcGJtVnlMbkJoY25ScFlXeHpMQ0JrWVhSaExDQmliRzlqYTFCaGNtRnRjeXdnWkdWd2RHaHpLVHRjYmlBZ0lDQjlYRzRnSUNBZ2JXRnBiaUE5SUdWNFpXTjFkR1ZFWldOdmNtRjBiM0p6S0hSbGJYQnNZWFJsVTNCbFl5NXRZV2x1TENCdFlXbHVMQ0JqYjI1MFlXbHVaWElzSUc5d2RHbHZibk11WkdWd2RHaHpJSHg4SUZ0ZExDQmtZWFJoTENCaWJHOWphMUJoY21GdGN5azdYRzRnSUNBZ2NtVjBkWEp1SUcxaGFXNG9ZMjl1ZEdWNGRDd2diM0IwYVc5dWN5azdYRzRnSUgxY2JpQWdjbVYwTG1selZHOXdJRDBnZEhKMVpUdGNibHh1SUNCeVpYUXVYM05sZEhWd0lEMGdablZ1WTNScGIyNG9iM0IwYVc5dWN5a2dlMXh1SUNBZ0lHbG1JQ2doYjNCMGFXOXVjeTV3WVhKMGFXRnNLU0I3WEc0Z0lDQWdJQ0JqYjI1MFlXbHVaWEl1YUdWc2NHVnljeUE5SUdOdmJuUmhhVzVsY2k1dFpYSm5aU2h2Y0hScGIyNXpMbWhsYkhCbGNuTXNJR1Z1ZGk1b1pXeHdaWEp6S1R0Y2JseHVJQ0FnSUNBZ2FXWWdLSFJsYlhCc1lYUmxVM0JsWXk1MWMyVlFZWEowYVdGc0tTQjdYRzRnSUNBZ0lDQWdJR052Ym5SaGFXNWxjaTV3WVhKMGFXRnNjeUE5SUdOdmJuUmhhVzVsY2k1dFpYSm5aU2h2Y0hScGIyNXpMbkJoY25ScFlXeHpMQ0JsYm5ZdWNHRnlkR2xoYkhNcE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ2FXWWdLSFJsYlhCc1lYUmxVM0JsWXk1MWMyVlFZWEowYVdGc0lIeDhJSFJsYlhCc1lYUmxVM0JsWXk1MWMyVkVaV052Y21GMGIzSnpLU0I3WEc0Z0lDQWdJQ0FnSUdOdmJuUmhhVzVsY2k1a1pXTnZjbUYwYjNKeklEMGdZMjl1ZEdGcGJtVnlMbTFsY21kbEtHOXdkR2x2Ym5NdVpHVmpiM0poZEc5eWN5d2daVzUyTG1SbFkyOXlZWFJ2Y25NcE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0JqYjI1MFlXbHVaWEl1YUdWc2NHVnljeUE5SUc5d2RHbHZibk11YUdWc2NHVnljenRjYmlBZ0lDQWdJR052Ym5SaGFXNWxjaTV3WVhKMGFXRnNjeUE5SUc5d2RHbHZibk11Y0dGeWRHbGhiSE03WEc0Z0lDQWdJQ0JqYjI1MFlXbHVaWEl1WkdWamIzSmhkRzl5Y3lBOUlHOXdkR2x2Ym5NdVpHVmpiM0poZEc5eWN6dGNiaUFnSUNCOVhHNGdJSDA3WEc1Y2JpQWdjbVYwTGw5amFHbHNaQ0E5SUdaMWJtTjBhVzl1S0drc0lHUmhkR0VzSUdKc2IyTnJVR0Z5WVcxekxDQmtaWEIwYUhNcElIdGNiaUFnSUNCcFppQW9kR1Z0Y0d4aGRHVlRjR1ZqTG5WelpVSnNiMk5yVUdGeVlXMXpJQ1ltSUNGaWJHOWphMUJoY21GdGN5a2dlMXh1SUNBZ0lDQWdkR2h5YjNjZ2JtVjNJRVY0WTJWd2RHbHZiaWduYlhWemRDQndZWE56SUdKc2IyTnJJSEJoY21GdGN5Y3BPMXh1SUNBZ0lIMWNiaUFnSUNCcFppQW9kR1Z0Y0d4aGRHVlRjR1ZqTG5WelpVUmxjSFJvY3lBbUppQWhaR1Z3ZEdoektTQjdYRzRnSUNBZ0lDQjBhSEp2ZHlCdVpYY2dSWGhqWlhCMGFXOXVLQ2R0ZFhOMElIQmhjM01nY0dGeVpXNTBJR1JsY0hSb2N5Y3BPMXh1SUNBZ0lIMWNibHh1SUNBZ0lISmxkSFZ5YmlCM2NtRndVSEp2WjNKaGJTaGpiMjUwWVdsdVpYSXNJR2tzSUhSbGJYQnNZWFJsVTNCbFkxdHBYU3dnWkdGMFlTd2dNQ3dnWW14dlkydFFZWEpoYlhNc0lHUmxjSFJvY3lrN1hHNGdJSDA3WEc0Z0lISmxkSFZ5YmlCeVpYUTdYRzU5WEc1Y2JtVjRjRzl5ZENCbWRXNWpkR2x2YmlCM2NtRndVSEp2WjNKaGJTaGpiMjUwWVdsdVpYSXNJR2tzSUdadUxDQmtZWFJoTENCa1pXTnNZWEpsWkVKc2IyTnJVR0Z5WVcxekxDQmliRzlqYTFCaGNtRnRjeXdnWkdWd2RHaHpLU0I3WEc0Z0lHWjFibU4wYVc5dUlIQnliMmNvWTI5dWRHVjRkQ3dnYjNCMGFXOXVjeUE5SUh0OUtTQjdYRzRnSUNBZ2JHVjBJR04xY25KbGJuUkVaWEIwYUhNZ1BTQmtaWEIwYUhNN1hHNGdJQ0FnYVdZZ0tHUmxjSFJvY3lBbUppQmpiMjUwWlhoMElDRTlJR1JsY0hSb2Mxc3dYU0FtSmlBaEtHTnZiblJsZUhRZ1BUMDlJR052Ym5SaGFXNWxjaTV1ZFd4c1EyOXVkR1Y0ZENBbUppQmtaWEIwYUhOYk1GMGdQVDA5SUc1MWJHd3BLU0I3WEc0Z0lDQWdJQ0JqZFhKeVpXNTBSR1Z3ZEdoeklEMGdXMk52Ym5SbGVIUmRMbU52Ym1OaGRDaGtaWEIwYUhNcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhKbGRIVnliaUJtYmloamIyNTBZV2x1WlhJc1hHNGdJQ0FnSUNBZ0lHTnZiblJsZUhRc1hHNGdJQ0FnSUNBZ0lHTnZiblJoYVc1bGNpNW9aV3h3WlhKekxDQmpiMjUwWVdsdVpYSXVjR0Z5ZEdsaGJITXNYRzRnSUNBZ0lDQWdJRzl3ZEdsdmJuTXVaR0YwWVNCOGZDQmtZWFJoTEZ4dUlDQWdJQ0FnSUNCaWJHOWphMUJoY21GdGN5QW1KaUJiYjNCMGFXOXVjeTVpYkc5amExQmhjbUZ0YzEwdVkyOXVZMkYwS0dKc2IyTnJVR0Z5WVcxektTeGNiaUFnSUNBZ0lDQWdZM1Z5Y21WdWRFUmxjSFJvY3lrN1hHNGdJSDFjYmx4dUlDQndjbTluSUQwZ1pYaGxZM1YwWlVSbFkyOXlZWFJ2Y25Nb1ptNHNJSEJ5YjJjc0lHTnZiblJoYVc1bGNpd2daR1Z3ZEdoekxDQmtZWFJoTENCaWJHOWphMUJoY21GdGN5azdYRzVjYmlBZ2NISnZaeTV3Y205bmNtRnRJRDBnYVR0Y2JpQWdjSEp2Wnk1a1pYQjBhQ0E5SUdSbGNIUm9jeUEvSUdSbGNIUm9jeTVzWlc1bmRHZ2dPaUF3TzF4dUlDQndjbTluTG1Kc2IyTnJVR0Z5WVcxeklEMGdaR1ZqYkdGeVpXUkNiRzlqYTFCaGNtRnRjeUI4ZkNBd08xeHVJQ0J5WlhSMWNtNGdjSEp2Wnp0Y2JuMWNibHh1Wlhod2IzSjBJR1oxYm1OMGFXOXVJSEpsYzI5c2RtVlFZWEowYVdGc0tIQmhjblJwWVd3c0lHTnZiblJsZUhRc0lHOXdkR2x2Ym5NcElIdGNiaUFnYVdZZ0tDRndZWEowYVdGc0tTQjdYRzRnSUNBZ2FXWWdLRzl3ZEdsdmJuTXVibUZ0WlNBOVBUMGdKMEJ3WVhKMGFXRnNMV0pzYjJOckp5a2dlMXh1SUNBZ0lDQWdjR0Z5ZEdsaGJDQTlJRzl3ZEdsdmJuTXVaR0YwWVZzbmNHRnlkR2xoYkMxaWJHOWpheWRkTzF4dUlDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQndZWEowYVdGc0lEMGdiM0IwYVc5dWN5NXdZWEowYVdGc2MxdHZjSFJwYjI1ekxtNWhiV1ZkTzF4dUlDQWdJSDFjYmlBZ2ZTQmxiSE5sSUdsbUlDZ2hjR0Z5ZEdsaGJDNWpZV3hzSUNZbUlDRnZjSFJwYjI1ekxtNWhiV1VwSUh0Y2JpQWdJQ0F2THlCVWFHbHpJR2x6SUdFZ1pIbHVZVzFwWXlCd1lYSjBhV0ZzSUhSb1lYUWdjbVYwZFhKdVpXUWdZU0J6ZEhKcGJtZGNiaUFnSUNCdmNIUnBiMjV6TG01aGJXVWdQU0J3WVhKMGFXRnNPMXh1SUNBZ0lIQmhjblJwWVd3Z1BTQnZjSFJwYjI1ekxuQmhjblJwWVd4elczQmhjblJwWVd4ZE8xeHVJQ0I5WEc0Z0lISmxkSFZ5YmlCd1lYSjBhV0ZzTzF4dWZWeHVYRzVsZUhCdmNuUWdablZ1WTNScGIyNGdhVzUyYjJ0bFVHRnlkR2xoYkNod1lYSjBhV0ZzTENCamIyNTBaWGgwTENCdmNIUnBiMjV6S1NCN1hHNGdJQzh2SUZWelpTQjBhR1VnWTNWeWNtVnVkQ0JqYkc5emRYSmxJR052Ym5SbGVIUWdkRzhnYzJGMlpTQjBhR1VnY0dGeWRHbGhiQzFpYkc5amF5QnBaaUIwYUdseklIQmhjblJwWVd4Y2JpQWdZMjl1YzNRZ1kzVnljbVZ1ZEZCaGNuUnBZV3hDYkc5amF5QTlJRzl3ZEdsdmJuTXVaR0YwWVNBbUppQnZjSFJwYjI1ekxtUmhkR0ZiSjNCaGNuUnBZV3d0WW14dlkyc25YVHRjYmlBZ2IzQjBhVzl1Y3k1d1lYSjBhV0ZzSUQwZ2RISjFaVHRjYmlBZ2FXWWdLRzl3ZEdsdmJuTXVhV1J6S1NCN1hHNGdJQ0FnYjNCMGFXOXVjeTVrWVhSaExtTnZiblJsZUhSUVlYUm9JRDBnYjNCMGFXOXVjeTVwWkhOYk1GMGdmSHdnYjNCMGFXOXVjeTVrWVhSaExtTnZiblJsZUhSUVlYUm9PMXh1SUNCOVhHNWNiaUFnYkdWMElIQmhjblJwWVd4Q2JHOWphenRjYmlBZ2FXWWdLRzl3ZEdsdmJuTXVabTRnSmlZZ2IzQjBhVzl1Y3k1bWJpQWhQVDBnYm05dmNDa2dlMXh1SUNBZ0lHOXdkR2x2Ym5NdVpHRjBZU0E5SUdOeVpXRjBaVVp5WVcxbEtHOXdkR2x2Ym5NdVpHRjBZU2s3WEc0Z0lDQWdMeThnVjNKaGNIQmxjaUJtZFc1amRHbHZiaUIwYnlCblpYUWdZV05qWlhOeklIUnZJR04xY25KbGJuUlFZWEowYVdGc1FteHZZMnNnWm5KdmJTQjBhR1VnWTJ4dmMzVnlaVnh1SUNBZ0lHeGxkQ0JtYmlBOUlHOXdkR2x2Ym5NdVptNDdYRzRnSUNBZ2NHRnlkR2xoYkVKc2IyTnJJRDBnYjNCMGFXOXVjeTVrWVhSaFd5ZHdZWEowYVdGc0xXSnNiMk5ySjEwZ1BTQm1kVzVqZEdsdmJpQndZWEowYVdGc1FteHZZMnRYY21Gd2NHVnlLR052Ym5SbGVIUXNJRzl3ZEdsdmJuTWdQU0I3ZlNrZ2UxeHVYRzRnSUNBZ0lDQXZMeUJTWlhOMGIzSmxJSFJvWlNCd1lYSjBhV0ZzTFdKc2IyTnJJR1p5YjIwZ2RHaGxJR05zYjNOMWNtVWdabTl5SUhSb1pTQmxlR1ZqZFhScGIyNGdiMllnZEdobElHSnNiMk5yWEc0Z0lDQWdJQ0F2THlCcExtVXVJSFJvWlNCd1lYSjBJR2x1YzJsa1pTQjBhR1VnWW14dlkyc2diMllnZEdobElIQmhjblJwWVd3Z1kyRnNiQzVjYmlBZ0lDQWdJRzl3ZEdsdmJuTXVaR0YwWVNBOUlHTnlaV0YwWlVaeVlXMWxLRzl3ZEdsdmJuTXVaR0YwWVNrN1hHNGdJQ0FnSUNCdmNIUnBiMjV6TG1SaGRHRmJKM0JoY25ScFlXd3RZbXh2WTJzblhTQTlJR04xY25KbGJuUlFZWEowYVdGc1FteHZZMnM3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdabTRvWTI5dWRHVjRkQ3dnYjNCMGFXOXVjeWs3WEc0Z0lDQWdmVHRjYmlBZ0lDQnBaaUFvWm00dWNHRnlkR2xoYkhNcElIdGNiaUFnSUNBZ0lHOXdkR2x2Ym5NdWNHRnlkR2xoYkhNZ1BTQlZkR2xzY3k1bGVIUmxibVFvZTMwc0lHOXdkR2x2Ym5NdWNHRnlkR2xoYkhNc0lHWnVMbkJoY25ScFlXeHpLVHRjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0JwWmlBb2NHRnlkR2xoYkNBOVBUMGdkVzVrWldacGJtVmtJQ1ltSUhCaGNuUnBZV3hDYkc5amF5a2dlMXh1SUNBZ0lIQmhjblJwWVd3Z1BTQndZWEowYVdGc1FteHZZMnM3WEc0Z0lIMWNibHh1SUNCcFppQW9jR0Z5ZEdsaGJDQTlQVDBnZFc1a1pXWnBibVZrS1NCN1hHNGdJQ0FnZEdoeWIzY2dibVYzSUVWNFkyVndkR2x2YmlnblZHaGxJSEJoY25ScFlXd2dKeUFySUc5d2RHbHZibk11Ym1GdFpTQXJJQ2NnWTI5MWJHUWdibTkwSUdKbElHWnZkVzVrSnlrN1hHNGdJSDBnWld4elpTQnBaaUFvY0dGeWRHbGhiQ0JwYm5OMFlXNWpaVzltSUVaMWJtTjBhVzl1S1NCN1hHNGdJQ0FnY21WMGRYSnVJSEJoY25ScFlXd29ZMjl1ZEdWNGRDd2diM0IwYVc5dWN5azdYRzRnSUgxY2JuMWNibHh1Wlhod2IzSjBJR1oxYm1OMGFXOXVJRzV2YjNBb0tTQjdJSEpsZEhWeWJpQW5KenNnZlZ4dVhHNW1kVzVqZEdsdmJpQnBibWwwUkdGMFlTaGpiMjUwWlhoMExDQmtZWFJoS1NCN1hHNGdJR2xtSUNnaFpHRjBZU0I4ZkNBaEtDZHliMjkwSnlCcGJpQmtZWFJoS1NrZ2UxeHVJQ0FnSUdSaGRHRWdQU0JrWVhSaElEOGdZM0psWVhSbFJuSmhiV1VvWkdGMFlTa2dPaUI3ZlR0Y2JpQWdJQ0JrWVhSaExuSnZiM1FnUFNCamIyNTBaWGgwTzF4dUlDQjlYRzRnSUhKbGRIVnliaUJrWVhSaE8xeHVmVnh1WEc1bWRXNWpkR2x2YmlCbGVHVmpkWFJsUkdWamIzSmhkRzl5Y3lobWJpd2djSEp2Wnl3Z1kyOXVkR0ZwYm1WeUxDQmtaWEIwYUhNc0lHUmhkR0VzSUdKc2IyTnJVR0Z5WVcxektTQjdYRzRnSUdsbUlDaG1iaTVrWldOdmNtRjBiM0lwSUh0Y2JpQWdJQ0JzWlhRZ2NISnZjSE1nUFNCN2ZUdGNiaUFnSUNCd2NtOW5JRDBnWm00dVpHVmpiM0poZEc5eUtIQnliMmNzSUhCeWIzQnpMQ0JqYjI1MFlXbHVaWElzSUdSbGNIUm9jeUFtSmlCa1pYQjBhSE5iTUYwc0lHUmhkR0VzSUdKc2IyTnJVR0Z5WVcxekxDQmtaWEIwYUhNcE8xeHVJQ0FnSUZWMGFXeHpMbVY0ZEdWdVpDaHdjbTluTENCd2NtOXdjeWs3WEc0Z0lIMWNiaUFnY21WMGRYSnVJSEJ5YjJjN1hHNTlYRzRpWFgwPVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy9ydW50aW1lLmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBnbG9iYWwgd2luZG93ICovXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZ1bmN0aW9uIChIYW5kbGViYXJzKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIHZhciByb290ID0gdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB3aW5kb3csXG4gICAgICAkSGFuZGxlYmFycyA9IHJvb3QuSGFuZGxlYmFycztcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgSGFuZGxlYmFycy5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChyb290LkhhbmRsZWJhcnMgPT09IEhhbmRsZWJhcnMpIHtcbiAgICAgIHJvb3QuSGFuZGxlYmFycyA9ICRIYW5kbGViYXJzO1xuICAgIH1cbiAgICByZXR1cm4gSGFuZGxlYmFycztcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMeTR1TDJ4cFlpOW9ZVzVrYkdWaVlYSnpMMjV2TFdOdmJtWnNhV04wTG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPM0ZDUVVObExGVkJRVk1zVlVGQlZTeEZRVUZGT3p0QlFVVnNReXhOUVVGSkxFbEJRVWtzUjBGQlJ5eFBRVUZQTEUxQlFVMHNTMEZCU3l4WFFVRlhMRWRCUVVjc1RVRkJUU3hIUVVGSExFMUJRVTA3VFVGRGRFUXNWMEZCVnl4SFFVRkhMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU03TzBGQlJXeERMRmxCUVZVc1EwRkJReXhWUVVGVkxFZEJRVWNzV1VGQlZ6dEJRVU5xUXl4UlFVRkpMRWxCUVVrc1EwRkJReXhWUVVGVkxFdEJRVXNzVlVGQlZTeEZRVUZGTzBGQlEyeERMRlZCUVVrc1EwRkJReXhWUVVGVkxFZEJRVWNzVjBGQlZ5eERRVUZETzB0QlF5OUNPMEZCUTBRc1YwRkJUeXhWUVVGVkxFTkJRVU03UjBGRGJrSXNRMEZCUXp0RFFVTklJaXdpWm1sc1pTSTZJbTV2TFdOdmJtWnNhV04wTG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lMeW9nWjJ4dlltRnNJSGRwYm1SdmR5QXFMMXh1Wlhod2IzSjBJR1JsWm1GMWJIUWdablZ1WTNScGIyNG9TR0Z1Wkd4bFltRnljeWtnZTF4dUlDQXZLaUJwYzNSaGJtSjFiQ0JwWjI1dmNtVWdibVY0ZENBcUwxeHVJQ0JzWlhRZ2NtOXZkQ0E5SUhSNWNHVnZaaUJuYkc5aVlXd2dJVDA5SUNkMWJtUmxabWx1WldRbklEOGdaMnh2WW1Gc0lEb2dkMmx1Wkc5M0xGeHVJQ0FnSUNBZ0pFaGhibVJzWldKaGNuTWdQU0J5YjI5MExraGhibVJzWldKaGNuTTdYRzRnSUM4cUlHbHpkR0Z1WW5Wc0lHbG5ibTl5WlNCdVpYaDBJQ292WEc0Z0lFaGhibVJzWldKaGNuTXVibTlEYjI1bWJHbGpkQ0E5SUdaMWJtTjBhVzl1S0NrZ2UxeHVJQ0FnSUdsbUlDaHliMjkwTGtoaGJtUnNaV0poY25NZ1BUMDlJRWhoYm1Sc1pXSmhjbk1wSUh0Y2JpQWdJQ0FnSUhKdmIzUXVTR0Z1Wkd4bFltRnljeUE5SUNSSVlXNWtiR1ZpWVhKek8xeHVJQ0FnSUgxY2JpQWdJQ0J5WlhSMWNtNGdTR0Z1Wkd4bFltRnljenRjYmlBZ2ZUdGNibjFjYmlKZGZRPT1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMvbm8tY29uZmxpY3QuanNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnO1xyXG5cclxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcclxuZyA9IChmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gdGhpcztcclxufSkoKTtcclxuXHJcbnRyeSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXHJcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLGV2YWwpKFwidGhpc1wiKTtcclxufSBjYXRjaChlKSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcclxuXHRpZih0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKVxyXG5cdFx0ZyA9IHdpbmRvdztcclxufVxyXG5cclxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxyXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xyXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGc7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcVGltXFxcXERvY3VtZW50c1xcXFxqYXZhc2NyaXB0LWZvb2RcXFxcbm9kZV9tb2R1bGVzXFxcXGhhbmRsZWJhcnNcXFxccnVudGltZS5qc1wiKTtcbmZ1bmN0aW9uIF9fZGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiAob2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqKTsgfVxubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiY29tcGlsZXJcIjpbNyxcIj49IDQuMC4wXCJdLFwibWFpblwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIGhlbHBlciwgYWxpYXMxPWRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksIGFsaWFzMj1oZWxwZXJzLmhlbHBlck1pc3NpbmcsIGFsaWFzMz1cImZ1bmN0aW9uXCIsIGFsaWFzND1jb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbjtcblxuICByZXR1cm4gXCI8bGk+XFxyXFxuICAgIDxhIGhyZWY9XFxcIiNcXFwiIGRhdGEtY2F0ZWdvcnlfaWQ9XFxcIlwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5jYXRlZ29yeV9pZCB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY2F0ZWdvcnlfaWQgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMyKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMzID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcImNhdGVnb3J5X2lkXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCI+XCJcbiAgICArIGFsaWFzNCgoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLm5hbWUgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLm5hbWUgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMyKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMzID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcIm5hbWVcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSlcbiAgICArIFwiPC9hPlxcclxcbjwvbGk+XCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi90ZW1wbGF0ZS9mb29kVGFiLXRwbC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxUaW1cXFxcRG9jdW1lbnRzXFxcXGphdmFzY3JpcHQtZm9vZFxcXFxub2RlX21vZHVsZXNcXFxcaGFuZGxlYmFyc1xcXFxydW50aW1lLmpzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCJjb21waWxlclwiOls3LFwiPj0gNC4wLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgaGVscGVyO1xuXG4gIHJldHVybiBcIjx1bCBjbGFzcz1cXFwiYmVzdF9mb29kX2JveF9saXN0XFxcIiBkYXRhLWNhdGVnb3J5X2lkPVxcXCJcIlxuICAgICsgY29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5jYXRlZ29yeV9pZCB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY2F0ZWdvcnlfaWQgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogaGVscGVycy5oZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gXCJmdW5jdGlvblwiID8gaGVscGVyLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSx7XCJuYW1lXCI6XCJjYXRlZ29yeV9pZFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiPjwvdWw+XCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi90ZW1wbGF0ZS9jb250YWluZXItdHBsLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBmb29kQm94SW5maW5pdGVUZW1wbGF0ZSBmcm9tICcuLi90ZW1wbGF0ZS9mb29kQm94SW5maW5pdGUtdHBsLmh0bWwnO1xyXG5pbXBvcnQgYmFkZ2VUZW1wbGF0ZSBmcm9tICcuLi90ZW1wbGF0ZS9iYWRnZS10cGwuaHRtbCc7XHJcbmltcG9ydCBkZWxpdmVyeVR5cGVUZW1wbGF0ZSBmcm9tICcuLi90ZW1wbGF0ZS9kZWxpdmVyeVR5cGUtdHBsLmh0bWwnO1xyXG5pbXBvcnQge1xyXG4gICAgcXMsXHJcbiAgICBxc2EsXHJcbiAgICBvbixcclxuICAgIHRocm90dGxlXHJcbn0gZnJvbSAnLi9oZWxwZXJzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZmluaXRlVmlldyB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5mb29kQm94RWwgPSBxcyhgLiR7bmFtZX1fZm9vZCAuaW5maW5pdGVfZm9vZF9ib3hfbGlzdGApO1xyXG4gICAgICAgIHRoaXMuc2xpZGVzUHJldkVsID0gcXMoYC4ke25hbWV9X2Zvb2QgLnNsaWRlc19wcmV2YCk7XHJcbiAgICAgICAgdGhpcy5zbGlkZXNOZXh0RWwgPSBxcyhgLiR7bmFtZX1fZm9vZCAuc2xpZGVzX25leHRgKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgZWw6IHRoaXMuZm9vZEJveEVsLFxyXG4gICAgICAgICAgICBkaXJlY3Rpb246IC0yMFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgYmluZChiaW5kQ21kLCBoYW5kbGVyKSB7XHJcbiAgICAgICAgY29uc3QgYmluZENvbW1hbmRzID0ge1xyXG4gICAgICAgICAgICBzbGlkZXM6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIG9uKHRoaXMuZm9vZEJveEVsLCAndHJhbnNpdGlvbmVuZCcsICgpID0+IGhhbmRsZXIodGhpcy5zdGF0ZSkpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzbGlkZXNQcmV2OiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBvbih0aGlzLnNsaWRlc1ByZXZFbCwgJ2NsaWNrJywgdGhyb3R0bGUoKCkgPT4gaGFuZGxlcih0aGlzLnN0YXRlLCAxMCksIDYwMCkpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzbGlkZXNOZXh0OiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBvbih0aGlzLnNsaWRlc05leHRFbCwgJ2NsaWNrJywgdGhyb3R0bGUoKCkgPT4gaGFuZGxlcih0aGlzLnN0YXRlLCAtMTApLCA2MDApKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGJpbmRDb21tYW5kc1tiaW5kQ21kXSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcih2aWV3Q21kLCBwYXJhbWV0ZXIpIHtcclxuICAgICAgICBjb25zdCB2aWV3Q29tbWFuZHMgPSB7XHJcbiAgICAgICAgICAgIGJhbmNoYW46ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyQmFuY2hhbihwYXJhbWV0ZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmlld0NvbW1hbmRzW3ZpZXdDbWRdKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyQmFuY2hhbihmb29kKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJGb29kQm94TGlzdCh0aGlzLnN0YXRlLmVsLCBmb29kKTtcclxuICAgICAgICB0aGlzLnJlbmRlckZvb2RCb3goZm9vZCwgcXNhKGAuJHt0aGlzLnN0YXRlLm5hbWV9X2Zvb2QgLnByZF9ib3g+YWApKTtcclxuICAgICAgICB0aGlzLnJlbmRlclNsaWRlcyh0aGlzLnN0YXRlLmVsLCBxc2EoYC4ke3RoaXMuc3RhdGUubmFtZX1fZm9vZCAucHJkX2JveGApKTtcclxuICAgICAgICB0aGlzLnNob3dTbGlkZXModGhpcy5zdGF0ZS5lbCwgdGhpcy5zdGF0ZS5kaXJlY3Rpb24sIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckZvb2RCb3hMaXN0KGVsZW1lbnQsIGZvb2QpIHtcclxuICAgICAgICBjb25zdCBmb29kQm94TGlzdCA9IGZvb2QubWFwKGl0ZW0gPT5cclxuICAgICAgICAgICAgZm9vZEJveEluZmluaXRlVGVtcGxhdGUoe1xyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IGl0ZW0uaW1hZ2UsXHJcbiAgICAgICAgICAgICAgICBhbHQ6IGl0ZW0uYWx0LFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogaXRlbS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgIG9sZF9wcmljZTogaXRlbS5uX3ByaWNlLFxyXG4gICAgICAgICAgICAgICAgbmV3X3ByaWNlOiBpdGVtLnNfcHJpY2Uuc2xpY2UoMCwgLTEpLFxyXG4gICAgICAgICAgICAgICAgd29uOiBpdGVtLnNfcHJpY2Uuc2xpY2UoLTEpXHJcbiAgICAgICAgICAgIH0pKS5qb2luKCcnKTtcclxuICAgICAgICBlbGVtZW50Lmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGZvb2RCb3hMaXN0KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJGb29kQm94KGZvb2QsIHByZEJveCkge1xyXG4gICAgICAgIGZvb2QuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgICAgICBwcmRCb3hbaV0uaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBiYWRnZVRlbXBsYXRlKHtcclxuICAgICAgICAgICAgICAgIGJhZGdlOiBpdGVtLmJhZGdlXHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgcHJkQm94W2ldLmZpcnN0RWxlbWVudENoaWxkLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgZGVsaXZlcnlUeXBlVGVtcGxhdGUoe1xyXG4gICAgICAgICAgICAgICAgZGVsaXZlcnlfdHlwZTogaXRlbS5kZWxpdmVyeV90eXBlXHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJTbGlkZXMoZWxlbWVudCwgU2xpZGVzKSB7XHJcbiAgICAgICAgY29uc3QgbGFzdFNsaWRlcyA9IEFycmF5LmZyb20oU2xpZGVzKS5zbGljZSgtNCk7XHJcblxyXG4gICAgICAgIFNsaWRlcy5mb3JFYWNoKFNsaWRlID0+XHJcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoU2xpZGUuY2xvbmVOb2RlKHRydWUpKSk7XHJcbiAgICAgICAgbGFzdFNsaWRlcy5yZXZlcnNlKCkuZm9yRWFjaChsYXN0U2xpZGUgPT5cclxuICAgICAgICAgICAgZWxlbWVudC5pbnNlcnRCZWZvcmUobGFzdFNsaWRlLmNsb25lTm9kZSh0cnVlKSwgZWxlbWVudC5jaGlsZE5vZGVzWzBdKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1NsaWRlcyhlbGVtZW50LCBkaXJlY3Rpb24sIEltbWVkaWF0ZWx5KSB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBJbW1lZGlhdGVseSA/ICcwcycgOiAnMC41cyc7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke2RpcmVjdGlvbn0lKWA7XHJcbiAgICB9XHJcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2luZmluaXRlU2xpZGVWaWV3LmpzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxUaW1cXFxcRG9jdW1lbnRzXFxcXGphdmFzY3JpcHQtZm9vZFxcXFxub2RlX21vZHVsZXNcXFxcaGFuZGxlYmFyc1xcXFxydW50aW1lLmpzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCJjb21waWxlclwiOls3LFwiPj0gNC4wLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgaGVscGVyLCBhbGlhczE9ZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwgYWxpYXMyPWhlbHBlcnMuaGVscGVyTWlzc2luZywgYWxpYXMzPVwiZnVuY3Rpb25cIiwgYWxpYXM0PWNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uO1xuXG4gIHJldHVybiBcIjxsaSBjbGFzcz1cXFwicHJkX2JveFxcXCI+XFxyXFxuICAgIDxhIGhyZWY9XFxcIiNcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidGh1bWJfaW1nXFxcIj5cXHJcXG4gICAgICAgICAgICA8cD5cXHJcXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XFxcIlwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5pbWFnZSB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuaW1hZ2UgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMyKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMzID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcImltYWdlXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCIgYWx0PVxcXCJcIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMuYWx0IHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5hbHQgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMyKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMzID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcImFsdFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiPlxcclxcbiAgICAgICAgICAgIDwvcD5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjaXJjbGVfbWFza1xcXCI+PC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkbD5cXHJcXG4gICAgICAgICAgICA8ZHQgY2xhc3M9XFxcInByZF90aXRsZVxcXCI+XCJcbiAgICArIGFsaWFzNCgoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLnRpdGxlIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC50aXRsZSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwidGl0bGVcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSlcbiAgICArIFwiPC9kdD5cXHJcXG4gICAgICAgICAgICA8ZGQgY2xhc3M9XFxcInByZF9kZXNjcmlwdGlvblxcXCI+XCJcbiAgICArIGFsaWFzNCgoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLmRlc2NyaXB0aW9uIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5kZXNjcmlwdGlvbiA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwiZGVzY3JpcHRpb25cIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSlcbiAgICArIFwiPC9kZD5cXHJcXG4gICAgICAgICAgICA8ZGQgY2xhc3M9XFxcInByZF9wcmljZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJvbGRfcHJpY2VcXFwiPlwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5vbGRfcHJpY2UgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLm9sZF9wcmljZSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwib2xkX3ByaWNlXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcIm5ld19wcmljZVxcXCI+XCJcbiAgICArIGFsaWFzNCgoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLm5ld19wcmljZSB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubmV3X3ByaWNlIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJuZXdfcHJpY2VcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwid29uXFxcIj5cIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMud29uIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC53b24gOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMyKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMzID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcIndvblwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCI8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8L2RkPlxcclxcbiAgICAgICAgPC9kbD5cXHJcXG4gICAgPC9hPlxcclxcbjwvbGk+XCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi90ZW1wbGF0ZS9mb29kQm94SW5maW5pdGUtdHBsLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=