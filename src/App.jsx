import { useLayoutEffect } from "react";
import LadingPage from "./LadingPage";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function App() {

  useGSAP(() => {
    let tl = gsap.timeline();
    
  })
 
  return (
    <>
      <LadingPage />
      <div className="bg-black h-screen flex items-center justify-center">
        <h1 className="font-extrabold text-8xl text-white uppercase  text-center">
          Bonjour!
        </h1>
      </div>
    </>
  );
}

export default App
