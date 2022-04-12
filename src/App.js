import Home from "./routes/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import styles from "./styles.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sub1_1 from "./routes/Sub1_1";
import Sub2_1 from "./routes/Sub2_1";
import Sub3_1 from "./routes/Sub3_1";
import Sub4_1 from "./routes/Sub4_1";
import Sub5_1 from "./routes/Sub5_1";
import Customer from "./routes/Customer";

import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sub1_1" element={<Sub1_1 />} />
        <Route path="/sub2_1" element={<Sub2_1 />} />
        <Route path="/sub3_1" element={<Sub3_1 />} />
        <Route path="/sub4_1" element={<Sub4_1 />} />
        <Route path="/sub5_1" element={<Sub5_1 />} />
        <Route path="/sub6_1" element={<Customer />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
