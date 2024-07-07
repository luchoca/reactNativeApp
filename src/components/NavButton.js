// NavButton.js

import React from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NavButton = ({ screenName, title }) => {
  const navigation = useNavigation();

  return (
    <Button
      onPress={() => navigation.navigate(screenName)}
      title={title}
      color="#000"
    />
  );
};

export default NavButton;
