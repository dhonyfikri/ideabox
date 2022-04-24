import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NativeBaseProvider} from 'native-base';
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
} from 'react-native';
import {
  IcDashboardActive,
  IcDashboardInactive,
  IcEventActive,
  IcEventInactive,
  IcHomeActive,
  IcHomeInactive,
  IcUserActive,
  IcUserInactive,
} from '../assets/icon';
import Event from '../modules/event/screen/Event.route';
import Explore from '../modules/explore/screen/Explore.route';
import Home from '../modules/home/screen/Home.route';
import Main from '../modules/main/screen/Main.screen';
import Trending from '../modules/trending/screen/Trending.route';
import {colors} from '../utils/ColorsConfig/Colors';
import fonts from '../utils/FontsConfig/Fonts';
import Gap from './Gap';
import RoutesProfile from '../config/Routes/RoutesProfile';
import Header from './Header';
import Profile from '../modules/profile/screen/Profile.screen';

const Tab = createBottomTabNavigator();

const NormalTabIcon = ({focused, icon, label}) => {
  return (
    <View style={styles.wrapIcon}>
      {icon}
      <Gap height={6} />
      <Text
        style={{
          fontFamily: focused ? fonts.secondary[500] : fonts.secondary[400],
          fontSize: 12,
          lineHeight: 15,
          color: focused ? colors.primary : colors.border,
        }}>
        {label}
      </Text>
    </View>
  );
};

const CustomTabIcon = ({children, onPress}) => {
  return (
    <View
      activeOpacity={1}
      style={{
        width: 90,
        height: 96,
        top: -22,
        paddingBottom: 10,
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}>
      <View
        style={{
          backgroundColor: colors.tertiary,
          width: 65,
          height: 62.4,
          borderRadius: 65 / 2,
          justifyContent: 'center',
          alignItems: 'center',
          elevation: 2,
        }}>
        <TouchableOpacity
          onPress={onPress}
          style={{
            backgroundColor: colors.primary,
            width: 48.75,
            height: 46.8,
            borderRadius: 48 / 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../assets/icon/plus.png')}
            style={{width: 25, height: 25}}
          />
        </TouchableOpacity>
      </View>
      <Gap height={5.4} />
      <View
        style={{
          width: '100%',
          height: 15,
          justifyContent: 'flex-start',
        }}>
        {children}
      </View>
    </View>
  );
};

const TabNavigation = ({navigation, route}) => {
  return (
    <>
      <StatusBar backgroundColor={colors.secondary} barStyle="dark-content" />
      <NativeBaseProvider>
        <Header
          withLogo
          onNotificationPress={() => navigation.navigate('Notification')}
        />
        <Tab.Navigator
          backBehavior="initialRoute"
          initialRouteName="Home"
          screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: {
              // position: 'absolute',
              height: 76,
              backgroundColor: colors.tertiary,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 7,
              },
              shadowOpacity: 0.41,
              shadowRadius: 9.11,
              elevation: 10,
            },
          }}>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
              tabBarIcon: ({focused}) => (
                <NormalTabIcon
                  focused={focused}
                  icon={focused ? <IcHomeActive /> : <IcHomeInactive />}
                  label="Home"
                />
              ),
            }}
          />
          <Tab.Screen
            name="Explore"
            component={Explore}
            options={{
              headerShown: false,
              tabBarIcon: ({focused}) => (
                <NormalTabIcon
                  focused={focused}
                  icon={focused ? <IcEventActive /> : <IcEventInactive />}
                  label="Events"
                />
              ),
            }}
          />
          <Tab.Screen
            name="Create"
            component={() => (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text>Create Idea</Text>
              </View>
            )}
            options={{
              headerShown: false,
              tabBarIcon: ({focused}) => (
                <>
                  <Text
                    style={{
                      width: '100%',
                      textAlign: 'center',
                      fontFamily: focused
                        ? fonts.secondary[500]
                        : fonts.secondary[400],
                      fontSize: 12,
                      lineHeight: 15,
                      color: focused ? colors.primary : colors.border,
                    }}>
                    Create Idea
                  </Text>
                </>
              ),
              tabBarButton: props => {
                return <CustomTabIcon {...props} />;
              },
            }}
          />
          <Tab.Screen
            name="Dashboard"
            component={() => (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text>Dashboard</Text>
              </View>
            )}
            options={{
              headerShown: false,
              tabBarIcon: ({focused}) => (
                <NormalTabIcon
                  focused={focused}
                  icon={
                    focused ? <IcDashboardActive /> : <IcDashboardInactive />
                  }
                  label="Dashboard"
                />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              headerShown: false,
              tabBarIcon: ({focused}) => (
                <NormalTabIcon
                  focused={focused}
                  icon={focused ? <IcUserActive /> : <IcUserInactive />}
                  label="User"
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NativeBaseProvider>
    </>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({
  wrapIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
});
