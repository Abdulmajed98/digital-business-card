import email from "../images/e-mail.png";
import linkedin from "../images/linkedin.png";

function Main() {
  return (
    <main>
      <h2>Zack Smith</h2>
      <h5> Frontend Developer</h5>
      <p>zacksmith.website</p>
      <div className="logos-div">
        <a href="/">
          <img src={email} alt="E-mail" />
        </a>
        <a href="/">
          <img src={linkedin} alt="LinkedIn" />
        </a>
      </div>
      <div className="txt">
        <h3>About</h3>
        <p>
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
        <h3>Interest</h3>
        <p>
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </div>
    </main>
  );
}

export default Main;
