import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TerminalPrompt from '../components/TerminalPrompt';
import TypingText from '../components/TypingText';
import Cursor from '../components/Cursor';
import { kaliLogo, welcomeBanner, getRandomQuote, getTerminalDateTime } from '../utils/asciiArt';

/**
 * Home page - Terminal welcome screen with ASCII art and commands
 */
const Home = () => {
    const [showWelcome, setShowWelcome] = useState(false);
    const [showQuote, setShowQuote] = useState(false);
    const [showCommands, setShowCommands] = useState(false);
    const [commandOutput, setCommandOutput] = useState('');
    const [commandInput, setCommandInput] = useState('');

    const quote = getRandomQuote();

    // Handle fake terminal commands
    const handleCommand = (e) => {
        if (e.key === 'Enter') {
            const cmd = commandInput.trim().toLowerCase();
            let output = '';

            switch (cmd) {
                case 'ls':
                    output = 'home/  team/  services/  contact/  about.txt  README.md';
                    break;
                case 'whoami':
                    output = 'root';
                    break;
                case 'help':
                    output = `Available commands:
  ls        - List directory contents
  whoami    - Display current user
  help      - Show this help message
  clear     - Clear the terminal
  date      - Show current date and time
  quote     - Display a random quote
  
Navigation:
  Use the links above or type 'home', 'team', 'services', or 'contact'`;
                    break;
                case 'clear':
                    setCommandOutput('');
                    setCommandInput('');
                    return;
                case 'date':
                    output = getTerminalDateTime();
                    break;
                case 'quote':
                    output = getRandomQuote();
                    break;
                case '':
                    break;
                default:
                    output = `bash: ${cmd}: command not found\nType 'help' for available commands`;
            }

            if (output) {
                setCommandOutput((prev) => prev + `\n$ ${commandInput}\n${output}\n`);
            }
            setCommandInput('');
        }
    };

    return (
        <div className="fade-in">
            {/* ASCII Art Logo */}
            <div className="ascii-art glow-effect">
                {kaliLogo}
            </div>

            {/* Welcome Banner */}
            <div className="ascii-art mb-3">
                {welcomeBanner}
            </div>

            {/* System Info */}
            <TerminalPrompt command="cat welcome.txt" />
            <div className="terminal-output mb-3">
                <TypingText
                    text="Welcome to SECTION-404 - Where Security Meets Innovation"
                    speed={30}
                    onComplete={() => setShowWelcome(true)}
                />
            </div>

            {showWelcome && (
                <>
                    <div className="terminal-output mb-2 slide-in-left">
                        <p className="mb-1">🔐 Cybersecurity Excellence</p>
                        <p className="mb-1">🛡️ Penetration Testing & Security Audits</p>
                        <p className="mb-1">⚡ Cutting-Edge Security Solutions</p>
                        <p className="mb-1">🌐 Global Security Operations</p>
                    </div>

                    <TerminalPrompt command="fortune" />
                    <div className="terminal-output mb-3 slide-in-right">
                        <TypingText
                            text={`"${quote}"`}
                            speed={25}
                            onComplete={() => setShowQuote(true)}
                        />
                    </div>
                </>
            )}

            {showQuote && (
                <>
                    {/* Navigation Links */}
                    <TerminalPrompt command="ls -la" />
                    <div className="nav-links slide-in-left">
                        <Link to="/vault" className="nav-link">
                            🔐 Secure Vault
                        </Link>
                        <Link to="/code-generator" className="nav-link">
                            🔑 Code Generator
                        </Link>
                        <Link to="/team" className="nav-link">
                            📁 Team
                        </Link>
                        <Link to="/services" className="nav-link">
                            📁 Services
                        </Link>
                        <Link to="/contact" className="nav-link">
                            📁 Contact
                        </Link>
                    </div>

                    {/* Interactive Command Section */}
                    <div className="mt-3 slide-in-right">
                        <TerminalPrompt command="" />
                        <div className="terminal-output">
                            <p className="text-dim mb-2">Try commands: ls, whoami, help, date, quote, clear</p>

                            {/* Command Output */}
                            {commandOutput && (
                                <pre className="terminal-output text-secondary" style={{ whiteSpace: 'pre-wrap' }}>
                                    {commandOutput}
                                </pre>
                            )}

                            {/* Command Input */}
                            <div className="command-input-container">
                                <span className="text-primary">$ </span>
                                <input
                                    type="text"
                                    className="command-input"
                                    value={commandInput}
                                    onChange={(e) => setCommandInput(e.target.value)}
                                    onKeyDown={handleCommand}
                                    placeholder="Type a command..."
                                    autoFocus
                                />
                                <Cursor />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Home;
