import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import BaseLayout from "./components/BaseLayout/BaseLayout";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import ElementPage from "./pages/ElementPage";
import ErrorPage from "./pages/ErrorPage";
import BooksPage from "./pages/BooksPage";
import { bookLoader } from "./components/BookCard/BookCard";
import SubscribePage from "./pages/SubscribePage";

const reactRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<BaseLayout />}>
      <Route index element={<MainPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/books" element={<BooksPage />} />
      <Route path="/books/:id" loader={bookLoader} element={<ElementPage />} />
      <Route path="/subscribe" element={<SubscribePage />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={reactRouter} />;
}

export default App;
