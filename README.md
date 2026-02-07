# 🔐 SECTION-404 | Cybersecurity Terminal UI

<div align="center">

![SECTION-404](https://img.shields.io/badge/SECTION--404-Secure%20Vault-00ff66?style=for-the-badge&logo=kali-linux&logoColor=white)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-7.3.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-2ee7ff?style=for-the-badge)

**A cyberpunk-themed terminal UI with military-grade security features**

[Live Demo](#) • [Documentation](#features) • [Report Bug](https://github.com/SI326/section-404/issues)

</div>

---

## 🎯 Overview

SECTION-404 is a cutting-edge cybersecurity terminal interface inspired by the aesthetics of **Kali Linux** and cyberpunk culture. It creates a "hacker-style" experience right in the browser, featuring a neon cyan and purple theme, glassmorphism effects, and authentic terminal interactions.

### ✨ Key Features

- 💻 **Interactive Terminal** - A functional terminal on the home page where commands like `ls`, `whoami`, `date`, and `help` actually work.
- 🔐 **Secure Vault System** - A high-security area protected by a **Time-Based OTP (TOTP)** system. The vault name itself changes every 60 seconds (e.g., BLACKBOX, ZERO-DAY, GHOST-PROTOCOL).
- 🕵️ **Code Generator** - A dedicated tool to generate the 60-second rotating access codes needed to enter the vault.
- 🛸 **Antogravity Dashboard** - A futuristic command center with glowing "glass" cards, real-time system widgets (CPU/RAM usage), and detailed system logs.
- 🕶️ **Cipher Text Encryption** - Sensitive information is "encrypted" using ROT13 and only reveals itself when you hover over it or touch it on mobile.
- 📱 **Fully Responsive** - Works seamlessly on desktops, laptops, tablets, and mobile phones with a layout that adapts to any screen size.
- 🎨 **Cyberpunk UI** - Glassmorphism effects with neon cyan/purple gradients and CRT monitor scanlines.
- ⚡ **Terminal Animations** - Typing effects, cursor blink, and smooth transitions.

---

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/SI326/section-404.git
cd section-404

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

---

## 🔐 Security Features

### 1. Time-Based Authentication

Access the secure vault requires a time-based one-time password (TOTP):

- **Code Format**: `SEC-XXXX-XXX`
- **Rotation**: Every 60 seconds
- **Algorithm**: Based on current hour, minute, and day
- **Access**: Get codes from `/code-generator` page

### 2. Cipher Text System

All sensitive information appears encrypted until interaction:

- **Encryption**: ROT13 symmetric cipher
- **Reveal**: Hover (desktop) or touch (mobile)
- **Visual**: Blur effect with lock/unlock icons
- **Coverage**: All text in secure vault

### 3. Dynamic Vault Names

Security through obscurity with rotating vault names:

```
VAULT-404 → BLACKBOX → CIPHER-CORE → DARKNET → GHOST-PROTOCOL
→ SHADOW-OPS → ZERO-DAY → CRYPTEX → PHANTOM-NET → REDACTED
```

---

## 📂 Project Structure

```
section-404/
├── public/
│   └── kali-dragon.svg          # Custom wolf logo
├── src/
│   ├── components/
│   │   ├── Terminal.jsx         # Main terminal container
│   │   ├── EntryCard.jsx        # Glassmorphism cards
│   │   ├── SystemWidget.jsx     # System stats widgets
│   │   ├── CipherText.jsx       # Encrypted text component
│   │   ├── TerminalPrompt.jsx   # Command prompt
│   │   ├── TypingText.jsx       # Typing animation
│   │   └── Cursor.jsx           # Blinking cursor
│   ├── pages/
│   │   ├── Home.jsx             # Landing page
│   │   ├── Antogravity.jsx      # Secure vault (auth required)
│   │   ├── CodeGenerator.jsx    # Security code generator
│   │   ├── Team.jsx             # Team information
│   │   ├── Services.jsx         # Services offered
│   │   ├── Contact.jsx          # Contact page
│   │   └── NotFound.jsx         # 404 error page
│   ├── styles/
│   │   ├── index.css            # Global styles
│   │   ├── Terminal.css         # Terminal styling
│   │   └── animations.css       # Animations & effects
│   ├── utils/
│   │   ├── asciiArt.js          # ASCII art & banners
│   │   └── security.js          # Security utilities
│   └── App.jsx                  # Main app component
└── index.html                   # Entry point
```

---

## 🎨 Design System

### Color Palette

```css
--bg-primary: #0c0f14          /* Deep charcoal */
--neon-cyan: #2ee7ff           /* Primary accent */
--neon-purple: #9d4edd         /* Secondary accent */
--electric-blue: #4cc9f0       /* Tertiary accent */
--neon-magenta: #f72585        /* Error/warning */
--neon-lime: #2bd576           /* Success */
--neon-orange: #ff6b35         /* Alert */
```

### Typography

- **Font**: Fira Code, JetBrains Mono, Courier New (monospace)
- **Sizes**: 14px (small), 16px (base), 18px (large)

### Effects

- **Glassmorphism**: `backdrop-filter: blur(15px)`
- **Neon Glow**: Multi-layer drop shadows
- **Animations**: Smooth transitions with cubic-bezier easing

---

## 🌐 Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Landing page with navigation |
| `/vault` | Secure Vault | High-security area (requires auth) |
| `/code-generator` | Code Generator | Get current security codes |
| `/team` | Team | Team information |
| `/services` | Services | Services offered |
| `/contact` | Contact | Contact information |
| `*` | 404 | Custom error page |

---

## 💻 Usage

### Accessing the Secure Vault

1. **Get Security Code**
   ```
   Navigate to: /code-generator
   Copy the displayed code (e.g., SEC-4B2F-847)
   ```

2. **Access Vault**
   ```
   Navigate to: /vault
   Enter code in terminal prompt
   Press Enter
   ```

3. **Explore Encrypted Data**
   ```
   Hover over encrypted text to reveal
   Click on entry cards to view details
   ```

### Module Entries

The vault contains 8 classified modules:

- ⚡ **CLASSIFIED PROJECTS** - Top-secret operations
- 🔍 **INTEL RESEARCH** - Threat intelligence
- 💀 **EXPLOIT ARSENAL** - Zero-day exploits
- ⚗️ **LAB EXPERIMENTS** - Sandbox testing
- 📡 **SECURITY LOGS** - Audit trails
- 📊 **THREAT REPORTS** - Analysis documents
- 🔧 **HACKING TOOLS** - Penetration utilities
- ⚙️ **SYSTEM CONFIGS** - Infrastructure setup

---

## 📱 Responsive Design

Optimized breakpoints:

- **Mobile**: 360px - 768px
- **Tablet**: 768px - 1024px
- **Laptop**: 1024px - 1400px
- **Desktop**: 1400px+

Features:
- Adaptive grid layouts
- Touch-friendly controls
- Scalable typography
- Optimized ASCII art sizing

---

## 🛠️ Technologies

- **Frontend**: React 18.3.1
- **Build Tool**: Vite 7.3.1
- **Routing**: React Router v6
- **Styling**: Vanilla CSS with CSS Variables
- **Animations**: CSS Keyframes & Transitions
- **Icons**: Unicode & Emoji
- **Validation**: PropTypes

---

## 🔧 Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Code Style

- **ESLint**: Configured with React rules
- **Formatting**: 2-space indentation
- **Naming**: camelCase for variables, PascalCase for components

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Inspired by **Kali Linux** terminal aesthetics
- Cyberpunk design influenced by modern UI trends
- Security concepts from penetration testing practices

---

## 📞 Contact

**SECTION-404 Team**

- GitHub: [@SI326](https://github.com/SI326)
- Repository: [section-404](https://github.com/SI326/section-404)
- Issues: [Report Bug](https://github.com/SI326/section-404/issues)

---

<div align="center">

**Built with ❤️ and ☕ by the SECTION-404 Team**

![Kali Linux](https://img.shields.io/badge/Kali-Linux-557C94?style=flat-square&logo=kali-linux&logoColor=white)
![Cybersecurity](https://img.shields.io/badge/Cybersecurity-Terminal-00ff66?style=flat-square)
![Status](https://img.shields.io/badge/Status-Active-2ee7ff?style=flat-square)

</div>#   s e c t i o n - 4 0 4 
 
 #   s e c t i o n - 4 0 4 
 
 #   s e c t i o n - 4 0 4 
 
 