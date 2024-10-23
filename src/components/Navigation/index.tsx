import "./style.scss";
import Logo from "../../assets/images/logo.png";
import { NavBar } from "./NavBar";
import { redirect } from "react-router-dom";
import { GithubIcon, LinkedinIcon } from "./Icons.tsx";

const navItems = [
  { name: "Home", to: "/", onClick: () => console.log("clicked") },
  { name: "Projects", to: "/projects", onClick: () => redirect("/projects") },
  { name: "Life", to: "/life", onClick: () => console.log("clicked") },
  { name: "Contact", onClick: () => console.log("clicked") },
  {
    name: <GithubIcon />,
    href: "https://github.com/patrickxunuo",
  },
  {
    name: <LinkedinIcon />,
    href: "https://www.linkedin.com/in/patrick-xu-46922813a/",
  },
];

const Navigation = () => {
  return (
    <div className="navbar">
      <div className="nav-icon">
        <img src={Logo} width={60} />
      </div>

      <NavBar navItems={navItems} />
    </div>
  );
};

export default Navigation;
