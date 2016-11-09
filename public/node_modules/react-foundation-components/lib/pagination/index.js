'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pagination = undefined;

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

var _textAlignment = require('../text-alignment');

var _textAlignment2 = _interopRequireDefault(_textAlignment);

var _visibility = require('../visibility');

var _styles = require('./_styles.scss');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cxStyles = _bind2.default.bind(_styles2.default);

function createPaginationLink(baseClassName, disabledCalculator, newPageCalculator) {
  var PaginationEndPoint = function PaginationEndPoint(_ref) {
    var activePage = _ref.activePage;
    var children = _ref.children;
    var className = _ref.className;
    var label = _ref.label;
    var lastPage = _ref.lastPage;
    var onSelect = _ref.onSelect;
    var page = _ref.page;
    var startPage = _ref.startPage;
    var restProps = (0, _objectWithoutProperties3.default)(_ref, ['activePage', 'children', 'className', 'label', 'lastPage', 'onSelect', 'page', 'startPage']);

    var current = activePage === page;
    var disabled = lastPage < startPage || disabledCalculator({ activePage: activePage, startPage: startPage, lastPage: lastPage });
    var classNames = (0, _classnames2.default)(className, cxStyles(baseClassName, { current: current, disabled: disabled }));
    var content = children;

    if (!current && !disabled) {
      var onClick = function onClick() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        var event = args[0];


        event.preventDefault();

        if (onSelect) {
          onSelect.apply(undefined, [newPageCalculator({ activePage: activePage, startPage: startPage, lastPage: lastPage, page: page })].concat(args));
        }
      };

      content = _react2.default.createElement(
        'a',
        {
          href: '#',
          'aria-label': label,
          onClick: onClick
        },
        children
      );
    }

    return _react2.default.createElement(
      'li',
      (0, _extends3.default)({}, restProps, { className: classNames }),
      content
    );
  };

  PaginationEndPoint.propTypes = {
    activePage: _react.PropTypes.number,
    children: _react.PropTypes.node,
    className: _react.PropTypes.string,
    label: _react.PropTypes.string,
    lastPage: _react.PropTypes.number,
    onSelect: _react.PropTypes.func,
    page: _react.PropTypes.number,
    startPage: _react.PropTypes.number
  };

  return PaginationEndPoint;
}

var PaginationPrevious = createPaginationLink('pagination-previous', function (_ref2) {
  var activePage = _ref2.activePage;
  var startPage = _ref2.startPage;
  return activePage <= startPage;
}, function (_ref3) {
  var activePage = _ref3.activePage;
  var startPage = _ref3.startPage;
  var lastPage = _ref3.lastPage;
  return Math.max(startPage, Math.min(activePage - 1, lastPage));
});

PaginationPrevious.displayName = 'PaginationPrevious';
PaginationPrevious.propTypes = {
  activePage: _react.PropTypes.number,
  className: _react.PropTypes.string,
  children: _react.PropTypes.node,
  label: _react.PropTypes.string,
  lastPage: _react.PropTypes.number,
  onSelect: _react.PropTypes.func,
  startPage: _react.PropTypes.number
};

var PaginationNext = createPaginationLink('pagination-next', function (_ref4) {
  var activePage = _ref4.activePage;
  var lastPage = _ref4.lastPage;
  return activePage >= lastPage;
}, function (_ref5) {
  var activePage = _ref5.activePage;
  var startPage = _ref5.startPage;
  var lastPage = _ref5.lastPage;
  return Math.min(lastPage, Math.max(activePage + 1, startPage));
});

PaginationNext.displayName = 'PaginationNext';
PaginationNext.propTypes = {
  activePage: _react.PropTypes.number,
  className: _react.PropTypes.string,
  children: _react.PropTypes.node,
  label: _react.PropTypes.string,
  lastPage: _react.PropTypes.number,
  onSelect: _react.PropTypes.func,
  startPage: _react.PropTypes.number
};

var PaginationPage = createPaginationLink(null, function () {
  return false;
}, function (_ref6) {
  var page = _ref6.page;
  return page;
});

PaginationPage.displayName = 'PaginationPage';
PaginationPage.propTypes = {
  activePage: _react.PropTypes.number,
  className: _react.PropTypes.string,
  children: _react.PropTypes.node,
  label: _react.PropTypes.string,
  onSelect: _react.PropTypes.func,
  page: _react.PropTypes.number
};

var PaginationEllipsis = function PaginationEllipsis(_ref7) {
  var className = _ref7.className;
  var restProps = (0, _objectWithoutProperties3.default)(_ref7, ['className']);

  var classNames = (0, _classnames2.default)(className, cxStyles('ellipsis'));

  return _react2.default.createElement(_visibility.HideForScreenReader, (0, _extends3.default)({}, restProps, { className: classNames, componentClass: 'li' }));
};

PaginationEllipsis.propTypes = {
  className: _react.PropTypes.string
};

var Pagination = exports.Pagination = function Pagination(_ref8) {
  var activePage = _ref8.activePage;
  var className = _ref8.className;
  var label = _ref8.label;
  var maxPages = _ref8.maxPages;
  var nextClassName = _ref8.nextClassName;
  var nextContent = _ref8.nextContent;
  var nextLabel = _ref8.nextLabel;
  var nextStyle = _ref8.nextStyle;
  var maybeNumPages = _ref8.numPages;
  var onSelect = _ref8.onSelect;
  var pageClassName = _ref8.pageClassName;
  var pageContentFormatter = _ref8.pageContentFormatter;
  var pageLabelFormatter = _ref8.pageLabelFormatter;
  var pageStyle = _ref8.pageStyle;
  var previousClassName = _ref8.previousClassName;
  var previousContent = _ref8.previousContent;
  var previousLabel = _ref8.previousLabel;
  var previousStyle = _ref8.previousStyle;
  var startPage = _ref8.startPage;
  var restProps = (0, _objectWithoutProperties3.default)(_ref8, ['activePage', 'className', 'label', 'maxPages', 'nextClassName', 'nextContent', 'nextLabel', 'nextStyle', 'numPages', 'onSelect', 'pageClassName', 'pageContentFormatter', 'pageLabelFormatter', 'pageStyle', 'previousClassName', 'previousContent', 'previousLabel', 'previousStyle', 'startPage']);

  var classNames = (0, _classnames2.default)(className, cxStyles('pagination'));
  var pages = [];
  var numPages = maybeNumPages >= 1 ? maybeNumPages : 1;
  var lastPage = startPage + numPages - 1;
  var limitPages = maxPages > 0 && numPages > maxPages;
  var innerStartPage = startPage + 1;
  var innerLastPage = lastPage - 1;

  if (limitPages) {
    if (activePage >= startPage && activePage <= lastPage) {
      var offset = Math.ceil((maxPages - 1) / 2);
      var offsetStartPage = activePage - offset + 1;
      var offsetLastPage = activePage + maxPages - offset - 2;

      if (offsetStartPage < innerStartPage) {
        innerLastPage = innerStartPage + maxPages - 3;
      } else if (offsetLastPage > innerLastPage) {
        innerStartPage = innerLastPage - maxPages + 3;
      } else {
        innerStartPage = offsetStartPage;
        innerLastPage = offsetLastPage;
      }
    } else {
      innerLastPage = startPage + maxPages - 2;
    }
  }

  pages.push(_react2.default.createElement(
    PaginationPage,
    {
      activePage: activePage,
      className: pageClassName,
      key: startPage,
      label: pageLabelFormatter ? pageLabelFormatter(startPage, activePage) : null,
      onSelect: onSelect,
      page: startPage,
      style: pageStyle
    },
    pageContentFormatter ? pageContentFormatter(startPage, activePage) : startPage
  ));

  if (limitPages && innerStartPage > startPage + 1) {
    pages.push(_react2.default.createElement(PaginationEllipsis, { key: 'startEllipsis' }));
  }

  for (var i = innerStartPage; i <= innerLastPage; i++) {
    pages.push(_react2.default.createElement(
      PaginationPage,
      {
        activePage: activePage,
        className: pageClassName,
        key: i,
        label: pageLabelFormatter ? pageLabelFormatter(i, activePage) : null,
        onSelect: onSelect,
        page: i,
        style: pageStyle
      },
      pageContentFormatter ? pageContentFormatter(i, activePage) : i
    ));
  }

  if (limitPages && innerLastPage < lastPage - 1) {
    pages.push(_react2.default.createElement(PaginationEllipsis, { key: 'lastEllipsis' }));
  }

  pages.push(_react2.default.createElement(
    PaginationPage,
    {
      activePage: activePage,
      className: pageClassName,
      key: lastPage,
      label: pageLabelFormatter ? pageLabelFormatter(lastPage, activePage) : null,
      onSelect: onSelect,
      page: lastPage,
      style: pageStyle
    },
    pageContentFormatter ? pageContentFormatter(lastPage, activePage) : lastPage
  ));

  return _react2.default.createElement(
    _textAlignment2.default,
    (0, _extends3.default)({}, restProps, {
      'aria-label': label,
      className: classNames,
      componentClass: 'ul',
      role: 'navigation'
    }),
    _react2.default.createElement(
      PaginationPrevious,
      {
        activePage: activePage,
        className: previousClassName,
        label: previousLabel,
        lastPage: lastPage,
        onSelect: onSelect,
        startPage: startPage,
        style: previousStyle
      },
      previousContent
    ),
    pages,
    _react2.default.createElement(
      PaginationNext,
      {
        activePage: activePage,
        className: nextClassName,
        label: nextLabel,
        lastPage: lastPage,
        onSelect: onSelect,
        startPage: startPage,
        style: nextStyle
      },
      nextContent
    )
  );
};

Pagination.propTypes = {
  activePage: _react.PropTypes.number,
  className: _react.PropTypes.string,
  label: _react.PropTypes.string,
  maxPages: _react.PropTypes.number,
  nextClassName: _react.PropTypes.string,
  nextContent: _react.PropTypes.node,
  nextLabel: _react.PropTypes.string,
  nextStyle: _react.PropTypes.object,
  numPages: _react.PropTypes.number,
  onSelect: _react.PropTypes.func,
  pageClassName: _react.PropTypes.string,
  pageContentFormatter: _react.PropTypes.func,
  pageLabelFormatter: _react.PropTypes.func,
  pageStyle: _react.PropTypes.object,
  previousClassName: _react.PropTypes.string,
  previousContent: _react.PropTypes.node,
  previousLabel: _react.PropTypes.string,
  previousStyle: _react.PropTypes.object,
  startPage: _react.PropTypes.number
};
Pagination.defaultProps = {
  maxPages: 0,
  numPages: 1,
  startPage: 1
};

exports.default = Pagination;