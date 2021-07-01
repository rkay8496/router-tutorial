import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Profiles from "./Profiles";
import HistorySample from "./HistorySample";

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필</Link>
        </li>
        <li>
          <Link to="/history">History 예제</Link>
        </li>
      </ul>
      <div>
        <Switch>
          <Route path="/" component={Home} exact={true}></Route>
          <Route path={["/about", "/info"]} component={About}></Route>
          <Route path="/profiles" component={Profiles}></Route>
          <Route path="/history" component={HistorySample}></Route>
          <Route
            render={({ location }) => (
              <div>
                <h2>이 페이지는 존재하지 않습니다:</h2>
                <p>{location.pathname}</p>
              </div>
            )}
          ></Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
