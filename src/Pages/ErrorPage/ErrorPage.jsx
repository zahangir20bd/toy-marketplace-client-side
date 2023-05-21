import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="px-6">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Container maxWidth="md">
          <Grid container spacing={2}>
            <Grid xs={6}>
              <Typography variant="h1">404</Typography>
              <Typography variant="h4">
                <p className="shadow-lg">oops! Page not found.</p>
              </Typography>
              <p className="my-5">
                Oops! The Page you are looking for does not exist. It might have
                been moved or deleted.
              </p>
              <button className="btn btn-warning">
                <Link to="/">Back to Home</Link>
              </button>
            </Grid>
            <Grid xs={6}>
              <img
                className="rounded-lg shadow-slate-300 shadow-2xl"
                src="https://i.ibb.co/nkXnqGV/404-error-lost-space-concept-illustration-114360-7901.jpg"
                alt=""
                width={500}
                height={250}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default ErrorPage;
