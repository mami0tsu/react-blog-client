import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { getArticles } from "../api.js";
import { Article, Loading } from "../components"
import queryString from "query-string";

const RootPage = () => {
    const [articles, setArticles] = useState(null);
    const params = queryString.parse(useLocation().search);
    useEffect(() => {
        getArticles({ limit: 2, }).then((data) => {
            setArticles(data);
        });
    }, []);

    return (
        <>
            {articles == null ? (
                <Loading />
            ) : (
                articles.rows.map((article) => {
                    return <Article key={article.id} article={article} />;
                })
            )}
        </>
    );
}

export default RootPage;