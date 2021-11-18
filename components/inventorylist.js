

// export default function inventoryList({ item }) {
//     return (
//         <>
//             <li>
//                 <h3>{item.title}</h3>
//                 <p>{item.content}
//                 {/* {item.manufacturer}{item.quantity}{item.location}*/}
//                 </p> 
//                 <small>{new Date(post.createdAt).toLocaleDateString()}</small>
//                 <br />
//                     <button type="button">
//                         {'Publish'}
//                     </button>
//                 <button type="button" >
//                     {'Delete'}
//                 </button>
//             </li>
//         </>
//     );
// }

import { useState } from 'react';
import { useRouter } from 'next/router';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function InventoryList({ item }) {
    return (
        <>
            {/* <li>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <small>{new Date(item.createdAt).toLocaleDateString()}</small>
                <br />
                    <button type="button">
                        {'Publish'}
                    </button>
                <button type="button" >
                    {'Delete'}
                </button>
            </li> */}
            <l1>
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
                    </l1>
        </>
    );
}
function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
const rows = [
    createData('Size 12 hose clamps', 'Engine', 'Aircraft Spruce', 3, 'Radiator in/out'),
    createData('Radiator', 'Engine', '?', 1, 'Rear right side'),
    createData('Oil tank', 'Engine', '', 1, 'Center right behind firewall'),
    createData('Gas tank', 'Engine', 'Manually machined', 1, 'Left side right behind firewall'),
    createData('32 oz plastic water bottle', 'Engine', 'Nalgene', 1, "Behind radiator, right rear side"),
    createData('Steel Pipe', 'Chassis', 'Aircraft Spruce', 5, 'See Notes'),
    createData('Brake Tubing', 'Drive', 'NONE', 2, 'Brakes'),
    createData('Size 8 hose clamp', 'Other', 'Aircraft Spruce', 9, "Brakes and cooler"),
    createData('Roll Bar Arms', 'Suspension', 'CNC Machined', 4, 'Either end of body'),
];