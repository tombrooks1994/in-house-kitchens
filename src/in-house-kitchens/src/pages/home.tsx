import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import useTheme from '@material-ui/core/styles/useTheme';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import React from 'react';
import Gallery from '../components/gallery';
import GoogleMapReact from 'google-map-react';
import RoomIcon from '@material-ui/icons/Room';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Link } from '@material-ui/core';

const Marker: React.FC<{ lat: number, lng: number }> = (props) => {
  return <RoomIcon color="primary" fontSize="large" />
}

const HomePage: React.FC = () => {

  const theme = useTheme();
  const isBreak = useMediaQuery(theme.breakpoints.down("xs"))

  return (
    <Box mt={isBreak ? 15 : 20} style={{ overflow: 'hidden' }}>
      <Grid container spacing={10}>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12}>
              <Box style={{ textAlign: "center" }} mb={isBreak ? 3 : 10}>
                <img src="/cover.png" style={{ width: isBreak ? "90%" : "100%", maxWidth: "1092px" }} />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Grid container direction="column" alignItems="center" spacing={isBreak ? 2 : 3}>
                <Grid item>
                  <Typography variant={isBreak ? "h5" : "h3"} style={{ textAlign: "center" }}>
                    Tailor made kitchen design
                  </Typography>
                </Grid>
                <Grid item>
                  <Divider style={{ width: "200px" }} />
                </Grid>
                <Grid item>
                  <Typography variant={isBreak ? "h5" : "h3"} style={{ textAlign: "center" }}>
                    Supply & Fit
                  </Typography>
                </Grid>
                <Grid item>
                  <Divider style={{ width: "200px" }} />
                </Grid>
                <Grid item>
                  <Typography variant={isBreak ? "h5" : "h3"} style={{ textAlign: "center" }}>
                    Kitchen Extensions & renovations
                  </Typography>
                </Grid>
                <Grid item>
                  <Divider style={{ width: "200px" }} />
                </Grid>
                <Grid item>
                  <Grid container spacing={4}>
                    <Grid item>
                      <Link href="https://www.facebook.com/inhousekitchenslimited" target="_blank"><FacebookIcon fontSize="large" /></Link>
                    </Grid>
                    <Grid item>
                      <Link href="https://www.instagram.com/in_house_kitchens" target="_blank"><InstagramIcon fontSize="large" /></Link>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <Gallery images={["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg"]} />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant={isBreak ? "h5" : "h3"} style={{ textAlign: "center" }}>
                Contact
            </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" style={{ textAlign: "center" }}>33 Fishergate</Typography>
              <Typography variant="h6" style={{ textAlign: "center" }}>Boroughbridge</Typography>
              <Typography variant="h6" style={{ textAlign: "center" }}>North Yorkshire</Typography>
              <Typography variant="h6" style={{ textAlign: "center" }}>YO51 9AL</Typography>
            </Grid>
            <Grid item xs={12}>
              <div style={{ height: '75vh', width: '100%' }}>
                <GoogleMapReact
                  bootstrapURLKeys={{ key: "AIzaSyApMtq7qURuHczkWl3ZESgZKcQF1emS48U" }}
                  defaultCenter={{ lat: 54.0961026, lng: -1.3965374 }}
                  defaultZoom={16}
                >
                  <Marker lat={54.0961026} lng={-1.3965374} />

                </GoogleMapReact>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default HomePage;
