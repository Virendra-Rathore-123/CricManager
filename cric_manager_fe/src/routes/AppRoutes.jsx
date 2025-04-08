// import { Routes, Route } from "react-router-dom";
// import Login from "../pages/Login/Login";
// import Dashboard from "../pages/Dashboard/Dashboard";
// import PrivateRoute from "./PrivateRoute";
// import Services from "../pages/Services/Services";

// const AppRoutes = () => (
//   <Routes>
//     <Route path="/login" element={<Login />} />

//     <Route element={<PrivateRoute />}>
//       <Route element={<Dashboard />}>
//         {/* <Route path="/" element={<Dashboard />} /> */}
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/settings" element={<Settings />} />
//       </Route>
//     </Route>
//   </Routes>
// );

// export default AppRoutes;


import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import Services from "../pages/Services/Services";
import Home from "../pages/Home/Home";
import PrivateRoute from "./PrivateRoute";

const AppRoutes = () => (
  <Routes>
    <Route path="/login" element={<Login />} />

    <Route element={<PrivateRoute />}>
      <Route element={<Dashboard />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
      </Route>
    </Route>
  </Routes>
);

export default AppRoutes;
