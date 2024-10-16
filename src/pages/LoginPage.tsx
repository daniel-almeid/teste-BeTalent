import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context'; // Importando SafeAreaView
import colors from '../styles/colors';
import typography from '../styles/tipography';

const LoginPageContainer = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${colors.bluePrimary};
`;

const LogoText = styled.Text`
  font-family: ${typography.fontFamily};
  font-size: ${typography.h1.fontSize};
  font-weight: ${typography.h1.fontWeight};
  color: ${colors.white};
`;

const LoginPage = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Employers');
    }, 3000); 

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <LoginPageContainer>
      <LogoText>BeTalent</LogoText>
    </LoginPageContainer>
  );
};

export default LoginPage;
