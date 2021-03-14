import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticle } from "../api.js";
import { Loading } from "../components";
import { Breadcrumb } from "../components/Breadcrumb.js";

const Article = ({ article }) => {
    return (
        <>
            <section className="section">
                <h1 className="title">{article.title}</h1>
                <h2 className="subtitle">{article.subtitle}</h2>
                <p>{article.contents}</p>
            </section>
        </>
    );
};

const ArticleDetailPage = () => {
    const [article, setArticle] = useState(null);
    const params = useParams();

    useEffect(() => {
        getArticle(params.articleId).then((data) => {
            setArticle(data);
        });
    }, [params.articleId]);

    return (
        <>
            <div className="box" >
                <Breadcrumb 
                    links={[
                        {
                            href: "/", 
                            content: "Top",
                        }, 
                        {
                            href: `/articles/${params.articleId}`, 
                            content: article && `${article.title}`, 
                            active: true, 
                        }
                    ]}
                />
                {article == null ? (
                    <Loading />
                ) : (
                    <Article 
                        article = {article}
                    />
                )}
            </div>
        </>
    );
};

export default ArticleDetailPage;