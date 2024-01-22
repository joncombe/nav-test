type TopBarProps = {
  logo: JSX.Element;
  children: JSX.Element;
};

function TopBar({ logo, children }: TopBarProps) {
  return (
    <div className="bg-crate-navigation-bg flex items-center justify-between h-12 px-4 text-white md:px-6">
      {logo}
      {children}
    </div>
  );
}

export default TopBar;
