import { Navigate, Route, Routes } from 'react-router-dom';
import { AppWrapper } from 'src/style';
import Layout from './components/Layout/Layout';
import Home from './components/Home/style';

const App = () => {
  return (
    <AppWrapper>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
        </Route>
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </AppWrapper>
  );
};

export default App;
