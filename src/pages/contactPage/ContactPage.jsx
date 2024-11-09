import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import generalContext from "../GeneralContext/generalContext";
import AllContact from "./components/AllContact";

const ContactPage = () => {
  const { increment, decrement } = useContext(generalContext);
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate("/")}>switch to main</button>

      <button
        className="p-2 m-5 rounded-md text-white bg-blue-400"
        onClick={increment}>
        increment
      </button>

      <button
        className="p-2 rounded-md text-white bg-red-400"
        onClick={decrement}>
        decrement
      </button>

      <AllContact />
    </>
  );
};
export default ContactPage;
