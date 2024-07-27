import React, { useState } from 'react';
import { AppBar, Tabs, Tab, Typography, Box } from '@mui/material';
import About from './About';
import '../style/Tab.css'; // Import the CSS file

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
};

const SimpleTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="tabs-root">
      <AppBar position="static" className="tabs-appbar">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="tabs example"
          className="tabs"
        >
          <Tab label="About" className={`tab ${value === 0 ? 'tab-selected' : ''} tab-hover`} />
          <Tab label="Tickets" className={`tab ${value === 1 ? 'tab-selected' : ''} tab-hover`} />
          <Tab label="Speakers" className={`tab ${value === 2 ? 'tab-selected' : ''} tab-hover`} />
          <Tab label="Workshops" className={`tab ${value === 3 ? 'tab-selected' : ''} tab-hover`} />
          <Tab label="Sponsors" className={`tab ${value === 4 ? 'tab-selected' : ''} tab-hover`} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      </TabPanel>
      <TabPanel value={value} index={1}>
        {/* Content for Tickets */}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {/* Content for Speakers */}
      </TabPanel>
      <TabPanel value={value} index={3}>
        {/* Content for Workshops */}
      </TabPanel>
      <TabPanel value={value} index={4}>
        {/* Content for Sponsors */}
      </TabPanel>
    </Box>
  );
};

export default SimpleTabs;
