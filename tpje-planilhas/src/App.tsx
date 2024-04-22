import { ChakraProvider } from '@chakra-ui/react';
import { Layout } from './Components/Layout';
import { AppContextProvider } from './Components/AppContext';
import { LoginContextProvider } from './Components/LoginContext';
import { createStorage, getStorage } from './Services/Storage';
import { BrowserRouter } from 'react-router-dom';
import { MainRoutes } from './routes';

function App() {
  !getStorage() && createStorage();

  return (
    <BrowserRouter>
      <ChakraProvider>
        <AppContextProvider>
          <LoginContextProvider>
            <Layout>
              <MainRoutes />
            </Layout>
          </LoginContextProvider>
        </AppContextProvider>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
