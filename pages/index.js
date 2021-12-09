import Head from 'next/head'
import Link from'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import dbConnect from "../utils/dbConnect";
import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import Avatar from "@material-ui/core/Avatar";
import { GoogleLogin } from "react-google-login";
import { GoogleLogout } from "react-google-login";
import GoogleBtn from '../components/googleaccount.js'

export default function Home() {


    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
                <meta name="google-signin-client_id" content="32462246798-aeohvbah1muk1jpm9do88ps1hl7rlnif.apps.googleusercontent.com" />
                <div className="g-signin2" data-onsuccess="onSignIn"></div>
                <script src="https://apis.google.com/js/platform.js" async defer></script>
         
            </Head>
            <section className={utilStyles.heading} style={{textAlign: 'center', padding: "10px"
                }}>
                <p style={{textAlign: 'center', padding: "15px"
                }}>
                    <Link href="/posts/Engine"><Button style={{ fontSize: 25 }} variant="outlined" startIcon={<Avatar src={'https://cdn-icons-png.flaticon.com/512/2061/2061956.png'} />}>
                        Engine</Button></Link>
                </p>
                <p style={{textAlign: 'center', padding: "15px"
                }}>
                    <Link href="/posts/Chassis"><Button style={{ fontSize: 25 }} variant="outlined" startIcon={<Avatar src={'https://cdn3.iconfinder.com/data/icons/mechanic-car-repair-1/50/repair-36-512.png'} />}>
                        Chassis</Button></Link>
                </p>
                <p style={{textAlign: 'center', padding: "15px"
                }}>
                    <Link href="/posts/Drive"><Button style={{ fontSize: 25 }} variant="outlined" startIcon={<Avatar src={'https://static.thenounproject.com/png/57367-200.png'} />}>
                    Drive</Button></Link>
                </p>
                <p style={{textAlign: 'center', padding: "15px"
                }}>
                    <Link href="/posts/Electrical"><Button style={{ fontSize: 25 }} variant="outlined" startIcon={<Avatar src={'https://banner2.cleanpng.com/20180329/wyw/kisspng-electricity-computer-icons-symbol-electricity-5abd333f208164.7077256515223488631332.jpg'} />}>
                    Electrical</Button></Link>
                </p>
                
                <p style={{textAlign: 'center', padding: "15px"
                }}>
                    <Link href="/posts/Suspension"><Button style={{ fontSize: 25 }} variant="outlined" startIcon={<Avatar src={'https://cdn-icons-png.flaticon.com/512/1711/1711879.png'} />}>
                    Suspension</Button></Link>
                </p>
                <p style={{textAlign: 'center', padding: "15px"
                }}>
                
                    <Link href="/posts/inventory" passHref={true}><Button style={{fontSize: "25px"}}variant="outlined" startIcon={<Avatar src={'https://www.pngfind.com/pngs/m/577-5777332_png-file-svg-inventory-icon-png-transparent-png.png'} />}>
                        Inventory</Button></Link>
                </p>
                
            </section>
            

        </Layout>
    )
}

export async function getStaticProps(ctx) {

    return {
        props: {
            posts: ['message'],
        },
    };
}
