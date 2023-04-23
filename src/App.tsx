import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import TypingText from "./components/TypingText";
import { motion } from "framer-motion";
import Home from "./pages/Home";
import AnimationComponent from "./components/AnimationLefttoRight";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen w-screen overflow-hidden flex items-center justify-center bg-slate-950 py-9 px-10">
        <Home />
      </div>
    </BrowserRouter>
  );
};

export default App;
