import {useBackHandler} from '@react-native-community/hooks';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CardProfileMainContent from '../../../components/CardProfileMainContent';
import Gap from '../../../components/Gap';
import getData from '../../../components/GetData';
import LoadingScreen from '../../../components/LoadingScreen';
import ProfileOptionItem from '../../../components/ProfileOptionItem';
import {defaultAuthState} from '../../../config/Auth.cfg';
import DeleteAchievement from '../../../config/DeleteData/DeleteAchievement';
import {UserServiceBaseUrl} from '../../../config/Environment.cfg';
import GetDataTrackRecord from '../../../config/GetData/GetDataTrackRecord';
import AddAchievement from '../../../config/PostData/AddAchievement';
import {colors} from '../../../utils/ColorsConfig/Colors';
import fonts from '../../../utils/FontsConfig/Fonts';

const Tag = props => {
  return (
    <View style={styles.tag}>
      <Text style={styles.tagText}>{props.title}</Text>
    </View>
  );
};

const Profile = ({navigation, route}) => {
  const [data, setData] = useState(defaultAuthState);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalAboutVisible, setModalAboutVisible] = useState(false);
  const [dataTrackRecord, setDataTrackRecord] = useState('');
  const [successModal, setSuccessModal] = useState(null);
  const [about, setAbout] = useState('');
  const [achiev, setAchiev] = useState('');
  // dropdown
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([]);
  const [array, setArray] = useState(false);
  var indexSupport = 0;
  var indexJoin = 0;

  const [isProfileUpdated, setIsProfileUpdated] = useState(false);

  const backToPreviousPage = () => {
    if (isProfileUpdated) {
      navigation.navigate('DrawerNavigation', {onResume: {refresh: true}});
    } else {
      navigation.goBack();
    }
  };

  // on resume handler from other page
  useEffect(() => {
    if (route.params?.onResume.refresh) {
      console.log('refreshing in profile');
      setIsProfileUpdated(true);
    }
  }, [route.params?.onResume]);

  useEffect(() => {
    if (dataTrackRecord === '' || data === defaultAuthState) {
      if (data === defaultAuthState) {
        getData().then(jsonValue => setData(jsonValue));
        return <LoadingScreen navigation={navigation} />;
      }
      GetDataTrackRecord(data.id).then(response =>
        setDataTrackRecord(response !== undefined ? response : ''),
      );
    }
  });

  useBackHandler(() => {
    backToPreviousPage();
    return true;
  });

  if (dataTrackRecord === '' || data === defaultAuthState) {
    return <LoadingScreen navigation={navigation} />;
  }
  const handlePost = () => {
    axios({
      crossDomain: true,
      method: 'post',
      url: `${UserServiceBaseUrl}/trackrecord/editabout`,
      data: {
        userId: data.id,
        bio: about,
      },
      validateStatus: false,
    })
      .then((response, status) => {
        if (response.status === 200) {
          console.log('berhasil');
          setSuccessModal(200);
        } else {
          setSuccessModal(-1);
        }
      })
      .catch(function (error) {
        console.log(error);
        // need handling error
      });
  };
  const getDataSuccess = data => {
    setSuccessModal(data);
  };
  const handleAchiev = () => {
    AddAchievement(data.id, value, achiev).then(res => setSuccessModal(res));
  };
  const handleDelete = idAchieve => {
    DeleteAchievement(idAchieve, data.id).then(res => {
      setSuccessModal(res);
    });
  };

  if (array === false) {
    dataTrackRecord.ideas.map(val => {
      setItems(res => [...res, {label: val.desc[0].value, value: val.id}]);
    });
    setArray(true);
  }
  if (successModal === 200 || successModal === 201) {
    GetDataTrackRecord(data.id).then(response => setDataTrackRecord(response));
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <CardProfileMainContent />
        <View style={styles.profileOptions}>
          <ProfileOptionItem
            singleData={{
              itemTitle: 'My Profile',
              onPress: () => navigation.navigate('MyProfile'),
            }}
          />
          <Gap height={16} />
          <ProfileOptionItem
            title="My Ideas"
            multiItems
            multiData={[
              {
                itemTitle: 'Submitted Idea',
                onPress: () => console.log('Submitted Idea Clicked'),
              },
              {
                itemTitle: 'Joined Idea',
                onPress: () => console.log('Joined Idea Clicked'),
              },
            ]}
          />
          <Gap height={16} />
          <ProfileOptionItem
            title="Tallent Approval"
            singleData={{
              itemTitle: 'Tallent aApproval',
              onPress: () => console.log('Tallent Approval Clicked'),
            }}
          />
          <Gap height={16} />
          <ProfileOptionItem
            title="General Info"
            singleData={{
              itemTitle: 'FAQ',
              onPress: () => console.log('FAQ Clicked'),
            }}
          />
          <Gap height={32} />
          <TouchableOpacity
            style={styles.logoutButton}
            onPress={() => navigation.replace('Login')}>
            <Text style={styles.logoutButtonText}>Logout</Text>
          </TouchableOpacity>
          <Gap height={30.5} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFFFFF'},
  profileOptions: {
    padding: 16,
  },
  logoutButton: {
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    padding: 12,
  },
  logoutButtonText: {
    color: colors.white,
    fontFamily: fonts.secondary[600],
    fontSize: 16,
    lineHeight: 20,
  },
});
