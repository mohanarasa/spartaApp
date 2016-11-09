'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkWithDropdown = exports.Dropdown = undefined;

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

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

var _includes = require('lodash/includes');

var _includes2 = _interopRequireDefault(_includes);

var _constants = require('../util/constants');

var _overlayTrigger = require('../util/overlay-trigger');

var _overlayTrigger2 = _interopRequireDefault(_overlayTrigger);

var _styles = require('./_styles.scss');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cxStyles = _bind2.default.bind(_styles2.default);
var DROPDOWN_ALIGNMENTS_FROM_POSITION = {
  top: 'left',
  bottom: 'left',
  left: 'top',
  right: 'top'
};

var Dropdown = exports.Dropdown = function Dropdown(_ref) {
  var _cxStyles;

  var className = _ref.className;
  var position = _ref.position;
  var size = _ref.size;
  var restProps = (0, _objectWithoutProperties3.default)(_ref, ['className', 'position', 'size']);

  var classNames = (0, _classnames2.default)(className, cxStyles('dropdown-pane', 'is-open', (_cxStyles = {}, (0, _defineProperty3.default)(_cxStyles, position, (0, _includes2.default)(_constants.OVERLAY_POSITIONS_INTERNAL, position)), (0, _defineProperty3.default)(_cxStyles, size, (0, _includes2.default)(_constants.COMPONENT_SIZES, size)), _cxStyles)));

  return _react2.default.createElement('div', (0, _extends3.default)({}, restProps, { className: classNames }));
};

Dropdown.propTypes = {
  className: _react.PropTypes.string,
  position: _react.PropTypes.oneOf(_constants.OVERLAY_POSITIONS),
  size: _react.PropTypes.oneOf(_constants.COMPONENT_SIZES)
};
Dropdown.defaultProps = {
  position: 'bottom'
};

var DropdownOverlay = function DropdownOverlay(_ref2) {
  var placement = _ref2.placement;
  var arrowOffsetLeft = _ref2.arrowOffsetLeft;
  var arrowOffsetTop = _ref2.arrowOffsetTop;
  var positionLeft = _ref2.positionLeft;
  var positionTop = _ref2.positionTop;
  var restProps = (0, _objectWithoutProperties3.default)(_ref2, ['placement', 'arrowOffsetLeft', 'arrowOffsetTop', 'positionLeft', 'positionTop']);
  return _react2.default.createElement(Dropdown, restProps);
};

var LinkWithDropdown = exports.LinkWithDropdown = function LinkWithDropdown(_ref3) {
  var children = _ref3.children;
  var dropdownClassName = _ref3.dropdownClassName;
  var dropdownContent = _ref3.dropdownContent;
  var dropdownId = _ref3.dropdownId;
  var dropdownPosition = _ref3.dropdownPosition;
  var _ref3$dropdownAlignme = _ref3.dropdownAlignment;
  var dropdownAlignment = _ref3$dropdownAlignme === undefined ? DROPDOWN_ALIGNMENTS_FROM_POSITION[dropdownPosition] : _ref3$dropdownAlignme;
  var dropdownSize = _ref3.dropdownSize;
  var dropdownStyle = _ref3.dropdownStyle;
  var restProps = (0, _objectWithoutProperties3.default)(_ref3, ['children', 'dropdownClassName', 'dropdownContent', 'dropdownId', 'dropdownPosition', 'dropdownAlignment', 'dropdownSize', 'dropdownStyle']);

  var childProps = {
    'aria-haspopup': true,
    'aria-controls': dropdownId
  };
  var labelledBy = null;
  var clonedChild = null;

  if ((0, _react.isValidElement)(children)) {
    labelledBy = children.props.id;
    clonedChild = (0, _react.cloneElement)(children, childProps);
  } else {
    clonedChild = _react2.default.createElement(
      'span',
      childProps,
      children
    );
  }

  var dropdown = _react2.default.createElement(
    DropdownOverlay,
    {
      'aria-labelledby': labelledBy,
      className: dropdownClassName,
      id: dropdownId,
      position: dropdownPosition,
      size: dropdownSize,
      style: dropdownStyle
    },
    dropdownContent
  );

  return _react2.default.createElement(
    _overlayTrigger2.default,
    (0, _extends3.default)({}, restProps, {
      alignment: dropdownAlignment,
      overlay: dropdown,
      position: dropdownPosition
    }),
    clonedChild
  );
};

LinkWithDropdown.propTypes = {
  children: _react.PropTypes.node,
  dropdownAlignment: _react.PropTypes.oneOf(_constants.OVERLAY_ALIGNMENTS),
  dropdownClassName: _react.PropTypes.string,
  dropdownContent: _react.PropTypes.node,
  dropdownId: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  dropdownPosition: _react.PropTypes.oneOf(_constants.OVERLAY_POSITIONS),
  dropdownSize: _react.PropTypes.oneOf(_constants.COMPONENT_SIZES),
  dropdownStyle: _react.PropTypes.shape({})
};
LinkWithDropdown.defaultProps = {
  dropdownPosition: 'bottom',
  triggerClick: true,
  triggerOverlayHover: true
};

Dropdown.LinkWith = LinkWithDropdown;

exports.default = Dropdown;