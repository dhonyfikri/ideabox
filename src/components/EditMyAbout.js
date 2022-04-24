import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../utils/ColorsConfig/Colors';
import fonts from '../utils/FontsConfig/Fonts';
import Gap from './Gap';

const EditMyAbout = ({text, onSavePress = () => {}, onDiscardPress}) => {
  const [newText, setNewText] = useState(text !== undefined ? text : '');

  return (
    <>
      <Text style={styles.title}>
        Descrioption<Text style={{...styles.title, color: 'red'}}>*</Text>
      </Text>
      <Gap height={8} />
      <TextInput
        multiline
        textAlignVertical="top"
        style={styles.board}
        onChangeText={text => setNewText(text)}>
        <Text style={{lineHeight: 22}}>{newText}</Text>
      </TextInput>
      <Gap height={24} />
      <View style={styles.actionWrapper}>
        <TouchableOpacity style={styles.discardButton} onPress={onDiscardPress}>
          <Text numberOfLines={1} style={styles.discardButtonText}>
            Discard
          </Text>
        </TouchableOpacity>
        <Gap width={16} />
        <TouchableOpacity
          style={styles.saveButton}
          onPress={() => onSavePress(newText)}>
          <Text numberOfLines={1} style={styles.saveButtonText}>
            Save
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default EditMyAbout;

const styles = StyleSheet.create({
  title: {
    fontFamily: fonts.secondary[600],
    fontSize: 14,
    lineHeight: 17,
    color: colors.text.primary,
  },
  board: {
    height: 175,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    backgroundColor: colors.white,
    padding: 12,
    fontFamily: fonts.primary[400],
    fontSize: 12,
    color: colors.text.tertiary,
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
  saveButton: {
    width: 105,
    backgroundColor: colors.primary,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 100,
    paddingVertical: 12,
    alignItems: 'center',
  },
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
