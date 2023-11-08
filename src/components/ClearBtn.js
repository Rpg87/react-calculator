import React from "react";
import '../stylesheets/ClearBtn.css';

const ClearBtn = (props) => (
    <button className="clear-btn"
        onClick={props.handleClear}>
        {props.children}
    </button >
);

export default ClearBtn;

