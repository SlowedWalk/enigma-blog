import ScrollToTop from "./base-components/ScrollToTop";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./stores/store";
import Register from "./pages/Register";
import Router from "./router";
import "./assets/css/app.css";
import { LogIn } from "lucide-react";
import SideMenu from "../src/layouts/SideMenu";
import DashBoard from "../src/pages/DashBoard";
import Users from "../src/pages/Users";
import Profile from "../src/pages/Profile";
import ChangePassword from "../src/pages/ChangePassword";
import { RequireAuth } from "./api/auth/requireAuth";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Provider store={store}>
      {/* <Router /> */}
      <Routes>
        {/* public routes */}
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<LogIn />} />

        {/* protected routes */}
        <Route element={<RequireAuth />}>
          <Route path="/" element={<SideMenu />}>
            <Route path="/" element={<DashBoard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/profile:id" element={<Profile />} />
            <Route path="/change-password/:id" element={<ChangePassword />} />
            <Route path="/" element={<DashBoard />} />
          </Route>
        </Route>
      </Routes>
    </Provider>
    <ScrollToTop />
  </BrowserRouter>
);
