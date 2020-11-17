import React from 'react';

export default function Modal({ children, handleBackgroundClick }) {
  const styles = {
    alignItems: 'center',
    backgroundColor: 'rgb(57, 54, 79, .8)',
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
  };

  const onClick = e => {
    e.target === e.currentTarget && handleBackgroundClick();
  }
  // Accessibility concerns:
  // TODO: add keydown event listener for escape.
  // TODO: research proper aria role when there is an onClick on presentation
  // TODO: set tab to correct position
  return (
    <div role="presentation" style={styles} onClick={onClick} tabIndex="-1">
      {children}
    </div>
  )
}
