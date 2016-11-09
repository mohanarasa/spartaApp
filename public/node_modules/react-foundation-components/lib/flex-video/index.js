'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FlexVideo = undefined;

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

var _styles = require('./_styles.scss');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cxStyles = _bind2.default.bind(_styles2.default);

var FlexVideo = exports.FlexVideo = function FlexVideo(_ref) {
  var containerClassName = _ref.containerClassName;
  var containerStyle = _ref.containerStyle;
  var vimeo = _ref.vimeo;
  var widescreen = _ref.widescreen;
  var restProps = (0, _objectWithoutProperties3.default)(_ref, ['containerClassName', 'containerStyle', 'vimeo', 'widescreen']);

  var classNames = (0, _classnames2.default)(containerClassName, cxStyles('flex-video', { vimeo: vimeo, widescreen: widescreen }));

  return _react2.default.createElement(
    'div',
    { className: classNames, style: containerStyle },
    _react2.default.createElement('iframe', restProps)
  );
};

FlexVideo.propTypes = {
  containerClassName: _react.PropTypes.string,
  containerStyle: _react.PropTypes.shape({}),
  vimeo: _react.PropTypes.bool,
  widescreen: _react.PropTypes.bool
};

exports.default = FlexVideo;