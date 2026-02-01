import React, { useState, useEffect } from 'react';
import Terminal from '../components/Terminal';
import { getCurrentCode, useTimeBasedUpdate } from '../utils/security';
import './CodeGenerator.css';

/**
 * CodeGenerator - Displays the current security code for vault access
 */
const CodeGenerator = () => {
    const [currentCode, setCurrentCode] = useState('');
    const [timeRemaining, setTimeRemaining] = useState(60);
    const [copied, setCopied] = useState(false);

    // Update every second for countdown
    useEffect(() => {
        const updateCode = () => {
            setCurrentCode(getCurrentCode());
            const now = new Date();
            setTimeRemaining(60 - now.getSeconds());
        };

        updateCode();
        const interval = setInterval(updateCode, 1000);

        return () => clearInterval(interval);
    }, []);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(currentCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <Terminal>
            <div className="code-generator">
                <div className="generator-header">
                    <h1 className="generator-title">
                        <span className="title-icon">🔐</span>
                        SECURITY CODE GENERATOR
                    </h1>
                    <p className="generator-subtitle">SECTION-404 • VAULT ACCESS SYSTEM</p>
                </div>

                <div className="code-display-container">
                    <div className="code-label">CURRENT ACCESS CODE</div>

                    <div className="code-display" onClick={copyToClipboard}>
                        <div className="code-value">{currentCode}</div>
                        <div className="code-hint">{copied ? '✓ COPIED!' : 'Click to copy'}</div>
                    </div>

                    <div className="code-timer">
                        <div className="timer-label">CODE EXPIRES IN:</div>
                        <div className="timer-value">{timeRemaining}s</div>
                        <div className="timer-bar">
                            <div
                                className="timer-fill"
                                style={{ width: `${(timeRemaining / 60) * 100}%` }}
                            />
                        </div>
                    </div>
                </div>

                <div className="instructions-panel">
                    <h2>📋 INSTRUCTIONS</h2>
                    <div className="instruction-list">
                        <div className="instruction-item">
                            <span className="step-number">1</span>
                            <span className="step-text">Copy the current access code above</span>
                        </div>
                        <div className="instruction-item">
                            <span className="step-number">2</span>
                            <span className="step-text">Navigate to the Secure Vault page</span>
                        </div>
                        <div className="instruction-item">
                            <span className="step-number">3</span>
                            <span className="step-text">Enter the code in the terminal prompt</span>
                        </div>
                        <div className="instruction-item">
                            <span className="step-number">4</span>
                            <span className="step-text">Access granted for 60 seconds</span>
                        </div>
                    </div>
                </div>

                <div className="security-notice">
                    <div className="notice-icon">⚠️</div>
                    <div className="notice-text">
                        <strong>SECURITY NOTICE:</strong> This code changes every minute.
                        Do not share this code with unauthorized personnel.
                        All access attempts are logged and monitored.
                    </div>
                </div>

                <div className="terminal-output">
                    <pre className="code-log">
                        {`┌─────────────────────────────────────────────────────────┐
│ SECTION-404 SECURITY LOG                               │
├─────────────────────────────────────────────────────────┤
│ [${new Date().toLocaleTimeString()}] Code generated: ${currentCode}        │
│ [${new Date().toLocaleTimeString()}] Expires in: ${timeRemaining} seconds              │
│ [${new Date().toLocaleTimeString()}] Status: ACTIVE                        │
└─────────────────────────────────────────────────────────┘`}
                    </pre>
                </div>
            </div>
        </Terminal>
    );
};

export default CodeGenerator;
