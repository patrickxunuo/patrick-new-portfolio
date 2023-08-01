import "./style.scss";
import Logo from "../../assets/images/logo.png";
import { NavBar } from "../NavBar";
import { redirect } from "react-router-dom";

const navItems = [
  { name: "Home", to: "/home", onClick: () => console.log("clicked") },
  { name: "Projects", to: "/projects", onClick: () => redirect("/projects") },
  { name: "Life", to: "/life", onClick: () => console.log("clicked") },
  { name: "Contact", onClick: () => console.log("clicked") },
  {
    name: (
      <svg xmlns="http://www.w3.org/2000/svg" height={18} viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M12 2.247a10 10 0 0 0-3.162 19.487c.5.088.687-.212.687-.475c0-.237-.012-1.025-.012-1.862c-2.513.462-3.163-.613-3.363-1.175a3.636 3.636 0 0 0-1.025-1.413c-.35-.187-.85-.65-.013-.662a2.001 2.001 0 0 1 1.538 1.025a2.137 2.137 0 0 0 2.912.825a2.104 2.104 0 0 1 .638-1.338c-2.225-.25-4.55-1.112-4.55-4.937a3.892 3.892 0 0 1 1.025-2.688a3.594 3.594 0 0 1 .1-2.65s.837-.262 2.75 1.025a9.427 9.427 0 0 1 5 0c1.912-1.3 2.75-1.025 2.75-1.025a3.593 3.593 0 0 1 .1 2.65a3.869 3.869 0 0 1 1.025 2.688c0 3.837-2.338 4.687-4.563 4.937a2.368 2.368 0 0 1 .675 1.85c0 1.338-.012 2.413-.012 2.75c0 .263.187.575.687.475A10.005 10.005 0 0 0 12 2.247Z"
        />
      </svg>
    ),
    href: "https://github.com/patrickxunuo",
  },
  {
    name: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height={18}
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M20.47 2H3.53a1.45 1.45 0 0 0-1.47 1.43v17.14A1.45 1.45 0 0 0 3.53 22h16.94a1.45 1.45 0 0 0 1.47-1.43V3.43A1.45 1.45 0 0 0 20.47 2ZM8.09 18.74h-3v-9h3ZM6.59 8.48a1.56 1.56 0 1 1 0-3.12a1.57 1.57 0 1 1 0 3.12Zm12.32 10.26h-3v-4.83c0-1.21-.43-2-1.52-2A1.65 1.65 0 0 0 12.85 13a2 2 0 0 0-.1.73v5h-3v-9h3V11a3 3 0 0 1 2.71-1.5c2 0 3.45 1.29 3.45 4.06Z"
          />
      </svg>
    ),
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
