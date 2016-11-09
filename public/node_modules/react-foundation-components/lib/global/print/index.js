'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Print = exports.HideForPrint = exports.ShowForPrint = undefined;

var _createWrapperComponent = require('../../util/create-wrapper-component');

var _createWrapperComponent2 = _interopRequireDefault(_createWrapperComponent);

var _styles = {};

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ShowForPrint = exports.ShowForPrint = (0, _createWrapperComponent2.default)({
  displayName: 'ShowOnlyForPrint',
  styles: _styles2.default,
  mapProps: function mapProps(props) {
    return { props: props, classNames: 'show-for-print' };
  }
});

var HideForPrint = exports.HideForPrint = (0, _createWrapperComponent2.default)({
  displayName: 'HideOnlyForPrint',
  styles: _styles2.default,
  mapProps: function mapProps(props) {
    return { props: props, classNames: 'hide-for-print' };
  }
});

var Print = exports.Print = { ShowFor: ShowForPrint, HideFor: HideForPrint };

exports.default = Print;