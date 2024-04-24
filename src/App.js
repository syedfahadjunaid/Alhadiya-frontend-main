import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import HeaderSearchBar from "./components/headerSearchBar/HeaderSearchBar";
import NavBar from "./components/navbar/Navbar";

import Home from "./pages/home/Home";
import ContactUs from "./pages/contactUs/ContactUs";
import AboutUs from "./pages/aboutUs/AboutUs";

import Footer from "./components/footer/Footer";
import HomePageNewsLetter from "./components/homePageNewsLetter/HomePageNewsLetter";
import SingleProductPage from "./pages/singleProductPage/singleProductPage";
import ProductPage from "./pages/ProductPage/ProductPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <HeaderSearchBar />
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/ContactUs" element={<ContactUs />}></Route>
          <Route path="/AboutUs" element={<AboutUs />}></Route>
          <Route path="/singleProduct" element={<SingleProductPage />} />
          <Route path="/ProductPage" element={<ProductPage />} />
        </Routes>

        <HomePageNewsLetter />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
