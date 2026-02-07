import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Terminal from '../components/Terminal';
import { hackerIcons } from '../utils/security';
import '../styles/Terminal.css';

/**
 * VaultLogin - Secure login page for the vault
 */
const VaultLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Hardcoded credentials for demonstration
        if (username === 'admin' && password === 's3cure') {
            navigate('/vault-scan');
        } else {
            setError('ACCESS DENIED - INVALID CREDENTIALS');
            setPassword('');
        }
    };

    return (
        <div className="vault-auth">
            <div className="auth-header">
                <h1 className="auth-title">
                    <span className="title-icon">🔐</span>
                    SECURE VAULT LOGIN
                </h1>
                <p className="auth-subtitle">AUTHENTICATION REQUIRED</p>
            </div>

            <div className="auth-panel">
                <div className="auth-warning">
                    <div className="warning-icon">⚠️</div>
                    <div className="warning-text">
                        <strong>RESTRICTED AREA</strong><br />
                        Authorized personnel only. All attempts are logged.
                    </div>
                </div>

                <form onSubmit={handleLogin} className="terminal-auth">
                    <div className="auth-input-container">
                        <span className="input-label">Username:</span>
                        <input
                            type="text"
                            className="auth-input"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter username"
                            autoFocus
                        />
                    </div>
                    <div className="auth-input-container">
                        <span className="input-label">Password:</span>
                        <input
                            type="password"
                            className="auth-input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter password"
                        />
                    </div>

                    {error && (
                        <div className="auth-error">
                            <span className="error-icon">❌</span>
                            {error}
                        </div>
                    )}

                    <button type="submit" style={{ display: 'none' }}>Login</button>

                    <div className="auth-actions" style={{ marginTop: '20px', textAlign: 'center' }}>
                        <button
                            type="submit"
                            className="terminal-btn"
                            style={{
                                background: 'transparent',
                                border: '1px solid var(--terminal-green)',
                                color: 'var(--terminal-green)',
                                padding: '10px 20px',
                                cursor: 'pointer',
                                fontFamily: 'monospace',
                                fontSize: '1.2rem'
                            }}
                        >
                            [ AUTHENTICATE ]
                        </button>
                    </div>
                </form>

                <div className="auth-footer">
                    <div className="footer-item">
                        <span className="footer-icon">🔒</span>
                        <span>Secure Connection</span>
                    </div>
                    <div className="footer-item">
                        <span className="footer-icon">📡</span>
                        <span>IP Logged</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VaultLogin;
