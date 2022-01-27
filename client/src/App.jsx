import "./App.css";
import { Layout, Divider } from "antd";
import * as Components from "./components";
import * as Events from "./components/Events";
import * as Constraints from "./components/Constraints";

const { Content, Footer } = Layout;

function App() {
  return (
    <Layout hasSider>
      {/* <Components.Sidebar /> */}
      <Layout className="site-layout">
        <Components.Navbar />
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <Events.Upcoming />
          <Divider />
          <Constraints.Upcoming />
        </Content>
        <Footer style={{ textAlign: "center" }} />
      </Layout>
    </Layout>
  );
}

export default App;
