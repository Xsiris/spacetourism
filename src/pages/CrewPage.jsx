import React from 'react'
import {useState} from 'react'
import commander from '../assets/crew/image-douglas-hurley.webp'
import specialist from '../assets/crew/image-mark-shuttleworth.webp'
import pilot from '../assets/crew/image-victor-glover.webp'
import engineer from '../assets/crew/image-anousheh-ansari.webp'

const CrewPage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const changeCrewSlide = function(e){
        // Change element styling to reflect newly selected destination option
        let parentUL = e.target.parentNode.parentNode;
        //console.log("Parent: %o", parentUL);
        let crewPages = parentUL.getElementsByTagName("a");
        let i = 0;
        for(let element of crewPages){
            if(element === e.target){
                console.log("Target found! @: " + i);
                // Update crew pagination
                crewPages[currentSlide].classList.add("opacity-25");
                e.target.classList.remove("opacity-25")
                // Update txt
                // h2
                let crewPositionText = document.getElementById("crew-text").getElementsByTagName("h2");
                crewPositionText[currentSlide].classList.add("invisible", "absolute");
                crewPositionText[i].classList.remove("invisible", "absolute");
                // h1
                let crewNameText = document.getElementById("crew-text").getElementsByTagName("h1");
                crewNameText[currentSlide].classList.add("invisible", "absolute");
                crewNameText[i].classList.remove("invisible", "absolute");
                // p
                let crewDescriptionText = document.getElementById("crew-text").getElementsByTagName("p");
                crewDescriptionText[currentSlide].classList.add("invisible", "absolute");
                crewDescriptionText[i].classList.remove("invisible", "absolute");
                // img
                let crewImageText = document.getElementById("crew-image").getElementsByTagName("img");
                crewImageText[currentSlide].classList.add("invisible", "absolute");
                crewImageText[i].classList.remove("invisible", "absolute");

                setCurrentSlide(i);
            }else{

            }
            i++;
        }
    }
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-center text-xl font-Barlow font-light text-white tracking-widest"><span className="opacity-25 pr-4 font-semibold">02</span>MEET YOUR CREW</h1>
      </div>
      <div id="crew-text" className="my-10 text-center text-white flex flex-col items-center justify-center">
        <h2 className="font-Bellefair text-2xl mb-2 opacity-50">COMMANDER</h2>
        <h2 className="invisible absolute font-Bellefair text-2xl mb-2 opacity-50">MISSION SPECIALIST</h2>
        <h2 className="invisible absolute font-Bellefair text-2xl mb-2 opacity-50">PILOT</h2>
        <h2 className="invisible absolute font-Bellefair text-2xl mb-2 opacity-50">FLIGHT ENGINEER</h2>
        <h1 className="font-Bellefair text-3xl">DOUGLAS HURLEY</h1>
        <h1 className="invisible absolute font-Bellefair text-3xl">MARK SHUTTLEWORTH</h1>
        <h1 className="invisible absolute font-Bellefair text-3xl">VICTOR GLOVER</h1>
        <h1 className="invisible absolute font-Bellefair text-3xl">ANOUSHEH ANSARI</h1>
        <p className="pt-6 text-base text-spaceBlue-300 font-light">
            Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
            and former NASA astronaut. He launched into space for the third time as 
            commander of Crew Dragon Demo-2.
        </p>
        <p className="invisible absolute pt-6 text-base text-spaceBlue-300 font-light">
            Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind 
            the Linux-based Ubuntu operating system. Shuttleworth became the first South 
            African to travel to space as a space tourist.
        </p>
        <p className="invisible absolute pt-6 text-base text-spaceBlue-300 font-light">
            Pilot on the first operational flight of the SpaceX Crew Dragon to the 
            International Space Station. Glover is a commander in the U.S. Navy where 
            he pilots an F/A-18.He was a crew member of Expedition 64, and served as a 
            station systems flight engineer. 
        </p>
        <p className="invisible absolute pt-6 text-base text-spaceBlue-300 font-light">
            Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
            Ansari was the fourth self-funded space tourist, the first self-funded woman to 
            fly to the ISS, and the first Iranian in space. 
        </p>
      </div>
      <div className="mb-8 pb-3 text-white flex items-center justify-center">
        <ul className="mt-6 flex items-center justify-center gap-8">
            <li className="relative"><a href="#" onClick={(e) => (changeCrewSlide(e))} className="absolute w-3 h-3 rounded-full bg-white -translate-x-1/2"></a></li>
            <li className="relative"><a href="#" onClick={(e) => (changeCrewSlide(e))} className="absolute w-3 h-3 rounded-full bg-white opacity-25 -translate-x-1/2"></a></li>
            <li className="relative"><a href="#" onClick={(e) => (changeCrewSlide(e))} className="absolute w-3 h-3 rounded-full bg-white opacity-25 -translate-x-1/2"></a></li>
            <li className="relative"><a href="#" onClick={(e) => (changeCrewSlide(e))} className="absolute w-3 h-3 rounded-full bg-white opacity-25 -translate-x-1/2"></a></li>
        </ul>
      </div>
      <div id="crew-image" className="relative px-6">
        <img className="object-scale-down from-transparent" src={ commander } />
        <img className="invisible absolute object-scale-down from-transparent" src={ specialist } />
        <img className="invisible absolute object-scale-down from-transparent" src={ pilot } />
        <img className="invisible absolute object-scale-down from-transparent" src={ engineer } />
      </div>
      <div className="absolute left-0 bottom-0 w-full h-60 bg-transparent bg-gradient-to-t from-black"></div>
    </div>
  )
}

export default CrewPage
