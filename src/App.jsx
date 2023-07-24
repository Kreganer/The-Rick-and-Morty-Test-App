import { Navigate, Route, Routes } from 'react-router-dom';
import { AppWrapper } from 'src/style';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Characters from './components/Characters/Characters';

const App = () => {
  return (
    <AppWrapper>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
        </Route>
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </AppWrapper>
  );
};

export default App;
