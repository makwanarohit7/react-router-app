import { Fragment } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import FakeText from "./FakeText";
const Contact = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <Fragment>
      <h1>Contact</h1>
      <button onClick={() => navigate("/")}>Go to home</button>
      <p>Current URL: {pathname}</p>
      <FakeText />
    </Fragment>
  );
};
export default Contact;
