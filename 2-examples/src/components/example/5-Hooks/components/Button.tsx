import React from 'react';

interface IButton {
  onClick : () => void,
  children ?: any
}

function Button({ onClick, children } : IButton) {
  // console.log('Rendering button - ', children);
  return <button onClick={onClick}>{children}</button>;
}

export default React.memo(Button);
