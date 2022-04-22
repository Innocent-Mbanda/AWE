import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
// import TextField from "@mui/material/TextField";
const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="contact-container">
        <div className="raws">
          <div className="contact">
            <div className="contact-form">
              <form action="" className="form">
                <div className="u-center-text u-margin-bottom-small">
                  <h2 className="heading-secondary">CONTACT-US</h2>
                </div>
                <div className="form-group">
                  {/* <Box sx={{ "& > :not(style)": { m: 0 } }}> */}
                  <Box
                    component="form"
                    sx={{
                      display: "flex",
                      alignItems: "flex-end",
                    }}
                    className="box-block"

                  >
                    <AccountCircle
                      sx={{ color: "action.active", mr: 1, my: 0.5 }}
                      style={{ fontSize: 22 }}
                    />
                    <TextField
                      fullWidth
                      label="First Name"
                      id="fullWidth"
                      variant="standard"
                      InputProps={{ style: { fontSize: 16 } }}
                      InputLabelProps={{ style: { fontSize: 16 } }}
                    />
                    <AccountCircle
                      sx={{ color: "action.active", mr: 1, my: 0.5 }}
                      style={{ fontSize: 22 }}
                    />
                    <TextField
                      fullWidth
                      label="Last Name"
                      id="fullWidth"
                      variant="standard"
                      InputProps={{ style: { fontSize: 16 } }}
                      InputLabelProps={{ style: { fontSize: 16 } }}
                    />
                  </Box>

                  <Box
                    component="form"
                    my={3}
                    sx={{
                      display: "flex",
                      alignItems: "flex-end",
                      width: "100%",
                    }}
                  >
                    <AlternateEmailIcon
                      sx={{ color: "action.active", mr: 1, my: 1 }}
                      style={{ fontSize: 22 }}
                    />
                    <TextField
                      fullWidth
                      id="fullWidth"
                      label="Email"
                      variant="standard"
                      InputProps={{ style: { fontSize: 16 } }}
                      InputLabelProps={{ style: { fontSize: 16 } }}
                    />
                  </Box>
                  <Box
                    component="form"
                    my={4}
                    sx={{
                      "& .MuiTextField-root": { m: 1 },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <div>
                      <TextField
                        fullWidth
                        id="outlined-textarea"
                        label="Fill Your Message"
                        placeholder="Your Message....."
                        rows={3}
                        multiline
                        InputProps={{ style: { fontSize: 16 } }}
                        InputLabelProps={{ style: { fontSize: 16 } }}
                      />
                    </div>
                  </Box>

                  <a href="#" class="btn-text">
                    Apply Now &rarr;
                  </a>
                  
              
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Contact;
