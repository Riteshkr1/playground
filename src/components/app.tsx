import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
export interface IAppProps {}

export default function IApp() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div style={{ padding: '20px' }}>
      <h1>Current Theme: {theme} 🌗</h1>
      <button className="button" onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
}