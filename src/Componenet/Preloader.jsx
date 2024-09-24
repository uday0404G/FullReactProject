import React, { useState, useEffect } from "react";
import "./Loader.css";

const Preloader = () => {
  const [loaded, setLoaded] = useState(false); // Manage when the preloader is visible

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoaded(true); 
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Conditionally render preloader only if not loaded
  if (loaded) {
    return null; // Once loaded, don't render anything
  }

  return (
    <div id="preloader">
      <div className="line"></div>
    </div>
  );
};

export default Preloader;
