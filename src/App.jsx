import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<MainPage></MainPage>}></Route>
        <Route path="/detail/:id" element={<DetailPage></DetailPage>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
};

export default App;
