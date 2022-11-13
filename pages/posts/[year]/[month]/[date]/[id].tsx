import Layout from "../../../../../components/layout";
import {getAllPostIds} from "../../../../../lib/prevPosts";
import Date from "../../../../../components/date";
import utilStyles from "../../../../../styles/utils.module.css";
import Head from "next/head";
import {GetStaticProps, GetStaticPaths} from "next";
import {getTestPostData} from "../../../../../lib/posts";

import 'zenn-content-css';

export default function Post({postData}) {
  return (
    <Layout>
      <Head>
          <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
            <Date dateString={postData.created_at} />
        </div>
        <div
          className="znc"
          dangerouslySetInnerHTML={{__html: postData.contentHtml}}
        />
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({params}) => {
  const testData = await getTestPostData(
    params.id as string,
    params.year as string,
    params.month as string,
    params.date as string
  )
  const postData = testData[0]
  return {
    props: {
      postData,
    },
  };
};
