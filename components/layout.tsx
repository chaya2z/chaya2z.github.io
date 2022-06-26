import Head from "next/head";
import styles from "./layout.module.css";
import Link from "next/link";
import React from "react";
import Header from "./header/Header";
import NavBar from "./navbar/NavBar";
import Footer from "./footer/Footer";

export const siteTitle = "海底タランテラ";

export default function Layout({
    children,
    home,
}: {
    children: React.ReactNode;
    home?: boolean;
}) {
    return (
        <>
            <Head>
                <title>{siteTitle}</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="IT技術を中心としたブログ" />
                <meta
                    property="og:image"
                    content="https://github.com/chaya2z/chaya2z.github.io/blob/gh-pages/main_ogp.png?raw=true"
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css"
                      integrity="sha384-Xi8rHCmBmhbuyyhbI88391ZKP2dmfnOl4rT9ZfRI7mLTdk1wblIUnrIq35nqwEvC"
                      crossOrigin="anonymous"/>
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <Header />
                        <NavBar />
                    </>
                ) : (
                    <>
                        <Header />
                        <NavBar />
                    </>
                )}
            </header>
            <div className={styles.container}>
                <main>{children}</main>
                {!home && (
                    <div className={styles.backToHome}>
                        <Link href="/">
                            <a>← Back to home</a>
                        </Link>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
}
