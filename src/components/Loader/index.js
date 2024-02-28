import React from "react";
import Lottie from "lottie-react";
import LoadingAnimation from "../../assets/animations/loading.json";
import "./index.css";

const Loader = () => {
  return (
    <div className="loading-container">
      <Lottie
        loop={true}
        animationData={LoadingAnimation}
      />
      <div>Please wait while we fetch the data ...</div>
    </div>
  );
};

export default React.memo(Loader);
