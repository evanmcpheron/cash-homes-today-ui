import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  OutlinedInput,
  InputAdornment,
  Typography,
  ThemeProvider,
  Button,
  Box,
  Modal,
} from "@mui/material";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import { selectMainThemeDark } from "app/store/fuse/settingsSlice";
import { useSelector } from "react-redux";
import Icons from "@helper/Icons";

const HomePageHeader = () => {
  const [address, setAddress] = useState("");
  const mainThemeDark = useSelector(selectMainThemeDark);
  useEffect(() => {
    // eslint-disable-next-line no-undef
    const autocomplete = new google.maps.places.Autocomplete(
      document.getElementById("autocomplete"),
      {}
    );

    autocomplete.addListener("place_changed", handlePlaceSelect);
  }, []);

  const handleChange = (event) => {
    setAddress(event.target.value);
  };

  const clearForm = () => {
    setAddress("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    clearForm();
  };

  const handlePlaceSelect = () => {
    // eslint-disable-next-line no-undef
    setAddress(autocomplete.value);
  };

  return (
    <ThemeProvider theme={mainThemeDark}>
      <Box
        className="relative pt-32 pb-112 px-16 sm:pt-80 sm:pb-192 sm:px-64 overflow-hidden"
        sx={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)), url("https://cash-homes-today.s3.us-west-2.amazonaws.com/pages/home/banner.jpeg")`,
          backgroundSize: "cover",
          color: (theme) =>
            theme.palette.getContrastText(theme.palette.primary.main),
        }}
      >
        <div className="flex flex-col items-center justify-center  mx-auto w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0 } }}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0 } }}
          >
            <Typography className="mt-4 text-32 sm:text-48 font-extrabold tracking-tight leading-tight text-center">
              Cash Homes Today
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.3 } }}
          >
            <Typography
              color="text.secondary"
              className="mt-12 sm:text-20 text-center tracking-tight"
            >
              WE WANT TO BUY YOUR HOME TODAY!
            </Typography>
          </motion.div>
          <OutlinedInput
            component={motion.div}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
            className="flex flex-1 items-center  mx-8 rounded-full h-44 w-full max-w-320 sm:max-w-480 mt-40 sm:mt-80 input-field"
            id="autocomplete"
            placeholder="Enter Your Home Address..."
            variant="outlined"
            value={address}
            onChange={(e) => handleChange(e)}
            fullWidth
            startAdornment={
              <InputAdornment position="start">
                <Button color="success">SUBMIT</Button>
              </InputAdornment>
            }
            inputProps={{
              "aria-label": "Submit",
            }}
          />
          <Typography className="mt-16">
            We’ll give you an offer within 24 hours, just enter your address.
          </Typography>
          <div className="flex">
            <Typography variant="h6" className="mx-24 flex items-center mt-36">
              <FuseSvgIcon
                color="success"
                icon={Icons.faShieldCheck}
                className="mr-8"
              />
              No Closing Costs.
            </Typography>
            <Typography variant="h6" className="mx-24 flex items-center mt-36">
              <FuseSvgIcon
                color="success"
                icon={Icons.faShieldCheck}
                className="mr-8"
              />
              No Banks.
            </Typography>
            <Typography variant="h6" className="mx-24 flex items-center mt-36">
              <FuseSvgIcon
                color="success"
                icon={Icons.faShieldCheck}
                className="mr-8"
              />
              No Repairs.
            </Typography>
          </div>
        </div>

        <svg
          className="absolute inset-0 pointer-events-none"
          viewBox="0 0 960 540"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMax slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            className="text-gray-700 opacity-25"
            fill="none"
            stroke="currentColor"
            strokeWidth="100"
          >
            <circle r="234" cx="196" cy="23" />
            <circle r="234" cx="790" cy="491" />
          </g>
        </svg>
      </Box>
    </ThemeProvider>
  );
};

export default HomePageHeader;
