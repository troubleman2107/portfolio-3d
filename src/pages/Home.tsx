import AnimationComponent from "../components/AnimationLefttoRight";
import TypingText from "../components/TypingText";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ReactLogo from "../assets/images/React-icon.svg.png";
import NodeLogo from "../assets/images/5968322.png";
import ZbrushLogo from "../assets/images/zbrush-vector-logo.png";
import BlenderLogo from "../assets/images/Blender_logo_no_text.svg.png";
import MainBackground from "../assets/images/untitled3.png";
import SubtancePainterLogo from "../assets/images/9814247.png";
import { motion } from "framer-motion";

const Home = () => {
  const roles = ["Programmer", "3D Artist"];
  roles.forEach((role) => {
    if (role === "Programmer") {
      console.log("coding");
    } else if (role === "3D Artist") {
      console.log("draw");
    }
  });

  const codeString = `  const roles = ["Programmer", "3D Artist"];
  roles.forEach((role) => {
    if (role === "Programmer") {
      console.log("coding");
    } else if (role === "3D Artist") {
      console.log("drawing");
    }
  });`;

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };

  return (
    <div className="relative">
      <AnimationComponent
        class_name="grid grid-cols-10 w-full h-full"
        info={{
          initial: {
            opacity: 0,
            x: 1000,
          },
          animate: {
            opacity: 1,
            x: 0,
          },
          duration: 1,
        }}
      >
        <div className="col-span-8 bg-slate-900 p-8 rounded-l-lg shadow-lg w-full h-full ">
          <div className="grid grid-cols-10">
            <div className="col-span-6">
              <AnimationComponent
                class_name={""}
                info={{
                  initial: {
                    opacity: 0,
                    y: -200,
                  },
                  animate: {
                    opacity: 1,
                    y: 0,
                  },
                  duration: 2.5,
                }}
              >
                <TypingText text="NGUYEN THAI BAO" />
                <br />
                <div className="text-6xl bg-gradient-to-r from-emerald-500 to-emerald-100 bg-clip-text text-transparent font-bold mb-3">
                  <span>Full-stack Developer</span>
                  <span className="text-slate-400"> & </span>
                  <br />
                  <span>3D Artist</span>
                </div>
                <p className="text-slate-400 mb-4">
                  Hello, I'm Thai Bao, an experienced professional with
                  expertise in web full-stack ReactJS and NodeJS development, as
                  well as 3D modeling with industry-standard tools such as
                  Blender and Zbrush. With over three years of experience in
                  programming and 3D art, I have a comprehensive understanding
                  of how to design and develop innovative software applications
                  that meet the needs of a wide range of industries.
                  {/* Additionally, my skillset allows me to create detailed and
                  photorealistic 3D models, animations, and visualizations for
                  use in various fields, including film, advertising, and video
                  game development. Whether you need help building a custom web
                  application or creating stunning 3D visual assets, I can
                  provide you with the expertise and creativity necessary to
                  bring your project to life */}
                </p>
                <SyntaxHighlighter
                  language="javascript"
                  style={dracula}
                  showLineNumbers={true}
                  className="mb-4"
                >
                  {codeString}
                </SyntaxHighlighter>
                <div className="relative bg-gradient-to-r from-green-600 rounded-md p-4  shadow-xl rounded-3xl">
                  <div className="mt-4 flex justify-center item-center pt-3">
                    <img
                      className="w-1/6 h-2/3 mx-5"
                      src={ReactLogo}
                      alt="ReactLogo"
                    />
                    <img
                      className="w-1/6 h-2/3 mx-5"
                      src={NodeLogo}
                      alt="NodeLogo"
                    />
                    <img
                      className="w-1/6 h-2/3 mx-5"
                      src={ZbrushLogo}
                      alt="ZbrushLogo"
                    />
                    <img
                      className="w-1/6 h-2/3 mx-5"
                      src={BlenderLogo}
                      alt="BlenderLogo"
                    />
                  </div>
                </div>
              </AnimationComponent>
            </div>
            <div className="col-span-4"></div>
          </div>
        </div>
        <div className="col-span-2 bg-gradient-to-r from-green-500 rounded-r-lg shadow-lg"></div>
      </AnimationComponent>
      <AnimationComponent
        class_name={""}
        info={{
          initial: { opacity: 0, y: 100 },
          animate: { opacity: 1, y: 0 },
          duration: 3,
        }}
      >
        <div className="absolute bottom-0 left-2/4">
          <img className="w-full" src={MainBackground} alt="MainBackground" />
        </div>
      </AnimationComponent>
      {/* <div className="absolute bottom-0 left-2/4">
        <img className="w-full" src={MainBackground} alt="MainBackground" />
      </div> */}
      {/* <motion.img
        className="absolute bottom left-2/4"
        src="../assets/images/untitled3.png"
        alt="MainBackground"
        animate={{ x: 50, y: -50 }}
        transition={{ duration: 1 }}
      /> */}
    </div>
  );
};

export default Home;
