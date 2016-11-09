'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MediaObjectSection = exports.MediaObject = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enums = require('../enums');

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Media object component.
 *
 * @param {Object} props
 * @returns {Object}
 */
var MediaObject = exports.MediaObject = function MediaObject(props) {
  var className = (0, _utils.createClassName)(props.noDefaultClassName ? null : 'media-object', props.className, {
    'stack-for-small': props.stackForSmall
  }, (0, _utils.generalClassNames)(props));

  var passProps = (0, _utils.removeProps)(props, (0, _utils.objectKeys)(MediaObject.propTypes));

  return _react2.default.createElement('div', _extends({}, passProps, { className: className }));
};

MediaObject.propTypes = _extends({}, _utils.GeneralPropTypes, {
  stackForSmall: _react.PropTypes.bool
});

/**
 * Media object section component.
 *
 * @param {Object} props
 * @returns {Object}
 */
var MediaObjectSection = exports.MediaObjectSection = function MediaObjectSection(props) {
  var className = (0, _utils.createClassName)(props.noDefaultClassName ? null : 'media-object-section', props.className, {
    'align-self-center': props.alignment === _enums.HorizontalAlignments.CENTER,
    'align-self-right': props.alignment === _enums.HorizontalAlignments.RIGHT,
    'align-self-justify': props.alignment === _enums.HorizontalAlignments.JUSTIFY,
    'align-self-spaced': props.alignment === _enums.HorizontalAlignments.SPACED,
    'main-section': props.isMain,
    'middle': props.isMiddle,
    'bottom': props.isBottom
  }, (0, _utils.generalClassNames)(props));

  var passProps = (0, _utils.removeProps)(props, (0, _utils.objectKeys)(MediaObjectSection.propTypes));

  return _react2.default.createElement('div', _extends({}, passProps, { className: className }));
};

MediaObjectSection.propTypes = _extends({}, _utils.GeneralPropTypes, {
  alignment: _react.PropTypes.oneOf((0, _utils.objectValues)(_enums.HorizontalAlignments)),
  isMain: _react.PropTypes.bool,
  isMiddle: _react.PropTypes.bool,
  isBottom: _react.PropTypes.bool
});