import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  <nav>
    <NavLink to="/signup">Форма</NavLink>
    <NavLink to="/colorpicker">Колорпікер</NavLink>
    <NavLink to="/counter">Лічильник</NavLink>
    <NavLink to="/clock">Годинник</NavLink>
    <NavLink to="/pokemon">Покемони з хуками</NavLink>
    <NavLink to="/skip-first-render">Пропуск першого рендеру</NavLink>
    <NavLink to="notes">useMemo</NavLink>
  </nav>;
};
