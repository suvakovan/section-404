import React from 'react';
import '../styles/animations.css';

/**
 * Blinking cursor component for terminal effect
 */
const Cursor = ({ show = true }) => {
    if (!show) return null;

    return <span className="cursor"></span>;
};

export default Cursor;
