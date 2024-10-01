import { Route, Routes } from 'react-router';
import OldSignupForm from './components/SignupForm/SignupForm';
// import AppBar from './components/AppBar/AppBar';
import OldClock from './components/Clock/Clock';

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
      {/* <AppBar /> */}

      <Routes>
        <Route path="/signup" element={<OldSignupForm />}></Route>
        <Route path="/clock" element={<OldClock />}></Route>
      </Routes>
    </div>
  );
}
