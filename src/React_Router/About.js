import { Fragment } from "react";
import { useParams, Navigate } from "react-router-dom";
import FakeText from "./FakeText";

// About Page
const About = () => {
  let { name } = useParams();
  return (
    <Fragment>
      {name !== "John Doe" ? <Navigate to="/" /> : null}
      <h1>About {name}</h1>
      <FakeText />
    </Fragment>
  );
};
export default About;
