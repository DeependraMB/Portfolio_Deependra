import data from "../../data/index.json";

export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <p className="section--title">My Skills</p>
        <h2 className="skills--section--heading">My Expertise</h2>
      </div>
      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
              <img src={item.src} alt="Product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <p className="skills--section--description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <p align="left">
          <a
            href="https://git-scm.com/"
            target="_blank"
            rel="noreferrer"
            style={{ marginLeft: "40px" }}
            title="Git"
          >
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg"
              width="60"
              height="60"
              alt="Git"
            />
          </a>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noreferrer"
            style={{ marginLeft: "20px" }}
            title="JavaScript"
          >
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg"
              width="60"
              height="60"
              alt="JavaScript"
            />
          </a>
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noreferrer"
            style={{ marginLeft: "20px" }}
            title="React"
          >
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg"
              width="60"
              height="60"
              alt="ReactJS"
            />
          </a>
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noreferrer"
            style={{ marginLeft: "10px" }}
            title="NextJS"
          >
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored.svg"
              width="60"
              height="60"
              alt="NextJs"
            />
          </a>
          <a
            href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
            target="_blank"
            rel="noreferrer"
            style={{ marginLeft: "30px" }}
            title="HTML5"
          >
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg"
              width="60"
              height="60"
              alt="HTML5"
            />
          </a>
          <a
            href="https://www.w3.org/TR/CSS/#css"
            target="_blank"
            rel="noreferrer"
            style={{ marginLeft: "30px" }}
            title="CSS3"
          >
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg"
              width="60"
              height="60"
              alt="CSS3"
            />
          </a>
          <a
            href="https://mui.com/"
            target="_blank"
            rel="noreferrer"
            style={{ marginLeft: "30px" }}
            title="Material UI"
          >
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/materialui-colored.svg"
              width="50"
              height="60"
              alt="Material UI"
            />
          </a>
          <a
            href="https://getbootstrap.com/"
            target="_blank"
            rel="noreferrer"
            style={{ marginLeft: "30px" }}
            title="Bootstrap"
          >
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg"
              width="50"
              height="60"
              alt="Bootstrap"
            />
          </a>
          <a
            href="https://redux.js.org/"
            target="_blank"
            rel="noreferrer"
            style={{ marginLeft: "30px" }}
            title="Redux"
          >
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/redux-colored.svg"
              width="50"
              height="60"
              alt="Redux"
            />
          </a>
          <a
            href="https://nodejs.org/en/"
            target="_blank"
            rel="noreferrer"
            style={{ marginLeft: "30px" }}
            title="NodeJS"
          >
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg"
              width="50"
              height="60"
              alt="NodeJS"
            />
          </a>
          <a
            href="https://expressjs.com/"
            target="_blank"
            rel="noreferrer"
            style={{ marginLeft: "20px" }}
            title="Express"
          >
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg"
              width="50"
              height="60"
              alt="Express"
            />
          </a>
          <a
            href="https://www.mongodb.com/"
            target="_blank"
            rel="noreferrer"
            style={{ marginLeft: "20px" }}
            title="MongoDB"
          >
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg"
              width="50"
              height="60"
              alt="MongoDB"
            />
          </a>
          <a
            href="https://www.mysql.com/"
            target="_blank"
            rel="noreferrer"
            style={{ marginLeft: "20px" }}
            title="MySQL"
          >
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg"
              width="50"
              height="60"
              alt="MySQL"
            />
          </a>
          <a
            href="https://www.figma.com/"
            target="_blank"
            rel="noreferrer"
            className=""
            style={{ marginLeft: "20px" }}
            title="Figma"
          >
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg"
              width="50"
              height="60"
              alt="Figma"
            />
          </a>
        </p>
      </div>
    </section>
  );
}
