import React from "react";

const AboutBackgrountImage = () => {
  return (
    <>
      <div className="absolute inset-0"></div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://picsum.photos/1900/1200')",
        }}
      ></div>
    </>
  );
};

export default AboutBackgrountImage;
