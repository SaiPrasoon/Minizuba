import Lottie from "lottie-react";
import NoDataAnimation from "../../assets/animations/No_Data.json";
import "./index.css";

const NoData = () => {
  return (
    <div className="no-data-container">
      <div className="animation-container">
        <Lottie
          animationData={NoDataAnimation}
          loop={true}
          className="animation"
        />
      </div>
      <span className="no-data-text">No Data found for the given filters</span>
    </div>
  );
};

export default NoData;
