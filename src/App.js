import Router from './routes/router'
import './App.css';

import { AuthProvider } from "./context/AuthContext";
import Register from './pages/Register'

function App() {
  return (
    <AuthProvider>
      <Router />      
    </AuthProvider>
      
  );
}

export default App;
