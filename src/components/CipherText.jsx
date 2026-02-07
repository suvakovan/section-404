import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useCipherText } from '../utils/security';
import './CipherText.css';

/**
 * CipherText - Text that appears encrypted until hovered/touched
 */
const CipherText = ({ text, className = '', tag = 'span' }) => {
    const { displayText, reveal, hide, isRevealed } = useCipherText(text);
    const Tag = tag;

    return (
        <Tag
            className={`cipher-text ${isRevealed ? 'revealed' : 'encrypted'} ${className}`}
            onMouseEnter={reveal}
            onMouseLeave={hide}
            onTouchStart={reveal}
            onTouchEnd={hide}
        >
            {displayText}
        </Tag>
    );
};

CipherText.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string,
    tag: PropTypes.string
};

export default CipherText;
