import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-blue-800">
        <div className="bg-cover bg-no-repeat bg-center">
          <Navbar />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
