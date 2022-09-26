import * as React from 'react';
import { Box, Typography, Tab, Tabs, Button, IconButton } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export const SideNav = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ flexGrow: 1, display: 'flex', height: '88vh', zIndex: 1, bgcolor: 'primary.dark', color: 'primary.contrastText' }}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                textColor="inherit"
                aria-label="Vertical tabs"
                sx={{ borderRight: 1, bgcolor: 'primary.main', color: "primary.contrastText", borderColor: 'secondary.contrastText', width: 300, borderWidth: '8px' }}
            >
                <Tab label="Projects" {...a11yProps(0)} sx={{ color: 'primary.contrastText' }} />
                <Tab label="New project" {...a11yProps(1)} sx={{ color: 'primary.contrastText' }} />
                <Tab label="Archives" {...a11yProps(2)} sx={{ color: 'primary.contrastText' }} />
                <IconButton sx={{ left: '20px', bottom: '5px', width: '1px', color: 'primary.contrastText', position: 'absolute' }}>
                    <SettingsIcon fontSize='large' />
                </IconButton>
            </Tabs>
            <TabPanel value={value} index={0}>
                Item One
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
        </Box>
    );
}