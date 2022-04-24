import {useBackHandler} from '@react-native-community/hooks';
import {useNavigationState} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import CardDetailProfileContent from '../../../components/CardDetailProfileContent';
import CardMyAchivements from '../../../components/CardMyAchivements';
import CardMyIdeas from '../../../components/CardMyIdeas';
import CardMySkills from '../../../components/CardMySkills';
import CardProfileMainContent from '../../../components/CardProfileMainContent';
import ContactDetail from '../../../components/ContactDetail';
import EditMyAbout from '../../../components/EditMyAbout';
import EditMyAchievements from '../../../components/EditMyAchievements';
import EditMySkills from '../../../components/EditMySkills';
import Gap from '../../../components/Gap';
import Header from '../../../components/Header';
import ModalEditProfile from '../../../components/ModalEditProfile';
import {colors} from '../../../utils/ColorsConfig/Colors';
import fonts from '../../../utils/FontsConfig/Fonts';

const MyProfile = ({navigation, route}) => {
  const [myAbout, setMyAbout] = useState('');
  const [mySkills, setMySkills] = useState([]);
  const [myAchivements, setMyAchivements] = useState([]);
  const [myIdeas, setMyIdeas] = useState([]);

  const [modalContactInfoVisible, setModalContactInfoVisible] = useState(false);
  const [modalEditAboutVisible, setModalEditAboutVisible] = useState(false);
  const [modalEditSkillsVisible, setModalEditSkillsVisible] = useState(false);
  const [modalActionAchievemensVisible, setModalActionAchievemensVisible] =
    useState(false);

  // example to get route index
  const routeIndex = useNavigationState(state => state.index);

  const backToPreviousPage = () => {
    if (routeIndex > 0) {
      navigation.goBack();
    } else {
      navigation.replace('DrawerNavigation');
    }
  };

  useEffect(() => {
    setMyAbout(
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet',
    );
    setMySkills([
      'UI/UX Designer',
      'Product Owner',
      'Digital Marketing',
      'System Analyst',
    ]);
    setMyAchivements([
      {
        title: 'Sistem Keuangan Berbasis Web untuk UMKM',
        desc: 'Top 25 Ideahack -',
        date: '25/11/2014',
      },
      {
        title: 'Indonesia Menerapkan IoT',
        desc: 'Juara Harapan 2 Ideahack',
        date: '18/03/2016',
      },
    ]);
    setMyIdeas([
      {
        title: 'Sistem Keuangan Berbasis Web untuk UMKM',
        desc: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit',
        picture: require('../../../assets/image/img_dummy_my_idea_1.png'),
      },
      {
        title: 'Sistem Keuangan Berbasis Web untuk UMKM',
        desc: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit',
        picture: require('../../../assets/image/img_dummy_my_idea_2.png'),
      },
    ]);
  }, []);

  useBackHandler(() => {
    backToPreviousPage();
    return true;
  });

  return (
    <View style={styles.container}>
      <Header
        backButton
        onBackPress={backToPreviousPage}
        backText="Back"
        onNotificationPress={() => navigation.navigate('Notification')}
      />
      <ScrollView>
        <CardProfileMainContent
          editable
          onContactInfoPress={() => setModalContactInfoVisible(true)}
        />
        <View style={styles.profileOptions}>
          <CardDetailProfileContent
            title="About"
            onPress={() => setModalEditAboutVisible(true)}>
            {myAbout !== '' && <Text style={styles.aboutText}>{myAbout}</Text>}
          </CardDetailProfileContent>
          <Gap height={16} />
          <CardDetailProfileContent
            title="My Skills"
            onPress={() => setModalEditSkillsVisible(true)}>
            <CardMySkills skills={mySkills} />
          </CardDetailProfileContent>
          <Gap height={16} />
          <CardDetailProfileContent
            title="Achievement"
            onPress={() => setModalActionAchievemensVisible(true)}>
            <CardMyAchivements achievement={myAchivements} />
          </CardDetailProfileContent>
          <Gap height={16} />
          <CardDetailProfileContent
            title="Ideas"
            withTextAction
            textAction="View All Ideas"
            onPress={() => console.log('Show More Ideas Clicked')}>
            <CardMyIdeas myIdeas={myIdeas} />
          </CardDetailProfileContent>
        </View>
      </ScrollView>

      {/* modal contact info */}
      <ModalEditProfile
        title="Elon Murz"
        visible={modalContactInfoVisible}
        onRequestClose={() => setModalContactInfoVisible(false)}
        onCloseButtonPress={() => setModalContactInfoVisible(false)}>
        <ContactDetail email="elonmuzk@gmail.com" phone="082189046790" />
      </ModalEditProfile>

      {/* modal edit my about */}
      <ModalEditProfile
        title="Edit About Myself"
        visible={modalEditAboutVisible}
        onRequestClose={() => setModalEditAboutVisible(false)}
        onCloseButtonPress={() => setModalEditAboutVisible(false)}>
        <EditMyAbout
          text={myAbout}
          onSavePress={newAbout => {
            setModalEditAboutVisible(false);
            setMyAbout(newAbout);
          }}
          onDiscardPress={() => setModalEditAboutVisible(false)}
        />
      </ModalEditProfile>

      {/* modal edit my skills */}
      <ModalEditProfile
        title="Edit My Skills"
        visible={modalEditSkillsVisible}
        onRequestClose={() => setModalEditSkillsVisible(false)}
        onCloseButtonPress={() => setModalEditSkillsVisible(false)}>
        <EditMySkills
          skills={mySkills}
          onSavePress={newSkills => {
            setModalEditSkillsVisible(false);
            setMySkills(newSkills);
          }}
          onDiscardPress={() => setModalEditSkillsVisible(false)}
        />
      </ModalEditProfile>

      {/* modal edit my achievements */}
      <ModalEditProfile
        title="Edit My Achievements"
        visible={modalActionAchievemensVisible}
        onRequestClose={() => setModalActionAchievemensVisible(false)}
        onCloseButtonPress={() => setModalActionAchievemensVisible(false)}>
        <EditMyAchievements
          achievements={myAchivements}
          onDiscardPress={() => setModalActionAchievemensVisible(false)}
          onSavePress={newAchievements => {
            setModalActionAchievemensVisible(false);
            setMyAchivements(newAchievements);
          }}
        />
      </ModalEditProfile>
    </View>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFFFFF'},
  profileOptions: {
    padding: 16,
  },
  aboutText: {
    fontFamily: fonts.primary[400],
    fontSize: 12,
    lineHeight: 22,
    color: colors.text.secondary,
    textAlign: 'justify',
  },
});
