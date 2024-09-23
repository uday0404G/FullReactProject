import React, { useState, useEffect } from "react";
import "./Loader.css";

const Preloader = () => {
  const [loaded, setLoaded] = useState(false); // Manage when the preloader is visible

  useEffect(() => {
    // Simulate window load event
    const handleLoad = () => {
      setTimeout(() => {
        setLoaded(true); // Set loaded to true after 1 second
      }, 1000);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad); // Cleanup event listener on unmount
    };
  }, []);

  // Conditionally render preloader only if not loaded
  if (loaded) {
    return null; // Once loaded, don't render anything
  }

  return (
    <div id="preloader" className={loaded ? "loaded" : ""}>
      <div className="line"></div>
    </div>
  );
};

export default Preloader;
