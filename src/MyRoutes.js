// import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AdminProvider from "./context/AdminProvider";
import AuthProvider from "./context/AuthProvider";
import ClientProvider from "./context/ClientProvider";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import AddPage from "./pages/AddPage";
import AdminPage from "./pages/AdminPage";
import Africa from "./pages/Africa";
import AllProducts from "./pages/AllProducts";
import CartPage from "./pages/CartPage";
import DetailPage from "./pages/DetailPage";
import EditPage from "./pages/EditPage";
import EmailUs from "./pages/EmailUs";
import Hiking from "./pages/Hiking";
import MainPage from "./pages/MainPage";
import LogIn from "./pages/pagesForPayment/logIn";
import PaymentCard from "./pages/pagesForPayment/PaymentCard";
// import LogIn from "./pages/pagesForPayment/logIn";
// import PaymentCard from "./pages/pagesForPayment/PaymentCard";
import SignUp from "./pages/SignUp";
import Snorkeling from "./pages/Snorkeling";

const MyRoutes = () => {
  return (
    <UserAuthContextProvider>
      <AuthProvider>
        <ClientProvider>
          <AdminProvider>
            <BrowserRouter>
              <Navbar />
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/all-trips" element={<AllProducts />} />
                <Route path="/admin-panel/add" element={<AddPage />} />
                <Route path="/admin-panel" element={<AdminPage />} />
                <Route path="/admin-panel/edit/:id" element={<EditPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/trip-detail/:id" element={<DetailPage />} />
                <Route path="/payment-card" element={<PaymentCard />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/africa" element={<Africa />} />
                <Route path="/snorkeling" element={<Snorkeling />} />
                <Route path="/hiking" element={<Hiking />} />
                <Route path="/email-us" element={<EmailUs />} />
              </Routes>
            </BrowserRouter>
          </AdminProvider>
        </ClientProvider>
      </AuthProvider>
    </UserAuthContextProvider>
  );
};

export default MyRoutes;
