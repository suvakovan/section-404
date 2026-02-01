import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TerminalPrompt from '../components/TerminalPrompt';
import Cursor from '../components/Cursor';
import { errorBanner } from '../utils/asciiArt';

/**
 * Custom 404 Not Found page with interactive terminal commands
 */
const NotFound = () => {
    const navigate = useNavigate();
    const [commandInput, setCommandInput] = useState('');
    const [commandHistory, setCommandHistory] = useState([]);

    // Handle terminal commands for navigation
    const handleCommand = (e) => {
        if (e.key === 'Enter') {
            const cmd = commandInput.trim().toLowerCase();

            // Add command to history
            setCommandHistory([...commandHistory, { cmd, output: '' }]);

            // Process command
            switch (cmd) {
                case 'home':
                    navigate('/');
                    break;
                case 'team':
                    navigate('/team');
                    break;
                case 'services':
                    navigate('/services');
                    break;
                case 'contact':
                    navigate('/contact');
                    break;
                case 'help':
                    setCommandHistory([
                        ...commandHistory,
                        {
                            cmd,
                            output: `Available commands:
  home      - Navigate to home page
  team      - Navigate to team page
  services  - Navigate to services page
  contact   - Navigate to contact page
  help      - Show this help message
  clear     - Clear the terminal`
                        }
                    ]);
                    break;
                case 'clear':
                    setCommandHistory([]);
                    break;
                case '':
                    break;
                default:
                    setCommandHistory([
                        ...commandHistory,
                        {
                            cmd,
                            output: `bash: ${cmd}: command not found\nType 'help' for available commands`
                        }
                    ]);
            }

            setCommandInput('');
        }
    };

    return (
        <div className="fade-in">
            {/* Error Banner */}
            <div className="ascii-art glow-effect mb-3">
                {errorBanner}
            </div>

            {/* Error Message */}
            <TerminalPrompt command="error 404" />
            <div className="terminal-output mb-3 slide-in-left">
                <p className="text-bright mb-2">
                    ⚠️ ERROR: The requested page could not be found.
                </p>
                <p className="text-secondary mb-2">
                    The page you are looking for might have been removed, had its name changed,
                    or is temporarily unavailable.
                </p>
            </div>

            {/* Available Commands */}
            <TerminalPrompt command="cat available_commands.txt" />
            <div className="terminal-output mb-3 slide-in-right">
                <h2 className="mb-2">🔧 Available Navigation Commands</h2>
                <ul className="command-list">
                    <li>
                        <span className="command-name">home</span>
                        <span className="command-description">Return to home page</span>
                    </li>
                    <li>
                        <span className="command-name">team</span>
                        <span className="command-description">View team information</span>
                    </li>
                    <li>
                        <span className="command-name">services</span>
                        <span className="command-description">Explore our services</span>
                    </li>
                    <li>
                        <span className="command-name">contact</span>
                        <span className="command-description">Get in touch with us</span>
                    </li>
                    <li>
                        <span className="command-name">help</span>
                        <span className="command-description">Show help information</span>
                    </li>
                    <li>
                        <span className="command-name">clear</span>
                        <span className="command-description">Clear the terminal</span>
                    </li>
                </ul>
            </div>

            {/* Interactive Terminal */}
            <div className="terminal-output mb-3 slide-in-left">
                <p className="text-dim mb-2">
                    💡 Type a command below to navigate (e.g., 'home', 'team', 'services', 'contact')
                </p>

                {/* Command History */}
                {commandHistory.map((entry, index) => (
                    <div key={index} className="mb-2">
                        <div className="text-primary">$ {entry.cmd}</div>
                        {entry.output && (
                            <pre className="text-secondary" style={{ whiteSpace: 'pre-wrap', marginTop: '4px' }}>
                                {entry.output}
                            </pre>
                        )}
                    </div>
                ))}

                {/* Command Input */}
                <TerminalPrompt command="" />
                <div className="command-input-container">
                    <span className="text-primary">$ </span>
                    <input
                        type="text"
                        className="command-input"
                        value={commandInput}
                        onChange={(e) => setCommandInput(e.target.value)}
                        onKeyDown={handleCommand}
                        placeholder="Type a command and press Enter..."
                        autoFocus
                    />
                    <Cursor />
                </div>
            </div>

            {/* ASCII Art Decoration */}
            <div className="ascii-art text-dim mt-3">
                {`
    ┌─────────────────────────────────────┐
    │  Lost in cyberspace? We'll help!   │
    └─────────────────────────────────────┘
        `}
            </div>
        </div>
    );
};

export default NotFound;
