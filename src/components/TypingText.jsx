import React from 'react';
import useTypingEffect from '../hooks/useTypingEffect';
import Cursor from './Cursor';

/**
 * Component that displays text with typing animation
 * @param {string} text - Text to display with typing effect
 * @param {number} speed - Typing speed in ms (default: 50)
 * @param {boolean} showCursor - Whether to show blinking cursor (default: true)
 * @param {function} onComplete - Callback when typing completes
 */
const TypingText = ({
    text,
    speed = 50,
    showCursor = true,
    onComplete,
    className = ''
}) => {
    const { displayedText, isTyping } = useTypingEffect(text, speed);

    React.useEffect(() => {
        if (!isTyping && onComplete) {
            onComplete();
        }
    }, [isTyping, onComplete]);

    return (
        <span className={className}>
            {displayedText}
            {showCursor && <Cursor show={isTyping} />}
        </span>
    );
};

export default TypingText;
