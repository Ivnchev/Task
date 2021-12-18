import { MenuItem, Box, Typography, Grid, TextField, Button, Card, CardContent, CardHeader } from "@mui/material";
import { Props, useState, useEffect } from "react";
import { style } from "typestyle";
import { MessageType } from "../../domain/Message";
import { auth } from "../../firebaseSetup";
import { messageService } from "../services/MessageService";

const classNames = {

    mainDiv: style({
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex'
    }),

    header: style({
        background: '#101010'
    }),

    title: style({
        color: '#fff'
    }),
}

const messageTypes = [
    {
        value: 'Request',
        label: 'Request',
    },
    {
        value: 'Complain',
        label: 'Complain',
    },
    {
        value: 'Question',
        label: 'Question',
    },
];

const renderNotAuthorized = (): JSX.Element => {
    return (
        <div className={classNames.mainDiv}>
            <h1>Forbidden</h1>
        </div>

    )
};


export const Contacts: React.FunctionComponent = ({ match }: any): any => {

    const [messageType, setMessageType] = useState<string>('');
    const user = auth.currentUser;

    if (!user) { return renderNotAuthorized() }

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        const data = new FormData(event.currentTarget);

        const firstName = data.get('firstName') as string;
        const lastName = data.get('lastName') as string;
        const email = data.get('email') as string;
        const title = data.get('title') as string;
        const description = data.get('description') as string;


        messageService.create({
            userId: user.uid,
            email: email,
            firstName: firstName,
            lastName: lastName,
            title: title,
            description: description,
            messageType: messageType as MessageType,
        })

    };

    return (
        <div className={classNames.mainDiv}>
            <Card sx={{ maxWidth: 400, maxHeight: 600 }}>

                <CardHeader
                    className={classNames.header}
                    title={
                        <Typography className={classNames.title} component="h1" variant="h5">
                            Contact us
                        </Typography>
                    } />

                <CardContent>
                    <Box component="form" onSubmit={handleFormSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    color='primary'
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="title"
                                    label="Title"
                                    name="title"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="description"
                                    label="Description"
                                    name="description"
                                    multiline
                                    maxRows={4}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    id="messageType"
                                    name="messageType"
                                    select
                                    label="Message Type"
                                    value={messageType}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMessageType(e.target.value)}
                                >
                                    {messageTypes.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>

                        </Grid>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Submit
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </div >
    );
}
