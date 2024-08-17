import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
