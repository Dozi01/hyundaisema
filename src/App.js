import Home from "./routes/Home";
import Nav from "./components/Nav";
import Customer from "./routes/Customer";

import styles from "./styles.css";

// import Footer from "./components/Footer";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Sub1_1 from "./routes/Sub1_1";
import Sub2_1 from "./routes/Sub2_1";
import Sub3_1 from "./routes/Sub3_1";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sub1_1" element={<Sub1_1 />} />
        <Route path="/sub2_1" element={<Sub2_1 />} />
        <Route path="/sub3_1" element={<Sub3_1 />} />
        <Route path="/sub4_1" element={<Customer />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
