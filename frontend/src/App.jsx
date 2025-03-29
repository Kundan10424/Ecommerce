import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

// Pages
import Home from "./components/Home";
import About from "./components/About";
import Shop from "./components/Shop";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Register from "./components/Register";
import Cart from "./components/Cart";
import Buy from "./components/Buy";

// Sections
import Collection from "./components/Collection";
import Banner from "./components/Banner";
import Slider from "./components/Slider";
import Review from "./components/Review";

// Policies
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";
import Refund from "./components/Refund";
import Shipping from "./components/Shipping";

// Billing
import Checkout from "./components/Checkout";
import Order from "./components/Order";

const Layout = ({ children }) => {
  const location = useLocation();
  const hideHeaderFooterRoutes = ["/order"]; // Add more if needed

  return (
    <>
      {!hideHeaderFooterRoutes.includes(location.pathname) && <Navbar />}
      {children}
      {!hideHeaderFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Home />
                <Collection />
                <Banner />
                <Slider />
                <Review />
              </>
            }
          />

          {/* Main Pages */}
          <Route path="/about" element={<><About /><Review /></>} />
          <Route path="/shopwithus" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/buy/:title" element={<Buy />} />

          {/* Policies */}
          <Route path="/privacypolicies" element={<Privacy />} />
          <Route path="/terms&condition" element={<Terms />} />
          <Route path="/refundpolicy" element={<Refund />} />
          <Route path="/shippingpolicy" element={<Shipping />} />

          {/* Checkout */}
          <Route path="/checkout" element={<Checkout />} />

          {/* Order Page (Without Navbar & Footer) */}
          <Route path="/order" element={<Order />} />

          {/* Loader Page */}
          <Route path="/loading" element={<Loader />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
