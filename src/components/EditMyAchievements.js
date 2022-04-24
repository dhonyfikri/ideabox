import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IcActivePencilEdit, IcActiveTrash, IcAdd} from '../assets/icon';
import {colors} from '../utils/ColorsConfig/Colors';
import fonts from '../utils/FontsConfig/Fonts';
import Divider from './Divider';
import EditMyAchievementField from './EditMyAchievementField';
import Gap from './Gap';

const EditMyAchievements = ({
  achievements = [],
  onSavePress = () => {},
  onDiscardPress,
}) => {
  const [currentAchievements, setCurrentAchievements] = useState(
    // karena menyalin array of object dan object adalah tipe referensi, gunakan map untuk menyalin tingkatan dalam daripada hanya menggunakan operatior spread (...).
    achievements.map(item => ({...item})),
  );
  const [activeItemEdit, setActiveItemEdit] = useState(-1);
  const [disableSaveButton, setDisableSaveButton] = useState(true);

  useEffect(() => {
    let disable = false;
    for (let i = 0; i < currentAchievements.length; i++) {
      if (
        currentAchievements[i].title === '' ||
        currentAchievements[i].desc === '' ||
        currentAchievements[i].date === ''
      ) {
        disable = true;
        i = currentAchievements.length;
      }
    }
    disableSaveButton !== disable && setDisableSaveButton(disable);
  }, [currentAchievements]);

  return (
    <>
      {currentAchievements.map((item, index) => {
        return (
          <View key={index.toString()}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  flex: 1,
                }}>
                <Text
                  style={{
                    fontFamily: fonts.secondary[600],
                    fontSize: 12,
                    lineHeight: 15,
                    color: colors.text.tertiary3,
                  }}>
                  {item.title}
                </Text>
                <Gap height={6} />
                <Text
                  style={{
                    fontFamily: fonts.primary[400],
                    fontSize: 12,
                    lineHeight: 22,
                    color: colors.text.tertiary2,
                  }}>
                  {item.desc} {item.date}
                </Text>
              </View>
              <Gap width={18} />
              <TouchableOpacity
                style={{
                  height: '100%',
                  maxHeight: 30,
                  flexDirection: 'row',
                  alignItems: 'flex-end',
                }}
                onPress={() => {
                  if (index !== activeItemEdit) {
                    setActiveItemEdit(index);
                  } else {
                    setActiveItemEdit(-1);
                  }
                }}>
                <IcActivePencilEdit />
              </TouchableOpacity>
              <Gap width={18} />
              <TouchableOpacity
                style={{
                  height: '100%',
                  maxHeight: 30,
                  flexDirection: 'row',
                  alignItems: 'flex-end',
                }}
                onPress={() => {
                  const newAchievements = currentAchievements.map(item => ({
                    ...item,
                  }));
                  newAchievements.splice(index, 1);
                  setCurrentAchievements(newAchievements);
                }}>
                <IcActiveTrash />
              </TouchableOpacity>
            </View>
            {index === activeItemEdit && (
              <>
                <Gap height={16} />
                <EditMyAchievementField
                  title={item.title}
                  desc={item.desc}
                  issueDate={item.date}
                  onTitleChange={newTitle => {
                    const _currentAchievements = [...currentAchievements];
                    _currentAchievements[index] = {
                      ..._currentAchievements[index],
                      title: newTitle,
                    };
                    setCurrentAchievements(_currentAchievements);
                  }}
                  onDescChange={newDesc => {
                    const _currentAchievements = [...currentAchievements];
                    _currentAchievements[index] = {
                      ..._currentAchievements[index],
                      desc: newDesc,
                    };
                    setCurrentAchievements(_currentAchievements);
                  }}
                  onDateChange={newDate => {
                    const _currentAchievements = [...currentAchievements];
                    _currentAchievements[index] = {
                      ..._currentAchievements[index],
                      date: newDate,
                    };
                    setCurrentAchievements(_currentAchievements);
                  }}
                />
              </>
            )}
            <Divider lineColors={colors.divider2} />
            {index + 1 !== currentAchievements.length && <Gap height={16} />}
          </View>
        );
      })}
      <Gap height={16} />
      <View>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignSelf: 'flex-start',
            alignItems: 'center',
          }}
          onPress={() => {
            const _currentAchievements = [...currentAchievements];
            _currentAchievements.push({
              title: 'New Achievement',
              desc: 'No Description',
              date: '',
            });
            setCurrentAchievements(_currentAchievements);
          }}>
          <IcAdd />
          <Gap width={8} />
          <Text numberOfLines={1} style={styles.addAnotherAchievementText}>
            Add another achievements
          </Text>
        </TouchableOpacity>
      </View>
      <Gap height={24} />
      <View style={styles.actionWrapper}>
        <TouchableOpacity style={styles.discardButton} onPress={onDiscardPress}>
          <Text numberOfLines={1} style={styles.discardButtonText}>
            Discard
          </Text>
        </TouchableOpacity>
        <Gap width={16} />
        <TouchableOpacity
          disabled={disableSaveButton}
          style={styles.saveButton(disableSaveButton)}
          onPress={() => onSavePress(currentAchievements)}>
          <Text numberOfLines={1} style={styles.saveButtonText}>
            Save
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default EditMyAchievements;

const styles = StyleSheet.create({
  container: dataAvailable => ({
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginBottom: dataAvailable ? -8 : 0,
  }),
  addAnotherAchievementText: {
    fontFamily: fonts.secondary[600],
    fontSize: 12,
    lineHeight: 15,
    color: colors.primary,
  },
  actionWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  discardButton: {
    width: 105,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 100,
    paddingVertical: 12,
    alignItems: 'center',
  },
  saveButton: disbled => ({
    width: 105,
    backgroundColor: disbled ? colors.border : colors.primary,
    borderWidth: 1,
    borderColor: disbled ? colors.border : colors.primary,
    borderRadius: 100,
    paddingVertical: 12,
    alignItems: 'center',
  }),
  discardButtonText: {
    fontFamily: fonts.secondary[600],
    fontSize: 16,
    lineHeight: 20,
    color: colors.primary,
  },
  saveButtonText: {
    fontFamily: fonts.secondary[600],
    fontSize: 16,
    lineHeight: 20,
    color: colors.white,
  },
});
