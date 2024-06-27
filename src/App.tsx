import { FC, ReactElement } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Post from "./components/Post";
import PostItem from "./components/PostItem";
import PageNotFound from "./common/PageNotFound";
import Layout from "./common/Layout";
import DataProvider from "./common/DataProvider";

const App: FC = (): ReactElement => {
  return (
    <div className="App">
      <DataProvider>
        <Router>
          <Routes>
            <Route path="" element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/post" element={<Outlet />}>
                <Route path="" element={<Post />} />
                <Route path=":name" element={<PostItem />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </Router>
      </DataProvider>
    </div>
  );
};

export default App;
