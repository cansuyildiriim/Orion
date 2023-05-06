import Sidebar from "components/Sidebar";
import BottomBar from "components/BottomBar";
import Content from "components/Content";


function App() {
  return (
    <>
      <div className="container">
        <Sidebar />
        <Content />
      </div>
      <BottomBar />
    </>
  );
}

export default App;
