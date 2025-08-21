import HomeComponent from "./components/home/HomeComponent";
import TodoComponent from "./components/todo/TodoComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/todo/:id" element={<TodoComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;