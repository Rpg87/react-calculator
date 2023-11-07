import React from 'react';
import '../stylesheets/Button.css';

const Button = (props) => {

    const isOperator = (value) => {
        return isNaN(value) && (value != '.') && (value != '=');

    };

    return (
        <div
            className={`container-btn ${isOperator(props.children) ? ' operator' : ''}`.trimEnd()}>
            {props.children}
        </div >
    )
};

export default Button;