"use client";

import { useScroll, motion, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import classes from "./smooth-scroll.module.scss";

type Props = {
  children: React.ReactNode;
};

export function SmoothScroll({ children }: Props) {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { mass: 0.05 });

  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.scrollHeight);
      }
      setWindowHeight(window.innerHeight);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const y = useTransform(smoothProgress, (value) => {
    return value * -(contentHeight - windowHeight);
  });

  return (
    <>
      <div style={{ height: contentHeight }} />
      <motion.div className={classes.scrollBody} style={{ y }} ref={contentRef}>
        {children}
      </motion.div>
    </>
  );
}
