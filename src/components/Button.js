import React from 'react';
import '../stylesheets/Button.css';

const Button = (props) => {

    const isOperator = (value) => {
        return isNaN(value) && (value !== '.') && (value !== '=');
    };

    const handleEquals = (input) => {
        if (/[+\-*/]$/.test(input)) {
            // if the last character is a operator show the message 
            alert('Por favor, añade un número antes del igual.');
        } else {
            props.handleInput('=');
        }
    };

    return (
        <button
            className={`container-btn ${isOperator(props.children) ? ' operator' : ''}`.trimEnd()}
            onClick={props.children === '=' ? handleEquals : () => props.handleInput(props.children)}>
            {props.children}
        </button>
    );
};

export default Button;