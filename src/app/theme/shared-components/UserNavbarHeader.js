import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { selectUser } from 'app/store/userSlice';
import UserAvatar from './UserAvatar';

const Root = styled('div')(({ theme }) => ({
  '& .username, & .email': {
    transition: theme.transitions.create('opacity', {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.easeInOut,
    }),
  },

  '& .avatar': {
    background: theme.palette.background.paper,
    transition: theme.transitions.create('all', {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.easeInOut,
    }),
    bottom: 0,
    '& > img': {
      borderRadius: '50%',
    },
  },
}));

function UserNavbarHeader(props) {
  const user = useSelector(selectUser);

  return (
    <Root className="user relative flex flex-col items-center justify-center p-16 pb-14 shadow-0">
      <div className="flex items-center justify-center mb-24">
        <UserAvatar
          sx={{
            backgroundColor: 'background.paper',
            color: 'text.secondary',
          }}
          className="avatar text-32 font-bold w-96 h-96"
          user={user}
          alt={user.data.displayName}
        />
      </div>
      <Typography className="username text-14 whitespace-nowrap font-medium">
        {user.data.displayName}
      </Typography>
      <Typography className="email text-13 whitespace-nowrap font-medium" color="text.secondary">
        {user.data.email}
      </Typography>
    </Root>
  );
}

export default UserNavbarHeader;
