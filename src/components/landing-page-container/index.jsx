/* eslint-disable react/no-unescaped-entities */
import arrow from "../../assets/icon-arrow-down.svg";
import logo from "../../assets/logo.svg";
import egg from "../../assets/image-transform.jpg";
import glass from "../../assets/image-stand-out.jpg";
import cherry from "../../assets/image-graphic-design.jpg";
import orange from "../../assets/image-photography.jpg";
import emily from "../../assets/image-emily.jpg";
import thomas from "../../assets/image-thomas.jpg";
import jennie from "../../assets/image-jennie.jpg";
import bottle from "../../assets/image-gallery-milkbottles.jpg";
import plate from "../../assets/image-gallery-orange.jpg";
import cone from "../../assets/image-gallery-cone.jpg";
import puzzle from "../../assets/image-gallery-sugarcubes.jpg";
import facebook from "../../assets/icon-facebook.svg"
import instragram from "../../assets/icon-instagram.svg"
import twitter from "../../assets/icon-twitter.svg"
import pint from "../../assets/icon-pinterest.svg"

function Page() {
  return (
    <div className="container">
      <div className="header">
        <div className="navbar">
          <img src={logo} />
          <div className="navbar-rth">
            <p>About</p>
            <p>Services</p>
            <p>Projects</p>
            <button>CONTACT</button>
          </div>
        </div>
        <div className="main">
          <h1>W E A R E C R E A T I V E S </h1>
          <img src={arrow} />
        </div>
      </div>
      <div className="section1">
        <div className="left-box">
          <div className="text">
            <h1>Transform your brand</h1>
            <p>
              We are a full-service creative agency speacializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
            <h4>LEARN MORE</h4>
          </div>
        </div>
        <div className="right-box">
          <img src={egg} />
        </div>
      </div>
      <div className="section2">
        <div className="left-box">
          <img src={glass} />
        </div>
        <div className="right-box">
          <div className="text">
            <h1>Stand out to the right audience</h1>
            <p>
              Using cllaborative formula of designers, researchers,
              photograpthers, videographers, and copywriters, we'll build and
              extend your brand in digital places.
            </p>
            <h4>LEARN MORE</h4>
          </div>
        </div>
      </div>
      <div className="section3">
        <div className="left-box">
          <img src={cherry} />
          <div className="graphic-design-label">
            <h1>Graphic Design</h1>
            <p>
              Great design makes you memorable.We deliver artwork that
              underscores your brand message and captures potentail
              clients'attention.
            </p>
          </div>
        </div>
        <div className="right-box">
          <img src={orange} />
          <div className="photography-label">
            <h1>Photography</h1>
            <p>
              Increase your credibility by getting the most
              stunning,high-quality photos that improve your business image.
            </p>
          </div>
        </div>
      </div>
      <div className="section4">
        <div className="content">
          <h2>CLIENT TESTMONIALS</h2>
          <div className="card">
            <div className="card-detail">
              <img src={emily} />
              <p>
                We put our trust in Sunnyside and they delivered,making sure our
                needs were met and deadlines were always hit.
              </p>
              <h4>Emily R.</h4>
              <span>Marketing Director</span>
            </div>
            <div className="card-detail">
              <img src={thomas} />
              <p>
                Sunnyside's enthusiasm coupled with thier keen interest in our
                brand's success made it asatisfying and enjoyable experience.
              </p>
              <h4>Thomas S.</h4>
              <span>Chief Operating Officer</span>
            </div>
            <div className="card-detail">
            <img src={jennie} />
            <p>
              Incredible end result! Our sales increased over 400% when we
              worked with Sunnyside. Highly recommended!
            </p>
            <h4>Jennie R.</h4>
            <span>Business Owner</span>
            </div>
          </div>
        </div>
      </div>
      <div className="section5">
        <div className="content5">
            <img className="pic" src={bottle}/>
            <img className="pic" src={plate}/>
            <img className="pic"src={cone}/>
            <img className="pic"src={puzzle}/>
        </div>
      </div>
      <div className="footer">
        <div className="lst-content">
        <div className="logo-ftr">
          <img  src={logo}/>
        </div>  
        <div className="helpmenu">
          <p>About</p>
          <p>Scervice</p>
          <p>Projects</p>
          </div>
          <div className="logo-social">
            <img src={facebook}/>
            <img src={instragram}/>
            <img src={twitter}/>
            <img src={pint}/>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Page;
