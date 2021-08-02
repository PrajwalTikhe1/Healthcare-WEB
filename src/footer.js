import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";

export default function footer() {
  return (
    <footer>
      <Box
        px={{ xs: 2, sm: 4 }}
        py={{ xs: 2, sm: 4 }}
        bgcolor="info.main"
        color="white"
        textAlign="center"
        fontSize="1rem"
        fontWeight="600"
      >
        <Container maxWidth="lg">
          <Grid container spacing="5">
            <Grid item xs={8} sm={4}>
              <Box borderBottom={1}>Help</Box>
              <Box>
                <Link to="/Account" color="inherit">
                  Contact
                </Link>
              </Box>
              <Box>
                <Link to="/Account" color="inherit">
                  Support
                </Link>
              </Box>
              <Box>
                <Link to="/Account" color="inherit">
                  Privacy
                </Link>
              </Box>
            </Grid>

            <Grid item xs={8} sm={4}>
              <Box borderBottom={1}>Account</Box>
              <Box>
                <Link to="/Login" color="inherit">
                  Sign In
                </Link>
              </Box>
              <Box>
                <Link to="/Login" color="inherit">
                  Sign Out
                </Link>
              </Box>
            </Grid>

            <Grid item xs={8} sm={4}>
              <Box borderBottom={1}>Checkout</Box>
              <Box>
                <Link to="/Orders" color="inherit">
                  Orders
                </Link>
              </Box>
              <Box>
                <Link to="/Checkout" color="inherit">
                  Basket
                </Link>
              </Box>
            </Grid>
          </Grid>

          <Box textAlign="center" pt={{ xs: 2, sm: 4 }} pb={{ xs: 2, sm: 0 }}>
            &reg; {new Date().getFullYear()} Health Care Pvt. Ltd. All Rights
            Reserved
          </Box>
        </Container>
      </Box>
    </footer>
  );
}
