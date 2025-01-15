// components/LoaderButton.jsx

import React from 'react';
import '../styles/neumorphic_loader_button.css'; // Adjust the path if needed

function LoaderButton({ isLoading, onClick, children }) {
  return (
    <button 
      className={isLoading ? 'loading' : ''} 
      onClick={onClick} 
      disabled={isLoading}
    >
      {isLoading ? '' : children}
    </button>
  );<LoaderButton
  isLoading={false}
  text="Load More"
  onClick={() => console.log('Button clicked')}
/>

}

export default LoaderButton;