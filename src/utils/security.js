import React, { useState, useEffect } from 'react';

/**
 * Security utilities for SECTION-404 vault
 */

// Generate time-based security code (changes every minute)
export const generateSecurityCode = () => {
    const now = new Date();
    const minute = now.getMinutes();
    const hour = now.getHours();
    const day = now.getDate();

    // Create a unique code based on current time
    const seed = (hour * 60 + minute + day * 1440);
    const code = `SEC-${seed.toString(16).toUpperCase().padStart(4, '0')}-${(seed % 999).toString().padStart(3, '0')}`;

    return code;
};

// Get current security code
export const getCurrentCode = () => {
    return generateSecurityCode();
};

// Verify if entered code matches current code
export const verifySecurityCode = (enteredCode) => {
    return enteredCode.trim().toUpperCase() === getCurrentCode().toUpperCase();
};

// Cipher text encoder (simple Caesar cipher with rotation)
export const encodeText = (text) => {
    const shift = 13; // ROT13 style
    return text.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt(0);
            const base = code >= 65 && code <= 90 ? 65 : 97;
            return String.fromCharCode(((code - base + shift) % 26) + base);
        }
        return char;
    }).join('');
};

// Cipher text decoder
export const decodeText = (text) => {
    return encodeText(text); // ROT13 is symmetric
};

// Security-themed names that rotate every minute
const securityNames = [
    'VAULT-404',
    'BLACKBOX',
    'CIPHER-CORE',
    'DARKNET',
    'GHOST-PROTOCOL',
    'SHADOW-OPS',
    'ZERO-DAY',
    'CRYPTEX',
    'PHANTOM-NET',
    'REDACTED'
];

// Get current security name based on minute
export const getCurrentSecurityName = () => {
    const minute = new Date().getMinutes();
    return securityNames[minute % securityNames.length];
};

// Custom hook for cipher text reveal
export const useCipherText = (originalText) => {
    const [revealed, setRevealed] = useState(false);
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        if (revealed) {
            setDisplayText(originalText);
        } else {
            setDisplayText(encodeText(originalText));
        }
    }, [revealed, originalText]);

    return {
        displayText,
        reveal: () => setRevealed(true),
        hide: () => setRevealed(false),
        isRevealed: revealed
    };
};

// Custom hook for time-based updates
export const useTimeBasedUpdate = (intervalMs = 60000) => {
    const [timestamp, setTimestamp] = useState(Date.now());

    useEffect(() => {
        const interval = setInterval(() => {
            setTimestamp(Date.now());
        }, intervalMs);

        return () => clearInterval(interval);
    }, [intervalMs]);

    return timestamp;
};

// Hacker-style icon mapping
export const hackerIcons = {
    projects: '⚡',
    research: '🔍',
    payloads: '💀',
    experiments: '⚗️',
    logs: '📡',
    reports: '📊',
    tools: '🔧',
    configs: '⚙️',
    cpu: '💻',
    memory: '🧠',
    network: '🌐',
    disk: '💾',
    active: '🟢',
    idle: '🔵',
    warning: '🟡',
    error: '🔴'
};

export default {
    generateSecurityCode,
    getCurrentCode,
    verifySecurityCode,
    encodeText,
    decodeText,
    getCurrentSecurityName,
    useCipherText,
    useTimeBasedUpdate,
    hackerIcons
};
