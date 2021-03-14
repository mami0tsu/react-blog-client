import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { getArticles } from "../api";
import { Article, Loading } from "../components";
import queryString from "query-string";

const ArticlesPage = () => {
    const [articles, setArticles] = useState(null);
    const params = queryString.parse(useLocation().search);

    useEffect(() => {
        getArticles(params).then((data) => {
            setArticles(data);
        });
    },[params.tag]);

    return (
        <>
            {articles == null ?(
                <Loading />
            ) : (
                articles.rows.map((article) => {
                    return <Article key={article.id} article={article} />;
                })
            )}
        </>
    );
};

export default ArticlesPage;