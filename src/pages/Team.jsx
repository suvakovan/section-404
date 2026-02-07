import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TerminalPrompt from '../components/TerminalPrompt';
import TypingText from '../components/TypingText';
import { teamIcon } from '../utils/asciiArt';

/**
 * Team page - Display organization and team information
 */
const Team = () => {
    const [showContent, setShowContent] = useState(false);

    const teamMembers = [
        {
            name: 'Suvakovan "Shadow" Chen',
            role: 'Chief Security Officer',
            specialty: 'Penetration Testing & Red Team Operations',
            skills: ['Network Security', 'Exploit Development', 'Social Engineering']
        },
        {
            name: 'Sarah "Cipher" Rodriguez',
            role: 'Lead Security Researcher',
            specialty: 'Malware Analysis & Reverse Engineering',
            skills: ['Binary Analysis', 'Threat Intelligence', 'Forensics']
        },
        {
            name: 'Marcus "Ghost" Thompson',
            role: 'Security Architect',
            specialty: 'Infrastructure Security & Cloud Security',
            skills: ['AWS Security', 'Zero Trust', 'DevSecOps']
        },
        {
            name: 'Emily "Firewall" Zhang',
            role: 'Application Security Lead',
            specialty: 'Web Application Security & API Security',
            skills: ['OWASP Top 10', 'Secure Code Review', 'Bug Bounty']
        }
    ];

    return (
        <div className="fade-in">
            {/* Team Header */}
            <div className="ascii-art mb-3">
                {teamIcon}
            </div>

            <TerminalPrompt command="cat team_info.txt" />
            <div className="terminal-output mb-3">
                <TypingText
                    text="# SECTION-404 - SECURITY TEAM"
                    speed={40}
                    onComplete={() => setShowContent(true)}
                />
            </div>

            {showContent && (
                <>
                    <div className="terminal-output mb-3 slide-in-left">
                        <h2 className="mb-2">🛡️ Our Mission</h2>
                        <p className="text-secondary mb-2">
                            We are a elite team of cybersecurity professionals dedicated to protecting
                            organizations from evolving cyber threats. Our expertise spans penetration
                            testing, security research, incident response, and security architecture.
                        </p>
                    </div>

                    <TerminalPrompt command="ls -la /team/members/" />
                    <div className="terminal-output mb-3 slide-in-right">
                        <h2 className="mb-2">👥 Team Members</h2>
                        {teamMembers.map((member, index) => (
                            <div
                                key={index}
                                className="mb-3 slide-in-left"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="mb-1">
                                    <span className="text-bright">┌─ {member.name}</span>
                                </div>
                                <div className="mb-1" style={{ paddingLeft: '20px' }}>
                                    <span className="text-dim">├─ Role: </span>
                                    <span className="text-secondary">{member.role}</span>
                                </div>
                                <div className="mb-1" style={{ paddingLeft: '20px' }}>
                                    <span className="text-dim">├─ Specialty: </span>
                                    <span className="text-secondary">{member.specialty}</span>
                                </div>
                                <div style={{ paddingLeft: '20px' }}>
                                    <span className="text-dim">└─ Skills: </span>
                                    <span className="text-secondary">{member.skills.join(' | ')}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <TerminalPrompt command="cat organization_stats.txt" />
                    <div className="terminal-output mb-3 slide-in-left">
                        <h2 className="mb-2">📊 Organization Stats</h2>
                        <ul className="command-list">
                            <li>
                                <span className="command-name">Years Active:</span>
                                <span className="command-description">10+ years</span>
                            </li>
                            <li>
                                <span className="command-name">Security Audits:</span>
                                <span className="command-description">500+ completed</span>
                            </li>
                            <li>
                                <span className="command-name">Vulnerabilities Found:</span>
                                <span className="command-description">10,000+</span>
                            </li>
                            <li>
                                <span className="command-name">Client Satisfaction:</span>
                                <span className="command-description">99.8%</span>
                            </li>
                            <li>
                                <span className="command-name">Global Presence:</span>
                                <span className="command-description">25+ countries</span>
                            </li>
                        </ul>
                    </div>

                    {/* Navigation */}
                    <div className="nav-links slide-in-right">
                        <Link to="/" className="nav-link">← Home</Link>
                        <Link to="/services" className="nav-link">Services →</Link>
                        <Link to="/contact" className="nav-link">Contact</Link>
                    </div>
                </>
            )}
        </div>
    );
};

export default Team;
