import "./App.css";
import Image from "./components/Image";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      {/* Dark card */}
      <section className="sec-one">
        <Image />
        <Main />
        <Footer />
      </section>
      {/* Light card */}
      <section className="sec-two">
        <Image />
        <Main />
        <Footer />
      </section>
    </div>
  );
}

export default App;
