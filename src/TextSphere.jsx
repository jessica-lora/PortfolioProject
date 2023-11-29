import React, { useEffect } from "react";
import "./TextSphere.css";
import { createRoot } from "react-dom/client";

// Importing TagCloud package
import TagCloud from "TagCloud";

function TextSphere() {
  // Animation settings for Text Cloud
  useEffect(() => {
    const container = ".tagcloud";
    const texts = [
      "HTML",
      "CSS",
      "SQL",
      "JavaScript",
      "React",
      "Python",
      "Django",
      "NodeJS",
      "FastAPI",
      "Jquery",
      "Docker",
      "GIT",
      "GITHUB",
    ];

    const options = {
      radius: 300,
      maxSpeed: "normal",
      initSpeed: "normal",
      keep: true,
    };

    TagCloud(container, texts, options);
  });

  return (
    <div className="text-shpere">
      {/* span tag className must be "tagcloud"  */}
      <span className="tagcloud"></span>
    </div>
  );
}

const container1 = document.getElementById("root1");
const root = createRoot(container1);
root.render(<TextSphere />);
