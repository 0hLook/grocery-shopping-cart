import "./App.css";
import Layout from "./components/layout";
import Home from "./pages/HomePage";
import Detail from "./pages/FoodDesc";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/:slug" element={<Detail />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
