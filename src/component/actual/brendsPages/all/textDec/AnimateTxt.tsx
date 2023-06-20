import { useEffect, useState } from "react";

export const AnimatedText = ({ text, interval }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const timeoutId = setTimeout(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, interval);

      return () => {
        clearTimeout(timeoutId);
      };
    }, [currentIndex, interval]);

    return (
      <>
        {text.substring(0, currentIndex)}
      </>

    );
  };