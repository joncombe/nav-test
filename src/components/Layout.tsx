import { useState } from "react";
import Burger from "./Burger";
import Navigation from "./Navigation";
import TopBar from "./TopBar";

export type NavigationLinkProps = {
  icon: JSX.Element;
  label: JSX.Element;
  path: string;
  type: "internal" | "external";
};

type LayoutProps = {
  bottomNavigation: NavigationLinkProps[];
  topNavigation: NavigationLinkProps[];
  showGCStatus: boolean;
  logo: JSX.Element;
  children: JSX.Element;
};

function Layout({
  bottomNavigation,
  topNavigation,
  showGCStatus,
  logo,
  children,
}: LayoutProps) {
  // the navIsExpanded is created at this level in case it needs to be
  // passed to the TopBar component. currently, this is not needed,
  // but it would be just a case of passing the parameter should it be
  // needed in future
  const [navIsExpanded, setNavIsExpanded] = useState(true);

  return (
    <div className="absolute bottom-0 flex flex-col min-h-dvh top-0 w-full">
      <TopBar logo={logo}>
        <span className="text-white">Jon Combe</span>
      </TopBar>
      <div className="bg-white flex flex-1 overflow-hidden">
        <div className="bg-crate-navigation-bg hidden md:block">
          <Navigation
            navIsExpanded={navIsExpanded}
            setNavIsExpanded={setNavIsExpanded}
            bottomNavigation={bottomNavigation}
            topNavigation={topNavigation}
            showGCStatus={showGCStatus}
          />
        </div>
        <div className="flex-basis overflow-y-auto">
          <Burger
            navIsExpanded={navIsExpanded}
            setNavIsExpanded={setNavIsExpanded}
            bottomNavigation={bottomNavigation}
            topNavigation={topNavigation}
            showGCStatus={showGCStatus}
            logo={logo}
          />
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
