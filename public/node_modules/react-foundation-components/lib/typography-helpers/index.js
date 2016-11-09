'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TypographyHelpers = exports.Statistic = exports.UnbulletedList = exports.Lead = exports.Subheader = undefined;

var _createWrapperComponent = require('../util/create-wrapper-component');

var _createWrapperComponent2 = _interopRequireDefault(_createWrapperComponent);

var _styles = require('./_styles.scss');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Subheader = exports.Subheader = (0, _createWrapperComponent2.default)({
  displayName: 'Subheader',
  styles: _styles2.default,
  mapProps: function mapProps(props) {
    return { props: props, classNames: 'subheader' };
  }
});

var Lead = exports.Lead = (0, _createWrapperComponent2.default)({
  displayName: 'Lead',
  styles: _styles2.default,
  mapProps: function mapProps(props) {
    return { props: props, classNames: 'lead' };
  }
});

var UnbulletedList = exports.UnbulletedList = (0, _createWrapperComponent2.default)({
  displayName: 'UnbulletedList',
  styles: _styles2.default,
  mapProps: function mapProps(props) {
    return { props: props, classNames: 'no-bullet' };
  },
  defaultComponentClass: 'ul'
});

var Statistic = exports.Statistic = (0, _createWrapperComponent2.default)({
  displayName: 'Statistic',
  styles: _styles2.default,
  mapProps: function mapProps(props) {
    return { props: props, classNames: 'stat' };
  }
});

var TypographyHelpers = exports.TypographyHelpers = { Subheader: Subheader, Lead: Lead, UnbulletedList: UnbulletedList, Statistic: Statistic };

exports.default = TypographyHelpers;