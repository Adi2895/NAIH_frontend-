import React from 'react';
import logo from "../Images/robot.jpeg";
import "./Style/Feature.css"
export default function Feature() {
  return (
    <>
    <div class="home-details">
          <div class="home-details1 row">
            <div class="home-container02">
              <span class="home-text sectionTitle">
                <span>Details</span>
                <br/>
              </span>
              <h5 class="home-details-heading heading2">
                Empowering students through knowledge sharing
              </h5>

              <span class="home-details-sub-heading">
                The National Academic Innovation Hub (NAIH) is an integrated
                platform designed to bring together student projects from
                universities and colleges across India. With regional and
                college-wise segmentation, user-friendly interface, and a peer
                review mechanism, NAIH enables students to showcase their work,
                learn from peers, and foster cross-functional research.
              </span>
             </div>
             {/* <div className="home-details-image-container">
            <img alt="image" style={{borderRadius: "90px"}}  height="80px" weight="80px" src={logo} class="home-details-image"/>
          </div> */}
          </div>
        </div>
    </>
  );
}
