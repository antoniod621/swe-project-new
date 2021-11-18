import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { CenterFocusStrong } from '@mui/icons-material'
import NavTabs from '../pages/posts/NavTabs'

const name = 'Vanderbilt Motorsports Hub'
export const siteTitle = 'Vanderbilt Motorsports Hub'

export default function Layout({ children, home }) {
    return (
        <div className={styles.container} >
            <Head>
                <link rel="icon" href="webIcon.ico" />
                <meta
                    name="description"
                    content="Vanderbilt Motor Sports Website"
                />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <Image
                            priority
                            src="/images/profile.jpg"
                            className={utilStyles.borderCircle}
                            height={144}
                            width={144}
                            alt={name}
                        />
                        <center>
                        <h1 className={utilStyles.headingLg}>{name}</h1>
                        </center>
                    </>
                ) : (
                        <>
                            <Link href="/">
                                <a>
                                    <Image
                                        priority
                                        src="/images/profile.jpg"
                                        className={utilStyles.borderCircle}
                                        height={108}
                                        width={108}
                                        alt={name}
                                    />
                                </a>
                            </Link>
                            <center>
                            <h2 className={utilStyles.headingLg}>
                                <Link href="/">
                                    <a className={utilStyles.colorInherit}>{name}</a>
                                </Link>
                            </h2>
                            </center>
                        </>
                    )}
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}
        </div>
    )
}