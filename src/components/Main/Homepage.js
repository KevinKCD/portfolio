import React, { useEffect, useState, useRef } from 'react';
import Home from '../Images/Home.jpg';
import './Homepage.css';

const roles = ["Solutions Engineer", "Software Engineer", "Software Developer"];

function Homepage() {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [underlineWidth, setUnderlineWidth] = useState(0);
  const textRef = useRef(null);

  useEffect(() => {
    // Handle typing and deleting
    const currentWord = roles[index];
    const speed = deleting ? 50 : 100; // speed for typing/deleting

    const timeout = setTimeout(() => {
      if (!deleting && subIndex < currentWord.length) {
        setSubIndex(prev => prev + 1);
      } else if (deleting && subIndex > 0) {
        setSubIndex(prev => prev - 1);
      } else if (!deleting && subIndex === currentWord.length) {
        setTimeout(() => setDeleting(true), 1000); // pause before deleting
      } else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex(prev => (prev + 1) % roles.length);
      }
    }, speed);

    setText(currentWord.substring(0, subIndex));

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);

  // Measure text width dynamically
  useEffect(() => {
    if (textRef.current) {
      setUnderlineWidth(textRef.current.offsetWidth);
    }
  }, [text]);

  return (
    <div className="homepage-container">
      <img src={Home} alt="Home" className="homepage-image" />
      <div className="text-overlay">
        <div className="name">Kevin Doan</div>
        <div className="subtitle-wrapper">
          <span ref={textRef} className="typed-text">{text}</span>
          <span className="cursor"></span>
          <div
            className="underline"
            style={{ width: `${underlineWidth}px` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
