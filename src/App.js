import { BrowserRouter as Router, Link, Route, Switch, useLocation } from "react-router-dom";
import RootPage from "./pages/Root.js";
import ArticleDetailPage from "./pages/ArticleDetail.js";
import ArticlesPage from "./pages/Articles.js";

const Header = () => {
    return (
        <header className="hero is-dark is-bold">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">Header</h1>
                </div>
            </div>
        </header>
    );
}

const Footer = () => {
    return (
        <footer className="footer hero is-dark">
            <div className="content">
                <p>Footer</p>
            </div>
        </footer>
    );
}

const App = () => {
    return(
        <Router>
            <Header />
                <div className="section columns is-fullheight">
                    <main className="container column is-10">
                        <Switch>
                            <Route path="/" exact>
                                <ArticlesPage />
                            </Route>
                            <Route path="/articles" exact>
                                <ArticlesPage />
                            </Route>
                            <Route path="/articles/:articleId" exact>
                                <ArticleDetailPage />
                            </Route>
                        </Switch>
                    </main>
                    <aside className="menu column is-2">
                        <p className="menu-label">
                        Topics
                        </p>
                        <ul className="menu-list">
                            <Link to="/articles?tag=tech">
                                <li>Tech</li>
                            </Link>
                            <Link to="/articles?tag=game&limit=1">
                                <li>Game</li>
                            </Link>
                        </ul>
                    </aside>
                </div>
            <Footer />
        </Router>
    );
}

export default App;