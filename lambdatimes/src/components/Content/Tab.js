import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
    let tabClass = "";
    if (props.tab === props.selectedTab) {
      tabClass = "tab active-tab";
    } else {
      tabClass = "tab";
    }
  
/* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
  return (
    <div
      className={tabClass}
      onClick={() => props.selectTabHandler(props.tab)}
      tab={props.tab}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

Tab.propTypes = {
  tab: PropTypes.string,
  selectedTab: PropTypes.string,
  selectTabHandler: PropTypes.func
};
// Make sure you include PropTypes on your props.

export default Tab;
