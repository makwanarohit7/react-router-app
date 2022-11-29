import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
  const name = "John Doe";
  const isAuthenticated = true;
  return (
    <Router>
      <main>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to={`/about/${name}`}>About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" exact element={<Home />} />

          <Route
            path="/about/:name"
            element={isAuthenticated ? <About /> : <Navigate to="/" />}
          />
          <Route
            path="/contact"
            element={isAuthenticated ? <Contact /> : <Navigate to="/" />}
          />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
