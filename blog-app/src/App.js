import "./App.css";
import "./components/Body.css";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Blog Post App";
  }, []);
  return (
    <div className="container">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
