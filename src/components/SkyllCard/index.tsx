import React, {useState, useRef, useEffect} from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {styles} from './styles';

export interface ISkill {
  id: string;
  name: string;
}
interface ISkyllProps {
  skill: ISkill;
  removeSkill: (id: string) => void;
  editSkill: (skill: ISkill) => void;
}

export const SkyllCard: React.FC<ISkyllProps> = ({
  skill,
  removeSkill,
  editSkill,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [nameEdit, setNameEdit] = useState(skill.name);
  const textInputRef = useRef<TextInput>(null);

  function handleStartEditing() {
    setIsEdit(true);
  }

  function handleCancelEditing() {
    setNameEdit(skill.name);
    setIsEdit(false);
  }

  function handleSubmitEditing() {
    const skillEdited = {
      id: skill.id,
      name: nameEdit,
    };
    editSkill(skillEdited);
    setIsEdit(false);
  }

  function handleChangeCursorForEditing() {
    if (textInputRef.current) {
      if (isEdit) {
        textInputRef.current.focus();
      } else {
        textInputRef.current.blur();
      }
    }
  }
  useEffect(handleChangeCursorForEditing, [isEdit]);
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity style={styles.buttonContainer} activeOpacity={0.7}>
          <TextInput
            style={styles.inputTextTitle}
            value={nameEdit}
            onChangeText={setNameEdit}
            ref={textInputRef}
            editable={isEdit}
            onSubmitEditing={handleSubmitEditing}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.iconsContainer}>
        {isEdit ? (
          <TouchableOpacity activeOpacity={0.7} onPress={handleCancelEditing}>
            <Icon name="x" size={24} color="#b2b2b2" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity activeOpacity={0.7} onPress={handleStartEditing}>
            <Icon name="edit-3" size={24} color="#b2b2b2" />
          </TouchableOpacity>
        )}

        <View style={styles.divisorIcons} />

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            removeSkill(skill.id);
          }}>
          <Icon name="trash-2" size={24} color="#b2b2b2" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
