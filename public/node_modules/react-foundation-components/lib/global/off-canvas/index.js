'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OffCanvasContainer = exports.OffCanvasContent = exports.OffCanvas = undefined;

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

var _styles = {};

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cxStyles = _bind2.default.bind(_styles2.default);

var OffCanvas = exports.OffCanvas = function OffCanvas(_ref) {
  var _cxStyles;

  var className = _ref.className;
  var position = _ref.position;
  var revealFor = _ref.revealFor;
  var restProps = (0, _objectWithoutProperties3.default)(_ref, ['className', 'position', 'revealFor']);

  var classNames = (0, _classnames2.default)(className, cxStyles('off-canvas', (_cxStyles = {}, (0, _defineProperty3.default)(_cxStyles, 'position-' + position, (0, _includes2.default)(_constants.OFF_CANVAS_POSITIONS, position)), (0, _defineProperty3.default)(_cxStyles, 'reveal-for-' + revealFor, (0, _includes2.default)(_constants.LARGER_SCREEN_SIZES, revealFor)), _cxStyles)));

  return _react2.default.createElement('div', (0, _extends3.default)({}, restProps, { className: classNames }));
};

OffCanvas.propTypes = {
  className: _react.PropTypes.string,
  position: _react.PropTypes.oneOf(_constants.OFF_CANVAS_POSITIONS),
  revealFor: _react.PropTypes.oneOf(_constants.LARGER_SCREEN_SIZES)
};

var OffCanvasContent = exports.OffCanvasContent = function OffCanvasContent(_ref2) {
  var blocked = _ref2.blocked;
  var children = _ref2.children;
  var className = _ref2.className;
  var contentBlockerClassName = _ref2.contentBlockerClassName;
  var contentBlockerStyle = _ref2.contentBlockerStyle;
  var onContentBlockerClick = _ref2.onContentBlockerClick;
  var restProps = (0, _objectWithoutProperties3.default)(_ref2, ['blocked', 'children', 'className', 'contentBlockerClassName', 'contentBlockerStyle', 'onContentBlockerClick']);

  var classNames = (0, _classnames2.default)(className, cxStyles('off-canvas-content'));
  var contentBlockerClassNames = (0, _classnames2.default)(contentBlockerClassName, cxStyles('js-off-canvas-exit'));

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({}, restProps, { className: classNames }),
    children,
    _react2.default.createElement('div', {
      className: contentBlockerClassNames,
      onClick: onContentBlockerClick,
      style: blocked ? (0, _extends3.default)({}, contentBlockerStyle, { display: 'block' }) : contentBlockerStyle
    })
  );
};

OffCanvasContent.propTypes = {
  blocked: _react.PropTypes.bool,
  children: _react.PropTypes.node,
  className: _react.PropTypes.string,
  contentBlockerClassName: _react.PropTypes.string,
  contentBlockerStyle: _react.PropTypes.shape({}),
  onContentBlockerClick: _react.PropTypes.func
};

var OffCanvasContainer = exports.OffCanvasContainer = function OffCanvasContainer(_ref3) {
  var children = _ref3.children;
  var className = _ref3.className;
  var innerClassName = _ref3.innerClassName;
  var innerStyle = _ref3.innerStyle;
  var open = _ref3.open;
  var restProps = (0, _objectWithoutProperties3.default)(_ref3, ['children', 'className', 'innerClassName', 'innerStyle', 'open']);

  var blocked = (0, _includes2.default)(_constants.OFF_CANVAS_POSITIONS, open);
  var classNames = (0, _classnames2.default)(className, cxStyles('off-canvas-wrapper'));
  var innerClassNames = (0, _classnames2.default)(innerClassName, cxStyles('off-canvas-wrapper-inner', (0, _defineProperty3.default)({}, 'is-open-' + open, blocked)));
  var clonedChildren = _react.Children.map(children, function (child) {
    if ((0, _react.isValidElement)(child) && child.type === OffCanvasContent) {
      return (0, _react.cloneElement)(child, { blocked: blocked });
    }

    return child;
  });

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({}, restProps, { className: classNames }),
    _react2.default.createElement(
      'div',
      { className: innerClassNames, style: innerStyle },
      clonedChildren
    )
  );
};

OffCanvasContainer.propTypes = {
  children: _react.PropTypes.node,
  className: _react.PropTypes.string,
  innerClassName: _react.PropTypes.string,
  innerStyle: _react.PropTypes.shape({}),
  open: _react.PropTypes.oneOf(_constants.OFF_CANVAS_POSITIONS)
};

OffCanvas.Content = OffCanvasContent;
OffCanvas.Container = OffCanvasContainer;

exports.default = OffCanvas;