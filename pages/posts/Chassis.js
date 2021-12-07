import Head from 'next/head'
import Layout from '../../components/layout'
import Link from'next/link'
import utilStyles from '../../styles/utils.module.css'
// import TodoList from "../../TodoList";
import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import Avatar from "@material-ui/core/Avatar";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AddTask from '../../components/AddTask';
import Divider from '@mui/material/Divider';
import NavTabs from '../../components/NavTabs'



export default function FirstPost() {


    
    return (
        <Layout>
          <section className={utilStyles.heading} style={{textAlign: 'center'
                }}>
                  
        <NavTabs/>

        <p>
            <h1 style={{color: "#b7ac74"
                }}>Chassis Page</h1>
            <p>
                    <div style={{textAlign: 'center'}} >
                    <Button variant="outlined" startIcon={<Avatar src={'https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg'} 
                    />}onClick={()=> window.open("https://drive.google.com/drive/u/1/folders/1tWqrQ7h-iHBQseytngHeW3xV2WQ4_vGf", "_blank")}>
                    Google Drive</Button>&nbsp;
                    <Button variant="outlined" startIcon={<Avatar src={'https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg'}
                    />}onClick={()=> window.open("https://vanderbiltmotorsports.slack.com/archives/C02KAUJKXTM", "_blank")}>
                    Slack</Button></div>
            </p>   
            
            <h1 style={{padding: '10px'
                }}>Task List</h1>
            
            <Divider style={{
                }}/>

            <div style={{paddingTop: '20px'
                }}>
            <AddTask/>
            </div>

            <Divider style={{
                }}/>
            
            <h1 style={{padding: '10px'
                    }}>Inventory</h1>
                    
                    <iframe width="100%" height="400px " src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQgYrh4Bt-c8SNxlDL_oTEBklIxXSf8caE_aVSAfoTXB7Krxiwmd9TUyyLtJESOVaoW_jcuIa5nq5UI/pubhtml?gid=1311074117&amp;single=true&amp;widget=true&amp;headers=false"></iframe>

            
          </p>

            
      
        </section>
        </Layout>


    )
}




