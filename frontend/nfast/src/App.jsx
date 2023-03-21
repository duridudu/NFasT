import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/commons/Header";
// import Footer from "./components/commons/Footer";
import NFastCard from "./components/commons/NFastCard";
// import FloatingCards from "./components/FloatingCards";
// import Header from "./components/commons/Header";
import FloatingBtn from "./components/commons/FloatingBtn";
import Review from "./pages/customer/ReviewPage";
import MyNftPage from "./pages/customer/MyNftPage";
import MyTransPage from "./pages/customer/MyTransPage";
import MyBookmarkPage from "./pages/customer/MyBookmarkPage";
import MainPage from "./pages/customer/MainPage";
import MyInfoPage from "./pages/customer/MyInfoPage";
import StorePage from "./pages/customer/StorePage";
import IntroducePage from "./pages/seller/IntroducePage";
import LoginCustomer from "./pages/customer/LoginPageCustomer";
import LoginSeller from "./pages/seller/LoginPageSeller";
import PublishNft from "./pages/seller/PublishNft";
import CurrentIncome from "./pages/seller/CurrentIncome";
import MakedNft from "./pages/seller/MakedNft";
import MypageSeller from "./pages/seller/MypageSeller";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/floating" element={<FloatingBtn />} />
          <Route path="/nFastCard" element={<NFastCard />} />
          <Route path="/review" element={<Review />} />
          <Route path="/mynft" element={<MyNftPage />} />
          <Route path="/mytrans" element={<MyTransPage />} />
          <Route path="/mybookmark" element={<MyBookmarkPage />} />
          <Route path="/myinfo" element={<MyInfoPage />} />
          <Route path="/store" element={<StorePage />} />

          <Route path="/introduce" element={<IntroducePage />} />

          <Route path="/loginCustomer" element={<LoginCustomer />} />
          <Route path="/loginSeller" element={<LoginSeller />} />
          <Route path="/publishNft" element={<PublishNft />} />
          <Route path="/currentIncome" element={<CurrentIncome />} />
          <Route path="/makedNft" element={<MakedNft />} />
          <Route path="/mypageSeller" element={<MypageSeller />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}
export default App;
