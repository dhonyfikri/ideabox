import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IcBulbIdea, IcCamera, IcComment, IcUnactiveLike} from '../assets/icon';
import {colors} from '../utils/ColorsConfig/Colors';
import fonts from '../utils/FontsConfig/Fonts';
import Dot from './Dot';
import Gap from './Gap';

const CardProfileMainContent = ({
  editable,
  profilePhoto,
  backgroundPhoto,
  onProfilePhotoPress,
  onIconCameraPress,
  onContactInfoPress,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.photoWrapper}>
        <View style={styles.backgroundPhotoContainer}>
          <Image
            style={styles.imageBackground}
            resizeMode="cover"
            source={
              backgroundPhoto
                ? backgroundPhoto
                : require('../assets/image/img_default_photo_background.png')
            }
          />
          {editable && (
            <TouchableOpacity
              style={styles.cameraButton}
              onPress={onIconCameraPress}>
              <IcCamera />
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.profilePhotoContainer}>
          <TouchableOpacity onPress={onProfilePhotoPress}>
            <Image
              style={{
                ...styles.imageProfile,
                position: 'absolute',
                width: 80,
                height: 80,
              }}
              resizeMode="cover"
              source={require('../assets/image/fotoProfile.png')}
            />
            <Image
              style={styles.imageProfile}
              resizeMode="cover"
              source={profilePhoto}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Gap height={4} />
      <View style={{marginHorizontal: 15}}>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.nameText}>
            Elon Murz
            <Gap width={8} />
            <Text style={styles.teamStructureText}>
              {'('}Hacker{')'}
            </Text>
          </Text>
        </View>
        <Text style={styles.positionText}>Product Owner IdeaBox</Text>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.locationText}>
            Karawang, Jawa Barat, Indonesia
            <Gap width={4} />
            <Text
              onPress={onContactInfoPress}
              style={{
                ...styles.locationText,
                fontFamily: fonts.primary[400],
                color: colors.primary,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  height: 10,
                  width: 4,
                  justifyContent: 'center',
                }}>
                <Dot />
              </View>
              <Gap width={4} />
              Contact Info
            </Text>
          </Text>
        </View>
      </View>
      <Gap height={16} />
      <View style={styles.interactionContainer}>
        <View style={styles.interactionItemContainer}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <IcBulbIdea width={16} height={16} />
            <Gap width={5} />
            <Text style={styles.interactionTitle} numberOfLines={1}>
              Ideas
            </Text>
          </View>
          <Gap height={8} />
          <Text style={styles.interactionCount} numberOfLines={1}>
            36
          </Text>
        </View>
        <View style={styles.verticalDivider} />
        <View style={styles.interactionItemContainer}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <IcUnactiveLike width={16} height={16} />
            <Gap width={5} />
            <Text style={styles.interactionTitle} numberOfLines={1}>
              Likes
            </Text>
          </View>
          <Gap height={8} />
          <Text style={styles.interactionCount} numberOfLines={1}>
            402
          </Text>
        </View>
        <View style={styles.verticalDivider} />
        <View style={styles.interactionItemContainer}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <IcComment width={16} height={16} />
            <Gap width={5} />
            <Text style={styles.interactionTitle} numberOfLines={1}>
              Comments
            </Text>
          </View>
          <Gap height={8} />
          <Text style={styles.interactionCount} numberOfLines={1}>
            381
          </Text>
        </View>
      </View>
      <Gap height={16} />
    </View>
  );
};

export default CardProfileMainContent;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 18,
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
    elevation: 1,
  },
  photoWrapper: {
    height: 166,
  },
  backgroundPhotoContainer: {
    height: 126,
    borderRadius: 8,
    overflow: 'hidden',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
  },
  cameraButton: {
    position: 'absolute',
    top: 16,
    right: 16,
  },
  profilePhotoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 16,
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    overflow: 'hidden',
    backgroundColor: colors.white,
  },
  imageProfile: {
    width: '100%',
    height: '100%',
  },
  nameText: {
    fontFamily: fonts.secondary[700],
    fontSize: 16,
    lineHeight: 25.6,
    color: colors.black,
  },
  teamStructureText: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    lineHeight: 26,
    color: colors.text.tertiary,
  },
  positionText: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    lineHeight: 26,
    color: colors.text.primary,
  },
  locationText: {
    fontFamily: fonts.primary[300],
    fontSize: 14,
    lineHeight: 22,
    color: colors.text.tertiary,
  },
  interactionContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  verticalDivider: {
    backgroundColor: colors.divider,
    width: 1,
  },
  interactionItemContainer: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  interactionTitle: {
    fontFamily: fonts.secondary[400],
    fontSize: 14,
    lineHeight: 17,
    color: colors.text.secondary,
  },
  interactionCount: {
    fontFamily: fonts.secondary[500],
    fontSize: 16,
    lineHeight: 25.6,
    color: colors.primary,
  },
});
