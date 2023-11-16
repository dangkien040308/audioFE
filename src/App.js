import Nav from "./components/nav/nav.js";
import Main from "./components/main/main.js";
import Center from "./components/center/center.js";
import Bottom from "./components/bottom/bottom.js";
import './App.css'

function App() {
    return (
    <div className="app">
      <Nav />
      <Main />
      <Center />
      <Bottom />
    </div>
    )
}

export default App;
