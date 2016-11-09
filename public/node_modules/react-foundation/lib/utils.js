'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GeneralPropTypes = undefined;
exports.createClassName = createClassName;
exports.generalClassNames = generalClassNames;
exports.objectKeys = objectKeys;
exports.objectValues = objectValues;
exports.removeProps = removeProps;
exports.isDefined = isDefined;

var _react = require('react');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _enums = require('./enums');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Property types for general properties.
 *
 * @returns {Object}
 */
var GeneralPropTypes = exports.GeneralPropTypes = {
  showFor: _react.PropTypes.oneOf([_enums.Breakpoints.MEDIUM, _enums.Breakpoints.LARGE]),
  showOnlyFor: _react.PropTypes.oneOf(objectValues(_enums.Breakpoints)),
  hideFor: _react.PropTypes.oneOf([_enums.Breakpoints.MEDIUM, _enums.Breakpoints.LARGE]),
  hideOnlyFor: _react.PropTypes.oneOf(objectValues(_enums.Breakpoints)),
  isHidden: _react.PropTypes.bool,
  isInvisible: _react.PropTypes.bool,
  showForLandscape: _react.PropTypes.bool,
  showForPortrait: _react.PropTypes.bool,
  showForSr: _react.PropTypes.bool,
  showOnFocus: _react.PropTypes.bool,
  isClearfix: _react.PropTypes.bool,
  float: _react.PropTypes.oneOf(objectValues(_enums.FloatTypes))
};

/**
 * Creates class names from the given arguments.
 *
 * @param {*} args
 * @returns {string}
 */
function createClassName() {
  return _classnames2.default.apply(undefined, arguments);
}

/**
 * Parses the general class names from the given properties.
 *
 * @param {Object} props
 * @returns {Object}
 */
function generalClassNames(props) {
  return {
    'show-for-medium': props.showFor === _enums.Breakpoints.MEDIUM,
    'show-for-large': props.showFor === _enums.Breakpoints.LARGE,
    'show-for-small-only': props.showOnlyFor === _enums.Breakpoints.SMALL,
    'show-for-medium-only': props.showOnlyFor === _enums.Breakpoints.MEDIUM,
    'show-for-large-only': props.showOnlyFor === _enums.Breakpoints.LARGE,
    'hide-for-medium': props.hideFor === _enums.Breakpoints.MEDIUM,
    'hide-for-large': props.hideFor === _enums.Breakpoints.LARGE,
    'hide-for-small-only': props.hideOnlyFor === _enums.Breakpoints.SMALL,
    'hide-for-medium-only': props.hideOnlyFor === _enums.Breakpoints.MEDIUM,
    'hide-for-large-only': props.hideOnlyFor === _enums.Breakpoints.LARGE,
    'hide': props.isHidden,
    'invisible': props.isInvisible,
    'show-for-landscape': props.showForLandscape,
    'show-for-portrait': props.showForPortrait,
    'show-for-sr': props.showForSr,
    'show-on-focus': props.showOnFocus,
    'clearfix': props.isClearfix,
    'float-left': props.float === _enums.FloatTypes.LEFT,
    'float-center': props.float === _enums.FloatTypes.CENTER,
    'float-right': props.float === _enums.FloatTypes.RIGHT
  };
}

/**
 * Returns the keys for the given object.
 * This method is used for getting the keys for prop types.
 *
 * @param {Object} object
 * @returns {Array}
 */
function objectKeys(object) {
  return Object.keys(object);
}

/**
 * Returns the values for the given object.
 * This method is used for getting the values for enumerables.
 *
 * @param {Object} object
 * @returns {Array}
 */
function objectValues(object) {
  var values = [];

  for (var property in object) {
    if (object.hasOwnProperty(property)) {
      values.push(object[property]);
    }
  }

  return values;
}

/**
 * Removes properties from the given object.
 * This method is used for removing valid attributes from component props prior to rendering.
 *
 * @param {Object} object
 * @param {Array} remove
 * @returns {Object}
 */
function removeProps(object, remove) {
  var result = {};

  for (var property in object) {
    if (object.hasOwnProperty(property) && remove.indexOf(property) === -1) {
      result[property] = object[property];
    }
  }

  return result;
}

/**
 * Returns whether or not the given value is defined.
 *
 * @param {*} value
 * @returns {boolean}
 */
function isDefined(value) {
  return typeof value !== 'undefined';
}