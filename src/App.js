import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Categories from "./pages/Categories";
export default function App() {
    return <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/products/:id" element={<Products />} />
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/categories" element= {<Categories/>}/>
        </Routes>
}