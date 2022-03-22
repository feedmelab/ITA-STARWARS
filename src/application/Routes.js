import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Cinema from "../pages/Cinema";
import Starships from "../pages/Starships";
import Starship from "../pages/Starship";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/cinema" element={<Cinema/>} />
            <Route path="/starships" element={<Starships/>} />
            <Route path="/starship/:id" element={<Starship />} />
            <Route path="*" element={<Home/>} />
        </Routes>
    </BrowserRouter>
);
}