import twitter from "../images/Twitter Icon.png";
import facebook from "../images/Facebook Icon.png";
import instagram from "../images/Instagram Icon.png";
import gitHub from "../images/GitHub Icon.png";

function Footer() {
  return (
    <footer className="footer">
      <a href="https://twitter.com">
        <img src={twitter} alt="twitter"></img>
      </a>
      <a href="https://facebook.com">
        <img src={facebook} alt="twitter"></img>
      </a>
      <a href="https://instagram.com">
        <img src={instagram} alt="twitter"></img>
      </a>
      <a href="https://github.com">
        <img src={gitHub} alt="twitter"></img>
      </a>
    </footer>
  );
}

export default Footer;
