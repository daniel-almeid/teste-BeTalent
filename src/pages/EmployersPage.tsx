import React, { useEffect, useState } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import SearchBar from '../components/SearchBar';
import EmployersCard from '../components/EmployersCard';
import Header from '../components/Header';
import colors from '../styles/colors';
import { getEmployees, Employee } from '../services/api';

const EmployersContainer = styled.View`
  flex: 1;
  background-color: ${colors.grayBackground};
`;

const EmployersPage = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    const loadEmployees = async () => {
      try {
        const fetchedEmployees = await getEmployees(); // Consumindo a API
        const employeesWithNumericId = fetchedEmployees.map(emp => ({
          ...emp,
          id: Number(emp.id), // Converte o ID do empregado para um número
        }));
        setEmployees(employeesWithNumericId); // Armazena todos os empregados
        setFilteredEmployees(employeesWithNumericId);
      } catch (error) {
        console.error('Erro ao carregar os empregados:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadEmployees();
  }, []);

  // Função para pesquisar/filtrar empregados
  const handleSearch = (query: string) => {
    setSearchQuery(query); 
    if (query.trim() === '') {
      setFilteredEmployees(employees); // Exibe todos os empregados se a pesquisa estiver vazia
    } else {
      // Filtra empregados com base no nome, cargo ou telefone
      const results = employees.filter(employee =>
        employee.name.toLowerCase().includes(query.toLowerCase()) ||
        employee.job.toLowerCase().includes(query.toLowerCase()) ||
        employee.phone.includes(query)
      );
      setFilteredEmployees(results);
    }
  };

  if (isLoading) {
    return <ActivityIndicator size="large" color={colors.bluePrimary} />;
  }

  return (
    <EmployersContainer>
      <Header />
      <SearchBar onChangeText={handleSearch} />
      <FlatList
        data={filteredEmployees}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <EmployersCard
            name={item.name}
            photo={item.image}
            job={item.job}
            admissionDate={item.admission_date}
            phone={item.phone}
          />
        )}
      />
    </EmployersContainer>
  );
};

export default EmployersPage;
