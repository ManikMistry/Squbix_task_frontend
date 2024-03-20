import { Button, Grid, Typography } from "@mui/material";

function Footer() {
  return (
    <>
      <Grid
        className=" bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
{/* COMPANY */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography className=" pb-5" variant="h6">
            Company
          </Typography>
          <div>
            <Button className=" pb-5" variant="h6" gutterBottom>
              About
            </Button>
          </div>
          <div>
            <Button className=" pb-5" variant="h6" gutterBottom>
              Blog
            </Button>
          </div>
          <div>
            <Button className=" pb-5" variant="h6" gutterBottom>
              press
            </Button>
          </div>
          <div>
            <Button className=" pb-5" variant="h6" gutterBottom>
              Career
            </Button>
          </div>
          <div>
            <Button className=" pb-5" variant="h6" gutterBottom>
              Partners
            </Button>
          </div>
        </Grid>
{/* SOLUTION */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography className=" pb-5" variant="h6">
            Solution
          </Typography>
          <div>
            <Button className=" pb-5" variant="h6" gutterBottom>
              Marketing
            </Button>
          </div>
          <div>
            <Button className=" pb-5" variant="h6" gutterBottom>
              Analytics
            </Button>
          </div>
          <div>
            <Button className=" pb-5" variant="h6" gutterBottom>
              Commerce
            </Button>
          </div>
          <div>
            <Button className=" pb-5" variant="h6" gutterBottom>
              Insights
            </Button>
          </div>
          <div>
            <Button className=" pb-5" variant="h6" gutterBottom>
              Support
            </Button>
          </div>
        </Grid>
{/* DOCUMENTATION */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography className=" pb-5" variant="h6">
            Documentation
          </Typography>
          <div>
            <Button className=" pb-5" variant="h6" gutterBottom>
              Guides
            </Button>
          </div>
          <div>
            <Button className=" pb-5" variant="h6" gutterBottom>
              API Status
            </Button>
          </div>
        </Grid>
{/* Legal */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography className=" pb-5" variant="h6">
            Legal
          </Typography>
          <div>
            <Button className=" pb-5" variant="h6" gutterBottom>
              Claim
            </Button>
          </div>
          <div>
            <Button className=" pb-5" variant="h6" gutterBottom>
              Privacy
            </Button>
          </div>
          <div>
            <Button className=" pb-5" variant="h6" gutterBottom>
              Terms
            </Button>
          </div>
        </Grid>

        <Grid className="pt-20" item xs={12}>
        <Typography variant="body2" component='p' align="center">
          &copy; 2024 My Company, All rights reserverd
        </Typography>
        <Typography variant="body2" component='p' align="center">
          Made with love by me.
        </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default Footer;
