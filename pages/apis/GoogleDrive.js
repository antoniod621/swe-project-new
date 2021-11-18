import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'
import Layout from "../../components/layout";

export default function GoogleDrive() {
    return (
      <Layout>
        <Head>
          <title>Google Drive</title>
        </Head>
         <section className={utilStyles.headingLg}>
           <p> Google Drive</p>
         </section>
      </Layout>
    )
  }