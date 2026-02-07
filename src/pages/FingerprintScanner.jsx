import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Terminal from '../components/Terminal';
import '../styles/Terminal.css';

/**
 * FingerprintScanner - Loading page with biometric scan animation
 */
const FingerprintScanner = () => {
    const navigate = useNavigate();
    const [scanProgress, setScanProgress] = useState(0);

    useEffect(() => {
        // Simulate scanning process
        const interval = setInterval(() => {
            setScanProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        navigate('/vault-password');
                    }, 1000);
                    return 100;
                }
                return prev + 1;
            });
        }, 50);

        return () => clearInterval(interval);
    }, [navigate]);

    return (
        <div className="vault-auth">
            <div className="auth-header">
                <h1 className="auth-title">
                    <span className="title-icon">🧬</span>
                    BIOMETRIC VERIFICATION
                </h1>
                <p className="auth-subtitle">IDENTITY CONFIRMATION REQUIRED</p>
            </div>

            <div className="auth-panel">
                <div className="scan-container" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '2rem'
                }}>

                    {/* Cyber Fingerprint SVG */}
                    <div className="fingerprint-container" style={{
                        position: 'relative',
                        width: '150px',
                        height: '150px',
                        marginBottom: '2rem'
                    }}>
                        <svg viewBox="0 0 100 100" className="fingerprint-svg" style={{
                            width: '100%',
                            height: '100%',
                            filter: 'drop-shadow(0 0 5px var(--neon-cyan))'
                        }}>
                            {/* Outer Ring */}
                            <circle cx="50" cy="50" r="45" fill="none" stroke="var(--text-dim)" strokeWidth="2" strokeDasharray="10 5" opacity="0.5" />
                            <circle cx="50" cy="50" r="45" fill="none" stroke="var(--neon-cyan)" strokeWidth="2" strokeDasharray="10 200" strokeDashoffset={-scanProgress * 3} style={{ transition: 'stroke-dashoffset 0.1s linear' }} />

                            {/* Inner Arcs / Fingerprint Ridges */}
                            <path d="M30 50 A 20 20 0 0 1 70 50" fill="none" stroke="var(--neon-cyan)" strokeWidth="3" strokeLinecap="round" opacity={scanProgress > 20 ? 1 : 0.3} />
                            <path d="M25 60 A 25 25 0 0 1 75 60" fill="none" stroke="var(--neon-cyan)" strokeWidth="3" strokeLinecap="round" opacity={scanProgress > 40 ? 1 : 0.3} />
                            <path d="M35 40 A 15 15 0 0 1 65 40" fill="none" stroke="var(--neon-cyan)" strokeWidth="3" strokeLinecap="round" opacity={scanProgress > 60 ? 1 : 0.3} />
                            <path d="M40 30 A 10 10 0 0 1 60 30" fill="none" stroke="var(--neon-cyan)" strokeWidth="3" strokeLinecap="round" opacity={scanProgress > 80 ? 1 : 0.3} />

                            {/* Center Core */}
                            <circle cx="50" cy="50" r="5" fill={scanProgress === 100 ? "var(--neon-lime)" : "var(--text-dim)"} />
                        </svg>

                        {/* Scanning Line */}
                        <div style={{
                            position: 'absolute',
                            top: '0',
                            left: '0',
                            width: '100%',
                            height: '2px',
                            background: 'var(--neon-lime)',
                            boxShadow: '0 0 10px var(--neon-lime)',
                            animation: 'scan 2s infinite linear',
                            opacity: scanProgress === 100 ? 0 : 1
                        }}></div>
                    </div>

                    <div className="scan-status" style={{ textAlign: 'center' }}>
                        <h2 style={{
                            color: 'var(--neon-lime)',
                            fontFamily: 'monospace',
                            marginBottom: '1rem',
                            fontSize: '1.2rem',
                            textShadow: '0 0 5px rgba(0, 255, 0, 0.5)'
                        }}>
                            {scanProgress < 100 ? "CYBER SECURITY DEGREE LOADING..." : "IDENTITY CONFIRMED"}
                        </h2>

                        <div className="progress-bar" style={{
                            width: '300px',
                            height: '4px',
                            background: '#1a1a1a',
                            borderRadius: '2px',
                            overflow: 'hidden',
                            margin: '0 auto',
                            position: 'relative'
                        }}>
                            <div style={{
                                width: `${scanProgress}%`,
                                height: '100%',
                                background: 'var(--neon-lime)',
                                boxShadow: '0 0 10px var(--neon-lime)',
                                transition: 'width 0.1s linear'
                            }}></div>
                        </div>

                        <div style={{
                            marginTop: '0.8rem',
                            color: 'var(--text-dim)',
                            fontFamily: 'monospace',
                            fontSize: '0.9rem'
                        }}>
                            [ {scanProgress}% COMPLETE ]
                        </div>
                    </div>
                </div>

                <div className="auth-footer">
                    <div className="footer-item">
                        <span className="footer-icon">🔒</span>
                        <span>Biometric Encryption</span>
                    </div>
                    <div className="footer-item">
                        <span className="footer-icon">📡</span>
                        <span>Verifying Identity</span>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes scan {
                    0% { top: 0; opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { top: 100%; opacity: 0; }
                }
            `}</style>
        </div>
    );
};

export default FingerprintScanner;
