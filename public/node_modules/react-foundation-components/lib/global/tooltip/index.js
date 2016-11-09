'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkWithTooltip = exports.Tooltip = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _bind = require('classnames');

var _bind2 = _interopRequireDefault(_bind);

var _includes = require('lodash/includes');

var _includes2 = _interopRequireDefault(_includes);

var _constants = require('../../util/constants');

var _overlayTrigger = require('../../util/overlay-trigger');

var _overlayTrigger2 = _interopRequireDefault(_overlayTrigger);

var _fade = require('../fade');

var _styles = {};

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cxStyles = _bind2.default.bind(_styles2.default);

var Tooltip = exports.Tooltip = function Tooltip(_ref) {
  var className = _ref.className;
  var position = _ref.position;
  var restProps = (0, _objectWithoutProperties3.default)(_ref, ['className', 'position']);

  var classNames = (0, _classnames2.default)(className, cxStyles('tooltip', (0, _defineProperty3.default)({}, position, (0, _includes2.default)(_constants.OVERLAY_POSITIONS_INTERNAL, position))));

  return _react2.default.createElement('div', (0, _extends3.default)({}, restProps, { className: classNames, role: 'tooltip' }));
};

Tooltip.propTypes = {
  className: _react.PropTypes.string,
  position: _react.PropTypes.oneOf(_constants.OVERLAY_POSITIONS)
};
Tooltip.defaultProps = {
  position: 'bottom'
};

var TooltipOverlay = function TooltipOverlay(_ref2) {
  var placement = _ref2.placement;
  var arrowOffsetLeft = _ref2.arrowOffsetLeft;
  var arrowOffsetTop = _ref2.arrowOffsetTop;
  var positionLeft = _ref2.positionLeft;
  var positionTop = _ref2.positionTop;
  var restProps = (0, _objectWithoutProperties3.default)(_ref2, ['placement', 'arrowOffsetLeft', 'arrowOffsetTop', 'positionLeft', 'positionTop']);
  return _react2.default.createElement(Tooltip, restProps);
};

var LinkWithTooltip = exports.LinkWithTooltip = function LinkWithTooltip(_ref3) {
  var children = _ref3.children;
  var tooltipAlignment = _ref3.tooltipAlignment;
  var tooltipClassName = _ref3.tooltipClassName;
  var tooltipContent = _ref3.tooltipContent;
  var tooltipIndicator = _ref3.tooltipIndicator;
  var tooltipId = _ref3.tooltipId;
  var tooltipPosition = _ref3.tooltipPosition;
  var tooltipStyle = _ref3.tooltipStyle;
  var restProps = (0, _objectWithoutProperties3.default)(_ref3, ['children', 'tooltipAlignment', 'tooltipClassName', 'tooltipContent', 'tooltipIndicator', 'tooltipId', 'tooltipPosition', 'tooltipStyle']);

  var childProps = {
    'aria-haspopup': true,
    'aria-describedby': tooltipId
  };
  var childClassNames = cxStyles({ 'has-tip': tooltipIndicator });
  var clonedChild = null;

  if ((0, _react.isValidElement)(children)) {
    clonedChild = (0, _react.cloneElement)(children, (0, _extends3.default)({}, childProps, {
      className: (0, _classnames2.default)(children.props.className, childClassNames)
    }));
  } else {
    clonedChild = _react2.default.createElement(
      'span',
      (0, _extends3.default)({}, childProps, { className: childClassNames }),
      children
    );
  }

  var tooltip = _react2.default.createElement(
    TooltipOverlay,
    {
      className: tooltipClassName,
      id: tooltipId,
      position: tooltipPosition,
      style: tooltipStyle
    },
    tooltipContent
  );

  return _react2.default.createElement(
    _overlayTrigger2.default,
    (0, _extends3.default)({}, restProps, {
      alignment: tooltipAlignment,
      overlay: tooltip,
      position: tooltipPosition
    }),
    clonedChild
  );
};

LinkWithTooltip.propTypes = {
  children: _react.PropTypes.node,
  tooltipAlignment: _react.PropTypes.oneOf(_constants.OVERLAY_ALIGNMENTS),
  tooltipClassName: _react.PropTypes.string,
  tooltipContent: _react.PropTypes.node,
  tooltipIndicator: _react.PropTypes.bool,
  tooltipId: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  tooltipPosition: _react.PropTypes.oneOf(_constants.OVERLAY_POSITIONS),
  tooltipStyle: _react.PropTypes.object
};
LinkWithTooltip.defaultProps = {
  closeOnClickOutside: true,
  tooltipIndicator: true,
  tooltipPosition: 'bottom',
  transition: _fade.Fade,
  triggerClick: true,
  triggerFocus: true,
  triggerHover: true
};

Tooltip.LinkWith = LinkWithTooltip;

exports.default = Tooltip;