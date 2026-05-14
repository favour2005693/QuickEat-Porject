import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoaderProvider } from "./context/LoaderContext.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
// import Footer from "./components/Footer/Footer.jsx";

import Home from "./pages/Home/Home.jsx";
import Menu from "./pages/Menu/Menu.jsx";
import About from "./pages/About/About.jsx";
import Service from "./pages/Service/Service.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import Search from "./pages/Search/Search.jsx";
import Login from "./pages/Login/Login.jsx";
import SignUp from "./pages/Sign up/Sign-up.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx"

import './index.css'

function App() {
  return (
    <>
<LoaderProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/*" element={<NotFound/>} />
        </Routes>

        {/* <Footer /> */}
      </BrowserRouter>
      </LoaderProvider>
    </>
  );
}

export default App;
