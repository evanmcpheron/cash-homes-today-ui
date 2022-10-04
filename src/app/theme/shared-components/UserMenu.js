import Button from "@mui/material/Button";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import { selectUser } from "app/store/userSlice";
import UserAvatar from "./UserAvatar";
import Icons from "../../../@helper/Icons";

const UserMenu = (props) => {
  const user = useSelector(selectUser);

  const [userMenu, setUserMenu] = useState(null);

  const userMenuClick = (event) => {
    setUserMenu(event.currentTarget);
  };

  const userMenuClose = () => {
    setUserMenu(null);
  };

  return (
    <>
      <Button
        className="min-h-40 min-w-40 px-0 md:px-16 py-0 md:py-6"
        onClick={userMenuClick}
        color="inherit"
      >
        {user.data.photoURL ? (
          <UserAvatar className="md:mx-4" alt="user photo" user={user} />
        ) : (
          <UserAvatar className="md:mx-4" user={user}>
            {user.data.displayName[0]}
          </UserAvatar>
        )}
      </Button>
    </>
  );
};

export default UserMenu;
