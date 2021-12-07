import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { AlignHorizontalCenter, AlignVerticalCenter, AlignVerticalTopRounded } from '@mui/icons-material'


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
                {home ? (
                    <header className={styles.header}>
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
                    </> </header>
                ) : (
                    <header className={styles.childHeader}>
                        <p>
                            <h2 className={styles.header}>
                                <center>
                            <Link href="/">
                                    <Image 
                                        priority
                                        src="/images/profile.jpg"
                                        className={utilStyles.borderCircle}
                                        height={80}
                                        width={80}
                                        alt={name}
                                    />
                            </Link>&emsp;
                                <Link href="/">
                                    <a className={utilStyles.colorInherit}>{name}</a>
                                </Link>
                                </center>
                            </h2>
                            
                        </p>
                        </header>
                    )}
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