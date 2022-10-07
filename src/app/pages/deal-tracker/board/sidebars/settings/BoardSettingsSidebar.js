import {
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Switch,
  IconButton,
  Typography,
  Toolbar,
  Box,
  lighten,
  Divider,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import { Controller, useForm } from "react-hook-form";
import { useEffect } from "react";
import _ from "@lodash";
import { useDebounce, useDeepCompareEffect } from "@fuse/hooks";
import Icons from "@helper/Icons";
import {
  deleteBoard,
  selectBoard,
  updateBoard,
} from "../../../store/boardSlice";

function BoardSettingsSidebar(props) {
  const dispatch = useDispatch();
  const board = useSelector(selectBoard);

  const { watch, control, reset } = useForm({
    mode: "onChange",
    defaultValues: board.settings,
  });

  const boardSettingsForm = watch();

  const updateBoardData = useDebounce((data) => {
    dispatch(updateBoard(data));
  }, 600);

  useDeepCompareEffect(() => {
    if (_.isEmpty(boardSettingsForm) || !board?.settings) {
      return;
    }
    if (!_.isEqual(board.settings, boardSettingsForm)) {
      updateBoardData({ settings: boardSettingsForm });
    }
  }, [board, boardSettingsForm, updateBoardData]);

  useEffect(() => {
    if (!board) {
      return;
    }
    reset(board.settings);
  }, [board, reset]);

  if (_.isEmpty(boardSettingsForm)) {
    return null;
  }

  return (
    <div>
      <Box
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? lighten(theme.palette.background.default, 0.4)
              : lighten(theme.palette.background.default, 0.02),
        }}
        className="border-b-1"
      >
        <Toolbar className="flex items-center px-4">
          <IconButton
            onClick={() => props.onSetSidebarOpen(false)}
            color="inherit"
            size="large"
          >
            <FuseSvgIcon icon={Icons.faX} />
          </IconButton>
          <Typography
            className="px-4 font-medium text-16"
            color="inherit"
            variant="subtitle1"
          >
            Settings
          </Typography>
        </Toolbar>
      </Box>

      <List className="py-24">
        <ListItem>
          <ListItemIcon className="min-w-40">
            <FuseSvgIcon icon={Icons.faImage} />
          </ListItemIcon>
          <ListItemText primary="Card Cover Images" />
          <ListItemSecondaryAction>
            <Controller
              name="cardCoverImages"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Switch
                  onChange={(ev) => {
                    onChange(ev.target.checked);
                  }}
                  checked={value}
                />
              )}
            />
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemIcon className="min-w-40">
            <FuseSvgIcon icon={Icons.faEyeSlash} />
          </ListItemIcon>
          <ListItemText primary="Subscribe" />
          <ListItemSecondaryAction>
            <Controller
              name="subscribed"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Switch
                  onChange={(ev) => {
                    onChange(ev.target.checked);
                  }}
                  checked={value}
                />
              )}
            />
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem
          className="mb-16"
          button
          onClick={() => dispatch(deleteBoard(board.id))}
        >
          <ListItemIcon className="min-w-40">
            <FuseSvgIcon icon={Icons.faTrash} />
          </ListItemIcon>
          <ListItemText primary="Delete Board" />
        </ListItem>{" "}
        <Divider />
        <ListItem
          className="mt-16"
          button
          onClick={() => props.handleOpenLabel(true)}
        >
          <ListItemIcon className="min-w-40">
            <FuseSvgIcon icon={Icons.faTag} />
          </ListItemIcon>
          <ListItemText primary="Edit Label" />
        </ListItem>
        <ListItem button onClick={() => props.handleOpenMembers(true)}>
          <ListItemIcon className="min-w-40">
            <FuseSvgIcon icon={Icons.faUser} />
          </ListItemIcon>
          <ListItemText primary="Edit Members" />
        </ListItem>
      </List>
    </div>
  );
}

export default BoardSettingsSidebar;
