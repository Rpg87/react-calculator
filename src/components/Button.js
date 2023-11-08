import React from 'react';
import '../stylesheets/Button.css';

const Button = (props) => {

    const isOperator = (value) => {
        return isNaN(value) && (value !== ' . ') && (value !== ' = ');

    };

    return (
        <div
            className={`container-btn ${isOperator(props.children) ? ' operator' : ''}`.trimEnd()}
            onClick={() => props.handleInput(props.children)}>
            {props.children}
        </div >
    )
};

export default Button;