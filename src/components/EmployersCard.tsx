import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../styles/colors';
import typography from '../styles/tipography';
import spacings from '../styles/spacing';
import shadows from '../styles/shadows';

interface EmployersCardProps {
  name: string;
  photo: string;
  job: string; 
  admissionDate: string; 
  phone: string; 
}

const CardContainer = styled.View`
  flex-direction: column;
  padding: ${spacings.spacingRegular16};
  border-bottom-width: 1px;
  border-bottom-color: ${colors.gray20};
  margin-bottom: ${spacings.spacingRegular16};
  box-shadow: ${shadows.medium};
  border-radius: 15px;
`;

const EmployersPhoto = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

const EmployersName = styled.Text`
  margin-left: ${spacings.spacingLitle8};
  color: ${colors.black};
  font-size: ${typography.h3.fontSize};
  font-weight: ${typography.h3.fontWeight};
`;

const DetailsContainer = styled.View`
  margin-top: ${spacings.spacingLitle8};
`;

const DetailRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${spacings.spacingLitle8};
`;

const DetailLabel = styled.Text`
  font-family: ${typography.fontFamily};
  font-size: ${typography.h3.fontSize};
  font-weight: ${typography.h1.fontWeight};
`;

const DetailValue = styled.Text`
  font-size: ${typography.h3.fontSize};
`;

const EmployersCard: React.FC<EmployersCardProps> = ({ name, photo, job, admissionDate, phone }) => {
  const [isOpen, setIsOpen] = useState(false); // Define um estado para controlar a visibilidade dos detalhes

  const toggleDetails = () => {
    setIsOpen(!isOpen); // Alterna o estado 'isOpen' para mostrar ou esconder os detalhes
  };

  return (
    <CardContainer>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <EmployersPhoto source={{ uri: photo }} />
          <EmployersName>{name}</EmployersName>
        </View>
        <Icon name={isOpen ? 'chevron-up' : 'chevron-down'} size={30} color={colors.bluePrimary} onPress={toggleDetails} />
      </View>
      {isOpen && ( // Renderiza o conteúdo adicional quando isOpen é true
        <DetailsContainer>
          <DetailRow>
            <DetailLabel>Cargo:</DetailLabel>
            <DetailValue>{job}</DetailValue>
          </DetailRow>
          <DetailRow>
            <DetailLabel>Data de admissão:</DetailLabel>
            <DetailValue>{new Date(admissionDate).toLocaleDateString()}</DetailValue>
          </DetailRow>
          <DetailRow>
            <DetailLabel>Telefone:</DetailLabel>
            <DetailValue>{phone}</DetailValue>
          </DetailRow>
        </DetailsContainer>
      )}
    </CardContainer>
  );
};

export default EmployersCard;
