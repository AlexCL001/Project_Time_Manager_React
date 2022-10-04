import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, IconButton, Collapse, Box } from '@mui/material';
import React, { useEffect } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import { type } from '@testing-library/user-event/dist/type';

export const ProjectsInfoBar = () => {

    function createData(
        status: string,
        projectName: string,
        timeSpent: string,
        startingTime: string,
        sessionNumber: number,
    ) {
        return { status, projectName, timeSpent, startingTime, sessionNumber };
    }

    const rows = [
        createData("Paused", "Alex_React_Project", "00:03:12:49", "11:03 16/09/2022", 2),
        createData("Playing", "Alex_React", "00:03:12:49", "11:03 16/09/2022", 32),
        createData("Paused", "Alex", "00:03:12:49", "11:03 16/09/2022", 200),
        createData("Paused", "Alex_Ract_Project", "00:03:12:49", "11:03 16/09/2022", 2),
        createData("Playing", "Ale_React", "00:03:12:49", "11:03 16/09/2022", 32),
        createData("Paused", "Alx", "00:03:12:49", "11:03 16/09/2022", 200),
        createData("Paused", "Alex_React_Prject", "00:03:12:49", "11:03 16/09/2022", 2),
        createData("Playing", "Alex_Reac", "00:03:12:49", "11:03 16/09/2022", 32),
        createData("Paused", "lex", "00:03:12:49", "11:03 16/09/2022", 200),
        createData("Paused", "Alexact_Project", "00:03:12:49", "11:03 16/09/2022", 2),
        createData("Playing", "AlReact", "00:03:12:49", "11:03 16/09/2022", 32),
        createData("Paused", "Al", "00:03:12:49", "11:03 16/09/2022", 200),
    ];

    const [rowStates, setRowStates] = React.useState<{ open: boolean }[]>(rows.map(() => ({ open: false })));
    const [play, setPlay] = React.useState(false);


    const handleOpen = (index: number) => {

        const updateValue = rowStates;
        updateValue[index] = { open: !updateValue[index].open }
        setRowStates([...updateValue]);

    };

    if (rowStates.length === 0) return null;

    return (
        <TableContainer sx={{ width: "84.5vw", height: '88vh' }}>
            {/* mt: "30px", bgcolor: "primary.main", borderRadius: "25px", width: "99%" */}
            <Table stickyHeader sx={{}}>
                <TableHead sx={{}}>
                    <TableRow sx={{ diplay: "flex", justifyContent: "space-evenly" }}>
                        <TableCell align='center'>Play/Stop</TableCell>
                        <TableCell align='center'>Status</TableCell>
                        <TableCell align='center'>Project name</TableCell>
                        <TableCell align='center'>Time spent (dd:hh:mm:ss)</TableCell>
                        <TableCell align='center'>Starting time</TableCell>
                        <TableCell align='center'>Session number</TableCell>
                        <TableCell align='center' >More info</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody sx={{}}>
                    {rows.map((row, index) => (
                        <>
                            <TableRow
                                key={row.projectName}
                                sx={{}}
                            >
                                <TableCell align='center' >
                                    <IconButton size="large" onClick={() => setPlay(!play)}>
                                        {play ? <PauseIcon sx={{ color: "yellow", fontSize: "50px" }} /> : <PlayArrowIcon sx={{ color: "lightgreen", fontSize: "50px" }} />}
                                    </IconButton>
                                </TableCell>
                                <TableCell align='center'>{row.status}</TableCell>
                                <TableCell align='center'>{row.projectName}</TableCell>
                                <TableCell align='center'>{row.timeSpent}</TableCell>
                                <TableCell align='center'>{row.startingTime}</TableCell>
                                <TableCell align='center'>{row.sessionNumber}</TableCell>
                                <TableCell align='center'>
                                    <IconButton size="large" onClick={() => handleOpen(index)}>
                                        {rowStates[index].open ? <KeyboardArrowUpIcon sx={{ color: "primary.contrastText", fontSize: "50px" }} /> : <KeyboardArrowDownIcon sx={{ color: "primary.contrastText", fontSize: "50px" }} />}
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                    <Collapse in={rowStates[index].open} timeout="auto" unmountOnExit>
                                        <Box>
                                            Open drawer
                                        </Box>
                                    </Collapse>
                            </TableRow>
                        </>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}