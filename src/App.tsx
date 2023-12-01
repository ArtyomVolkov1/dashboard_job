import { Routes, Route } from "react-router-dom";
import PagesLayout from "./pages/PagesLayout";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        <Route element={<PagesLayout />}>
        <Route index element />
        <Route path="/todo" element />
        <Route path="/search-job" element />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
