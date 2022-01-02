module.exports = () => {
    // Environment: GitHub Actions
    if (process.env.GITHUB_ACTIONS) {
        return {
            basePath: "/blog.chaya2z",
            trailingSlash: true,
            images: {
                loader: 'imgix',
                path: process.env.GITHUB_ACTIONS_IMG_PATH,
            }
        }
    }
    // Environment: Local
    return {
        basePath: "",
        trailingSlash: true,
        images: {
            loader: 'imgix',
            path: process.env.LOCAL_IMG_PATH
        }
    }
}