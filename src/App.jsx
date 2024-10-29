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
        from: "center",
        // axis: "y"
        grid: [3,3],
      },
    });

    tl.to(".container", {
      rotate: "-405deg",
    })
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
