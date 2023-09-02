import ScrollToTop from "./base-components/ScrollToTop";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./stores/store";
import Register from "./pages/Register";
import Router from "./router";
import "./assets/css/app.css";
import SideMenu from "../src/layouts/SideMenu";
import DashBoard from "../src/pages/DashBoard";
import Users from "../src/pages/Users";
import Profile from "../src/pages/Profile";
import ChangePassword from "../src/pages/ChangePassword";
import ResetPassword from "../src/pages/ResetPassword";
import ErrorPage from "../src/pages/ErrorPage";
import FileManager from "../src/pages/FileManager";
import Blog from "../src/pages/Blog";
import Post from "../src/pages/Post";
import Login from "../src/pages/Login";
import { RequireAuth } from "./api/auth/requireAuth";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Provider store={store}>
      {/* <Router /> */}
      <Routes>
        {/* public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/error-page" element={<ErrorPage />} />
        <Route path="*" element={<ErrorPage />} />

        {/* protected routes */}
        <Route element={<RequireAuth />}>
          <Route path="/" element={<SideMenu />}>
            <Route path="/" element={<DashBoard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/profile:id" element={<Profile />} />
            <Route path="/change-password/:id" element={<ChangePassword />} />
            <Route path="/file-manager" element={<FileManager />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/create" element={<Post />} />
          </Route>
        </Route>
      </Routes>
    </Provider>
    <ScrollToTop />
  </BrowserRouter>
);
