import LadingPage from "./LadingPage";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import rp from "./assets/RP1.jpeg"
import Menus from "./components/Menus";



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
      <Menus />
      <div className="bg-black h-screen flex flex-col items-center justify-center">
        <h1 className="font-extrabold text-8xl uppercase  text-center text-transparent bg-clip-text bg-gradient-to-b from-orange-400 from-10% via-white via-30% to-purple-700 to-90% ...">
          Bonjour!
        </h1>
        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 from-10% via-white via-30% to-orange-500 to-90% ... text-3xl pt-1 pb-3">
          C'est Robert, Développeur Web!
        </span>
        <div className="bg-white/10 rounded-full p-5 py-5 w-52 h-52 flex items-center justify-center">
          <img
            src={rp}
            alt={rp}
            className="border-[7px] bg-clip-border bg-gradient-to-br from-purple-400 to-orange-400 rounded-full w-40 h-40 object-cover"
          />
        </div>
      </div>
    </>
  );
}

export default App
