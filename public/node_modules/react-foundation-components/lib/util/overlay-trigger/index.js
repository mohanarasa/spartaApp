'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _elementType = require('react-prop-types/lib/elementType');

var _elementType2 = _interopRequireDefault(_elementType);

var _componentOrElement = require('react-prop-types/lib/componentOrElement');

var _componentOrElement2 = _interopRequireDefault(_componentOrElement);

var _Overlay = require('react-overlays/lib/Overlay');

var _Overlay2 = _interopRequireDefault(_Overlay);

var _Transition = require('react-overlays/lib/Transition');

var _Transition2 = _interopRequireDefault(_Transition);

var _offset = require('dom-helpers/query/offset');

var _offset2 = _interopRequireDefault(_offset);

var _position = require('dom-helpers/query/position');

var _position2 = _interopRequireDefault(_position);

var _ownerDocument = require('react-overlays/lib/utils/ownerDocument');

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

var _getContainer = require('react-overlays/lib/utils/getContainer');

var _getContainer2 = _interopRequireDefault(_getContainer);

var _contains = require('dom-helpers/query/contains');

var _contains2 = _interopRequireDefault(_contains);

var _style = require('dom-helpers/style');

var _style2 = _interopRequireDefault(_style);

var _debounce = require('lodash/debounce');

var _debounce2 = _interopRequireDefault(_debounce);

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mouseOverOut(event, callback) {
  var target = event.currentTarget;
  var related = event.relatedTarget || event.nativeEvent.toElement;

  if (!related || related !== target && !(0, _contains2.default)(target, related)) {
    callback(event);
  }
}

function showOverlay(state) {
  var showClick = state.showClick;
  var showFocus = state.showFocus;
  var showHover = state.showHover;
  var overlayHoverCount = state.overlayHoverCount;


  return showClick || showFocus || showHover || overlayHoverCount > 0;
}

function adjustPosition(elem, getOverlayTarget, getOverlayContainer, position, alignment) {
  var target = getOverlayTarget();
  var container = getOverlayContainer();
  var targetPosition = container.tagName === 'BODY' ? (0, _offset2.default)(target) : (0, _position2.default)(target, container);

  if (position === 'top') {
    (0, _style2.default)(elem, 'top', targetPosition.top - parseInt((0, _style2.default)(elem, 'height'), 10) + 'px');
  } else if (position === 'bottom') {
    (0, _style2.default)(elem, 'top', targetPosition.top + targetPosition.height + 'px');
  } else if (position === 'left') {
    (0, _style2.default)(elem, 'left', targetPosition.left - parseInt((0, _style2.default)(elem, 'width'), 10) + 'px');
  } else if (position === 'right') {
    (0, _style2.default)(elem, 'left', targetPosition.left + targetPosition.width + 'px');
  }

  if (position === 'top' || position === 'bottom') {
    var leftOffset = 0;

    if (alignment !== 'left') {
      leftOffset = targetPosition.width - parseInt((0, _style2.default)(elem, 'width'), 10);

      if (alignment !== 'right') {
        leftOffset = leftOffset / 2;
      }
    }

    (0, _style2.default)(elem, 'left', targetPosition.left + leftOffset + 'px');
  } else if (position === 'left' || position === 'right') {
    var topOffset = 0;

    if (alignment !== 'top') {
      topOffset = targetPosition.height - parseInt((0, _style2.default)(elem, 'height'), 10);

      if (alignment !== 'bottom') {
        topOffset = topOffset / 2;
      }
    }

    (0, _style2.default)(elem, 'top', targetPosition.top + topOffset + 'px');
  }
}

// This is a hack to align overlay to edges of target instead of always centering it.
function hackTransition(CustomTransition, customHandleEntering) {
  var CombinedTransition = function CombinedTransition(_ref) {
    var onEntering = _ref.onEntering;
    var props = (0, _objectWithoutProperties3.default)(_ref, ['onEntering']);

    function handleEntering() {
      if (customHandleEntering) {
        customHandleEntering.apply(undefined, arguments);
      }

      if (onEntering) {
        onEntering.apply(undefined, arguments);
      }
    }

    if (CustomTransition) {
      return _react2.default.createElement(CustomTransition, (0, _extends3.default)({}, props, { onEntering: handleEntering }));
    }

    return _react2.default.createElement(_Transition2.default, (0, _extends3.default)({}, props, { onEntering: handleEntering, timeout: 0 }));
  };

  CombinedTransition.propTypes = {
    onEntering: _react.PropTypes.func
  };

  return CombinedTransition;
}

var OverlayTrigger = function (_Component) {
  (0, _inherits3.default)(OverlayTrigger, _Component);

  function OverlayTrigger() {
    var _ref2;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, OverlayTrigger);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref2 = OverlayTrigger.__proto__ || (0, _getPrototypeOf2.default)(OverlayTrigger)).call.apply(_ref2, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(OverlayTrigger, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var updateWindowResize = this.props.updateWindowResize;


      if (updateWindowResize) {
        window.addEventListener('resize', this.handleResize);
      }

      this.mountNode = document.createElement('div');
      this.renderOverlay();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.mountNode) {
        this.renderOverlay();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize);
      (0, _reactDom.unmountComponentAtNode)(this.mountNode);
      this.mountNode = null;
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;
      var show = this.state.show;

      var childProps = {
        'aria-expanded': show,
        onBlur: this.handleBlur,
        onClick: this.handleClick,
        onFocus: this.handleFocus,
        onMouseOut: this.handleMouseOut,
        onMouseOver: this.handleMouseOver
      };
      var clonedChild = null;

      if ((0, _react.isValidElement)(children)) {
        clonedChild = (0, _react.cloneElement)(children, childProps);
      } else {
        clonedChild = _react2.default.createElement(
          'span',
          childProps,
          children
        );
      }

      this.overlay = this.createOverlay();

      return clonedChild;
    }
  }]);
  return OverlayTrigger;
}(_react.Component);

OverlayTrigger.propTypes = {
  alignment: _react.PropTypes.oneOf(_constants.OVERLAY_ALIGNMENTS),
  children: _react.PropTypes.node,
  closeOnClickOutside: _react.PropTypes.bool,
  container: _react2.default.PropTypes.oneOfType([_componentOrElement2.default, _react2.default.PropTypes.func]),
  onBlur: _react.PropTypes.func,
  onClick: _react.PropTypes.func,
  onFocus: _react.PropTypes.func,
  onMouseOut: _react.PropTypes.func,
  onMouseOver: _react.PropTypes.func,
  overlay: _react.PropTypes.node,
  position: _react.PropTypes.oneOf(_constants.OVERLAY_POSITIONS),
  transition: _elementType2.default,
  triggerClick: _react.PropTypes.bool,
  triggerFocus: _react.PropTypes.bool,
  triggerHover: _react.PropTypes.bool,
  triggerOverlayHover: _react.PropTypes.bool,
  updateWindowResize: _react.PropTypes.bool
};
OverlayTrigger.defaultProps = {
  updateWindowResize: true
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.state = {
    showClick: false,
    showFocus: false,
    showHover: false,
    overlayHoverCount: 0
  };

  this.getOverlayTarget = function () {
    return (0, _reactDom.findDOMNode)(_this2);
  };

  this.getOverlayContainer = function () {
    return (0, _getContainer2.default)(_this2.props.container, (0, _ownerDocument2.default)(_this2).body);
  };

  this.handleAnyClick = (0, _debounce2.default)(function (showClick) {
    var showClickPrev = _this2.state.showClick;


    if (showClick !== showClickPrev) {
      _this2.setState({ showClick: showClick });
    }
  }, 100);

  this.handleClick = function () {
    var _props = _this2.props;
    var onClick = _props.onClick;
    var triggerClick = _props.triggerClick;
    var showClick = _this2.state.showClick;


    if (triggerClick) {
      _this2.handleAnyClick(!showClick);

      if (onClick) {
        onClick.apply(undefined, arguments);
      }
    }
  };

  this.handleRootClose = function () {
    var showClick = _this2.state.showClick;


    if (showClick) {
      _this2.handleAnyClick(false);
    }
  };

  this.handleBlur = function () {
    var _props2 = _this2.props;
    var onBlur = _props2.onBlur;
    var triggerFocus = _props2.triggerFocus;
    var showFocus = _this2.state.showFocus;


    if (triggerFocus) {
      if (showFocus) {
        _this2.setState({ showFocus: false });
      }

      if (onBlur) {
        onBlur.apply(undefined, arguments);
      }
    }
  };

  this.handleFocus = function () {
    var _props3 = _this2.props;
    var onFocus = _props3.onFocus;
    var triggerFocus = _props3.triggerFocus;
    var showFocus = _this2.state.showFocus;


    if (triggerFocus) {
      if (!showFocus) {
        _this2.setState({ showFocus: true });
      }

      if (onFocus) {
        onFocus.apply(undefined, arguments);
      }
    }
  };

  this.handleMouseOut = function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var _props4 = _this2.props;
    var onMouseOut = _props4.onMouseOut;
    var triggerHover = _props4.triggerHover;
    var showHover = _this2.state.showHover;


    if (triggerHover) {
      var event = args[0];


      mouseOverOut(event, function () {
        if (showHover) {
          _this2.setState({ showHover: false });
        }

        if (onMouseOut) {
          onMouseOut.apply(undefined, args);
        }
      });
    }
  };

  this.handleMouseOver = function () {
    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    var _props5 = _this2.props;
    var onMouseOver = _props5.onMouseOver;
    var triggerHover = _props5.triggerHover;
    var showHover = _this2.state.showHover;


    if (triggerHover) {
      var event = args[0];


      mouseOverOut(event, function () {
        if (!showHover) {
          _this2.setState({ showHover: true });
        }

        if (onMouseOver) {
          onMouseOver.apply(undefined, args);
        }
      });
    }
  };

  this.handleOverlayMouseOut = function () {
    var _props6 = _this2.props;
    var triggerHover = _props6.triggerHover;
    var triggerOverlayHover = _props6.triggerOverlayHover;
    var overlayHoverCount = _this2.state.overlayHoverCount;


    if (triggerHover && triggerOverlayHover) {
      _this2.setState({ overlayHoverCount: overlayHoverCount - 1 });
    }
  };

  this.handleOverlayMouseOver = function () {
    var _props7 = _this2.props;
    var triggerHover = _props7.triggerHover;
    var triggerOverlayHover = _props7.triggerOverlayHover;
    var overlayHoverCount = _this2.state.overlayHoverCount;


    if (triggerHover && triggerOverlayHover) {
      _this2.setState({ overlayHoverCount: overlayHoverCount + 1 });
    }
  };

  this.handleResize = function () {
    var _props8 = _this2.props;
    var position = _props8.position;
    var alignment = _props8.alignment;

    var show = showOverlay(_this2.state);

    if (show && _this2.elem) {
      adjustPosition(_this2.elem, _this2.getOverlayTarget, _this2.getOverlayContainer, position, alignment);
    }
  };

  this.handleEntering = function (elem) {
    _this2.elem = elem;

    _this2.handleResize();
  };

  this._transition = hackTransition(this.props.transition, this.handleEntering);

  this.createOverlay = function () {
    var _props9 = _this2.props;
    var closeOnClickOutside = _props9.closeOnClickOutside;
    var overlay = _props9.overlay;
    var position = _props9.position;

    var show = showOverlay(_this2.state);
    var clonedOverlay = null;
    var overalyProps = {
      onMouseOver: _this2.handleOverlayMouseOver,
      onMouseOut: _this2.handleOverlayMouseOut
    };

    if ((0, _react.isValidElement)(overlay)) {
      clonedOverlay = (0, _react.cloneElement)(overlay, overalyProps);
    } else {
      clonedOverlay = _react2.default.createElement(
        'span',
        overalyProps,
        overlay
      );
    }

    return _react2.default.createElement(
      _Overlay2.default,
      {
        constainer: _this2.getOverlayContainer,
        onHide: _this2.handleRootClose,
        placement: position,
        rootClose: closeOnClickOutside,
        show: show,
        target: _this2.getOverlayTarget,
        transition: _this2.transition
      },
      clonedOverlay
    );
  };

  this.renderOverlay = function () {
    return (0, _reactDom.unstable_renderSubtreeIntoContainer // eslint-disable-line camelcase
    )(_this2, _this2.overlay, _this2.mountNode);
  };
};

exports.default = OverlayTrigger;