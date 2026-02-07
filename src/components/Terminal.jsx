import React from 'react';
import '../styles/Terminal.css';
import '../styles/animations.css';

/**
 * Main Terminal container component
 * Wraps content in a terminal-styled window with header
 */
const Terminal = ({ children, title = 'root@kali: ~' }) => {
    return (
        <div className="terminal-container">
            <div className="terminal-window">
                {/* Terminal Header with buttons */}
                <div className="terminal-header">
                    <div className="terminal-buttons">
                        <div className="terminal-button close"></div>
                        <div className="terminal-button minimize"></div>
                        <div className="terminal-button maximize"></div>
                    </div>
                    <div className="terminal-title">{title}</div>
                </div>

                {/* Terminal Content */}
                <div className="terminal-content">
                    {children}
                </div>

                {/* Optional scanline effect */}
                <div className="scanline"></div>
            </div>
        </div>
    );
};

export default Terminal;
