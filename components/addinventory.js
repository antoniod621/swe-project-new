import Layout from "/components/layout";
import { useState } from "react";
import Link from'next/link';
import styles from '../styles/utils.module.css';
import Head from "next/dist/shared/lib/head";
// import Button from '@mui/material/Button';
// import Avatar from "@material-ui/core/Avatar";
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';


// import styles from '../styles/Home.module.css';

export default function addinventory() {
    const [part, setPart] = useState('');
    const [category, setCategory] = useState('');
    const [manufacturer, setManufacturer] = useState('');
    const [quantity, setQuantity] = useState('');
    const [location, setLocation] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const handlePost = async (e) => {
        e.preventDefault();

        // reset error and message
        setError('');
        setMessage('');

        // fields check
        if(!part || !category || !quantity || !location) return setError('Enter all required fields');
        else if(isNaN(quantity)) return setError('You must enter a number value for \"Quantity\" field')
        else return (
            setMessage('Item entered') & setPart('') & setQuantity('') &
            setManufacturer('') & setQuantity('') & setLocation('') & setCategory(''))

    
    };

    return (
        <Layout>
            <Head>
            <title>Add Inventory</title>
            </Head>
            <div className={styles.container}>
                <form onSubmit={handlePost} className={styles.form}>
                    {error ? (
                        <div className={styles.formItem}>
                            <h3 className={styles.error}>{error}</h3>
                        </div>
                    ) : null}
                    {message ? (
                        <div className={styles.formItem}>
                            <h3 className={styles.message}>{message}</h3>
                        </div>
                    ) : null}
                    <div className={styles.formItem}>
                        <label>Part</label>
                        <input
                            type="text"
                            name="part"
                            onChange={(e) => setPart(e.target.value)}
                            value={part}
                            placeholder="required"
                        />
                    </div>
                    <div className={styles.formItem}>
                        <label>Category</label>
                        <input
                            type="text"
                            name="category"
                            onChange={(e) => setCategory(e.target.value)}
                            value={category}
                            placeholder="required"
                        />
                    </div>
                    <div className={styles.formItem}>
                        <label>Manufacturer</label>
                        <input
                            type="text"
                            name="manufacturer"
                            onChange={(e) => setManufacturer(e.target.value)}
                            value={manufacturer}
                            placeholder="optional"
                        />
                    </div>
                    <div className={styles.formItem}>
                        <label>Quantity</label>
                        <input
                            type="text"
                            name="quantity"
                            onChange={(e) => setQuantity(e.target.value)}
                            value={quantity}
                            placeholder="required"
                        />
                    </div>
                    <div className={styles.formItem}>
                        <label>Location</label>
                        <input
                            type="text"
                            name="location"
                            onChange={(e) => setLocation(e.target.value)}
                            value={location}
                            placeholder="required"
                        />
                    </div>
                    
                    <div className={styles.formItem}>
                        <button type="submit">Add post</button>{' '}
                        <Link href="/inventory">
                        <button>Back to Inventory Page</button>
                        </Link>
                    </div>
                </form>
            </div>
        </Layout>
    );
                    }