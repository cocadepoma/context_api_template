import { ButtonData } from "./components/ButtonData";
import { Customers } from "./components/Customers";
import { Page1 } from "./components/Page1";
import { Page2 } from "./components/Page2";
import { Page3 } from "./components/Page3";
import { DataProvider } from "./context/DataContext";


function App() {
  return (
    <div className="App">

      <DataProvider>
        <Page1 />
        <Page2 />
        <Page3 />
        <ButtonData />
        <h3>Clientes</h3>
        <Customers />
      </DataProvider>

    </div>
  );
}

export default App;
