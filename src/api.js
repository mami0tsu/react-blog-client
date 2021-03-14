const request = async (path, options = {}) => {
    const url = `${process.env.REACT_APP_API_ORIGIN}${path}`;
    const response = await fetch(url, options);
    return response.json();
};

export const getArticles = async (arg = {}) => {
    const params = new URLSearchParams(arg);
    return request(`/articles?${params.toString()}`);
};

export const getArticle = async (articleId) => {
    return request(`/articles/${articleId}`);
};