import Home from "./routes/Home";
import Nav from "./components/Nav";
import Customer from "./routes/Customer";

import styles from "./styles.css";

// import Footer from "./components/Footer";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sub4_1" element={<Customer />} />
      </Routes>
    </Router>
  );
}

export default App;
