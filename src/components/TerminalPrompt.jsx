import React from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Terminal prompt component displaying Kali Linux style prompt
 * Format: ┌──(root㉿kali)-[/path]
 *         └─$
 */
const TerminalPrompt = ({ command = '' }) => {
    const location = useLocation();

    // Map routes to terminal paths
    const getPath = () => {
        const pathMap = {
            '/': '/home/kali',
            '/team': '/home/kali/team',
            '/services': '/home/kali/services',
            '/contact': '/home/kali/contact',
        };
        return pathMap[location.pathname] || '/home/kali/404';
    };

    return (
        <div className="terminal-prompt">
            <div className="prompt-line">
                <span className="text-dim">┌──(</span>
                <span className="prompt-user">root㉿kali</span>
                <span className="text-dim">)-[</span>
                <span className="prompt-path">{getPath()}</span>
                <span className="text-dim">]</span>
            </div>
            <div className="prompt-line">
                <span className="text-dim">└─</span>
                <span className="prompt-symbol">$</span>
                {command && <span style={{ marginLeft: '8px' }}>{command}</span>}
            </div>
        </div>
    );
};

export default TerminalPrompt;
