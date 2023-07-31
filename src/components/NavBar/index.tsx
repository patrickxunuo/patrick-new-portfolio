import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import "./styles.scss";

interface NavItem {
  name: string;
  to?: string;
  onClick?: () => void;
}

interface NavBarProps {
  navItems: NavItem[];
}

export const NavBar = ({ navItems }: NavBarProps) => {
  const [activeIndex, setActivcIndex] = useState<number>(0);
  const [itemRects, setItemRects] = useState<any[]>([]);
  const [parentLeft, setParentLeft] = useState(0);
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

  return (
    <div className="nav-container" onMouseLeave={updateOnLi}>
      <nav>
        <div
          style={{
            left,
            width,
          }}
          className="nav-backdrop"
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
                <a onClick={item.onClick}>{item.name}</a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
