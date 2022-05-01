import Router from './routes/router'
import './App.css';

import { AuthProvider } from "./context/AuthContext";
import { ProductProvider } from './context/ProductContext';

function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <Router />      
      </ProductProvider>
    </AuthProvider>
      
  );
}

export default App;
