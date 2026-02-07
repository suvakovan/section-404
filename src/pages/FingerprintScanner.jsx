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

                    {/* Realistic Fingerprint Image */}
                    <div className="fingerprint-container" style={{
                        position: 'relative',
                        width: '150px',
                        height: '180px',
                        marginBottom: '2rem',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <img
                            src="/fingerprint.png"
                            alt="Fingerprint Scan"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain',
                                filter: `drop-shadow(0 0 10px var(--neon-cyan)) opacity(${scanProgress > 0 ? 0.8 + (scanProgress / 500) : 0.5})`,
                                transition: 'filter 0.5s ease'
                            }}
                        />

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
