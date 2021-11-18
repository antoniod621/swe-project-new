import Head from 'next/head'
import Layout from '../../components/layout'
import Link from'next/link'
import utilStyles from '../../styles/utils.module.css'
// import TodoList from "./TodoList";
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
            {/* <p >
                    <Link href="https://drive.google.com/drive/u/1/folders/1j0KkJUQWuTDWWhCznqu-7lN9p02-UGYQ" to="route" target="_blank" rel="noopener noreferrer" ><Button variant="outlined" startIcon={<Avatar src={'https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg'} />}>
                    Google Drive</Button></Link>
            </p>

            <p >
                    <Link href="https://vanderbiltmotorsports.slack.com/archives/C02KAUJKXTM" to="route" target="_blank" rel="noopener noreferrer" ><Button variant="outlined" startIcon={<Avatar src={'https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg'} />}>
                    Slack</Button></Link>
            </p>  
            */} 
            <h1 style={{color: "#b7ac74"
                }}>Drive Page</h1>

            <p style={{padding: '10px'
                }}>
                    <div style={{padding: '10px', textAlign: 'center'
                }} onClick={()=> window.open("https://drive.google.com/drive/u/1/folders/1tWqrQ7h-iHBQseytngHeW3xV2WQ4_vGf", "_blank")} >
                  <Button style={{ fontSize: 20 }} variant="outlined" startIcon={<Avatar src={'https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg'} />}>
                    Google Drive</Button></div>
            </p>
            
            <p style={{padding: '10px'
                }}>
                    <div style={{padding: '10px', textAlign: 'center'}} 
                    onClick={()=> window.open("https://vanderbiltmotorsports.slack.com/archives/C02KAUJKXTM", "_blank")} >
                    <Button style={{ fontSize: 20 }} variant="outlined" startIcon={<Avatar src={'https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg'} />}>
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

          
            
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Part</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Manufacturer</TableCell>
            <TableCell align="right">Qty</TableCell>
            <TableCell align="right">Location</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            
            
        </p>
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
    createData('32 oz plastic water bottle','Engine','Nalgene',1,"Behind radiator, right rear side"),
  ];


