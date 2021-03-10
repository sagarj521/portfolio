import React from "react";
import Particles from "react-particles-js";

const ParticleComponent = () => (
  <div
    style={{  
      position:"fixed",   
      top: 0,
      left: 0,
      width: "100%",
      height: "100%"
    }}
  >
    <Particles
        params={{
        "particles": {
            "number": {
                "value": 50
            },
            "size": {
                "value": 3
            }
        },
        "interactivity": {
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                }
            }
        }
    }} />
  </div>
);

export default ParticleComponent;