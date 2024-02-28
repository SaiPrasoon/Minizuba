import "./index.css";
import MinizubaLogo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="header-container">
      <img src={MinizubaLogo} alt="Logo" className="logo" />
      <span className="heading">Minizuba</span>
    </div>
  );
};

export default Header;
