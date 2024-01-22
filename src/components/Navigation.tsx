import {
  ArrowUpOutlined,
  CheckOutlined,
  ClockCircleOutlined,
  DoubleLeftOutlined,
  DoubleRightOutlined,
  LoginOutlined,
  WarningOutlined,
} from "@ant-design/icons";
import type { NavigationLinkProps } from "./Layout";

type NavigationProps = {
  navIsExpanded: boolean;
  setNavIsExpanded: (navIsExpanded: boolean) => void;
  bottomNavigation: NavigationLinkProps[];
  topNavigation: NavigationLinkProps[];
  showGCStatus: boolean;
};

enum ConnectionStatus {
  CONNECTED,
  NOT_CONFIGURED,
  NOT_LOGGED_IN,
  ERROR,
  PENDING,
}

function Navigation({
  navIsExpanded,
  setNavIsExpanded,
  bottomNavigation,
  topNavigation,
  showGCStatus,
}: NavigationProps) {
  const linkClasses =
    "block cursor-pointer overflow-hidden h-12 px-6 py-3 text-crate-navigation-fg text-[15px] hover:bg-neutral-700/50";

  const linkKey = (type: string, path: string): string => `${type}_${path}`;

  const drawLinkInner = (
    icon: JSX.Element,
    label: JSX.Element,
    navIsExpanded: boolean,
    isExternalLink: boolean = false
  ): JSX.Element => {
    return (
      <div className="flex flex-nowrap gap-2 align-center max-w-[300px] mx-auto w-full whitespace-nowrap">
        <div className="text-center text-sm h-6 w-6">{icon}</div>
        {navIsExpanded && (
          <div className="flex flex-nowrap gap-1 items-start overflow-hidden">
            {label}
            {isExternalLink && (
              <ArrowUpOutlined className="opacity-50 rotate-45" />
            )}
          </div>
        )}
      </div>
    );
  };

  const drawExpandCollapse = (): JSX.Element => (
    <div
      className={`${linkClasses} hidden md:block`}
      onClick={() => setNavIsExpanded(!navIsExpanded)}
    >
      {drawLinkInner(
        navIsExpanded ? <DoubleLeftOutlined /> : <DoubleRightOutlined />,
        navIsExpanded ? <span>Collapse</span> : <span>Expand</span>,
        navIsExpanded
      )}
    </div>
  );

  const drawLink = (link: NavigationLinkProps): JSX.Element => {
    switch (link.type) {
      case "external":
        return (
          <a
            href={link.path}
            className={linkClasses}
            key={linkKey(link.type, link.path)}
            target="blank"
          >
            {drawLinkInner(link.icon, link.label, navIsExpanded, true)}
          </a>
        );
      default:
        // internal link
        // TODO: this should be a <Link> or <NavLink>
        return (
          <div className={linkClasses} key={linkKey(link.type, link.path)}>
            {drawLinkInner(link.icon, link.label, navIsExpanded)}
          </div>
        );
    }
  };

  const drawGCConnectionStatus = (status?: ConnectionStatus): JSX.Element => {
    let classes: string;
    let icon: JSX.Element;
    let label: string;

    switch (status) {
      case ConnectionStatus.CONNECTED:
        classes = "bg-green-700 text-white";
        icon = <CheckOutlined />;
        label = "Connected";
        break;
      case ConnectionStatus.NOT_LOGGED_IN:
        classes = "bg-red-800 text-white";
        icon = <LoginOutlined />;
        label = "Not logged in";
        break;
      case ConnectionStatus.ERROR:
        classes = "bg-red-700 text-white";
        icon = <WarningOutlined />;
        label = "Error";
        break;
      case ConnectionStatus.PENDING:
        classes = "bg-neutral-700 text-white";
        icon = <ClockCircleOutlined />;
        label = "Pending";
        break;
      default:
        classes = "bg-neutral-700 text-white";
        icon = <CheckOutlined />;
        label = "Not configured";
    }

    return (
      <div
        className={`flex items-center px-6 py-3 ${classes}`}
        key="gc_connection_status"
      >
        {drawLinkInner(
          icon,
          <div>
            <div className="leading-tight opacity-60 text-xs uppercase">
              Grand Central
            </div>
            <div className="leading-tight">{label}</div>
          </div>,
          navIsExpanded
        )}
      </div>
    );
  };

  return (
    <div
      className={`flex flex-col h-full justify-between pb-2 select-none transition-[width] duration-250 ${
        navIsExpanded ? "md:w-56" : "md:w-20"
      }`}
    >
      <div>
        {topNavigation.map((link: NavigationLinkProps) => drawLink(link))}
      </div>
      <div>
        {showGCStatus && drawGCConnectionStatus(ConnectionStatus.CONNECTED)}
        <div className="border-t border-neutral-600">
          {bottomNavigation.map((link: NavigationLinkProps) => drawLink(link))}
          {drawExpandCollapse()}
        </div>
      </div>
    </div>
  );
}

export default Navigation;
