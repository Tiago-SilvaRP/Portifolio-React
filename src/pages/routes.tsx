import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Inicio } from "./home";
import { Sobre } from "./sobre";
import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";
import { Habilidades } from "./habilidade";
import { Projetos } from "./projetos";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/sobre-mim" element={<Sobre />} />
                <Route path="/habilidades" element={<Habilidades />} />
                <Route path="/projetos" element={<Projetos />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}