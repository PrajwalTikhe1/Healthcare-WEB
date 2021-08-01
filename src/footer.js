import Container from "@material-ui/core";
import Grid from "@material-ui/core";
import Box from "@material-ui/core";

export default function footer() {
    return <footer>
        <Box>
            <Container maxWidth="lg">
                <Grid Container spacing = '5'>
                    <Grid item xs={12} sm={4}>
                        <Box border bottom = {1}>Help</Box>
                        <Box>
                            <Link to="/" color="inherit">
                                Contact
                            </Link>
                        </Box>
                        <Box>
                            <Link to="/" color="inherit">
                                Support
                            </Link>
                        </Box>
                        <Box>
                            <Link to="/" color="inherit">
                                Privacy
                            </Link>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Box border bottom = {1}>Account</Box>
                        <Box>
                            <Link to="/" color="inherit">
                                Login
                            </Link>
                        </Box>
                        <Box>
                            <Link to="/" color="inherit">
                                Register
                            </Link>
                        </Box>
                        <Box>
                            <Link to="/" color="inherit">
                                Privacy
                            </Link>
                        </Box>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    </footer>
}