import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.1.4:3000/', 
});

export interface Employee {
  id: number;
  name: string;
  job: string;
  admission_date: string;
  phone: string;
  image: string;
}

// Interface para a resposta da API
interface EmployeeResponse {
  employees: Employee[];
}

// Função assíncrona para buscar os dados dos empregados
export const getEmployees = async (): Promise<Employee[]> => {
    try {
      const response = await api.get<Employee[]>('/employees'); 
      console.log('Resposta da API:', response.data); 
      return response.data; 
    } catch (error) {
      console.error('Erro ao buscar empregados:', error);
      throw error;
    }
  };
  