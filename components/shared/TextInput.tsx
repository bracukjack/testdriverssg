import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput as RNTextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {FontAwesome} from '@expo/vector-icons'; // Gunakan library ikon yang sesuai dengan setup Anda
import {Colors} from '@/constants/Theme';

interface TextFieldProps {
  label?: string;
  placeholder?: string;
  type?: 'text' | 'number' | 'date' | 'email' | 'password' | 'tel';
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  id?: string;
  style?: any;
  value?: string;
  onChange?: (text: string) => void;
  errorMessage?: string;
  required?: boolean;
  disabled?: boolean;
  maxLength?: number;
  paddingHorizontal?: number;
}

const TextField = ({
  label,
  placeholder,
  type = 'text',
  startIcon,
  endIcon,
  id,
  style,
  value,
  onChange,
  errorMessage,
  required = false,
  disabled = false,
  maxLength,
  paddingHorizontal = 2,
}: TextFieldProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <View style={style}>
      {label && (
        <Text style={styles.label}>
          {label} {required && <Text style={{color: 'red'}}>*</Text>}
        </Text>
      )}

      <View
        style={[styles.inputContainer, {paddingHorizontal: paddingHorizontal}]}>
        {startIcon && <View style={styles.iconContainer}>{startIcon}</View>}
        <RNTextInput
          id={id}
          secureTextEntry={type === 'password' && !isPasswordVisible}
          keyboardType={
            type === 'number'
              ? 'numeric'
              : type === 'tel'
                ? 'phone-pad'
                : 'default'
          }
          style={[styles.input]}
          placeholder={placeholder}
          value={value}
          onChangeText={text => {
            if (type === 'tel') {
              const re = /^[0-9+]+$/;
              if (text === '' || re.test(text)) {
                onChange && onChange(text);
              }
            } else {
              onChange && onChange(text);
            }
          }}
          editable={!disabled}
          maxLength={maxLength}
        />

        {type === 'password' && (
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => {
              setIsPasswordVisible(!isPasswordVisible);
            }}>
            {isPasswordVisible ? (
              <FontAwesome name="eye" size={24} color="#666" />
            ) : (
              <FontAwesome name="eye-slash" size={24} color="#666" />
            )}
          </TouchableOpacity>
        )}
        {endIcon && <View style={styles.iconContainer}>{endIcon}</View>}
      </View>
      {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: Colors.white,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 15,
    marginLeft: 10,
  },

  errorText: {
    marginTop: 5,
    fontSize: 12,
    color: 'red',
  },
  iconContainer: {
    marginHorizontal: 2,
    padding: 8,
  },
});

export default TextField;
