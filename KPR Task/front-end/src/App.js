import Login from './login';
// import Create from './register';
import { HashRouter,Routes,Route } from "react-router-dom";
import Create from './register';

function App() {
  return (<><HashRouter>
  <Routes>
      <Route path="/" element={<Create />} />
      <Route path="/login" element={<Login />} />
  </Routes>
  </HashRouter>
  </>
  );
}

export default App;
