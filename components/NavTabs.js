import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";


function LinkTab(props) {
    return (
      <Tab
        component="a"
        
        {...props}
      />
    );
  }
  
  export default function NavTabs() {
    const [value, setValue] = React.useState(0);
    
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <center>
      <Box sx={{ width: '100%' }} style={{alignSelf: "center"
    }}>
        <Tabs onChange={handleChange} aria-label="nav tabs example">
          <ul>
          <LinkTab label="Drive" href="/posts/Drive" />
          <LinkTab label="Engine" href="/posts/Engine" />
          <LinkTab label="Chassis" href="/posts/Chassis" />
          <LinkTab label="Electrical" href="/posts/Electrical" />
          <LinkTab label="Suspension" href="/posts/Suspension" />
          </ul>
        </Tabs>
      </Box>
      </center>
    );
  }