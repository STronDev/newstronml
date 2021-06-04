import "./App.css";
import Hero from "./components/hero.component";
import About from "./components/about.component";
import Skills from "./components/skills.component";
import PageNotFound from "./components/pageNotFound.component";
import Works from "./components/works.component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/works" exact>
					<Works />
				</Route>
				<Route path="/skills" exact>
					<Skills />
				</Route>
				<Route path="/" exact>
					<Hero />
					<About />
				</Route>
				<Route>
					<PageNotFound />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
