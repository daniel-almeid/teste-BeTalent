import React from 'react';
import styled from 'styled-components/native';
import colors from '../styles/colors';
import typography from '../styles/tipography';
import spacings from '../styles/spacing';
import { SafeAreaView } from 'react-native-safe-area-context';

const HeaderContainer = styled.View`
  height: 50px;
  flex-direction: row;
  align-items: center;
  background-color: ${colors.white};
  width: 100%;
  padding-left: ${spacings.spacingRegular16};
`;

const LogoText = styled.Text`
  color: ${colors.black};
  font-size: ${typography.h1.fontSize};
  font-weight: ${typography.h1.fontWeight};
  padding-left: 25px;
`;

const BoldText = styled.Text`
  font-weight: ${typography.h1.fontWeight};
`;

const Header: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 0 }}>
      <HeaderContainer >
        <LogoText>
          <BoldText>Be</BoldText>Talent
        </LogoText>
      </HeaderContainer>
    </SafeAreaView>
  );
};

export default Header;
