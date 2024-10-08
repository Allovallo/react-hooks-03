import { Routes, Route } from 'react-router';
import AppBar from './components/AppBar/AppBar.js';
import SignupForm from './components/SignupForm/SignupForm.js';
import ColorPicker from './components/ColorPicker/ColorPicker.js';
import Counter from './components/Counter/Counter.js';
import Clock from './components/Clock/Clock.js';
import PokemonView from './views/PokemonView.js';
import SkipEffectOnFirstRender from './components/SkipEffectOnFirstRender.js';
import Counter2 from './components/Counter2/Counter2.js';

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
        <Route path="/clock" element={<Clock />}></Route>
        <Route path="/counter" element={<Counter />}></Route>
        <Route path="/counter2" element={<Counter2 />}></Route>
        <Route path="/signup" element={<SignupForm />}></Route>
        <Route path="/colorpicker" element={<ColorPicker options={colorPickerOptions} />}></Route>
        <Route path="/pokemon" element={<PokemonView />}></Route>
        <Route path="/skip-first-render" element={<SkipEffectOnFirstRender />}></Route>
      </Routes>
    </div>
  );
}
