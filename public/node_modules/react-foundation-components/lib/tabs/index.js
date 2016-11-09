'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tabs = exports.Tab = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

var _batching = require('uncontrollable/batching');

var _batching2 = _interopRequireDefault(_batching);

var _isBlank = require('underscore.string/isBlank');

var _isBlank2 = _interopRequireDefault(_isBlank);

var _styles = require('./_styles.scss');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cxStyles = _bind2.default.bind(_styles2.default);

var Tab = exports.Tab = function Tab(_ref) {
  var active = _ref.active;
  var className = _ref.className;
  var id = _ref.id;
  var eventKey = _ref.eventKey;
  var restProps = (0, _objectWithoutProperties3.default)(_ref, ['active', 'className', 'id', 'eventKey']);

  var classNames = (0, _classnames2.default)(className, cxStyles('tabs-panel', { 'is-active': active }));

  return _react2.default.createElement('div', (0, _extends3.default)({}, restProps, {
    'aria-hidden': !active,
    'aria-labelledby': (0, _isBlank2.default)(id) ? null : id + 'Label',
    className: classNames,
    id: id,
    role: 'tabpanel'
  }));
};

Tab.propTypes = {
  active: _react.PropTypes.bool,
  className: _react.PropTypes.string,
  id: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  eventKey: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number])
};

var TabTitle = function TabTitle(_ref2) {
  var active = _ref2.active;
  var containerClassName = _ref2.containerClassName;
  var containerStyle = _ref2.containerStyle;
  var eventKey = _ref2.eventKey;
  var onSelect = _ref2.onSelect;
  var tabId = _ref2.tabId;
  var restProps = (0, _objectWithoutProperties3.default)(_ref2, ['active', 'containerClassName', 'containerStyle', 'eventKey', 'onSelect', 'tabId']);

  var classNames = (0, _classnames2.default)(containerClassName, cxStyles('tabs-title', { 'is-active': active }));
  var onClick = function onClick() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var event = args[0];


    event.preventDefault();

    if (onSelect && !(0, _isBlank2.default)(eventKey)) {
      onSelect.apply(undefined, [eventKey].concat(args));
    }
  };

  return _react2.default.createElement(
    'li',
    {
      className: classNames,
      role: 'presentation',
      style: containerStyle
    },
    _react2.default.createElement('a', (0, _extends3.default)({}, restProps, {
      'aria-controls': tabId,
      'aria-selected': active,
      href: '#' + ((0, _isBlank2.default)(tabId) ? '' : tabId),
      onClick: onClick,
      role: 'tab'
    }))
  );
};

TabTitle.propTypes = {
  active: _react.PropTypes.bool,
  containerClassName: _react.PropTypes.string,
  containerStyle: _react.PropTypes.object,
  eventKey: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  onSelect: _react.PropTypes.func,
  tabId: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number])
};

var TabsHeader = function TabsHeader(_ref3) {
  var className = _ref3.className;
  var vertical = _ref3.vertical;
  var restProps = (0, _objectWithoutProperties3.default)(_ref3, ['className', 'vertical']);

  var classNames = (0, _classnames2.default)(className, cxStyles('tabs', { vertical: vertical }));

  return _react2.default.createElement('div', (0, _extends3.default)({}, restProps, { className: classNames }));
};

TabsHeader.propTypes = {
  className: _react.PropTypes.string,
  vertical: _react.PropTypes.bool
};

var TabsContent = function TabsContent(_ref4) {
  var className = _ref4.className;
  var restProps = (0, _objectWithoutProperties3.default)(_ref4, ['className']);

  var classNames = (0, _classnames2.default)(className, cxStyles('tabs-content'));

  return _react2.default.createElement('div', (0, _extends3.default)({}, restProps, { className: classNames }));
};

TabsContent.propTypes = {
  className: _react.PropTypes.string
};

var TabsControlled = function TabsControlled(_ref5) {
  var activeKey = _ref5.activeKey;
  var children = _ref5.children;
  var contentClassName = _ref5.contentClassName;
  var contentStyle = _ref5.contentStyle;
  var headerClassName = _ref5.headerClassName;
  var headerStyle = _ref5.headerStyle;
  var onSelect = _ref5.onSelect;
  var vertical = _ref5.vertical;
  var restProps = (0, _objectWithoutProperties3.default)(_ref5, ['activeKey', 'children', 'contentClassName', 'contentStyle', 'headerClassName', 'headerStyle', 'onSelect', 'vertical']);

  var headerChildren = _react.Children.map(children, function (child) {
    if ((0, _react.isValidElement)(child)) {
      return _react2.default.createElement(
        TabTitle,
        (0, _extends3.default)({}, child.props, {
          active: child.props.eventKey === activeKey,
          id: (0, _isBlank2.default)(child.props.id) ? null : child.props.id + 'Title',
          onSelect: onSelect,
          tabId: child.props.id
        }),
        child.props.title
      );
    }

    return null;
  });
  var contentChildren = _react.Children.map(children, function (child) {
    if ((0, _react.isValidElement)(child)) {
      return (0, _react.cloneElement)(child, { active: activeKey === child.props.eventKey });
    }

    return child;
  });

  return _react2.default.createElement(
    'div',
    restProps,
    _react2.default.createElement(
      TabsHeader,
      { className: headerClassName, style: headerStyle, vertical: vertical },
      headerChildren
    ),
    _react2.default.createElement(
      TabsContent,
      { className: contentClassName, style: contentStyle },
      contentChildren
    )
  );
};

TabsControlled.propTypes = {
  activeKey: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  children: _react.PropTypes.node,
  contentClassName: _react.PropTypes.string,
  contentStyle: _react.PropTypes.object,
  headerClassName: _react.PropTypes.string,
  headerStyle: _react.PropTypes.object,
  onSelect: _react.PropTypes.func,
  vertical: _react.PropTypes.bool
};

var Tabs = exports.Tabs = (0, _batching2.default)(TabsControlled, { activeKey: 'onSelect' });
Tabs.displayName = 'Tabs';

Tabs.Tab = Tab;

exports.default = Tabs;