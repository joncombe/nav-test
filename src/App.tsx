import Content from "./components/Content";
import Layout from "./components/Layout";
import logo from "./assets/cratedb_logo.svg";
import { bottomNavigation, topNavigation } from "./navigationLinks";

function App() {
  return (
    <Layout
      logo={<img alt="CrateDB logo" src={logo} />}
      bottomNavigation={bottomNavigation}
      topNavigation={topNavigation}
      showGCStatus={true}
    >
      <Content />
    </Layout>
  );
}

export default App;
