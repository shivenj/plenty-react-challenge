import "./styles.css";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import { DashboardPage } from "./DashboardPage";
import { SettingsPage } from "./SettingsPage";

export default function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Switch>
          <Route exact path="/" component={DashboardPage} />
          <Route exact path="/settings" component={SettingsPage} />
        </Switch>
      </div>
    </Router>
  );
}
