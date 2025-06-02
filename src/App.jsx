import Test from "./Test";
import "./app.scss";
import Contact from "./components/contact/Contact";
// import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Portfolio1 from "./components/portfolio1/Portfolio1";
import Services from "./components/services/Services";

const App = () => {
  return (
    <div>
      {/* <Cursor /> */}
      <section id="Trang chủ">
        <Navbar />
        <Hero />
      </section>
      {/* <section id="Lịch Tập">
        <Parallax type="services" />
      </section> */}
      <section id="Lịch Tập">
        <Services />
      </section>
      <div id="Thông Báo">
      </div>
        <Portfolio1 />
      <div id="Huấn Luyện Viên">
      </div>
        <Portfolio id="Huấn Luyện Viên"/>

      <section id="Liên Hệ">
        <Contact />
      </section>
      {/* Framer Motion Crash Course */}
      {/* <Test/>
    <Test/> */}
    </div>
  );
};

export default App;
