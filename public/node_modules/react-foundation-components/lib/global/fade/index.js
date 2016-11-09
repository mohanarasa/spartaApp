'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Fade = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _bind = require('classnames');

var _bind2 = _interopRequireDefault(_bind);

var _Transition = require('react-overlays/lib/Transition');

var _Transition2 = _interopRequireDefault(_Transition);

var _styles = {};

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cxStyles = _bind2.default.bind(_styles2.default);

var Fade = exports.Fade = function Fade(_ref) {
  var className = _ref.className;
  var restProps = (0, _objectWithoutProperties3.default)(_ref, ['className']);

  var classNames = (0, _classnames2.default)(className, cxStyles('fade'));

  return _react2.default.createElement(_Transition2.default, (0, _extends3.default)({}, restProps, {
    className: classNames,
    enteredClassName: cxStyles('in'),
    enteringClassName: cxStyles('in')
  }));
};
Fade.propTypes = {
  className: _react.PropTypes.string
};
Fade.defaultProps = {
  timeout: 150
};

exports.default = Fade;