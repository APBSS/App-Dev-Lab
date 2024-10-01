import React, { useState, useEffect } from 'react';
import './InputWrapper.css'; // Make sure to import your CSS here

const InputWrapper = () => {
  const [inputValue, setInputValue] = useState('');
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const [typedText, setTypedText] = useState('');
  const sentence = "Experience the Future of GYM Efficiently.";
  const typingSpeed = 100; // milliseconds
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    const typeInterval = setInterval(() => {
      if (currentCharIndex < sentence.length) {
        const nextChar = sentence[currentCharIndex];

        if (nextChar === 'G') {
          // Append the highlighted "GYM"
          setTypedText((prev) => prev + "GYM");
          setCurrentCharIndex((prev) => prev + 3); // Increment by 3 for "GYM"
        } else {
          setTypedText((prev) => prev + nextChar);
          setCurrentCharIndex((prev) => prev + 1);
        }
      } else {
        // Clear the text after completing the sentence
        setTimeout(() => {
          setTypedText('');
          setCurrentCharIndex(0); // Reset the index for looping
        }, 0); // No delay
      }
    }, typingSpeed);

    return () => clearInterval(typeInterval);
  }, [currentCharIndex]);

  const handleFocus = () => {
    setShowPlaceholder(false);
  };

  const handleBlur = () => {
    if (inputValue === '') {
      setShowPlaceholder(true);
    }
  };

  return (
    <div className="input-wrapper">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {showPlaceholder && (
        <div className="placeholder" style={{ color: "white", fontSize: 27 }}>
          {typedText.replace("GYM", <span className="highlighted">GYM</span>)}
        </div>
      )}
    </div>
  );
};

export default InputWrapper;
