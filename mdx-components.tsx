// Ref:
// https://beta.nextjs.org/docs/guides/mdx
// https://github.com/vercel/next.js/blob/canary/examples/app-dir-mdx/mdx-components.tsx

// This file is required to use @next/mdx in the `app` directory.
import type { MDXComponents } from 'mdx/types';

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
    ...components,
  };
}
