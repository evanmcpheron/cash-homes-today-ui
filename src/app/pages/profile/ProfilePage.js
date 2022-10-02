import FusePageSimple from '@fuse/core/FusePageSimple';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import FuseLoading from '@fuse/core/FuseLoading';
import { useSelector } from 'react-redux';
import { selectUser } from 'app/store/userSlice';
import AboutTab from './tabs/AboutTab';
import ReviewTab from './tabs/ReviewTab';
import StoreTab from './tabs/StoreTab';
import useThemeMediaQuery from '../../../@fuse/hooks/useThemeMediaQuery';
import ProfileHeader from './ProfileHeader';
import { proxy } from '../../../@helper/proxy';

const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .FusePageSimple-header': {
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.palette.divider,
  },
}));

function ProfilePage() {
  const { userId } = useParams();
  const [user, setUser] = useState();
  const [store, setStore] = useState(null);
  const [selectedTab, setSelectedTab] = useState(0);
  const me = useSelector(selectUser);
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
  const navigate = useNavigate();
  const isMe = userId === 'me' ?? true;

  useEffect(() => {
    if (!isMe) {
      axios
        .get(`${proxy()}/v1/auth/user/${userId}`)
        .then((res) => {
          setUser(res.data.results);
        })
        .catch((err) => {
          console.log('🚀 ~ file: ProfilePage.js ~ line 42 ~ err: ', err);
          setUser(null);
        });
    } else {
      setUser(me);
    }

    axios
      .get(`${proxy()}/v1/store/${userId}`)
      .then((res) => {
        setStore(res.data);
      })
      .catch((err) => {
        console.log('🚀 ~ file: StoreTab.js ~ line 16 ~ err: ', err);
      });
  }, [userId, useSelector(selectUser)]);

  if (user?.role.length === 0) {
    return navigate('/sign-in');
  }

  if (!user) {
    return <FuseLoading />;
  }

  return (
    <Root
      header={
        <ProfileHeader
          user={isMe ? { isMe: true, ...user } : user}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          store={store}
        />
      }
      content={
        <div className="flex flex-auto justify-center w-full h-full mx-auto">
          {selectedTab === 0 && (
            <StoreTab user={isMe ? { isMe: true, ...user } : user} store={store} />
          )}
          {selectedTab === 1 && (
            <AboutTab user={isMe ? { isMe: true, ...user } : user} store={store} />
          )}
          {selectedTab === 2 && (
            <ReviewTab user={isMe ? { isMe: true, ...user } : user} store={store} />
          )}
        </div>
      }
      scroll={isMobile ? 'normal' : 'page'}
    />
  );
}

export default ProfilePage;
