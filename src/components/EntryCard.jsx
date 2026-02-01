import React from 'react';
import PropTypes from 'prop-types';
import './EntryCard.css';

/**
 * EntryCard - Neon glowing card for dashboard entries
 * Displays icon, title, and description with glassmorphism effect
 */
const EntryCard = ({ icon, title, description, status, onClick }) => {
    return (
        <div className="entry-card" onClick={onClick}>
            <div className="entry-card-inner">
                {/* Icon Section */}
                <div className="entry-icon">
                    {icon}
                </div>

                {/* Content Section */}
                <div className="entry-content">
                    <h3 className="entry-title">{title}</h3>
                    {description && (
                        <p className="entry-description">{description}</p>
                    )}
                </div>

                {/* Status Indicator */}
                {status && (
                    <div className={`entry-status status-${status}`}>
                        <span className="status-dot"></span>
                        <span className="status-text">{status}</span>
                    </div>
                )}

                {/* Hover Glow Effect */}
                <div className="entry-glow"></div>
            </div>
        </div>
    );
};

EntryCard.propTypes = {
    icon: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    status: PropTypes.oneOf(['active', 'idle', 'warning', 'error']),
    onClick: PropTypes.func
};

export default EntryCard;
