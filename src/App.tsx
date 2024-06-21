import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Post from "./components/Post";
import PageNotFound from "./common/PageNotFound";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import PostItem from "./components/PostItem";
import Layout from "./common/Layout";

const App = () => (
  <div className="App">
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
  </div>
);

export default App;
