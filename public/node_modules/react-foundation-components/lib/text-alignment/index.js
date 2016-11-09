'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextAlignment = undefined;

var _constants = require('../util/constants');

var _createWrapperComponent = require('../util/create-wrapper-component');

var _createWrapperComponent2 = _interopRequireDefault(_createWrapperComponent);

var _screenSize = require('../util/screen-size');

var _styles = require('./_styles.scss');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var textAlignmentProps = (0, _screenSize.createScreenSizeProps)(_constants.TEXT_ALIGNMENT_CLASS_NAMES);

var TextAlignment = exports.TextAlignment = (0, _createWrapperComponent2.default)({
  displayName: 'TextAlignment',
  styles: _styles2.default,
  propTypes: (0, _screenSize.createScreenSizePropTypes)(textAlignmentProps),
  mapProps: function mapProps(props) {
    return (0, _screenSize.createScreenSizeClassNames)(textAlignmentProps, props);
  },
  defaultComponentClass: 'div'
});

exports.default = TextAlignment;