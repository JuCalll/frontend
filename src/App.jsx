import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateProduct from "./pages/CreateProduct";
import Inventory from "./pages/Inventory";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/crear-producto" Component={CreateProduct} />
          <Route path="/inventario" Component={Inventory} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
