import { Route, Routes } from 'react-router';
import OldSignupForm from './components/SignupForm/SignupForm';

const containerStyles = {
  maxWidth: 1170,
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: 15,
  paddingRight: 15,
};

export default function App() {
  return (
    <div style={containerStyles}>
      <Routes>
        <Route path="*" element={<OldSignupForm />}></Route>
      </Routes>
    </div>
  );
}
