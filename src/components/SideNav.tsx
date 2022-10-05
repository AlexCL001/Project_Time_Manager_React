import * as React from 'react';
import { Box, Typography, Tab, Tabs, IconButton } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import { ProjectsInfoBar } from './ProjectsInfoBar';

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
            {...other}
        >
            {value === index && (
                <Box>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`
    };
}

export const SideNav = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ flexGrow: 1, display: 'flex', height: '88vh', width: '100vw', zIndex: 1, bgcolor: 'primary.dark', color: 'primary.contrastText' }}>
            <Tabs
                orientation="vertical"
                //variant="scrollable"
                value={value}
                onChange={handleChange}
                textColor="inherit"
                sx={{ borderRight: 1, bgcolor: 'primary.main', color: "primary.contrastText", borderColor: 'secondary.contrastText', width: '15vw', borderWidth: '8px' }}
            >
                <Tab label="Projects" {...a11yProps(0)} sx={{ color: 'primary.contrastText', fontSize: "25px", mt: "30px" }} />
                <Tab label="New project" {...a11yProps(1)} sx={{ color: 'primary.contrastText', fontSize: "25px", mt: "30px" }} />
                <Tab label="Archives" {...a11yProps(2)} sx={{ color: 'primary.contrastText', fontSize: "25px", mt: "30px" }} />
                <Tab label="Following" {...a11yProps(3)} sx={{ color: 'primary.contrastText', fontSize: "25px", mt: "30px" }} />
                <IconButton sx={{ left: '20px', bottom: '5px', width: '1px', color: 'primary.contrastText', position: 'absolute' }}>
                    <SettingsIcon fontSize='large' />
                </IconButton>
            </Tabs>
            <TabPanel value={value} index={0}>
                <ProjectsInfoBar />
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
            <TabPanel value={value} index={3}>
                Item four
            </TabPanel>
        </Box>
    );
}