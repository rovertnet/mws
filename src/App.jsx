import LadingPage from "./LadingPage";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function App() {

  useGSAP(() => {
    let tl = gsap.timeline();
    tl.to(".box", {
      scale: 0,
      y: 60,
      rotate: 400,
      duration: 1,
      repeat: 1,
      yoyo:true,
      delay: 0.5,
      stagger: {
        amount: 1.5,
        from: "start",
        // axis: "y"
        grid: [3,3],
      },
    });

    tl.to(".container", {
      rotate: "-405deg",
      scale: 0,
      duration: 1,
    })

    tl.to(".wrapper", {
      opacity: 0,
      display: "none"
    })
  })
 
  return (
    <>
      <LadingPage />
      <div className="bg-black h-screen flex flex-col items-center justify-center">
        <h1 className="font-extrabold text-8xl text-white uppercase  text-center">
          Bonjour!
        </h1>
        <span className="font-bold text-purple-500 text-2xl">C'est Robert, Dev Web!</span>
      </div>
    </>
  );
}

export default App
