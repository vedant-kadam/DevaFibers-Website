import React from 'react';
import classes from './NormalButton.module.scss';

const NormalButton = (props) => {
  return (
    <button className={`${props.className} ${classes.buttonMain}`} onClick={props.onClick}>
        {props.children}
    </button>
  )
}

// Setting default props for functional components
NormalButton.defaultProps = {
    title: 'Button',
    className: "",
    onClick:()=>{} ,

  };

export default NormalButton;