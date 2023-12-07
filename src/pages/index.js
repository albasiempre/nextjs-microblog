import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from "../styles/Home.module.css"
import Layout from '../../components/Layout'
import utilStyle from "../styles/utils.module.css";
import Link from 'next/link';
import { getPostsData } from '../../lib/post';

// 外部から一度だけデータを持ってくる
export async function getStaticProps() {
  const allPostsData = getPostsData();
  return {
    props: {
      allPostsData
    },
  }
}




export default function Home({ allPostsData }) {
  return (
    <Layout>
      <section className={utilStyle.headingMd}>
        <p>I am a fullstack engineer who uses js.</p>
      </section>

      <section>
      <h2>エンジニアのブログ</h2>
      <div className='styles.grid'>
        {allPostsData.map(({id, title, date, thumbnail}) => (
          <article key={id}>
          <Link href={`/posts/${id}`}>
          <img src={`${thumbnail}`} className='styles.thumbnailImage'/>

          </Link>
          <Link href={`/posts/${id}`}>
            <a className={utilStyle.boldText}>{title}</a>
          </Link>
          <br />
          <small className='utilStyle.lightText'>{date}</small>
        </article>
        ))}
      </div>
      </section>
    </Layout>
  )
}
