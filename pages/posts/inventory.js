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
                        <Link href="/posts/addinventory" passHref={true}><Button variant="outlined" startIcon={<Avatar src={'https://cdn1.iconfinder.com/data/icons/logistic-and-shipping-outline/32/logistic-product-parcel-increase-cargo-add-inventory-1024.png'} />}>
                            Add Item to Inventory</Button></Link>
                    </p>
                    <main>
                    <div className={utilStyles.container}>
                    {posts.length == 0 ? (
                        <p>No added posts</p>
                    ) : (
                            <InventoryList/>
                    )}
                    </div>
                    </main>
                    </center> 
                </section>
            </Layout>
        )
    }

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

 const rows = [
    createData('Size 12 hose clamps','Engine','Aircraft Spruce',3,'Radiator in/out'),
    createData('Radiator','Engine','?',1,'Rear right side'),
    createData('Oil tank','Engine','',1,'Center right behind firewall'),
    createData('Gas tank','Engine','Manually machined',1,'Left side right behind firewall'),
    createData('32 oz plastic water bottle', 'Engine', 'Nalgene', 1, "Behind radiator, right rear side"),
    createData('Steel Pipe', 'Chassis', 'Aircraft Spruce', 5, 'See Notes'),
    createData('Brake Tubing', 'Drive', 'NONE', 2, 'Brakes'),   
    createData('Size 8 hose clamp', 'Other', 'Aircraft Spruce', 9, "Brakes and cooler"),
    createData('Roll Bar Arms', 'Suspension', 'CNC Machined', 4, 'Either end of body'),
  ];

  export async function getServerSideProps(ctx) {

    return {
        props: {
            posts: ['Message', 'M', 'T'],
    },
  }
}