import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {
  Dashboard,
  Cabins,
  Account,
  Bookings,
  Login,
  PageNotFound,
  Settings,
  Users,
} from "../pages";
import AppLayout from "../ui/AppLayout";

function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="cabins" element={<Cabins />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="users" element={<Users />} />
          <Route path="settings" element={<Settings />} />
          <Route path="account" element={<Account />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoute;
