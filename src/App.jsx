import React from "react";
import "./App.css";
import { Warrior } from "../Components/Warrior/Warrior";
import { Welcome } from "../Components/Welcome/Welcome";
import { Footer } from "../Components/Footer/Footer";
import { Canvas } from "@react-three/fiber";
import EventDetails from "../Components/EventDetails/EventDetails";
import { Projects } from "../Components/Projects/Projects";
import { Faq } from "../Components/Faq/Faq";
import { Sponsors } from "../Components/Sponsors/Sponsors";

function App() {
  return (
    <>
      <Canvas>
        <Warrior>
          <div className="inner-warrior">
            <Welcome />

            <div className="banner-super">
              <div className="banner-container"></div>
            </div>

            <EventDetails />
            <Projects />
            <Faq />
            <Sponsors />

            <Footer />
          </div>
        </Warrior>
      </Canvas>
    </>
  );
}

export default App;
