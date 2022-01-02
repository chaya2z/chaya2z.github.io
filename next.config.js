module.exports = {
    basePath: process.env.GITHUB_ACTIONS ? "/blog.chaya2z" : "",
    trailingSlash: true,
    images: {
        loader: 'imgix',
        path: `https://chaya2z.github.io/blog.chaya2z`,
    }
};
