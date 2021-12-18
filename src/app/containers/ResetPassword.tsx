import { Card, CardHeader, Typography, CardContent, Box, Grid, TextField, Button, Container } from "@mui/material";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { style } from "typestyle";
import { auth } from "../../firebaseSetup";

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

export const ResetPassword: React.FunctionComponent = () => {

    const [email, setEmail] = useState<string>('');

    const history = useHistory();

    const onResetEmailClicked = async (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        let actions = {
            url: 'http://localhost:3000/login',
            handleCodeInApp: false
        };

        await auth.sendPasswordResetEmail(email, actions)
            .then(() => {
                // sign out user
                auth.signOut();
                // redirect to login page
                history.push("/login");
            })
            .catch((error) => {

            });
    };

    return (
        <div className={classNames.mainDiv}>
            <Card sx={{ maxWidth: 600, maxHeight: 600 }}>

                <CardHeader
                    className={classNames.header}
                    title={
                        <Typography className={classNames.title} component="h1" variant="h5">
                            Forgot Password
                        </Typography>
                    } />

                <CardContent>
                    <Box component="form" onSubmit={onResetEmailClicked} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    onChange={(event) => setEmail(event.target.value)}
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    color='primary'
                                />
                            </Grid>
                        </Grid>

                        <Container>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={8}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2, mr: 3 }}
                                    >
                                        Send reset email
                                    </Button>
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <Button
                                        href="/login"
                                        color="secondary"
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}
                                    >
                                        Cancel
                                    </Button>
                                </Grid>
                            </Grid>
                        </Container>

                    </Box>
                </CardContent>
            </Card>
        </div >
    );
}