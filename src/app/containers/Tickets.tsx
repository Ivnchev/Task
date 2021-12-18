import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Container } from '@mui/material';
import { messageService } from '../services/MessageService';
import { AuthContext } from '../../context/AuthContext';


export const Tickets: React.FunctionComponent<{}> = () => {

    const user = React.useContext(AuthContext)
    const [messages, setMessages] = React.useState<any[]>([])

    React.useEffect(() => {

        messageService.getAll(user?.uid)
            .then((data: any) => {
                const pureData = parseData(data)
                setMessages(pureData)
            })
    }, [user?.uid])

    function deleteHandler(e: any) {
        Promise.all([
            messageService.delete(e.currentTarget.id),
            messageService.getAll(user?.uid)
        ]).then(([_, data]: any) => {
            const pureData = parseData(data)
            setMessages(pureData)
        })
    }

    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>Title</TableCell>
                        <TableCell align="center">Message Type</TableCell>
                        <TableCell align="center">First Name</TableCell>
                        <TableCell align="center">Last Name</TableCell>
                        <TableCell />
                        <TableCell />
                    </TableRow>
                </TableHead>
                <TableBody>
                    {messages.map((row) => (
                        <Row key={row.uid} row={row} deleteHandler={deleteHandler} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}


function parseData(data: any) {
    const dataSnapshots = data.docs
    const pureData = []
    for (const i in dataSnapshots) {
        const object = dataSnapshots[i].data()
        object.uid = dataSnapshots[i].id
        pureData.push(object)
    }
    return pureData
}

function Row(props: { row: ReturnType<any>, deleteHandler: any }) {
    const { row, deleteHandler } = props;
    const [open, setOpen] = React.useState(false);



    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.title}
                </TableCell>
                <TableCell align="center">{row.messageType}</TableCell>
                <TableCell align="center">{row.firstName}</TableCell>
                <TableCell align="center">{row.lastName}</TableCell>
                <TableCell align="center" onClick={deleteHandler} id={row.uid}><IconButton size="small">delete</IconButton></TableCell>
                <TableCell align="center"><IconButton size="small">update</IconButton></TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                Description
                            </Typography>
                            <Container maxWidth="sm">
                                {row.description}
                            </Container>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}


