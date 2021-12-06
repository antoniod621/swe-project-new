import Layout from "../../components/layout";
import Link from'next/link'
import Head from "next/head";
import utilStyles from '../../styles/utils.module.css'
import * as React from 'react';
import Button from '@mui/material/Button';
import Avatar from "@material-ui/core/Avatar";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import InventoryList from "../../components/inventorylist";
export default function inventory( { posts } ){
        return(
            <Layout>
                <Head>
                <title>Inventory</title>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                </Head>
                <section className={utilStyles.heading} style={{
                    }}>
                    <center>
                    <p>
                    </p>
                    <main>
                            <iframe width="500" height="1000" src="https://docs.google.com/spreadsheets/d/1bgGhoMhPIqlWcVbWjlqbCgSColwgzsRbDcm-PSXHkOk/edit?rm=minimal&widget=false#gid=0"></iframe>
                    </main>
                    </center> 
                </section>
            </Layout>
        )
    }
