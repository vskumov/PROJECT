import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NavigationWrapper = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e) => {
      const tagName = e.target.tagName.toLowerCase();

      if (
        e.key === "Backspace" &&
        tagName !== "input" &&
        tagName !== "textarea"
      ) {
        navigate(-1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [navigate]);

  return <>{children}</>;
};

export default NavigationWrapper;
