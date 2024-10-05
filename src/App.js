import { Routes, Route } from 'react-router';

import AppBar from './components/AppBar/AppBar.js';
import OldSignupForm from './components/SignupForm/SignupForm.js';
import OldColorPicker from './components/ColorPicker/ColorPicker.js';
import OldCounter from './components/Counter/Counter.js';
import OldClock from './components/Clock/Clock.js';
import PokemonView from './views/PokemonView.js';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

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
      <AppBar />

      <Routes>
        <Route path="/clock" element={<OldClock />}></Route>
        <Route path="/counter" element={<OldCounter />}></Route>
        <Route path="/signup" element={<OldSignupForm />}></Route>
        <Route
          path="/colorpicker"
          element={<OldColorPicker options={colorPickerOptions} />}
        ></Route>
        <Route path="/pokemon" element={<PokemonView />}></Route>
      </Routes>
    </div>
  );
}
