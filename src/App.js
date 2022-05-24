import './App.css';
import { ThemeContext } from './context/ThemeContext';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import NewsPage from './pages/NewsPage';
import ThemesPage from './pages/ThemesPage';
import { BrowserRouter } from 'react-router-dom';
import { useThemee } from './hooks/theme.hook';

function App() {
  let { theme, setTheme } = useThemee();
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <BrowserRouter>
        <Switch>
          <Route path='/news'>
            <NewsPage/>
          </Route>
          <Route path='/themes'>
            <ThemesPage />
          </Route>
          <Redirect to='/news' />
        </Switch>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
