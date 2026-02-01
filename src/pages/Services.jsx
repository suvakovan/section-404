import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TerminalPrompt from '../components/TerminalPrompt';
import TypingText from '../components/TypingText';
import { servicesIcon } from '../utils/asciiArt';

/**
 * Services page - Display services and projects
 */
const Services = () => {
    const [showContent, setShowContent] = useState(false);

    const services = [
        {
            name: 'Penetration Testing',
            icon: '🎯',
            description: 'Comprehensive security assessments to identify vulnerabilities',
            features: [
                'Network Penetration Testing',
                'Web Application Testing',
                'Mobile App Security Testing',
                'API Security Assessment',
                'Social Engineering Tests'
            ]
        },
        {
            name: 'Security Audits',
            icon: '🔍',
            description: 'In-depth security reviews and compliance assessments',
            features: [
                'Code Security Review',
                'Infrastructure Audit',
                'Compliance Assessment (ISO 27001, SOC 2)',
                'Cloud Security Audit',
                'Third-Party Risk Assessment'
            ]
        },
        {
            name: 'Incident Response',
            icon: '🚨',
            description: '24/7 rapid response to security incidents',
            features: [
                'Breach Investigation',
                'Malware Analysis',
                'Digital Forensics',
                'Threat Hunting',
                'Recovery Planning'
            ]
        },
        {
            name: 'Security Training',
            icon: '🎓',
            description: 'Expert-led training programs for security teams',
            features: [
                'Secure Coding Practices',
                'Security Awareness Training',
                'Red Team Training',
                'Incident Response Drills',
                'Custom Workshops'
            ]
        },
        {
            name: 'Managed Security',
            icon: '🛡️',
            description: 'Ongoing security monitoring and management',
            features: [
                '24/7 SOC Monitoring',
                'Vulnerability Management',
                'Patch Management',
                'Security Tool Management',
                'Threat Intelligence'
            ]
        }
    ];

    return (
        <div className="fade-in">
            {/* Services Header */}
            <div className="ascii-art mb-3">
                {servicesIcon}
            </div>

            <TerminalPrompt command="cat services.txt" />
            <div className="terminal-output mb-3">
                <TypingText
                    text="# SECURITY SERVICES & SOLUTIONS"
                    speed={40}
                    onComplete={() => setShowContent(true)}
                />
            </div>

            {showContent && (
                <>
                    <div className="terminal-output mb-3 slide-in-left">
                        <p className="text-secondary mb-2">
                            We offer comprehensive cybersecurity services tailored to protect your
                            organization from modern threats. Our team combines cutting-edge tools
                            with deep expertise to deliver world-class security solutions.
                        </p>
                    </div>

                    <TerminalPrompt command="ls -la /services/" />
                    <div className="terminal-output mb-3">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="mb-3 slide-in-right"
                                style={{ animationDelay: `${index * 0.15}s` }}
                            >
                                <div className="mb-1">
                                    <span className="text-bright">
                                        {service.icon} {service.name}
                                    </span>
                                </div>
                                <div className="mb-1" style={{ paddingLeft: '20px' }}>
                                    <span className="text-secondary">{service.description}</span>
                                </div>
                                <div style={{ paddingLeft: '20px' }}>
                                    <span className="text-dim">└─ Features:</span>
                                    <ul style={{ paddingLeft: '40px', marginTop: '8px' }}>
                                        {service.features.map((feature, fIndex) => (
                                            <li key={fIndex} className="text-secondary mb-1">
                                                • {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>

                    <TerminalPrompt command="cat recent_projects.log" />
                    <div className="terminal-output mb-3 slide-in-left">
                        <h2 className="mb-2">🚀 Recent Projects</h2>
                        <ul className="command-list">
                            <li>
                                <span className="command-name">Fortune 500 Bank:</span>
                                <span className="command-description">Complete infrastructure penetration test</span>
                            </li>
                            <li>
                                <span className="command-name">Healthcare Provider:</span>
                                <span className="command-description">HIPAA compliance audit & remediation</span>
                            </li>
                            <li>
                                <span className="command-name">E-commerce Platform:</span>
                                <span className="command-description">Web application security assessment</span>
                            </li>
                            <li>
                                <span className="command-name">Tech Startup:</span>
                                <span className="command-description">Cloud security architecture review</span>
                            </li>
                            <li>
                                <span className="command-name">Government Agency:</span>
                                <span className="command-description">Red team engagement & training</span>
                            </li>
                        </ul>
                    </div>

                    <div className="terminal-output mb-3 slide-in-right">
                        <h2 className="mb-2">🏆 Certifications & Tools</h2>
                        <p className="text-secondary mb-2">
                            <span className="text-bright">Certifications:</span> OSCP, OSCE, CEH, CISSP, GPEN, GWAPT, GCIH
                        </p>
                        <p className="text-secondary mb-2">
                            <span className="text-bright">Tools:</span> Kali Linux, Metasploit, Burp Suite, Nmap, Wireshark,
                            Cobalt Strike, BloodHound, Empire, Custom Tools
                        </p>
                        <p className="text-secondary">
                            <span className="text-bright">Methodologies:</span> OWASP, PTES, NIST, MITRE ATT&CK
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="nav-links slide-in-left">
                        <Link to="/" className="nav-link">← Home</Link>
                        <Link to="/team" className="nav-link">Team</Link>
                        <Link to="/contact" className="nav-link">Contact →</Link>
                    </div>
                </>
            )}
        </div>
    );
};

export default Services;
