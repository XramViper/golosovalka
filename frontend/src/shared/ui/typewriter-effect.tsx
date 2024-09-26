"use client";

import React, { useState, useEffect, useRef } from "react";

type TypewriterEffectProps = {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  delaySpeed?: number;
  loop?: boolean;
};

export const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  words,
  typeSpeed = 100,
  deleteSpeed = 50,
  delaySpeed = 1500,
  loop = false,
}) => {
  const [displayedText, setDisplayedText] = useState(words[0]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), 2000);
        }
      },
      { threshold: 0.5 },
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let timer: NodeJS.Timeout;

    const handleTyping = () => {
      const currentWord = words[wordIndex];
      const shouldDelete = isDeleting
        ? displayedText.length > 0
        : displayedText.length < currentWord.length;

      if (shouldDelete) {
        setDisplayedText((prev) =>
          isDeleting
            ? prev.slice(0, -1)
            : currentWord.slice(0, prev.length + 1),
        );
        timer = setTimeout(handleTyping, isDeleting ? deleteSpeed : typeSpeed);
      } else {
        if (isDeleting) {
          setIsDeleting(false);
          setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
          if (wordIndex === words.length - 1 && !loop) {
            return;
          }
        } else {
          timer = setTimeout(() => setIsDeleting(true), delaySpeed);
        }
      }
    };

    timer = setTimeout(handleTyping, typeSpeed);

    return () => clearTimeout(timer);
  }, [
    displayedText,
    isDeleting,
    wordIndex,
    words,
    typeSpeed,
    deleteSpeed,
    delaySpeed,
    loop,
    isVisible,
  ]);

  return (
    <div ref={componentRef} className="typewriter">
      {displayedText ? displayedText : <div>&nbsp;</div>}
    </div>
  );
};
