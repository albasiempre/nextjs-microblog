import Layout from "../../../components/Layout";
import { getAllPostIds, getPostData } from "../../../lib/post";
import utilsStyles from "../../styles/utils.module.css";

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
 const postData = await getPostData(params.id);

 return {
  props:  {
    postData,
  },
 }

}

export default function Post({postData}) {
  return (
    <Layout>
      <article>
        <h1 className={utilsStyles.headingX1}>{postData.title}</h1>
        <div className={utilsStyles.lightText}>{postData.date}</div>
        <div className={utilsStyles.lightText}>{postData.blogContentHTML}</div>
      </article>
    </Layout>
  );
}