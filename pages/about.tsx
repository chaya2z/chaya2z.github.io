import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";

export default function About() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section>
                <h2>About</h2>
                <p>こんにちは。茶屋辻 ( chaya2z ) です。</p>
                <p>このブログではネットワーク・サーバなどの IT 技術を中心にいろいろ投稿していく予定です。</p>
            </section>
        </Layout>
    );
}
