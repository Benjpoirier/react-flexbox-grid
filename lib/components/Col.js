'use strict';

exports.__esModule = true;
exports.getColumnProps = getColumnProps;
exports.default = Col;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createProps = require('../createProps');

var _createProps2 = _interopRequireDefault(_createProps);

var _classNames = require('../classNames');

var _classNames2 = _interopRequireDefault(_classNames);

var _types = require('../types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  xs: _types.ColumnSizeType,
  sm: _types.ColumnSizeType,
  md: _types.ColumnSizeType,
  lg: _types.ColumnSizeType,
  xsOffset: _propTypes2.default.number,
  smOffset: _propTypes2.default.number,
  mdOffset: _propTypes2.default.number,
  lgOffset: _propTypes2.default.number,
  xsHiddenDown: _propTypes2.default.bool,
  smHiddenDown: _propTypes2.default.bool,
  mdHiddenDown: _propTypes2.default.bool,
  lgHiddenDown: _propTypes2.default.bool,
  first: _types.ViewportSizeType,
  last: _types.ViewportSizeType,
  className: _propTypes2.default.string,
  tagName: _propTypes2.default.string,
  children: _propTypes2.default.node
};

var classMap = {
  xs: 'col-xs',
  sm: 'col-sm',
  md: 'col-md',
  lg: 'col-lg',
  xsOffset: 'col-xs-offset',
  smOffset: 'col-sm-offset',
  mdOffset: 'col-md-offset',
  lgOffset: 'col-lg-offset',
  xsHiddenDown: 'col-xs-hidden',
  smHiddenDown: 'col-sm-hidden-down',
  mdHiddenDown: 'col-md-hidden-down',
  lgHiddenDown: 'col-lg-hidden-down',
  xsHiddenUp: 'col-lg-hidden-down',
  smHiddenUp: 'col-sm-hidden-up',
  mdHiddenUp: 'col-md-hidden-up',
  lgHiddenUp: 'col-lg-hidden-up'
};

function isValid(value) {
  return typeof value === 'number' && isFinite(value) && Math.floor(value) === value || value === 'hidden';
}

function getColClassNames(props) {
  var extraClasses = [];

  if (props.className) {
    extraClasses.push(props.className);
  }

  if (props.first) {
    extraClasses.push((0, _classNames2.default)('first-' + props.first));
  }

  if (props.last) {
    extraClasses.push((0, _classNames2.default)('last-' + props.last));
  }

  return Object.keys(props).filter(function (key) {
    return classMap[key];
  }).map(function (key) {
    return (0, _classNames2.default)(isValid(props[key]) ? classMap[key] + '-' + (props[key] === 0 ? 'hidden' : props[key]) : classMap[key]);
  }).concat(extraClasses);
}

function getColumnProps(props) {
  return (0, _createProps2.default)(propTypes, props, getColClassNames(props));
}

function Col(props) {
  var tagName = props.tagName,
      columnProps = _objectWithoutProperties(props, ['tagName']);

  return _react2.default.createElement(tagName || 'div', getColumnProps(columnProps));
}

Col.propTypes = propTypes;