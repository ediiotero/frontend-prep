import React from "react";

const Youtube = ({embed}) => {
  return (
    <div className="ratio ratio-16x9" style={{width: "50%", margin: "1rem auto"}}>
      <iframe
        src={`https://www.youtube.com/embed/${embed}`}
        //TODO: update to use title for video
        title="YouTube video"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Youtube;
