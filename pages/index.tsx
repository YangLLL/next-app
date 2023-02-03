import Head from 'next/head'
import { Inter } from '@next/font/google'
import Link from 'next/link'
import Layout, { siteTitle } from '@/components/layout'
import { getSortedPostsData } from '../lib/posts'
// import styles from '@/styles/Home.module.css'
import utilStyles from '@/styles/utils.module.css'
import { GetStaticProps } from 'next'
import Date from '@/components/date'


const inter = Inter({ subsets: ['latin'] })

export default function Home({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[My Introduction]</p>
        <p>This is a sample website</p>
        <Link href={'/posts/first-post'}>First Post</Link>
      </section>
      <section>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ date, title, id}) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                {title}
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}