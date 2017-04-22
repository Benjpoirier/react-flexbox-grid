import React, { PropTypes } from 'react';
import createProps from '../createProps';
import getClass from '../classNames';
import { ColumnSizeType, ViewportSizeType } from '../types';

const propTypes = {
  xs: ColumnSizeType,
  sm: ColumnSizeType,
  md: ColumnSizeType,
  lg: ColumnSizeType,
  xsOffset: PropTypes.number,
  smOffset: PropTypes.number,
  mdOffset: PropTypes.number,
  lgOffset: PropTypes.number,
  xsHiddenDown: PropTypes.bool,
  smHiddenDown: PropTypes.bool,
  mdHiddenDown: PropTypes.bool,
  lgHiddenDown: PropTypes.bool,
  first: ViewportSizeType,
  last: ViewportSizeType,
  className: PropTypes.string,
  tagName: PropTypes.string,
  children: PropTypes.node
};

const classMap = {
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
  lgHiddenUp: 'col-lg-hidden-up',
};

function isValid(value) {
  return (typeof value === 'number' && isFinite(value) && Math.floor(value) === value)
    || value === 'hidden';
}

function getColClassNames(props) {
  const extraClasses = [];

  if (props.className) {
    extraClasses.push(props.className);
  }

  if (props.first) {
    extraClasses.push(getClass('first-' + props.first));
  }

  if (props.last) {
    extraClasses.push(getClass('last-' + props.last));
  }

  return Object.keys(props)
    .filter(key => classMap[key])
    .map(key => getClass(
      isValid(props[key]) ?
      (classMap[key] + '-' + (props[key] === 0 ? 'hidden' : props[key] ))
      : classMap[key])
    )
    .concat(extraClasses);
}

export function getColumnProps(props) {
  return createProps(propTypes, props, getColClassNames(props));
}

export default function Col(props) {
  const { tagName, ...columnProps } = props;
  return React.createElement(tagName || 'div', getColumnProps(columnProps));
}

Col.propTypes = propTypes;
