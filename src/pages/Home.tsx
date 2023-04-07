import React, { useEffect } from "react";
import AnimationLefttoRight from "../components/AnimationLefttoRight";
import TypingText from "../components/TypingText";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

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

  return (
    <div className="grid grid-cols-10 w-full h-full">
      <div className="col-span-8 bg-slate-900 p-8 rounded-l-lg shadow-lg w-full h-full ">
        <div className="grid grid-cols-10">
          <div className="col-span-5">
            <AnimationLefttoRight class_name={""}>
              <TypingText text="NGUYEN THAI BAO" />
              <br />
              <div className="text-6xl bg-gradient-to-r from-emerald-500 to-emerald-100 bg-clip-text text-transparent font-bold mb-3">
                <span>Full-stack Developer</span>
                <span className="text-slate-400"> & </span>
                <br />
                <span>3D Artist</span>
              </div>
              <p className="text-white mb-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
                praesentium iure excepturi eos sit modi. Dicta maiores deserunt
                quia, dolorum voluptatum aliquam quas animi quisquam laboriosam
                quaerat possimus reprehenderit architecto?
              </p>
              <SyntaxHighlighter language="javascript" style={dracula}>
                {codeString}
              </SyntaxHighlighter>
            </AnimationLefttoRight>
          </div>
          <div className="col-span-5"></div>
        </div>
      </div>
      <div className="col-span-2 bg-gradient-to-r from-green-500 rounded-r-lg shadow-lg"></div>
    </div>
  );
};

export default Home;
