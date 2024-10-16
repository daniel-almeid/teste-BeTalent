import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../styles/colors';
import typography from '../styles/tipography';
import spacings from '../styles/spacing';
import shadows from '../styles/shadows';

const SearchContainer = styled.View`
  background-color: ${colors.white};
  border-radius: 30px;
  padding: ${spacings.spacingLitle8};
  flex-direction: row;
  align-items: center;
  margin-bottom: ${spacings.spacingRegular20};
  margin-top: ${spacings.spacingRegular20};
  width: 92%;
  margin-left: ${spacings.spacingRegular16};
  box-shadow: ${shadows.small};
`;

const SearchInput = styled.TextInput`
  flex: 1;
  font-size: ${typography.h3.fontSize};
  font-weight: ${typography.h3.fontWeight};
  padding-left: ${spacings.spacingRegular16};
  color: ${colors.black};
`;

interface SearchBarProps {
  onChangeText: (text: string) => void; // Manipulação do texto de pesquisa
}

const SearchBar: React.FC<SearchBarProps> = ({ onChangeText }) => {
  return (
    <SearchContainer>
      <Icon name="search" size={20} color={colors.black} />
      <SearchInput
        placeholder="Pesquisar por nome, cargo ou telefone"
        placeholderTextColor={colors.black}
        onChangeText={onChangeText} 
      />
    </SearchContainer>
  );
};

export default SearchBar;