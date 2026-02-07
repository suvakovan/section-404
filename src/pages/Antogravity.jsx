import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Terminal from '../components/Terminal';
import EntryCard from '../components/EntryCard';
import SystemWidget, { StatBar, InfoRow } from '../components/SystemWidget';
import CipherText from '../components/CipherText';
import { verifySecurityCode, getCurrentSecurityName, useTimeBasedUpdate, hackerIcons } from '../utils/security';
import './Antogravity.css';

/**
 * SecureVault (formerly Antogravity) - High-security vault with authentication
 */
const SecureVault = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [codeInput, setCodeInput] = useState('');
    const [error, setError] = useState('');
    const [selectedEntry, setSelectedEntry] = useState(null);
    const [vaultName, setVaultName] = useState('');

    // Update vault name every minute
    const timestamp = useTimeBasedUpdate(60000);

    useEffect(() => {
        setVaultName(getCurrentSecurityName());
    }, [timestamp]);

    // Handle authentication
    const handleAuth = (e) => {
        if (e.key === 'Enter') {
            if (verifySecurityCode(codeInput)) {
                setIsAuthenticated(true);
                setError('');
            } else {
                setError('ACCESS DENIED - INVALID CODE');
                setCodeInput('');
            }
        }
    };

    // Entry cards data with hacker icons
    const entries = [
        {
            id: 'projects',
            title: 'CLASSIFIED PROJECTS',
            description: 'Top-secret operations',
            icon: '⚡',
            status: 'active'
        },
        {
            id: 'research',
            title: 'INTEL RESEARCH',
            description: 'Threat intelligence',
            icon: '🔍',
            status: 'active'
        },
        {
            id: 'payloads',
            title: 'EXPLOIT ARSENAL',
            description: 'Zero-day exploits',
            icon: '💀',
            status: 'warning'
        },
        {
            id: 'experiments',
            title: 'LAB EXPERIMENTS',
            description: 'Sandbox testing',
            icon: '⚗️',
            status: 'active'
        },
        {
            id: 'logs',
            title: 'SECURITY LOGS',
            description: 'Audit trails',
            icon: '📡',
            status: 'active'
        },
        {
            id: 'reports',
            title: 'THREAT REPORTS',
            description: 'Analysis documents',
            icon: '📊',
            status: 'idle'
        },
        {
            id: 'tools',
            title: 'HACKING TOOLS',
            description: 'Penetration utilities',
            icon: '🔧',
            status: 'active'
        },
        {
            id: 'configs',
            title: 'SYSTEM CONFIGS',
            description: 'Infrastructure setup',
            icon: '⚙️',
            status: 'idle'
        }
    ];

    // System stats
    const systemStats = {
        cpu: 67,
        memory: 82,
        network: 45,
        disk: 58
    };

    // Authentication screen
    if (!isAuthenticated) {
        return (
            <Terminal>
                <div className="vault-auth">
                    <div className="auth-header">
                        <h1 className="auth-title">
                            <span className="title-icon">🔐</span>
                            SECURE VAULT ACCESS
                        </h1>
                        <h2 className="vault-name-display">{vaultName}</h2>
                        <p className="auth-subtitle">SECTION-404 • CLASSIFIED AREA</p>
                    </div>

                    <div className="auth-panel">
                        <div className="auth-warning">
                            <div className="warning-icon">⚠️</div>
                            <div className="warning-text">
                                <strong>RESTRICTED ACCESS</strong><br />
                                This area contains classified information.
                                Unauthorized access is prohibited and will be prosecuted.
                            </div>
                        </div>

                        <div className="auth-instructions">
                            <p>🔑 To access this vault, you need a security code.</p>
                            <p>📋 Get the current code from the <Link to="/code-generator" className="code-link">Code Generator</Link> page.</p>
                            <p>⏱️ Codes expire every 60 seconds.</p>
                        </div>

                        <div className="terminal-auth">
                            <div className="auth-prompt">
                                <span className="prompt-text">root@section-404:~$</span>
                                <span className="prompt-command">authenticate</span>
                            </div>
                            <div className="auth-input-container">
                                <span className="input-label">Enter Security Code:</span>
                                <input
                                    type="text"
                                    className="auth-input"
                                    value={codeInput}
                                    onChange={(e) => setCodeInput(e.target.value.toUpperCase())}
                                    onKeyDown={handleAuth}
                                    placeholder="SEC-XXXX-XXX"
                                    autoFocus
                                />
                            </div>
                            {error && (
                                <div className="auth-error">
                                    <span className="error-icon">❌</span>
                                    {error}
                                </div>
                            )}
                        </div>

                        <div className="auth-footer">
                            <div className="footer-item">
                                <span className="footer-icon">🔒</span>
                                <span>256-bit Encryption</span>
                            </div>
                            <div className="footer-item">
                                <span className="footer-icon">📡</span>
                                <span>All attempts logged</span>
                            </div>
                            <div className="footer-item">
                                <span className="footer-icon">⏱️</span>
                                <span>Time-based OTP</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Terminal>
        );
    }

    // Authenticated vault view with cipher text
    return (
        <Terminal>
            <div className="secure-vault">
                {/* Header */}
                <div className="vault-header">
                    <div className="header-content">
                        <h1 className="vault-title">
                            <span className="title-icon">🔓</span>
                            <CipherText text={vaultName} tag="span" />
                        </h1>
                        <p className="vault-subtitle">
                            <CipherText text="SECTION-404 • SECURITY OPERATIONS CENTER" />
                        </p>
                        <div className="access-status">
                            <span className="status-dot"></span>
                            <CipherText text="ACCESS GRANTED" />
                        </div>
                    </div>
                </div>

                {/* Main Layout */}
                <div className="vault-layout">

                    {/* Left Panel - Entry Cards */}
                    <div className="vault-left">
                        <div className="section-header">
                            <h2><CipherText text="⚡ CLASSIFIED MODULES" /></h2>
                        </div>
                        <div className="entries-grid">
                            {entries.map(entry => (
                                <EntryCard
                                    key={entry.id}
                                    icon={entry.icon}
                                    title={<CipherText text={entry.title} />}
                                    description={<CipherText text={entry.description} />}
                                    status={entry.status}
                                    onClick={() => setSelectedEntry(entry)}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right Panel - System Widgets */}
                    <div className="vault-right">

                        {/* Selected Entry Details */}
                        {selectedEntry && (
                            <SystemWidget title={<CipherText text="Module Details" />} icon="📌" variant="info">
                                <InfoRow label="Module" value={<CipherText text={selectedEntry.title} />} highlight />
                                <InfoRow label="Description" value={<CipherText text={selectedEntry.description} />} />
                                <InfoRow label="Status" value={selectedEntry.status.toUpperCase()} highlight />
                                <InfoRow label="Classification" value={<CipherText text="TOP SECRET" />} highlight />
                            </SystemWidget>
                        )}

                        {/* System Stats */}
                        <SystemWidget title={<CipherText text="System Resources" />} icon="💻" variant="stats">
                            <StatBar label={<CipherText text="CPU Usage" />} value={systemStats.cpu} color="cyan" />
                            <StatBar label={<CipherText text="Memory" />} value={systemStats.memory} color="purple" />
                            <StatBar label={<CipherText text="Network" />} value={systemStats.network} color="lime" />
                            <StatBar label={<CipherText text="Disk I/O" />} value={systemStats.disk} color="orange" />
                        </SystemWidget>

                        {/* System Info */}
                        <SystemWidget title={<CipherText text="System Information" />} icon="ℹ️" variant="default">
                            <InfoRow label="OS" value={<CipherText text="Kali GNU/Linux Rolling" />} highlight />
                            <InfoRow label="Kernel" value={<CipherText text="5.15.8-kali8-amd64" />} />
                            <InfoRow label="Security" value={<CipherText text="MAXIMUM" />} highlight />
                            <InfoRow label="Encryption" value={<CipherText text="AES-256" />} />
                        </SystemWidget>

                        {/* Activity Feed */}
                        <SystemWidget title={<CipherText text="Security Log" />} icon="📡" variant="terminal">
                            <div className="activity-feed">
                                <div className="activity-item">
                                    <span className="activity-time">[{new Date().toLocaleTimeString()}]</span>
                                    <span className="activity-text">
                                        <CipherText text="Vault access granted" />
                                    </span>
                                </div>
                                <div className="activity-item">
                                    <span className="activity-time">[{new Date().toLocaleTimeString()}]</span>
                                    <span className="activity-text">
                                        <CipherText text="Authentication successful" />
                                    </span>
                                </div>
                                <div className="activity-item">
                                    <span className="activity-time">[{new Date().toLocaleTimeString()}]</span>
                                    <span className="activity-text">
                                        <CipherText text="Security scan completed" />
                                    </span>
                                </div>
                            </div>
                        </SystemWidget>

                    </div>
                </div>

                {/* Bottom Terminal Section */}
                <div className="vault-terminal">
                    <SystemWidget title={<CipherText text="System Monitor" />} icon="⚡" variant="terminal">
                        <pre className="terminal-output-text">
                            <CipherText text={`┌─────────────────────────────────────────────────────────────────┐
│ ${vaultName} v2.4.1 - SECTION-404                              │
├─────────────────────────────────────────────────────────────────┤
│ Security Level: MAXIMUM                                         │
│ Encryption: AES-256-GCM                                         │
│ Authentication: Time-based OTP                                  │
│ Access Control: RBAC + MFA                                      │
└─────────────────────────────────────────────────────────────────┘

[✓] All security systems operational
[✓] Intrusion detection active
[✓] Firewall enabled
[!] Classified data encrypted`} />
                        </pre>
                    </SystemWidget>
                </div>

            </div>
        </Terminal>
    );
};

export default SecureVault;
