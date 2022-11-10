import React, { useState, useEffect } from 'react';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, IconButton, Collapse, Box, Typography, Button } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { format } from 'path';

export const ProjectsInfoBar = () => {

    function createData(
        status: string,
        projectName: string,
        timeSpent: string,
        startingTime: string,
        sessionNumber: number,
        description: string,
    ) {
        return { status, projectName, timeSpent, startingTime, sessionNumber, description };
    }

    const columns: GridColDef[] = [
        {
            field: 'startingTime',
            headerName: 'Starting time',
            width: 185,
            align: 'center',
            headerAlign: 'center',
        },
        {
            field: 'endingTime',
            headerName: 'Ending time',
            width: 185,
            align: 'center',
            headerAlign: 'center',
        },
        {
            field: 'timeSpent',
            headerName: 'Time spent',
            width: 185,
            align: 'center',
            headerAlign: 'center',
        },
    ]

    const rows = [
        createData("Paused", "Alex_React_Project", "00:03:12:49", "11:03 16/09/2022", 2, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum consectetur porta elit sapien. Turpis lectus praesent sed purus."),
        createData("Playing", "Alex_React", "00:03:12:49", "11:03 16/09/2022", 32, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum consectetur porta elit sapien. Turpis lectus praesent sed purus."),
        createData("Paused", "Alex", "00:03:12:49", "11:03 16/09/2022", 200, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum consectetur porta elit sapien. Turpis lectus praesent sed purus."),
        createData("Paused", "Alex_Ract_Project", "00:03:12:49", "11:03 16/09/2022", 2, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum consectetur porta elit sapien. Turpis lectus praesent sed purus."),
        createData("Playing", "Ale_React", "00:03:12:49", "11:03 16/09/2022", 32, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum consectetur porta elit sapien. Turpis lectus praesent sed purus."),
        createData("Paused", "Alx", "00:03:12:49", "11:03 16/09/2022", 200, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum consectetur porta elit sapien. Turpis lectus praesent sed purus."),
        createData("Paused", "Alex_React_Prject", "00:03:12:49", "11:03 16/09/2022", 2, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum consectetur porta elit sapien. Turpis lectus praesent sed purus."),
        createData("Playing", "Alex_Reac", "00:03:12:49", "11:03 16/09/2022", 32, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum consectetur porta elit sapien. Turpis lectus praesent sed purus."),
        createData("Paused", "lex", "00:03:12:49", "11:03 16/09/2022", 200, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum consectetur porta elit sapien. Turpis lectus praesent sed purus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum consectetur porta elit sapien. Turpis lectus praesent sed purus."),
        createData("Paused", "Alexact_Project", "00:03:12:49", "11:03 16/09/2022", 2, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum consectetur porta elit sapien. Turpis lectus praesent sed purus."),
        createData("Playing", "AlReact", "00:03:12:49", "11:03 16/09/2022", 32, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum consectetur porta elit sapien. Turpis lectus praesent sed purus."),
        createData("Paused", "Al", "00:03:12:49", "11:03 16/09/2022", 200, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum consectetur porta elit sapien. Turpis lectus praesent sed purus."),
    ];

    const rowss = [
        { id: 0, startingTime: 22, endingTime: 212, timeSpent: 4223 },
        { id: 1, startingTime: 432, endingTime: 216662, timeSpent: 6 },
        { id: 2, startingTime: 6786, endingTime: 453, timeSpent: 877 },
        { id: 3, startingTime: 22, endingTime: 212, timeSpent: 4223 },
        { id: 3, startingTime: 22, endingTime: 212, timeSpent: 4223 },
        { id: 3, startingTime: 22, endingTime: 212, timeSpent: 4223 },
        { id: 3, startingTime: 22, endingTime: 212, timeSpent: 4223 },
        { id: 3, startingTime: 22, endingTime: 212, timeSpent: 4223 },
        { id: 3, startingTime: 22, endingTime: 212, timeSpent: 4223 },
    ];

    // const [data, setData] = useState();
    // console.log("📢[ProjectsInfoBar.tsx:75]: data: ", data);

    // useEffect(() => {
    //     if (!data) {
    //         axios.get('http://localhost:5289/weatherforecast')
    //             .then((d) => {
    //                 setData(d.data);
    //                 toast.success('test');
    //             })
    //             .catch(() => toast.error("This didn't work."));
    //     }
    // }, [data])


    const [playStates, setPlayStates] = useState<{ play: boolean }[]>(rows.map(() => ({ play: false })));
    const [statusStates, setStatusStates] = useState<{ status: boolean }[]>(rows.map(() => ({ status: false })))
    const [timerStates, setTimerStates] = useState<{ bool: boolean, timer: string, days: number, hours: number, minutes: number, seconds: number }[]>(rows.map(() => ({ bool: false, timer: "000:00:00:00", days: 0, hours: 0, minutes: 0, seconds: 0 })));
    const [startingTimeStates, setStartingTimeStates] = useState<{ date: string, time: string }[]>(rows.map(() => ({ date: '', time: '' })));
    const [sessionNumberStates, setSessionNumberStates] = useState<{ sessionNumber: number }[]>(rows.map(() => ({ sessionNumber: 0 })))
    const [rowStates, setRowStates] = useState<{ open: boolean }[]>(rows.map(() => ({ open: false })));


    const handlePlay = (index: number) => {
        const updateValue = playStates;
        //const updateValueTimer = timerStates;

        // if (updateValue[index].play) {
        //     // newIntervalId(index, true);
        //     handleTimer(index);
        // } else {
        //     // newIntervalId(index, false);
        // }


        // var newIntervalId;
        // if (!updateValue[index].play) {
        //     newIntervalId = setInterval(() => {
        //         handleTimer(index);
        //     }, 1000);
        // }
        // if (updateValue[index].play) {
        //     clearInterval(newIntervalId);
        // }

        // useEffect(() => {
        //     const interval = setInterval(() => {
        //         handleTimer(index);
        //     }, 1000);

        //     return () => clearInterval(interval);

        // }, [playStates])

        if (!updateValue[index].play) {
            handleSessionNumber(index);
        }

        updateValue[index] = { play: !updateValue[index].play }

        if (!updateValue[index].play) {
            handleTimer(index, false);
        } else {
            handleTimer(index, true);
        }

        // const test = setInterval(() => {
        //     if (updateValue[index].play) {
        //         handleTimer(index, false);
        //     } else {
        //         handleTimer(index, true);
        //     }
        // }, 1000);

        // if (!updateValue[index].play) {
        //     clearInterval(test);
        // }

        setPlayStates([...updateValue]);

        handleStatus(index);

    };

    const handleStatus = (index: number) => {
        const updateValue = statusStates;
        updateValue[index] = { status: !updateValue[index].status }
        setStatusStates([...updateValue]);
    };

    // const newIntervalId = (index: number, bool: boolean) => setInterval(() => {
    //     handleTimer(index);
    //     if (bool) {
    //         clearInterval(undefined);
    //     }
    // }, 1000);

    const handleTimer = (index: number, bool: boolean) => {
        const updateValue = timerStates;

        var day = updateValue[index].days;
        var hour = updateValue[index].hours;
        var minute = updateValue[index].minutes;
        var second = updateValue[index].seconds;

        const newIntervalId = setInterval(() => {
            
            second = second + 1;
    
            if (second == 60) {
                minute = minute + 1;
                second = second - 60;
            }
            if (minute == 60) {
                hour = hour + 1;
                minute = minute - 60;
            }
            if (hour == 24) {
                day = day + 1;
                hour = hour - 24;
            }

        }, 1000);

        if (bool) {
            //clearInterval(newIntervalId);
        } else {
            setInterval(() => newIntervalId, 1000);
        }


        const days = ("00" + day).slice(-3);
        const hours = ("0" + hour).slice(-2);
        const minutes = ("0" + minute).slice(-2);
        const seconds = ("0" + second).slice(-2);

        const result = `${days}:${hours}:${minutes}:${seconds}`;

        updateValue[index] = { bool: bool, timer: result, days: day, hours: hour, minutes: minute, seconds: second };

        setTimerStates([...updateValue])
    };

    const handleStartingTime = (index: number) => {
        const updateValue = startingTimeStates;
        const creation = new Date();
        const date = creation.toLocaleDateString();
        const time = creation.toLocaleTimeString();
        updateValue[index] = { date: date, time: time };
    };

    const handleSessionNumber = (index: number) => {
        const updateValue = sessionNumberStates;
        if (updateValue[index].sessionNumber === 0) {
            handleStartingTime(index);
        }
        updateValue[index] = { sessionNumber: updateValue[index].sessionNumber + 1 }
        setSessionNumberStates([...updateValue]);
    };

    const handleMoreInfo = (index: number) => {
        const updateValue = rowStates;
        updateValue[index] = { open: !updateValue[index].open }
        setRowStates([...updateValue]);
    };

    if (rowStates.length === 0) { return null }

    return (
        <TableContainer sx={{ width: "84.5vw", height: '88vh' }}>
            <Table stickyHeader sx={{}}>
                <TableHead sx={{}}>
                    <TableRow sx={{ diplay: "flex", justifyContent: "space-evenly" }}>
                        <TableCell align='center'>Play/Stop</TableCell>
                        <TableCell align='center'>Status</TableCell>
                        <TableCell align='center'>Project name</TableCell>
                        <TableCell align='center'>Time spent (ddd:hh:mm:ss)</TableCell>
                        <TableCell align='center'>Starting time</TableCell>
                        <TableCell align='center'>Session number</TableCell>
                        <TableCell align='center' >More info</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody sx={{}}>
                    {rows.map((row, index) => (
                        <>
                            <TableRow key={row.projectName} sx={{}}>
                                <TableCell align='center' >
                                    <IconButton size="large" onClick={() => handlePlay(index)}>
                                        {playStates[index].play ? <PauseIcon sx={{ color: "yellow", fontSize: "50px" }} /> : <PlayArrowIcon sx={{ color: "lightgreen", fontSize: "50px" }} />}
                                    </IconButton>
                                </TableCell>
                                <TableCell align='center'>{statusStates[index].status ? 'Running' : 'Not running'}</TableCell>
                                <TableCell align='center'>{row.projectName}</TableCell>
                                <TableCell align='center'>{timerStates[index].timer}</TableCell>
                                <TableCell align='center'>
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <Typography>
                                            {startingTimeStates[index].time}
                                        </Typography>
                                        <Typography>
                                            {startingTimeStates[index].date}
                                        </Typography>
                                    </Box>
                                </TableCell>
                                <TableCell align='center'>{sessionNumberStates[index].sessionNumber}</TableCell>
                                <TableCell align='center'>
                                    <IconButton size="large" onClick={() => handleMoreInfo(index)}>
                                        {rowStates[index].open ? <KeyboardArrowUpIcon sx={{ color: "primary.contrastText", fontSize: "50px" }} /> : <KeyboardArrowDownIcon sx={{ color: "primary.contrastText", fontSize: "50px" }} />}
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                            <TableRow sx={{}}>
                                <TableCell colSpan={7} sx={{ bgcolor: '#071a2e', padding: '0', width: '100%' }}>
                                    <Collapse in={rowStates[index].open} timeout="auto" unmountOnExit>
                                        <Box sx={{ width: '100%', pb: '10px' }}>
                                            <Box sx={{ display: 'flex' }}>
                                                <Typography sx={{ width: '40%', textAlign: 'center', padding: '10px', fontSize: '22px' }}>Sessions history</Typography>
                                                <Typography sx={{ width: '30%', textAlign: 'center', padding: '10px', fontSize: '22px' }}>Description</Typography>
                                                <Typography sx={{ width: '30%', textAlign: 'center', padding: '10px', fontSize: '22px' }}>Project name</Typography>
                                            </Box>
                                            <Box sx={{ display: 'flex' }}>
                                                <Box sx={{ display: 'flex', width: '70%' }}>
                                                    <Box sx={{ bgcolor: "secondary.light", width: '57.1%', textAlign: 'center', margin: '5px 15px 5px 15px' }}>
                                                        {/* session histrory ici */}
                                                        <DataGrid
                                                            rows={rowss}
                                                            columns={columns}
                                                            //pageSize={10}
                                                            //rowsPerPageOptions={[2]}
                                                            disableSelectionOnClick
                                                            experimentalFeatures={{ newEditingApi: true }}
                                                            sx={{ color: 'primary.contrastText' }}
                                                            hideFooter
                                                        />
                                                    </Box>
                                                    <Box overflow='scroll' sx={{ display: 'flex', flexDirection: 'column', height: 250, bgcolor: "secondary.light", width: '42.9%', margin: '5px 15px 5px 15px', padding: '15px', border: '1px solid white', fontSize: '22px' }}>
                                                        {/* description ici */}
                                                        {row.description}
                                                    </Box>
                                                </Box>
                                                <Box sx={{ width: '30%' }}>
                                                    <Box sx={{ width: '100%', height: '100%', display: ' flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                                                        <Box sx={{ bgcolor: "secondary.light", margin: '5px 15px 5px 15px', textAlign: '', borderRadiu5pxs: '2', height: 90, padding: '10px', border: '1px solid white', borderRadius: '4px' }}>
                                                            {/* project name ici */}
                                                            <Typography sx={{ fontSize: '20px' }}>{row.projectName}</Typography>
                                                        </Box>
                                                        <Box sx={{ display: 'flex', justifyContent: 'space-evenly', bgcolor: '' }}>
                                                            {/* 2 boutton ici */}
                                                            <Button sx={{ color: "primary.contrastText", fontSize: "20px", borderRadius: '20px', padding: '10px 20px 10px 20px', bgcolor: 'secondary.light', margin: '50px 15px 5px 15px', '&:hover': { backgroundColor: 'secondary.light' } }}>Share</Button>
                                                            <Button sx={{ color: "primary.contrastText", fontSize: "20px", borderRadius: '20px', padding: '10px 20px 10px 20px', bgcolor: 'red', margin: '50px 15px 5px 15px', '&:hover': { backgroundColor: 'red' } }}>End project</Button>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Collapse>
                                </TableCell>
                            </TableRow>
                        </>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}