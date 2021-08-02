import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";

export default function footer() {
  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 6 }}
        py={{ xs: 3, sm: 6 }}
        bgcolor="info.main"
        color="white"
        textAlign="center"
        fontSize="1rem"
        fontWeight="640"
      >
        <Container maxWidth="lg">
          <Grid container spacing="5">
            <Grid item xs={8} sm={4}>
              <Link href="/Account" color="inherit">
                <Box borderBottom={1}>Help</Box>
              </Link>
              <Box>
                <Link href="/Account" color="inherit">
                  Contact
                </Link>
              </Box>
              <Box>
                <Link href="/Account" color="inherit">
                  Support
                </Link>
              </Box>
              <Box>
                <Link href="/Account" color="inherit">
                  Privacy
                </Link>
              </Box>
            </Grid>

            <Grid item xs={8} sm={4}>
              <Link href="/Account" color="inherit">
                <Box borderBottom={1}>Account</Box>
              </Link>
              <Box>
                <Link href="/Login" color="inherit">
                  Sign In
                </Link>
              </Box>
              <Box>
                <Link href="/Login" color="inherit">
                  Sign Out
                </Link>
              </Box>
            </Grid>

            <Grid item xs={8} sm={4}>
              <Link href="/Orders" color="inherit">
                <Box borderBottom={1}>Checkout</Box>
              </Link>
              <Box>
                <Link href="/Orders" color="inherit">
                  Orders
                </Link>
              </Box>
              <Box>
                <Link href="/Checkout" color="inherit">
                  Basket
                </Link>
              </Box>

              <Box>
                <Link href="/Payment" color="inherit">
                  Payment
                </Link>
              </Box>
            </Grid>
          </Grid>

          <Box textAlign="center" pt={{ xs: 4, sm: 2 }} pb={{ xs: 4, sm: 2 }}>
            &reg; {new Date().getFullYear()} Health Care Pvt. Ltd. All Rights
            Reserved
          </Box>
        </Container>
      </Box>
    </footer>
  );
}
