'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormField = exports.FormFieldButton = exports.FormFieldInline = exports.FormFieldHelp = exports.FormFieldError = exports.FormFieldLabel = exports.FormFieldInput = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _bind = require('classnames');

var _bind2 = _interopRequireDefault(_bind);

var _includes = require('lodash/includes');

var _includes2 = _interopRequireDefault(_includes);

var _isBlank = require('underscore.string/isBlank');

var _isBlank2 = _interopRequireDefault(_isBlank);

var _elementType = require('react-prop-types/lib/elementType');

var _elementType2 = _interopRequireDefault(_elementType);

var _constants = require('../../util/constants');

var _textAlignment = require('../text-alignment');

var _button = require('../button');

var _grid = require('../grid-flex');

var _styles = {};

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cxStyles = _bind2.default.bind(_styles2.default);

function splitColumnProps(props) {
  var columnProps = {};
  var childProps = {};

  (0, _keys2.default)(props).forEach(function (prop) {
    var propValue = props[prop];

    if (prop !== 'children' && prop !== 'className' && prop !== 'style' && prop !== 'componentClass' && _grid.Column.propTypes[prop]) {
      columnProps[prop] = propValue;
    } else {
      childProps[prop] = propValue;
    }
  });

  return { columnProps: columnProps, childProps: childProps };
}

var ColumnWrapper = function ColumnWrapper(_ref) {
  var column = _ref.column;
  var columnClassName = _ref.columnClassName;
  var columnStyle = _ref.columnStyle;
  var columnComponentClass = _ref.columnComponentClass;
  var ChildComponentClass = _ref.childComponentClass;
  var restProps = (0, _objectWithoutProperties3.default)(_ref, ['column', 'columnClassName', 'columnStyle', 'columnComponentClass', 'childComponentClass']);

  if (column) {
    var _splitColumnProps = splitColumnProps(restProps);

    var columnProps = _splitColumnProps.columnProps;
    var childProps = _splitColumnProps.childProps;


    return _react2.default.createElement(
      _grid.Column,
      (0, _extends3.default)({}, columnProps, {
        className: columnClassName,
        style: columnStyle,
        componentClass: columnComponentClass
      }),
      _react2.default.createElement(ChildComponentClass, childProps)
    );
  }

  return _react2.default.createElement(ChildComponentClass, restProps);
};

ColumnWrapper.propTypes = {
  column: _react.PropTypes.bool,
  columnClassName: _react.PropTypes.string,
  columnStyle: _react.PropTypes.shape({}),
  columnComponentClass: _elementType2.default,
  childComponentClass: _elementType2.default
};

var FormFieldInput = exports.FormFieldInput = function FormFieldInput(_ref2) {
  var className = _ref2.className;
  var error = _ref2.error;
  var formFieldId = _ref2.formFieldId;
  var id = _ref2.id;
  var inline = _ref2.inline;
  var type = _ref2.type;
  var restProps = (0, _objectWithoutProperties3.default)(_ref2, ['className', 'error', 'formFieldId', 'id', 'inline', 'type']);

  var classNames = (0, _classnames2.default)(className, cxStyles({ 'is-invalid-input': error, 'input-group-field': inline }));
  var props = (0, _extends3.default)({}, restProps, {
    className: classNames,
    id: (0, _isBlank2.default)(formFieldId) ? id : formFieldId
  });
  var ComponentClass = null;

  switch (type) {
    case 'select':
      ComponentClass = 'select';
      break;
    case 'textarea':
      ComponentClass = 'textarea';
      break;
    case 'static':
      ComponentClass = 'p';
      break;
    default:
      ComponentClass = 'input';
      props.type = type;
  }

  return _react2.default.createElement(ColumnWrapper, (0, _extends3.default)({}, props, { childComponentClass: ComponentClass }));
};

FormFieldInput.propTypes = {
  className: _react.PropTypes.string,
  error: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.bool]),
  formFieldId: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  id: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  inline: _react.PropTypes.bool,
  type: _react.PropTypes.string
};
FormFieldInput.defaultProps = {
  type: 'text'
};

var FormFieldLabel = exports.FormFieldLabel = function FormFieldLabel(_ref3) {
  var _cxStyles;

  var className = _ref3.className;
  var middle = _ref3.middle;
  var error = _ref3.error;
  var formFieldId = _ref3.formFieldId;
  var htmlFor = _ref3.htmlFor;
  var id = _ref3.id;
  var inline = _ref3.inline;
  var restProps = (0, _objectWithoutProperties3.default)(_ref3, ['className', 'middle', 'error', 'formFieldId', 'htmlFor', 'id', 'inline']);

  var classNames = (0, _classnames2.default)(className, cxStyles((_cxStyles = {
    middle: middle && !(0, _includes2.default)(_constants.LARGER_SCREEN_SIZES, middle)
  }, (0, _defineProperty3.default)(_cxStyles, middle + '-middle', (0, _includes2.default)(_constants.LARGER_SCREEN_SIZES, middle)), (0, _defineProperty3.default)(_cxStyles, 'is-invalid-label', error), (0, _defineProperty3.default)(_cxStyles, 'input-group-label', inline), _cxStyles)));
  var labelForId = (0, _isBlank2.default)(formFieldId) ? htmlFor : formFieldId;
  var labelId = (0, _isBlank2.default)(formFieldId) ? id : '' + formFieldId + (inline ? 'Inline' : '') + 'Label';

  return _react2.default.createElement(ColumnWrapper, (0, _extends3.default)({}, restProps, {
    childComponentClass: _textAlignment.TextAlignment,
    componentClass: 'label',
    className: classNames,
    htmlFor: labelForId,
    id: labelId
  }));
};

FormFieldLabel.propTypes = {
  className: _react.PropTypes.string,
  middle: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(_constants.SCREEN_SIZES)]),
  error: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.bool]),
  formFieldId: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  htmlFor: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  id: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  inline: _react.PropTypes.bool
};

var FormFieldError = exports.FormFieldError = function FormFieldError(_ref4) {
  var className = _ref4.className;
  var error = _ref4.error;
  var formFieldId = _ref4.formFieldId;
  var id = _ref4.id;
  var restProps = (0, _objectWithoutProperties3.default)(_ref4, ['className', 'error', 'formFieldId', 'id']);

  var classNames = (0, _classnames2.default)(className, cxStyles('form-error', { 'is-visible': error }));
  var errorId = (0, _isBlank2.default)(formFieldId) ? id : formFieldId + 'Error';

  return _react2.default.createElement(ColumnWrapper, (0, _extends3.default)({}, restProps, {
    childComponentClass: 'span',
    className: classNames,
    id: errorId
  }));
};

FormFieldError.propTypes = {
  className: _react.PropTypes.string,
  error: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.bool]),
  formFieldId: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  id: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number])
};

var FormFieldHelp = exports.FormFieldHelp = function FormFieldHelp(_ref5) {
  var className = _ref5.className;
  var error = _ref5.error;
  var formFieldId = _ref5.formFieldId;
  var id = _ref5.id;
  var restProps = (0, _objectWithoutProperties3.default)(_ref5, ['className', 'error', 'formFieldId', 'id']);

  var classNames = (0, _classnames2.default)(className, cxStyles('help-text'));
  var helpId = (0, _isBlank2.default)(formFieldId) ? id : formFieldId + 'Help';

  return _react2.default.createElement(ColumnWrapper, (0, _extends3.default)({}, restProps, {
    childComponentClass: 'p',
    className: classNames,
    id: helpId
  }));
};

FormFieldHelp.propTypes = {
  className: _react.PropTypes.string,
  error: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.bool]),
  formFieldId: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  id: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number])
};

var FormFieldInline = exports.FormFieldInline = function FormFieldInline(_ref6) {
  var children = _ref6.children;
  var className = _ref6.className;
  var error = _ref6.error;
  var formFieldId = _ref6.formFieldId;
  var id = _ref6.id;
  var restProps = (0, _objectWithoutProperties3.default)(_ref6, ['children', 'className', 'error', 'formFieldId', 'id']);

  var classNames = (0, _classnames2.default)(className, cxStyles('input-group'));
  var inlineId = (0, _isBlank2.default)(formFieldId) ? id : formFieldId + 'Inline';
  var clonedChildren = _react.Children.map(children, function (child) {
    if ((0, _react.isValidElement)(child)) {
      return (0, _react.cloneElement)(child, {
        error: error,
        inline: true,
        formFieldId: formFieldId
      });
    }

    return child;
  });

  return _react2.default.createElement(
    ColumnWrapper,
    (0, _extends3.default)({}, restProps, {
      childComponentClass: 'div',
      className: classNames,
      id: inlineId
    }),
    clonedChildren
  );
};

FormFieldInline.propTypes = {
  children: _react.PropTypes.node,
  className: _react.PropTypes.string,
  error: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.bool]),
  formFieldId: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  id: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number])
};

var FormFieldButton = exports.FormFieldButton = function FormFieldButton(_ref7) {
  var containerClassName = _ref7.containerClassName;
  var containerStyle = _ref7.containerStyle;
  var error = _ref7.error;
  var formFieldId = _ref7.formFieldId;
  var id = _ref7.id;
  var inline = _ref7.inline;
  var restProps = (0, _objectWithoutProperties3.default)(_ref7, ['containerClassName', 'containerStyle', 'error', 'formFieldId', 'id', 'inline']);

  var buttonId = (0, _isBlank2.default)(formFieldId) ? id : '' + formFieldId + (inline ? 'Inline' : '') + 'Button';

  if (inline) {
    var containerClassNames = (0, _classnames2.default)(containerClassName, cxStyles('input-group-button'));

    return _react2.default.createElement(
      'div',
      { className: containerClassNames, style: containerStyle },
      _react2.default.createElement(_button.Button, (0, _extends3.default)({}, restProps, { id: buttonId }))
    );
  }

  return _react2.default.createElement(ColumnWrapper, (0, _extends3.default)({}, restProps, { childComponentClass: 'Button', id: buttonId }));
};

FormFieldButton.propTypes = {
  containerClassName: _react.PropTypes.string,
  containerStyle: _react.PropTypes.shape({}),
  error: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.bool]),
  formFieldId: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  id: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  inline: _react.PropTypes.bool
};

var FormField = exports.FormField = function FormField(_ref8) {
  var children = _ref8.children;
  var className = _ref8.className;
  var error = _ref8.error;
  var id = _ref8.id;
  var grid = _ref8.grid;
  var restProps = (0, _objectWithoutProperties3.default)(_ref8, ['children', 'className', 'error', 'id', 'grid']);

  var ComponentClass = grid ? _grid.Row : 'div';
  var classNames = (0, _classnames2.default)(className, cxStyles('form-field'));
  var containerId = (0, _isBlank2.default)(id) ? null : id + 'Container';
  var clonedChildren = _react.Children.map(children, function (child) {
    if ((0, _react.isValidElement)(child)) {
      return (0, _react.cloneElement)(child, {
        error: error,
        formFieldId: id,
        column: grid
      });
    }

    return child;
  });

  return _react2.default.createElement(
    ComponentClass,
    (0, _extends3.default)({}, restProps, { className: classNames, id: containerId }),
    clonedChildren
  );
};

FormField.propTypes = {
  children: _react.PropTypes.node,
  className: _react.PropTypes.string,
  error: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.bool]),
  id: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  grid: _react.PropTypes.bool
};

FormField.Input = FormFieldInput;
FormField.Label = FormFieldLabel;
FormField.Help = FormFieldHelp;
FormField.Error = FormFieldError;
FormField.Inline = FormFieldInline;
FormField.Button = FormFieldButton;

exports.default = FormField;