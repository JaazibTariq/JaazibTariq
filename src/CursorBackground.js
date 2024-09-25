import React, { useState, useEffect } from 'react';

const CursorBackground = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updatePosition);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
    };
  }, []);

  return (
    <div
      className="cursor-gradient"
      style={{
        background: `radial-gradient(circle at ${position.x}px ${position.y}px, #537895, #09203F)`,
      }}
    ></div>
  );
};

export default CursorBackground;