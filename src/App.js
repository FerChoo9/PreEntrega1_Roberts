import "./scss/globals.scss"
import { Brand } from "./components/NavBar"
import {ItemListContainer} from "./components/ItemListContainer"


function App() {
  return (
    <div className="App">
        <Brand/>
        <ItemListContainer/>
    </div>
  );
}

export default App;
