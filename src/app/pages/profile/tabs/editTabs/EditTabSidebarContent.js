import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { Box } from '@mui/material';
import Icons from '../../../../../@helper/Icons';

const StyledListItem = styled(ListItem)(({ theme, active }) => ({
  color: 'inherit!important',
  textDecoration: 'none!important',
  height: 40,
  width: '100%',
  borderRadius: 20,
  paddingLeft: 16,
  paddingRight: 16,
  marginBottom: 8,
  fontWeight: 500,
  '&.active': {
    backgroundColor:
      theme.palette.mode === 'light'
        ? 'rgba(0, 0, 0, .05)!important'
        : 'rgba(255, 255, 255, .1)!important',
    pointerEvents: 'none',
    '& .list-item-icon': {
      color: theme.palette.secondary.main,
    },
  },
  '& .list-item-icon': {
    marginRight: 16,
  },
}));

const tabs = [{ label: 'Payment Info', icon: Icons.faCreditCard }];

const EditTabSidebarContent = ({ selectedTab, setSelectedTab }) => {
  return (
    <Box className="px-16 py-24">
      <List className="">
        {tabs.map((tab, index) => (
          <StyledListItem key={index} button onClick={(ev) => setSelectedTab(index)}>
            <FuseSvgIcon className="list-item-icon" color="disabled" icon={tab.icon} />
            <ListItemText className="truncate" primary={tab.label} disableTypography />
          </StyledListItem>
        ))}
      </List>
    </Box>
  );
};

export default EditTabSidebarContent;
