module.exports = {
    basePath: process.env.GITHUB_ACTIONS ? "/blog.chaya2z" : "",
    trailingSlash: true,
    images: {
        loader: 'imgix',
        path: `${process.env.GITHUB_ACTIONS}/blog.chaya2z/`,
    }
};
