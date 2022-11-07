import React from "react";
import "../components/style.css";
import InstaImg from "../Data/Instagram.svg";
import FbImg from "../Data/Facebook.svg";
import TwtImg from "../Data/Twitter.svg";
import nav from "../Data/arrow.svg";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="logo-links">
        <div className="logo">
          <p>team</p>
          <div></div>
        </div>
        <div className="linked-sources">
          <div className="links">
            <img src={InstaImg} />
            <p>Instagram</p>
          </div>
          <div className="links">
            <img src={FbImg} />
            <p>Facebook</p>
          </div>
          <div className="links">
            <img src={TwtImg} />
            <p>Twitter</p>
          </div>
          <div className="links">
            <img src={InstaImg} />
            <p>Instagram</p>
          </div>
          <div className="links">
            <img src={FbImg} />
            <p>Facebook</p>
          </div>
          <div className="links">
            <img src={TwtImg} />
            <p>Twitter</p>
          </div>
        </div>
      </div>
      <div className="footer-mid">
        <div className="mid-sources">
          <p className="mid-sources-caption">Use Cases</p>
          <div className="mid-styler">
            <p>UI Design</p>
            <p>UX Design</p>
            <p>Prototyping</p>
            <p>UI Design</p>
            <p>UX Design</p>
            <p>Prototyping</p>
          </div>
        </div>
        <div className="mid-sources">
          <p className="mid-sources-caption">Explore</p>
          <div className="mid-styler">
            <p>Figma</p>
            <p>Customers</p>
            <p>Why I Love Figma</p>
            <p>Figma</p>
            <p>Customers</p>
            <p>Why I Love Figma</p>
          </div>
        </div>
        <div className="mid-sources">
          <p className="mid-sources-caption">Resources</p>
          <div className="mid-styler">
            <p>Community Resources Hub</p>
            <p>Support</p>
            <p>Education</p>
            <p>Community Resources Hub</p>
            <p>Support</p>
            <p>Education</p>
          </div>
        </div>
      </div>
      <div className="footer-input">
        <p>Subscribe to our newsletter</p>
        <div className="input">
          <input placeholder="Email" />
          <img src={nav} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
