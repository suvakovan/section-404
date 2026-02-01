import { useState, useEffect } from 'react';

/**
 * Custom hook for creating typing animation effect
 * @param {string} text - The text to animate
 * @param {number} speed - Typing speed in milliseconds (default: 50)
 * @param {boolean} startTyping - Whether to start typing immediately (default: true)
 * @returns {object} - { displayedText, isTyping, reset }
 */
const useTypingEffect = (text, speed = 50, startTyping = true) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(startTyping);

    useEffect(() => {
        if (!isTyping || !text) {
            return;
        }

        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + text[currentIndex]);
                setCurrentIndex((prev) => prev + 1);
            }, speed);

            return () => clearTimeout(timeout);
        } else {
            setIsTyping(false);
        }
    }, [currentIndex, text, speed, isTyping]);

    const reset = () => {
        setDisplayedText('');
        setCurrentIndex(0);
        setIsTyping(true);
    };

    const start = () => {
        setIsTyping(true);
    };

    const stop = () => {
        setIsTyping(false);
    };

    return {
        displayedText,
        isTyping,
        reset,
        start,
        stop,
    };
};

export default useTypingEffect;
