// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Login from "./components/Login/Login";
// import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Navbar />} />
//         <Route path="/login" element={<Login />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
