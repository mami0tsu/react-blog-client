import { Link } from "react-router-dom";

export const Article = ({ article }) => {
    return (
        <div className="block">
            <div className="card">
                <div className="card-header">
                    <p className="card-header-title">
                        <Link to={`/articles/${article.id}`}>
                            {article.title} / {article.subtitle}
                        </Link>
                    </p>
                </div>
                <div className="card-content">
                    <div className="content">
                        {article.contents}
                    </div>
                </div>
            </div>
        </div>
    );
}