import React, { useEffect, useState } from "react";
import Home from "../../Images/Home.jpg";
import "./Homepage.css";
const roles = ["Solutions Engineer", "Software Engineer", "Software Developer"];

function Homepage() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (index === roles.length) setIndex(0);

    const currentWord = roles[index];
    const typingSpeed = deleting ? 50 : 100;

    const timeout = setTimeout(() => {
      setText(
        deleting
          ? currentWord.substring(0, subIndex - 1)
          : currentWord.substring(0, subIndex + 1)
      );
      setSubIndex(subIndex + (deleting ? -1 : 1));

      if (!deleting && subIndex === currentWord.length) {
        setTimeout(() => setDeleting(true), 1200);
      } else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex(prev => (prev + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  return (
    <div id="Homepage" className="homepage-container">
      <img src={Home} alt="Home" className="homepage-image" />
      <div className="text-overlay">
        <h1 className="name">Kevin Doan</h1>
        <div className="subtitle-wrapper">
          <span className="constant">Trained </span>
          <span className="typed-text">{text}</span>
          <span className="cursor" />
            <div
              className="underline"
              style={{ width: `${text.length * 0.9}ch` }}
            ></div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
