import React, { useEffect, useState } from "react";
import { styled, ThemeProvider } from "@mui/material/styles";
import FusePageSimple from "@fuse/core/FusePageSimple";
import { useSelector } from "react-redux";
import { selectMainThemeDark } from "app/store/fuse/settingsSlice";
import HomePageHeader from "./components/HomePageHeader";

const Root = styled(FusePageSimple)(({ theme }) => ({
  "& .FusePageSimple-header": {
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderColor: theme.palette.divider,
  },
  "& .FusePageSimple-toolbar": {},
  "& .FusePageSimple-content": {},
  "& .FusePageSimple-sidebarHeader": {},
  "& .FusePageSimple-sidebarContent": {},
}));

const HomePage = () => {
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
    <Root
      header={<HomePageHeader />}
      content={<div className="p-24">HOME</div>}
      scroll="content"
    />
  );
};

export default HomePage;
