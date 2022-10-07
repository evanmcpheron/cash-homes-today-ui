import { Box } from "@mui/system";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import { AvatarGroup, Card, Divider, Avatar, Typography } from "@mui/material";
import { formatDistance } from "date-fns";
import { useSelector } from "react-redux";
import _ from "@lodash";
import Icons from "@helper/Icons";
import { Link } from "react-router-dom";
import { selectMembers } from "../store/membersSlice";

function BoardItem(props) {
  const { board } = props;
  const members = useSelector(selectMembers);
  const boardMembers = board.members.map((id) => _.find(members, { id }));

  return (
    <Card
      component={Link}
      to={board.id}
      role="button"
      className="flex flex-col items-start w-full h-full p-24 rounded-lg shadow rounded-lg hover:shadow-xl transition-shadow duration-150 ease-in-out"
    >
      <div className="flex flex-col flex-auto justify-start items-start w-full">
        <Box
          sx={{
            backgroundColor: "secondary.light",
            color: "secondary.dark",
          }}
          className="flex items-center justify-center p-16 rounded-full"
        >
          <FuseSvgIcon icon={board.icon === "" ? Icons.faHome : board.icon} />
        </Box>

        <Typography className="mt-20 text-lg font-medium leading-5">
          {board.title}
        </Typography>

        <Typography className="mt-2 line-clamp-2 text-secondary">
          {board.description}
        </Typography>

        <Divider className="w-48 mt-24 h-2" />
      </div>

      <div className="flex flex-col flex-auto justify-end w-full">
        {Boolean(boardMembers?.length) && (
          <>
            <div className="flex items-center mt-24 -space-x-6">
              <AvatarGroup max={4}>
                {boardMembers.map((member, index) => (
                  <Avatar key={index} alt="member" src={member.avatar} />
                ))}
              </AvatarGroup>
            </div>
          </>
        )}

        <div className="flex items-center mt-24 text-md font-md">
          <Typography color="text.secondary">Edited:</Typography>
          <Typography className="mx-4 truncate">
            {formatDistance(new Date(board.lastActivity), new Date(), {
              addSuffix: true,
            })}
          </Typography>
        </div>
      </div>
    </Card>
  );
}

export default BoardItem;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import { Box } from "@mui/system";
// import Divider from "@mui/material/Divider";
// import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
// import Card from "@mui/material/Card";
// import { AvatarGroup } from "@mui/material";
// import Avatar from "@mui/material/Avatar";
// import Typography from "@mui/material/Typography";
// import { Link } from "react-router-dom";
// import { formatDistance } from "date-fns";
// import { useSelector } from "react-redux";
// import _ from "@lodash";
// import IconButton from "@mui/material/IconButton";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import { useEffect, useState } from "@types/react";
// import Icons from "@helper/Icons";
// import { selectMembers } from "../store/membersSlice";
//
// function BoardItem(props) {
//   const { board } = props;
//   const members = useSelector(selectMembers);
//   const boardMembers = board.members.map((id) => _.find(members, { id }));
//
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [formOpen, setFormOpen] = useState(false);
//
//   useEffect(() => {
//     if (formOpen && anchorEl) {
//       setAnchorEl(null);
//     }
//   }, [anchorEl, formOpen]);
//
//   function handleMenuClick(event) {
//     setAnchorEl(event.currentTarget);
//   }
//
//   function handleMenuClose() {
//     setAnchorEl(null);
//   }
//
//   function handleOpenForm(ev) {
//     ev.stopPropagation();
//     setFormOpen(true);
//   }
//
//   function handleCloseForm() {
//     setFormOpen(false);
//   }
//
//   return (
//     <Card
//       component={Link}
//       to={board.id}
//       role="button"
//       className="flex flex-col items-start w-full h-full p-24 rounded-lg shadow rounded-lg hover:shadow-xl transition-shadow duration-150 ease-in-out"
//     >
//       test
//       <div className="flex flex-col flex-auto justify-start items-start w-full">
//         <div className="flex justify-between">
//           <Box
//             sx={{
//               backgroundColor: "secondary.light",
//               color: "secondary.dark",
//             }}
//             className="flex items-center justify-center p-16 rounded-full"
//           >
//             <FuseSvgIcon icon={board.icon === "" ? Icons.faHome : board.icon} />
//           </Box>
//           <div className="flex items-center">
//             <IconButton
//               aria-owns={anchorEl ? "actions-menu" : null}
//               aria-haspopup="true"
//               onClick={handleMenuClick}
//               variant="outlined"
//               size="small"
//             >
//               <FuseSvgIcon size={20} icon={Icons.faEllipsisVertical} />
//             </IconButton>
//             <Menu
//               id="actions-menu"
//               anchorEl={anchorEl}
//               open={Boolean(anchorEl)}
//               onClose={handleMenuClose}
//             >
//               <MenuItem
//                 onClick={() => {
//                   console.log("Clicked 2");
//                 }}
//               >
//                 <ListItemIcon className="min-w-40">
//                   <FuseSvgIcon icon={Icons.faTrash} />
//                 </ListItemIcon>
//                 <ListItemText primary="Remove List" />
//               </MenuItem>
//             </Menu>
//           </div>
//         </div>
//
//         <Typography className="mt-20 text-lg font-medium leading-5">
//           {board.title}
//         </Typography>
//
//         <Typography className="mt-2 line-clamp-2 text-secondary">
//           {board.description}
//         </Typography>
//
//         <Divider className="w-48 mt-24 h-2" />
//       </div>
//       <div className="flex flex-col flex-auto justify-end w-full">
//         {Boolean(boardMembers?.length) && (
//           <>
//             <div className="flex items-center mt-24 -space-x-6">
//               <AvatarGroup max={4}>
//                 {boardMembers.map((member, index) => (
//                   <Avatar key={index} alt="member" src={member.avatar} />
//                 ))}
//               </AvatarGroup>
//             </div>
//           </>
//         )}
//
//         <div className="flex items-center mt-24 text-md font-md">
//           <Typography color="text.secondary">Edited:</Typography>
//           <Typography className="mx-4 truncate">
//             {formatDistance(new Date(board.lastActivity), new Date(), {
//               addSuffix: true,
//             })}
//           </Typography>
//         </div>
//       </div>
//     </Card>
//   );
// }
//
// export default BoardItem;
