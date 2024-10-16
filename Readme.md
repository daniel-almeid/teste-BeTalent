# Teste BeTalent

Um aplicativo simples para gerenciar informações de empregados. O aplicativo permite buscar, exibir e filtrar empregados com base em seus nomes, cargos e números de telefone.

---

## Funcionalidades

- **Listagem de Empregados:** 
  - Visualize uma lista de empregados com suas informações básicas.
  
- **Busca:** 
  - Pesquise empregados por nome, cargo ou telefone.
  
- **Detalhes:** 
  - Veja mais informações sobre cada empregado ao expandir o cartão.

---

## Tecnologias Utilizadas

- **React Native:** 
  - Framework para construção de aplicativos móveis.

- **TypeScript:** 
  - Para tipagem estática e melhor organização do código.

- **Axios:** 
  - Para requisições HTTP à API.

- **Styled Components:** 
  - Para estilização de componentes.

---

## API

O aplicativo faz requisições para uma API em execução localmente. Antes de executar o aplicativo, verifique se a API está rodando e ajuste o IP na seguinte URL conforme necessário para o seu ambiente:

### Substituição do IP

Para ajustar o IP da API, navegue até o arquivo `src/services/api.tsx` e substitua `<http://192.168.1.4>` pelo IP local da sua máquina, mantendo a porta 3000. A URL deve ter o seguinte formato:

---

Você pode encontrar o repositório que contém a API aqui: [desafio-mobile](https://github.com/BeMobile/desafio-mobile).

---

## Como Executar

1. Clone o repositório do aplicativo.
2. Clone também o repositório da API.
3. Navegue até o diretório do projeto do aplicativo.
4. Instale as dependências:
   ```bash
   npm install
5. Navegue até o diretório da API e execute o seguinte comando no terminal para iniciar o servidor JSON:
    ```bash
    npx json-server --watch database.json
6. Volte para o diretório do aplicativo e execute: 
    ```bash
    npm start

---
## Uso

O aplicativo pode ser utilizado através do Expo Go ou em um simulador Android.

- Expo Go
    - Para usar com o Expo Go, escaneie o QR code exibido no terminal ou na página do navegador após executar npm start.

- Simulador Android
    - Para utilizar em um simulador Android, certifique-se de que o Android Studio está configurado corretamente e inicie o emulador antes de executar o aplicativo.
