
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full p-4 border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-400 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 6.252a1.5 1.5 0 0 1 .632 2.9l-4.164 2.38a1.5 1.5 0 1 1-.836-2.016l4.164-2.38A1.5 1.5 0 0 1 12 6.252z"/>
          <path d="m12 11.252 4.164 2.38a1.5 1.5 0 1 1-.836 2.016L11.164 13.27a1.5 1.5 0 1 1 .836-2.016z"/>
          <path d="M12 17.748a1.5 1.5 0 0 1-.632-2.9l4.164-2.38a1.5 1.5 0 1 1 .836 2.016l-4.164 2.38a1.5 1.5 0 0 1-.204.884z"/>
        </svg>
        <h1 className="text-xl font-bold text-white">Gemini Story Generator</h1>
      </div>
    </header>
  );
};

export default Header;
