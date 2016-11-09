'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Grid = exports.Column = exports.Row = undefined;

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _constants = require('../../util/constants');

var _createWrapperComponent = require('../../util/create-wrapper-component');

var _createWrapperComponent2 = _interopRequireDefault(_createWrapperComponent);

var _screenSize = require('../../util/screen-size');

var _styles = {};

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rowProps = (0, _screenSize.createScreenSizeProps)(_constants.GRID_ROW_CLASS_NAMES);
var columnProps = (0, _screenSize.createScreenSizeProps)(_constants.GRID_COLUMN_CLASS_NAMES);

var Row = exports.Row = (0, _createWrapperComponent2.default)({
  displayName: 'Row',
  styles: _styles2.default,
  propTypes: (0, _extends3.default)({}, (0, _screenSize.createScreenSizePropTypes)(rowProps), {
    collapse: _react.PropTypes.bool,
    expanded: _react.PropTypes.bool
  }),
  mapProps: function mapProps(_ref) {
    var collapse = _ref.collapse;
    var expanded = _ref.expanded;
    var restProps = (0, _objectWithoutProperties3.default)(_ref, ['collapse', 'expanded']);

    var _createScreenSizeClas = (0, _screenSize.createScreenSizeClassNames)(rowProps, restProps);

    var classNames = _createScreenSizeClas.classNames;
    var props = _createScreenSizeClas.props;


    return {
      props: props,
      classNames: ['row', (0, _extends3.default)({}, classNames, { collapse: collapse, expanded: expanded })]
    };
  },
  defaultComponentClass: 'div'
});

var Column = exports.Column = (0, _createWrapperComponent2.default)({
  displayName: 'Column',
  styles: _styles2.default,
  propTypes: (0, _extends3.default)({}, (0, _screenSize.createScreenSizePropTypes)(columnProps), {
    end: _react.PropTypes.bool
  }),
  mapProps: function mapProps(_ref2) {
    var end = _ref2.end;
    var restProps = (0, _objectWithoutProperties3.default)(_ref2, ['end']);

    var _createScreenSizeClas2 = (0, _screenSize.createScreenSizeClassNames)(columnProps, restProps);

    var classNames = _createScreenSizeClas2.classNames;
    var props = _createScreenSizeClas2.props;


    return {
      props: props,
      classNames: ['column', (0, _extends3.default)({}, classNames, { end: end })]
    };
  },
  defaultComponentClass: 'div'
});

var Grid = exports.Grid = { Row: Row, Column: Column };

exports.default = Grid;