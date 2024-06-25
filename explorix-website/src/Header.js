import React from 'react';

function Header() {
  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById('about-section');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
      <div>
        <img src="public/logo.jpeg" alt="Logo" style={{ height: '50px' }} />
        <span>Explorix</span>
      </div>
      <div>
        <button onClick={handleScrollToAbout}>About</button>
        <button onClick={() => alert('Implement sign-in functionality here.')}>Sign In</button>
      </div>
    </header>
  );
}

export default Header;