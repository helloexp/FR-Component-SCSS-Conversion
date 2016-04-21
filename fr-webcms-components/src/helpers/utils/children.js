import React from 'react';
import createFragment from 'react-addons-create-fragment';

export default {

  create(fragments) {
    const newFragments = {};
    let validChildrenCount = 0;
    let firstKey;

    // Only create non-empty key fragments
    for (const key in fragments) {
      if (fragments.hasOwnProperty(key)) {
        const currentChild = fragments[key];

        if (currentChild) {
          if (validChildrenCount === 0) firstKey = key;
          newFragments[key] = currentChild;
          validChildrenCount++;
        }
      }
    }

    if (validChildrenCount === 0) return undefined;
    if (validChildrenCount === 1) return newFragments[firstKey];
    return createFragment(newFragments);
  },

  extend(children, extendedProps, extendedChildren) {

    return React.isValidElement(children) ?
      React.Children.map(children, (child) => {

        const newProps = typeof (extendedProps) === 'function' ?
          extendedProps(child) : extendedProps;

        let newChildren = extendedChildren ? extendedChildren : child.props.children;
        newChildren = typeof (extendedChildren) === 'function' ? extendedChildren(child) : newChildren;

        return React.cloneElement(child, newProps, newChildren);
      }) : children;
  },

};
