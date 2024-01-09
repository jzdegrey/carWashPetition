import './App.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "@fontsource/poppins";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
    return (
    <>
        <div
            style={{
                height: "107px",
                minHeight: "107px",
                maxHeight: "107px",

            }}
            id="navBuffer"></div>
        <Header />
        <main className="container my-3 bg-white bg-gradient">
            <Routes>
                <Route path="*" element={< Main />} />
            </Routes>
        </main>
        <Footer />
    </>
  );
}

export default App;
