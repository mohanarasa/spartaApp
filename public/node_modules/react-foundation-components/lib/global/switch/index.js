'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadioSwitch = exports.Switch = exports.SwitchPadelLabel = exports.SwitchUncheckedLabel = exports.SwitchCheckedLabel = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _batching = require('uncontrollable/batching');

var _batching2 = _interopRequireDefault(_batching);

var _includes = require('lodash/includes');

var _includes2 = _interopRequireDefault(_includes);

var _noop = require('lodash/noop');

var _noop2 = _interopRequireDefault(_noop);

var _constants = require('../../util/constants');

var _visibility = require('../visibility');

var _styles = {};

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cxStyles = _bind2.default.bind(_styles2.default);

function createCheckedLabel(baseClassName) {
  var displayName = arguments.length <= 1 || arguments[1] === undefined ? 'SwitchCheckedLabelBase' : arguments[1];

  var SwitchCheckedLabelBase = function SwitchCheckedLabelBase(_ref) {
    var className = _ref.className;
    var restProps = (0, _objectWithoutProperties3.default)(_ref, ['className']);

    var classNames = (0, _classnames2.default)(className, cxStyles(baseClassName));

    return _react2.default.createElement(_visibility.HideForScreenReader, (0, _extends3.default)({}, restProps, { className: classNames }));
  };

  SwitchCheckedLabelBase.displayName = displayName;
  SwitchCheckedLabelBase.propTypes = {
    className: _react.PropTypes.string
  };

  return SwitchCheckedLabelBase;
}

var SwitchCheckedLabel = exports.SwitchCheckedLabel = createCheckedLabel('switch-active', 'SwitchCheckedLabel');

var SwitchUncheckedLabel = exports.SwitchUncheckedLabel = createCheckedLabel('switch-inactive', 'SwitchUncheckedLabel');

var SwitchPadelLabel = exports.SwitchPadelLabel = function SwitchPadelLabel(props) {
  return _react2.default.createElement(_visibility.ShowForScreenReader, props);
};

var SwitchControlled = function SwitchControlled(_ref2) {
  var checked = _ref2.checked;
  var children = _ref2.children;
  var className = _ref2.className;
  var containerClassName = _ref2.containerClassName;
  var containerStyle = _ref2.containerStyle;
  var eventKey = _ref2.eventKey;
  var id = _ref2.id;
  var onChange = _ref2.onChange;
  var onSelect = _ref2.onSelect;
  var onToggle = _ref2.onToggle;
  var paddleClassName = _ref2.paddleClassName;
  var paddleStyle = _ref2.paddleStyle;
  var size = _ref2.size;
  var restProps = (0, _objectWithoutProperties3.default)(_ref2, ['checked', 'children', 'className', 'containerClassName', 'containerStyle', 'eventKey', 'id', 'onChange', 'onSelect', 'onToggle', 'paddleClassName', 'paddleStyle', 'size']);

  var containerClassNames = (0, _classnames2.default)(containerClassName, cxStyles('switch', (0, _defineProperty3.default)({}, size, (0, _includes2.default)(_constants.COMPONENT_SIZES, size))));
  var classNames = (0, _classnames2.default)(className, cxStyles('switch-input'));
  var paddleClassNames = (0, _classnames2.default)(paddleClassName, cxStyles('switch-paddle'));
  var onInputChange = function onInputChange() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (onChange) {
      onChange.apply(undefined, args);
    }

    if (onToggle) {
      onToggle.apply(undefined, [!checked].concat(args));
    }

    if (onSelect) {
      onSelect.apply(undefined, [eventKey].concat(args));
    }
  };
  var onLabelClick = function onLabelClick() {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var event = args[0];


    event.preventDefault();

    onInputChange.apply(undefined, args);
  };

  return _react2.default.createElement(
    'div',
    { className: containerClassNames, style: containerStyle },
    _react2.default.createElement('input', (0, _extends3.default)({}, restProps, {
      checked: checked,
      className: classNames,
      id: id,
      onChange: onInputChange,
      type: 'checkbox'
    })),
    _react2.default.createElement(
      'label',
      {
        className: paddleClassNames,
        htmlFor: id,
        onClick: onLabelClick,
        style: paddleStyle
      },
      children
    )
  );
};

SwitchControlled.propTypes = {
  checked: _react.PropTypes.bool,
  children: _react.PropTypes.node,
  className: _react.PropTypes.string,
  containerClassName: _react.PropTypes.string,
  containerStyle: _react.PropTypes.object,
  eventKey: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  id: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  onChange: _react.PropTypes.func,
  onSelect: _react.PropTypes.func,
  onToggle: _react.PropTypes.func,
  paddleClassName: _react.PropTypes.string,
  paddleStyle: _react.PropTypes.object,
  size: _react.PropTypes.oneOf(_constants.COMPONENT_SIZES)
};

var Switch = exports.Switch = (0, _batching2.default)(SwitchControlled, { checked: 'onToggle' });
Switch.displayName = 'Switch';

var RadioSwitchControlled = function RadioSwitchControlled(_ref3) {
  var activeKey = _ref3.activeKey;
  var children = _ref3.children;
  var onSelect = _ref3.onSelect;
  var size = _ref3.size;
  var restProps = (0, _objectWithoutProperties3.default)(_ref3, ['activeKey', 'children', 'onSelect', 'size']);

  var clonedChildren = _react.Children.map(children, function (child) {
    if ((0, _react.isValidElement)(child)) {
      return (0, _react.cloneElement)(child, {
        checked: child.props.eventKey === activeKey,
        onSelect: onSelect,
        onToggle: _noop2.default,
        size: size
      });
    }

    return child;
  });

  return _react2.default.createElement(
    'div',
    restProps,
    clonedChildren
  );
};

RadioSwitchControlled.propTypes = {
  activeKey: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  children: _react.PropTypes.node,
  onSelect: _react.PropTypes.func,
  size: _react.PropTypes.oneOf(_constants.COMPONENT_SIZES)
};

var RadioSwitch = exports.RadioSwitch = (0, _batching2.default)(RadioSwitchControlled, { activeKey: 'onSelect' });
RadioSwitch.displayName = 'RadioSwitch';

Switch.Radio = RadioSwitch;
Switch.CheckedLabel = SwitchCheckedLabel;
Switch.UncheckedLabel = SwitchUncheckedLabel;
Switch.PadelLabel = SwitchPadelLabel;

exports.default = Switch;