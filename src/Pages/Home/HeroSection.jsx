export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section" style={{backgroundImage: "url('./img/Bg.jpg')",backgroundAttachment: "fixed",backgroundSize: "cover", paddingTop: "220px", color: "white",marginTop: "40px" }}>
      <div className="hero--section--content--box" >
        <div className="hero--section--content" style={{fontFamily: "Nunito"}}>
          <p className="section--title" style={{color: "white", fontSize: "30px"}}  >Hey, I'm Deependra M B</p>
          <h1 className="hero--section--title" style={{color: "white"}}>
            <span className="hero--section-title--color" style={{color: "white"}}>MERN Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description" style={{color: "white"}}>
            Highly skilled MERN stack developer experienced in crafting dynamic
            front-end interfaces and robust back-end solutions. <br /> Proficient in
            designing RESTful APIs and staying current with trends in innovative
            web development.
            
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      {/* <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div> */}
    </section>
  );
}
