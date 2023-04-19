import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="footerLogo">
        <h3>
          Wild <br /> fitness club
        </h3>
        <p>2023™</p>
      </div>
      <div className="linkFooter">
        <a href="/">Mentions légales</a>
        <a href="/">Conditions générales</a>
        <a href="/">Politique de confidentialité</a>
        <a href="/">Contacter le support</a>
      </div>
      <div className="social">
        <a href="/">
          <img src="./src/assets/instagram.png" alt="logo-Instagram" />
        </a>
        <a href="/">
          <img src="./src/assets/facebook.png" alt="logo-Facebook" />
        </a>
        <a href="/">
          <img src="./src/assets/youtube.png" alt="logo-Youtube" />
        </a>
        <a href="/">
          <img src="./src/assets/tik-tok.png" alt="logo-Tiktok" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
