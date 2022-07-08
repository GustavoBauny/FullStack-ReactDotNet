import './App.css';
import Atividade from "./pages/atividades/Atividade";
import { Switch, Route } from 'react-router-dom';

export default function App() {
    return (
      <Switch>
        <Route  path='/' exact component={Home} />
        <Route  path='/atividades' component={Atividade} />
        <Route  path='/clientes' component={Cliente} />
      </Switch>
    );
}

const Cliente = () => (
  <div>
      <h1>Cliente</h1>
  </div>
);

const Home = () => (
    <div>
        <h1>Home</h1>
    </div>
);

