'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Collapse = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _parseInt = require('babel-runtime/core-js/number/parse-int');

var _parseInt2 = _interopRequireDefault(_parseInt);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

var _Transition = require('react-overlays/lib/Transition');

var _Transition2 = _interopRequireDefault(_Transition);

var _style = require('dom-helpers/style');

var _style2 = _interopRequireDefault(_style);

var _capitalize = require('underscore.string/capitalize');

var _capitalize2 = _interopRequireDefault(_capitalize);

var _styles = require('./_styles.scss');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cxStyles = _bind2.default.bind(_styles2.default);
var MARGINS = {
  height: ['marginTop', 'marginBottom'],
  width: ['marginLeft', 'marginRight']
};

var Collapse = exports.Collapse = function Collapse(_ref) {
  var className = _ref.className;
  var dimension = _ref.dimension;
  var onEnter = _ref.onEnter;
  var onEntered = _ref.onEntered;
  var onEntering = _ref.onEntering;
  var onExit = _ref.onExit;
  var onExiting = _ref.onExiting;
  var restProps = (0, _objectWithoutProperties3.default)(_ref, ['className', 'dimension', 'onEnter', 'onEntered', 'onEntering', 'onExit', 'onExiting']);

  var classNames = (0, _classnames2.default)(className, cxStyles(dimension));
  var onTransitionEnter = function onTransitionEnter() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var elem = args[0];


    elem.style[dimension] = '0';

    if (onEnter) {
      onEnter.apply(undefined, args);
    }
  };
  var onTransitionEntered = function onTransitionEntered() {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var elem = args[0];


    elem.style[dimension] = null;

    if (onEntered) {
      onEntered.apply(undefined, args);
    }
  };
  var onTransitionEntering = function onTransitionEntering() {
    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    var elem = args[0];

    var size = elem['scroll' + (0, _capitalize2.default)(dimension)];

    elem.style[dimension] = size + 'px';

    if (onEntering) {
      onEntering.apply(undefined, args);
    }
  };
  var onTransitionExit = function onTransitionExit() {
    for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    var elem = args[0];

    var baseValue = elem['offset' + (0, _capitalize2.default)(dimension)];
    var margins = MARGINS[dimension];
    var value = baseValue + (0, _parseInt2.default)((0, _style2.default)(elem, margins[0]), 10) + (0, _parseInt2.default)((0, _style2.default)(elem, margins[1]), 10);

    elem.style[dimension] = value + 'px';

    if (onExit) {
      onExit.apply(undefined, args);
    }
  };
  var onTransitionExiting = function onTransitionExiting() {
    for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }

    function triggerBrowserReflow(node) {
      return node.offsetHeight;
    }

    var elem = args[0];


    triggerBrowserReflow(elem);
    elem.style[dimension] = '0';

    if (onExiting) {
      onExiting.apply(undefined, args);
    }
  };

  return _react2.default.createElement(_Transition2.default, (0, _extends3.default)({}, restProps, {
    className: classNames,
    enteredClassName: cxStyles('collapsible', 'in'),
    enteringClassName: cxStyles('collapsing'),
    exitedClassName: cxStyles('collapsible'),
    exitingClassName: cxStyles('collapsing'),
    onEnter: onTransitionEnter,
    onEntered: onTransitionEntered,
    onEntering: onTransitionEntering,
    onExit: onTransitionExit,
    onExiting: onTransitionExiting
  }));
};

Collapse.propTypes = {
  className: _react.PropTypes.string,
  dimension: _react.PropTypes.oneOf(['height', 'width']),
  onEnter: _react.PropTypes.func,
  onEntered: _react.PropTypes.func,
  onEntering: _react.PropTypes.func,
  onExit: _react.PropTypes.func,
  onExiting: _react.PropTypes.func
};
Collapse.defaultProps = {
  dimension: 'height',
  timeout: 350
};

exports.default = Collapse;