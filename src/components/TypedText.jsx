import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypedText = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Web Developer", "MERN Stack Dev", "React Lover", "Java Coder"],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => {
      typed.destroy(); // cleanup on unmount
    };
  }, []);

  return <span ref={typedRef}></span>;
};

export default TypedText;
