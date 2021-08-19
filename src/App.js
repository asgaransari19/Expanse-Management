import './App.css';
import Addmembers from './pages/Addmembers';
import Credit from './pages/Credit';
import Dashboard from './pages/Dashboard';
import Shoping from './pages/Shoping';
import Header from './componants/Header'
import Navbar from './componants/Navbar';
import Debit from './pages/Debit';
import Paydue from './pages/Paydue';
import { pagePaths } from '././utils/constant';
import HomePage from '././pages/HomePage';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'



function App() {
  return (
    <HomePage />


  )
}

export default App;
