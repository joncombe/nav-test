import { useEffect, useState } from "react";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import Navigation from "./Navigation";
import type { NavigationLinkProps } from "./Layout";

type BurgerProps = {
  navIsExpanded: boolean;
  setNavIsExpanded: (navIsExpanded: boolean) => void;
  bottomNavigation: NavigationLinkProps[];
  topNavigation: NavigationLinkProps[];
  showGCStatus: boolean;
  logo: JSX.Element;
};

function Burger({
  navIsExpanded,
  setNavIsExpanded,
  bottomNavigation,
  topNavigation,
  showGCStatus,
  logo,
}: BurgerProps) {
  const [navVisible, setNavVisible] = useState(false);

  // hide the burger overlay on any window resize
  useEffect(() => {
    const handleResize = () => {
      if (navVisible) {
        setNavVisible(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [navVisible]);

  // hide the burger overlay when the route changes, because the
  // user has clicked a link, they don't need to close overlay too
  // useEffect(() => {
  //   if (navVisible) {
  //     setNavVisible(false);
  //   }
  // }, [location]);

  return (
    <>
      <div className="flex justify-end p-4 md:hidden">
        <MenuOutlined
          className="cursor-pointer text-2xl"
          onClick={() => setNavVisible(true)}
        />
      </div>
      {navVisible && (
        <div className="absolute bg-crate-navigation-bg bottom-0 flex flex-col left-0 top-0 right-0 z-50">
          <div className="flex p-4">{logo}</div>
          <div className="flex justify-end p-4">
            <CloseOutlined
              className="cursor-pointer text-2xl text-white"
              onClick={() => setNavVisible(false)}
            />
          </div>
          <div className="flex-1 overflow-auto">
            <Navigation
              navIsExpanded={navIsExpanded}
              setNavIsExpanded={setNavIsExpanded}
              bottomNavigation={bottomNavigation}
              topNavigation={topNavigation}
              showGCStatus={showGCStatus}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Burger;
