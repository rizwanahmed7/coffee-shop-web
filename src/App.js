import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./screens/Home";
import Items from "./screens/Items";
import Order from "./screens/Order";
import Customer from "./screens/Customers";
import NewItem from "./screens/NewItem";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/items" element={<Items />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/customer" element={<Customer />}></Route>
        <Route exact path="/new_item" element={<NewItem />}></Route>
      </Routes>
    </>
  );
}

export default App;
