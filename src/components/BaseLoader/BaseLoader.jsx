import "./index.css";
import spinner from "../../assets/spinner.svg";

function BaseLoader() {
  return (
    <div>
      <img className="spinner" src={spinner} alt="spinner" />
    </div>
  );
}

export default BaseLoader;
