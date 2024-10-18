import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ListPost from "./page/ListPost";
import DetailPost from "./page/DetialPost";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<ListPost />} />
        <Route path="/:id" element={<DetailPost />} />
      </Routes>
    </div>
  );
}

export default App;
