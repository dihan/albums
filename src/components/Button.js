import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

// onPress={() => console.log(title)}
// props.children to retrive text (children) of Button component
const Button = ({ onPress, children }) => {
  const {buttonStyle, textStyle} = styles;
  return (
    <TouchableOpacity onPress={ onPress } style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    padding: 10,
    backgroundColor: '#fff',
    flex: 1,
    alignSelf: 'stretch',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginHorizontal: 5,
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingVertical: 10,
  }
};

export default Button;
