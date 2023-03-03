import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const theme = createTheme({
  palette: {
    primary: {
      light: '#d2b696',
      main: '#c7a47c',
      dark: '#8b7256',
      contrastText: '#fff',
    },
    secondary: {
      light: '#96b2d2',
      main: '#7c9fc7',
      dark: '#566f8b',
      contrastText: '#fff',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
