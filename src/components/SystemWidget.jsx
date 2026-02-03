import React from 'react';
import PropTypes from 'prop-types';
import './SystemWidget.css';

/**
 * SystemWidget - Glassmorphism panel for system stats and info
 */
const SystemWidget = ({ title, children, icon, variant = 'default' }) => {
    return (
        <div className={`system-widget widget-${variant}`}>
            <div className="widget-header">
                {icon && <span className="widget-icon">{icon}</span>}
                <h3 className="widget-title">{title}</h3>
            </div>
            <div className="widget-content">
                {children}
            </div>
        </div>
    );
};

SystemWidget.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    icon: PropTypes.node,
    variant: PropTypes.oneOf(['default', 'stats', 'terminal', 'info'])
};

/**
 * StatBar - Neon progress bar for metrics
 */
export const StatBar = ({ label, value, max = 100, color = 'cyan' }) => {
    const percentage = (value / max) * 100;

    return (
        <div className="stat-bar">
            <div className="stat-label">
                <span>{label}</span>
                <span className="stat-value">{value}{max === 100 ? '%' : ` / ${max}`}</span>
            </div>
            <div className="stat-track">
                <div
                    className={`stat-fill stat-${color}`}
                    style={{ width: `${percentage}%` }}
                >
                    <div className="stat-glow"></div>
                </div>
            </div>
        </div>
    );
};

StatBar.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    max: PropTypes.number,
    color: PropTypes.oneOf(['cyan', 'purple', 'lime', 'orange', 'magenta'])
};

/**
 * InfoRow - Key-value pair display
 */
export const InfoRow = ({ label, value, highlight }) => {
    return (
        <div className="info-row">
            <span className="info-label">{label}:</span>
            <span className={`info-value ${highlight ? 'highlight' : ''}`}>{value}</span>
        </div>
    );
};

InfoRow.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    highlight: PropTypes.bool
};

export default SystemWidget;
