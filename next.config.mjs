// https://nextjs.org/docs/advanced-features/using-mdx
// next.config.mjs
import addMdx from '@next/mdx';

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    // Configure pageExtensions to include md and mdx
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    // Optionally, add any other Next.js config below
    reactStrictMode: true,
    experimental: {
        appDir: true,
        mdxRs: true,
    },
    output: 'export',
};

const withMDX = addMdx({
    extension: /\.mdx?$/,
    options: {
        // If you use remark-gfm, you'll need to use next.config.mjs
        // as the package is ESM only
        // https://github.com/remarkjs/remark-gfm#install
        remarkPlugins: [],
        rehypePlugins: [],
        // If you use `MDXProvider`, uncomment the following line.
        // providerImportSource: "@mdx-js/react",
    },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
