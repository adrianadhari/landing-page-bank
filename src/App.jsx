import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Download from "./components/Download";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Home from "./components/Home";
import How from "./components/How";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Review from "./components/Review";
import Saving from "./components/Saving";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Features />
      <Saving />
      <How />
      <Review />
      <Pricing />
      <Blog />
      <Download />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
