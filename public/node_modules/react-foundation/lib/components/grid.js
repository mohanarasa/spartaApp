'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Column = exports.Row = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enums = require('../enums');

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Row component.
 *
 * @param {Object} props
 * @returns {Object}
 */
var Row = exports.Row = function Row(props) {
  var className = (0, _utils.createClassName)(props.noDefaultClassName ? null : 'row', props.className, (0, _utils.isDefined)(props.upOnSmall) ? 'small-up-' + props.upOnSmall : null, (0, _utils.isDefined)(props.upOnMedium) ? 'medium-up-' + props.upOnMedium : null, (0, _utils.isDefined)(props.upOnLarge) ? 'large-up-' + props.upOnLarge : null, {
    'align-right': props.horizontalAlignment === _enums.HorizontalAlignments.RIGHT,
    'align-center': props.horizontalAlignment === _enums.HorizontalAlignments.CENTER,
    'align-justify': props.horizontalAlignment === _enums.HorizontalAlignments.JUSTIFY,
    'align-spaced': props.horizontalAlignment === _enums.HorizontalAlignments.SPACED,
    'align-top': props.verticalAlignment === _enums.VerticalAlignments.TOP,
    'align-middle': props.verticalAlignment === _enums.VerticalAlignments.MIDDLE,
    'align-bottom': props.verticalAlignment === _enums.VerticalAlignments.BOTTOM,
    'align-stretch': props.verticalAlignment === _enums.VerticalAlignments.STRETCH,
    'small-unstack': props.unstackOnSmall,
    'medium-unstack': props.unstackOnMedium,
    'large-unstack': props.unstackOnLarge,
    'small-collapse': props.collapseOnSmall,
    'medium-collapse': props.collapseOnMedium,
    'large-collapse': props.collapseOnLarge,
    'small-uncollapse': props.uncollapseOnSmall,
    'medium-uncollapse': props.uncollapseOnMedium,
    'large-uncollapse': props.uncollapseOnLarge,
    'collapse': props.isCollapsed,
    'expanded': props.isExpanded,
    'column': props.isColumn
  }, (0, _utils.generalClassNames)(props));

  var passProps = (0, _utils.removeProps)(props, (0, _utils.objectKeys)(Row.propTypes));

  return _react2.default.createElement('div', _extends({}, passProps, { className: className }));
};

Row.propTypes = _extends({}, _utils.GeneralPropTypes, {
  upOnSmall: _react.PropTypes.number,
  upOnMedium: _react.PropTypes.number,
  upOnLarge: _react.PropTypes.number,
  horizontalAlignment: _react.PropTypes.string,
  verticalAlignment: _react.PropTypes.string,
  unstackOnSmall: _react.PropTypes.bool,
  unstackOnMedium: _react.PropTypes.bool,
  unstackOnLarge: _react.PropTypes.bool,
  collapseOnSmall: _react.PropTypes.bool,
  collapseOnMedium: _react.PropTypes.bool,
  collapseOnLarge: _react.PropTypes.bool,
  uncollapseOnSmall: _react.PropTypes.bool,
  uncollapseOnMedium: _react.PropTypes.bool,
  uncollapseOnLarge: _react.PropTypes.bool,
  isCollapsed: _react.PropTypes.bool,
  isExpanded: _react.PropTypes.bool,
  isColumn: _react.PropTypes.bool
});

/**
 * Column component.
 *
 * @param {Object} props
 * @returns {Object}
 */
var Column = exports.Column = function Column(props) {
  var defaultClassName = props.isColumn ? 'column' : 'columns';
  var className = (0, _utils.createClassName)(props.noDefaultClassName ? null : defaultClassName, props.className, props.small ? 'small-' + props.small : null, props.medium ? 'medium-' + props.medium : null, props.large ? 'large-' + props.large : null, (0, _utils.isDefined)(props.offsetOnSmall) ? 'small-offset-' + props.offsetOnSmall : null, (0, _utils.isDefined)(props.offsetOnMedium) ? 'medium-offset-' + props.offsetOnMedium : null, (0, _utils.isDefined)(props.offsetOnLarge) ? 'large-offset-' + props.offsetOnLarge : null, (0, _utils.isDefined)(props.pushOnSmall) ? 'small-push-' + props.pushOnSmall : null, (0, _utils.isDefined)(props.pushOnMedium) ? 'medium-push-' + props.pushOnMedium : null, (0, _utils.isDefined)(props.pushOnLarge) ? 'large-push-' + props.pushOnLarge : null, (0, _utils.isDefined)(props.pullOnSmall) ? 'small-pull-' + props.pullOnSmall : null, (0, _utils.isDefined)(props.pullOnMedium) ? 'medium-pull-' + props.pullOnMedium : null, (0, _utils.isDefined)(props.pullOnLarge) ? 'large-pull-' + props.pullOnLarge : null, (0, _utils.isDefined)(props.orderOnSmall) ? 'small-order-' + props.orderOnSmall : null, (0, _utils.isDefined)(props.orderOnMedium) ? 'medium-order-' + props.orderOnMedium : null, (0, _utils.isDefined)(props.orderOnLarge) ? 'large-order-' + props.orderOnLarge : null, {
    'small-centered': props.centerOnSmall,
    'medium-centered': props.centerOnMedium,
    'large-centered': props.centerOnLarge,
    'small-uncentered': props.uncenterOnSmall,
    'medium-uncentered': props.uncenterOnMedium,
    'large-uncentered': props.uncenterOnLarge,
    'small-expand': props.expandOnSmall,
    'medium-expand': props.expandOnMedium,
    'large-expand': props.expandOnLarge,
    'shrink': props.isShrunk,
    'end': props.isLast
  }, (0, _utils.generalClassNames)(props));

  var passProps = (0, _utils.removeProps)(props, (0, _utils.objectKeys)(Column.propTypes));

  return _react2.default.createElement('div', _extends({}, passProps, { className: className }));
};

Column.propTypes = _extends({}, _utils.GeneralPropTypes, {
  small: _react.PropTypes.number,
  medium: _react.PropTypes.number,
  large: _react.PropTypes.number,
  offsetOnSmall: _react.PropTypes.number,
  offsetOnMedium: _react.PropTypes.number,
  offsetOnLarge: _react.PropTypes.number,
  pushOnSmall: _react.PropTypes.number,
  pushOnMedium: _react.PropTypes.number,
  pushOnLarge: _react.PropTypes.number,
  pullOnSmall: _react.PropTypes.number,
  pullOnMedium: _react.PropTypes.number,
  pullOnLarge: _react.PropTypes.number,
  orderOnSmall: _react.PropTypes.number,
  orderOnMedium: _react.PropTypes.number,
  orderOnLarge: _react.PropTypes.number,
  centerOnSmall: _react.PropTypes.bool,
  centerOnMedium: _react.PropTypes.bool,
  centerOnLarge: _react.PropTypes.bool,
  uncenterOnSmall: _react.PropTypes.bool,
  uncenterOnMedium: _react.PropTypes.bool,
  uncenterOnLarge: _react.PropTypes.bool,
  expandOnSmall: _react.PropTypes.bool,
  expandOnMedium: _react.PropTypes.bool,
  expandOnLarge: _react.PropTypes.bool,
  isShrunk: _react.PropTypes.bool,
  isLast: _react.PropTypes.bool
});