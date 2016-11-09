'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FLEX_GRID_COLUMN_CLASS_NAMES = exports.FLEX_GRID_ROW_CLASS_NAMES = exports.FLEX_CHILD_CLASS_NAMES = exports.FLEX_PARENT_CLASS_NAMES = exports.GRID_COLUMN_CLASS_NAMES = exports.GRID_ROW_CLASS_NAMES = exports.TEXT_ALIGNMENT_CLASS_NAMES = exports.CENTERED_MODES = exports.COLLAPSE_MODES = exports.CLASS_NAME_TYPES = exports.FLEX_VERTICAL_ALIGNMENTS = exports.FLEX_HORIZONTAL_ALIGNMENTS = exports.MEDIA_OBJECT_SECTION_ALIGNMENTS = exports.MENU_ALIGNMENTS = exports.TEXT_ALIGNMENTS = exports.FLOAT_POSITIONS = exports.OVERLAY_ALIGNMENTS = exports.OVERLAY_POSITIONS = exports.OVERLAY_POSITIONS_INTERNAL = exports.TOP_BAR_POSITIONS = exports.TITLE_BAR_POSITIONS = exports.OFF_CANVAS_POSITIONS = exports.CENTER_POSITION = exports.MODAL_SIZES = exports.COMPONENT_SIZES = exports.CALLOUT_SIZES = exports.COMPONENT_COLORS = exports.COMPONENT_ALTERNATIVE_COLORS = exports.SCREEN_ORIENTATIONS = exports.LARGER_SCREEN_SIZES = exports.SCREEN_SIZES = exports.BUTTON_GROUP_STACK_SCREEN_SIZES = exports.SCREEN_SIZE_SMALL = undefined;

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _toArray2 = require('babel-runtime/helpers/toArray');

var _toArray3 = _interopRequireDefault(_toArray2);

var _keyMirrorArray = require('../key-mirror-array');

var _keyMirrorArray2 = _interopRequireDefault(_keyMirrorArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SCREEN_SIZE_SMALL = exports.SCREEN_SIZE_SMALL = 'small';
var BUTTON_GROUP_STACK_SCREEN_SIZES = exports.BUTTON_GROUP_STACK_SCREEN_SIZES = [SCREEN_SIZE_SMALL, 'medium'];
var SCREEN_SIZES = exports.SCREEN_SIZES = [].concat(BUTTON_GROUP_STACK_SCREEN_SIZES, ['large', 'xlarge', 'xxlarge']);

var _SCREEN_SIZES = (0, _toArray3.default)(SCREEN_SIZES);

var LARGER_SCREEN_SIZES = _SCREEN_SIZES.slice(1);

exports.LARGER_SCREEN_SIZES = LARGER_SCREEN_SIZES;
var SCREEN_ORIENTATIONS = exports.SCREEN_ORIENTATIONS = ['landscape', 'portrait'];

var COMPONENT_ALTERNATIVE_COLORS = exports.COMPONENT_ALTERNATIVE_COLORS = ['secondary', 'success', 'alert', 'warning'];
var COMPONENT_COLORS = exports.COMPONENT_COLORS = ['primary'].concat(COMPONENT_ALTERNATIVE_COLORS);

var CALLOUT_SIZES = exports.CALLOUT_SIZES = ['small', 'large'];
var COMPONENT_SIZES = exports.COMPONENT_SIZES = ['tiny'].concat(CALLOUT_SIZES);
var MODAL_SIZES = exports.MODAL_SIZES = [].concat((0, _toConsumableArray3.default)(COMPONENT_SIZES), ['full']);

var CENTER_POSITION = exports.CENTER_POSITION = 'center';
var OFF_CANVAS_POSITIONS = exports.OFF_CANVAS_POSITIONS = ['left', 'right'];
var TITLE_BAR_POSITIONS = exports.TITLE_BAR_POSITIONS = [].concat(OFF_CANVAS_POSITIONS);
var TOP_BAR_POSITIONS = exports.TOP_BAR_POSITIONS = [].concat(OFF_CANVAS_POSITIONS);
var OVERLAY_POSITIONS_INTERNAL = exports.OVERLAY_POSITIONS_INTERNAL = [].concat(OFF_CANVAS_POSITIONS, ['top']);
var OVERLAY_POSITIONS = exports.OVERLAY_POSITIONS = [].concat((0, _toConsumableArray3.default)(OVERLAY_POSITIONS_INTERNAL), ['bottom']);
var OVERLAY_ALIGNMENTS = exports.OVERLAY_ALIGNMENTS = [].concat((0, _toConsumableArray3.default)(OVERLAY_POSITIONS), [CENTER_POSITION]);
var FLOAT_POSITIONS = exports.FLOAT_POSITIONS = [].concat(OFF_CANVAS_POSITIONS, [CENTER_POSITION]);
var TEXT_ALIGNMENTS = exports.TEXT_ALIGNMENTS = [].concat((0, _toConsumableArray3.default)(FLOAT_POSITIONS), ['justify']);
var MENU_ALIGNMENTS = exports.MENU_ALIGNMENTS = [].concat((0, _toConsumableArray3.default)(FLOAT_POSITIONS));
var MEDIA_OBJECT_SECTION_ALIGNMENTS = exports.MEDIA_OBJECT_SECTION_ALIGNMENTS = ['middle', 'bottom'];
var FLEX_HORIZONTAL_ALIGNMENTS = exports.FLEX_HORIZONTAL_ALIGNMENTS = [].concat((0, _toConsumableArray3.default)(TEXT_ALIGNMENTS), ['spaced']);
var FLEX_VERTICAL_ALIGNMENTS = exports.FLEX_VERTICAL_ALIGNMENTS = ['top'].concat(MEDIA_OBJECT_SECTION_ALIGNMENTS, ['stretch']);

var CLASS_NAME_TYPES = exports.CLASS_NAME_TYPES = (0, _keyMirrorArray2.default)(['BOOL', 'RANGE', 'ENUM']);
var COLLAPSE_MODES = exports.COLLAPSE_MODES = ['collapse', 'uncollapse'];
var CENTERED_MODES = exports.CENTERED_MODES = ['centered', 'uncentered'];
var TEXT_ALIGNMENT_CLASS_NAMES = exports.TEXT_ALIGNMENT_CLASS_NAMES = [{
  baseClassName: 'text',
  basePropName: 'Alignment',
  type: CLASS_NAME_TYPES.ENUM,
  values: TEXT_ALIGNMENTS,
  flattenSmall: true
}];
var GRID_ROW_CLASS_NAMES = exports.GRID_ROW_CLASS_NAMES = [{
  baseClassName: '',
  basePropName: 'Collapse',
  type: CLASS_NAME_TYPES.ENUM,
  values: COLLAPSE_MODES
}, {
  baseClassName: 'up',
  basePropName: 'Up',
  type: CLASS_NAME_TYPES.RANGE,
  min: 1,
  max: 8
}];
var GRID_COLUMN_CLASS_NAMES = exports.GRID_COLUMN_CLASS_NAMES = [{
  baseClassName: '',
  basePropName: '',
  type: CLASS_NAME_TYPES.RANGE,
  min: 1,
  max: 12
}, {
  baseClassName: 'offset',
  basePropName: 'Offset',
  type: CLASS_NAME_TYPES.RANGE,
  min: 0,
  max: 11
}, {
  baseClassName: '',
  basePropName: 'Centered',
  type: CLASS_NAME_TYPES.ENUM,
  values: CENTERED_MODES
}, {
  baseClassName: 'push',
  basePropName: 'Push',
  type: CLASS_NAME_TYPES.RANGE,
  min: 1,
  max: 11
}, {
  baseClassName: 'pull',
  basePropName: 'Pull',
  type: CLASS_NAME_TYPES.RANGE,
  min: 1,
  max: 11
}];

var FLEX_PARENT_CLASS_NAMES = exports.FLEX_PARENT_CLASS_NAMES = [];
var FLEX_CHILD_CLASS_NAMES = exports.FLEX_CHILD_CLASS_NAMES = [{
  baseClassName: 'order',
  basePropName: 'Order',
  type: CLASS_NAME_TYPES.RANGE,
  min: 1,
  max: 6
}];
var FLEX_GRID_ROW_CLASS_NAMES = exports.FLEX_GRID_ROW_CLASS_NAMES = [{
  baseClassName: '',
  basePropName: 'Collapse',
  type: CLASS_NAME_TYPES.ENUM,
  values: COLLAPSE_MODES
}, {
  baseClassName: 'up',
  basePropName: 'Up',
  type: CLASS_NAME_TYPES.RANGE,
  min: 1,
  max: 8
}];
var FLEX_GRID_COLUMN_CLASS_NAMES = exports.FLEX_GRID_COLUMN_CLASS_NAMES = [{
  baseClassName: '',
  basePropName: '',
  type: CLASS_NAME_TYPES.RANGE,
  min: 1,
  max: 12
}, {
  baseClassName: 'offset',
  basePropName: 'Offset',
  type: CLASS_NAME_TYPES.RANGE,
  min: 0,
  max: 11
}];