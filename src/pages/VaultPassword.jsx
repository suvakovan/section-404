import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Terminal from '../components/Terminal';
import { getCurrentCode, useTimeBasedUpdate } from '../utils/security';
import '../styles/Terminal.css';

/**
 * VaultPassword - Displays the generated security code
 */
const VaultPassword = () => {
    const [code, setCode] = useState('');
    const [timeLeft, setTimeLeft] = useState(60);
    const navigate = useNavigate();

    // Update code every minute
    const timestamp = useTimeBasedUpdate(1000); // Check every second for countdown

    useEffect(() => {
        setCode(getCurrentCode());
        const now = new Date();
        setTimeLeft(60 - now.getSeconds());
    }, [timestamp]);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(code);
        alert('Code copied to clipboard: ' + code);
    };

    const openVault = () => {
        navigate('/antogravity');
    };

    return (
        <div className="vault-auth">
            <div className="auth-header">
                <h1 className="auth-title">
                    <span className="title-icon">🔑</span>
                    SECURITY ACCESS CODE
                </h1>
                <p className="auth-subtitle">TIME-BASED ONE-TIME PASSWORD</p>
            </div>

            <div className="auth-panel">
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <div style={{
                        fontSize: '3rem',
                        fontFamily: 'monospace',
                        color: 'var(--terminal-cyan)',
                        marginBottom: '1rem',
                        textShadow: '0 0 10px var(--terminal-cyan)'
                    }}>
                        {code}
                    </div>
                    <div style={{ color: 'var(--terminal-dim)' }}>
                        Expires in: {timeLeft}s
                    </div>
                </div>

                <div className="auth-instructions" style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <p>Copy this code and use it to access the Secure Vault.</p>
                </div>

                <div className="auth-actions" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <button
                        onClick={copyToClipboard}
                        className="terminal-btn"
                        style={{
                            background: 'transparent',
                            border: '1px solid var(--terminal-cyan)',
                            color: 'var(--terminal-cyan)',
                            padding: '10px 20px',
                            cursor: 'pointer',
                            fontFamily: 'monospace',
                            fontSize: '1.2rem'
                        }}
                    >
                        [ COPY CODE ]
                    </button>

                    <button
                        onClick={openVault}
                        className="terminal-btn"
                        style={{
                            background: 'var(--terminal-green-dim)',
                            border: '1px solid var(--terminal-green)',
                            color: 'var(--terminal-green)',
                            padding: '10px 20px',
                            cursor: 'pointer',
                            fontFamily: 'monospace',
                            fontSize: '1.2rem'
                        }}
                    >
                        [ OPEN VAULT ]
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VaultPassword;
