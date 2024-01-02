import { Routes, Route } from "react-router-dom";
import PagesLayout from "./pages/PagesLayout";
import Home from './pages/Home';
import SearchJob from './pages/SearchJob';
import Todo from "./pages/Todo";

const App = () => {
  return (
    <main className="h-screen">
      <Routes>
        <Route element={<PagesLayout />}>
        <Route index element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/search-job" element={<SearchJob />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
