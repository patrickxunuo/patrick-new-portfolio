import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import "./styles.scss";
import { DarkModeIcon, LightModeIcon } from "../Icons.tsx";

interface NavItem {
  name: string | React.ReactNode;
  to?: string;
  onClick?: () => void;
  href?: string;
}

interface NavBarProps {
  navItems: NavItem[];
}

export const NavBar = ({ navItems }: NavBarProps) => {
  const [activeIndex, setActivcIndex] = useState<number>(0);
  const [itemRects, setItemRects] = useState<any[]>([]);
  const [parentLeft, setParentLeft] = useState(0);
  const [currentTheme, setCurrentTheme] = useState("light");
  const ulRef = useRef<HTMLUListElement>(null);
  const liRefs = useRef<HTMLLIElement[]>([]);

  const { pathname } = useLocation();

  useEffect(() => {
    setItemRects(liRefs.current?.map((li) => li.getBoundingClientRect()));
    setParentLeft(ulRef.current?.getBoundingClientRect().left ?? 0);
  }, [navItems, activeIndex]);

  const updateOnLi = useCallback(() => {
    const index = navItems.findIndex((item) => item.to === pathname);
    setActivcIndex(index === -1 ? 0 : index);
  }, [navItems, pathname]);

  const left = useMemo(
    () => itemRects[activeIndex]?.left - parentLeft,
    [itemRects, activeIndex, pathname]
  );

  const width = useMemo(
    () => itemRects[activeIndex]?.right - itemRects[activeIndex]?.left,
    [itemRects, activeIndex, pathname]
  );

  const toggleTheme = () => {
    const root = document.documentElement;
    if (currentTheme === "dark") {
      root.setAttribute("data-theme", "light");
      setCurrentTheme("light");
    } else {
      root.setAttribute("data-theme", "dark");
      setCurrentTheme("dark");
    }
  };

  return (
    <div className="nav-container" onMouseLeave={updateOnLi}>
      <nav>
        <div
          style={{
            left,
            width,
          }}
          className="backdrop"
        />
        <ul ref={ulRef}>
          {navItems?.map((item, index) => (
            <li
              onMouseEnter={() => setActivcIndex(index)}
              key={index}
              ref={(el) => (liRefs.current[index] = el as HTMLLIElement)}
            >
              {item.to ? (
                <Link to={item.to}>{item.name}</Link>
              ) : (
                <a onClick={item.onClick} href={item.href} target="_blank">
                  {item.name}
                </a>
              )}
            </li>
          ))}
          <li onClick={toggleTheme}>
            <a>
              {currentTheme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
