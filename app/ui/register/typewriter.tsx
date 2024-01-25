'use client'

import React, { useState, useEffect } from "react";

interface TypeWriter {
  text: string;
  delay: number;
}

const TypeWriter = ({ text, delay }: TypeWriter) => {
  const [currentText, setCurrentText] = useState(" ");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return <span>{currentText}</span>;
};

export default TypeWriter;
