'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Visibility = exports.ShowOnFocus = exports.HideForScreenReader = exports.ShowForScreenReader = exports.HideForScreenOrientation = exports.ShowForScreenOrientation = exports.Invisible = exports.Hide = exports.HideOnlyForScreenSize = exports.HideForScreenSize = exports.ShowOnlyForScreenSize = exports.ShowForScreenSize = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _includes = require('lodash/includes');

var _includes2 = _interopRequireDefault(_includes);

var _constants = require('../util/constants');

var _createWrapperComponent = require('../util/create-wrapper-component');

var _createWrapperComponent2 = _interopRequireDefault(_createWrapperComponent);

var _styles = require('./_styles.scss');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ShowForScreenSize = exports.ShowForScreenSize = (0, _createWrapperComponent2.default)({
  displayName: 'ShowForScreenSize',
  styles: _styles2.default,
  propTypes: {
    screenSize: _react.PropTypes.oneOf(_constants.SCREEN_SIZES).isRequired
  },
  mapProps: function mapProps(_ref) {
    var screenSize = _ref.screenSize;
    var props = (0, _objectWithoutProperties3.default)(_ref, ['screenSize']);
    return {
      props: props,
      classNames: (0, _defineProperty3.default)({}, 'show-for-' + screenSize, (0, _includes2.default)(_constants.LARGER_SCREEN_SIZES, screenSize))
    };
  }
});

var ShowOnlyForScreenSize = exports.ShowOnlyForScreenSize = (0, _createWrapperComponent2.default)({
  displayName: 'ShowOnlyForScreenSize',
  styles: _styles2.default,
  propTypes: {
    screenSize: _react.PropTypes.oneOf(_constants.SCREEN_SIZES).isRequired
  },
  mapProps: function mapProps(_ref2) {
    var screenSize = _ref2.screenSize;
    var props = (0, _objectWithoutProperties3.default)(_ref2, ['screenSize']);
    return {
      props: props,
      classNames: (0, _defineProperty3.default)({}, 'show-for-' + screenSize + '-only', (0, _includes2.default)(_constants.SCREEN_SIZES, screenSize))
    };
  }
});

var HideForScreenSize = exports.HideForScreenSize = (0, _createWrapperComponent2.default)({
  displayName: 'HideForScreenSize',
  styles: _styles2.default,
  propTypes: {
    screenSize: _react.PropTypes.oneOf(_constants.SCREEN_SIZES).isRequired
  },
  mapProps: function mapProps(_ref3) {
    var screenSize = _ref3.screenSize;
    var props = (0, _objectWithoutProperties3.default)(_ref3, ['screenSize']);
    return {
      props: props,
      classNames: (0, _defineProperty3.default)({
        hide: !(0, _includes2.default)(_constants.LARGER_SCREEN_SIZES, screenSize) && (0, _includes2.default)(_constants.SCREEN_SIZES, screenSize)
      }, 'hide-for-' + screenSize, (0, _includes2.default)(_constants.LARGER_SCREEN_SIZES, screenSize))
    };
  }
});

var HideOnlyForScreenSize = exports.HideOnlyForScreenSize = (0, _createWrapperComponent2.default)({
  displayName: 'HideOnlyForScreenSize',
  styles: _styles2.default,
  propTypes: {
    screenSize: _react.PropTypes.oneOf(_constants.SCREEN_SIZES).isRequired
  },
  mapProps: function mapProps(_ref4) {
    var screenSize = _ref4.screenSize;
    var props = (0, _objectWithoutProperties3.default)(_ref4, ['screenSize']);
    return {
      props: props,
      classNames: (0, _defineProperty3.default)({}, 'hide-for-' + screenSize + '-only', (0, _includes2.default)(_constants.SCREEN_SIZES, screenSize))
    };
  }
});

var Hide = exports.Hide = (0, _createWrapperComponent2.default)({
  displayName: 'Hide',
  styles: _styles2.default,
  mapProps: function mapProps(props) {
    return {
      props: props,
      classNames: 'hide'
    };
  }
});

var Invisible = exports.Invisible = (0, _createWrapperComponent2.default)({
  displayName: 'Invisible',
  styles: _styles2.default,
  mapProps: function mapProps(props) {
    return {
      props: props,
      classNames: 'invisible'
    };
  }
});

var ShowForScreenOrientation = exports.ShowForScreenOrientation = (0, _createWrapperComponent2.default)({
  displayName: 'ShowForScreenOrientation',
  styles: _styles2.default,
  propTypes: {
    screenOrientation: _react.PropTypes.oneOf(_constants.SCREEN_ORIENTATIONS).isRequired
  },
  mapProps: function mapProps(_ref5) {
    var screenOrientation = _ref5.screenOrientation;
    var props = (0, _objectWithoutProperties3.default)(_ref5, ['screenOrientation']);
    return {
      props: props,
      classNames: (0, _defineProperty3.default)({}, 'show-for-' + screenOrientation, (0, _includes2.default)(_constants.SCREEN_ORIENTATIONS, screenOrientation))
    };
  }
});

var HideForScreenOrientation = exports.HideForScreenOrientation = (0, _createWrapperComponent2.default)({
  displayName: 'HideForScreenOrientation',
  styles: _styles2.default,
  propTypes: {
    screenOrientation: _react.PropTypes.oneOf(_constants.SCREEN_ORIENTATIONS).isRequired
  },
  mapProps: function mapProps(_ref6) {
    var screenOrientation = _ref6.screenOrientation;
    var props = (0, _objectWithoutProperties3.default)(_ref6, ['screenOrientation']);
    return {
      props: props,
      classNames: (0, _defineProperty3.default)({}, 'hide-for-' + screenOrientation, (0, _includes2.default)(_constants.SCREEN_ORIENTATIONS, screenOrientation))
    };
  }
});

var ShowForScreenReader = exports.ShowForScreenReader = (0, _createWrapperComponent2.default)({
  displayName: 'ShowForScreenReader',
  styles: _styles2.default,
  mapProps: function mapProps(props) {
    return {
      props: props,
      classNames: 'show-for-sr'
    };
  }
});

var HideForScreenReader = exports.HideForScreenReader = (0, _createWrapperComponent2.default)({
  displayName: 'HideForScreenReader',
  styles: _styles2.default,
  mapProps: function mapProps(props) {
    return {
      props: (0, _extends3.default)({}, props, { 'aria-hidden': true })
    };
  }
});

var ShowOnFocus = exports.ShowOnFocus = (0, _createWrapperComponent2.default)({
  displayName: 'ShowOnFocus',
  styles: _styles2.default,
  mapProps: function mapProps(props) {
    return {
      props: props,
      classNames: 'show-on-focus'
    };
  }
});

var Visibility = exports.Visibility = {
  ShowForScreenSize: ShowForScreenSize,
  ShowOnlyForScreenSize: ShowOnlyForScreenSize,
  HideForScreenSize: HideForScreenSize,
  HideOnlyForScreenSize: HideOnlyForScreenSize,
  Hide: Hide,
  Invisible: Invisible,
  ShowForScreenOrientation: ShowForScreenOrientation,
  HideForScreenOrientation: HideForScreenOrientation,
  ShowForScreenReader: ShowForScreenReader,
  HideForScreenReader: HideForScreenReader,
  ShowOnFocus: ShowOnFocus
};

exports.default = Visibility;