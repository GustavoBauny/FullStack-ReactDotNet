import { useState } from 'react';
import './App.css';



let initialState = [
  {
    "id": 1,
    "descricao": "Primeira Atividade"
  },
  {
    "id": 2,
    "descricao": "Segunda Atividade"
  },
];

function App() {
  const [atividades, setAtividades] = useState(initialState)


  function addAtividade(e) {
    e.preventDefault();
    const atividade = {
      id: document.getElementById('id').value,
      descricao: document.getElementById('descricao').value,
    };
    setAtividades([...atividades, { ...atividade }]);
  }

  return (
    <>
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">Id</label>
          <input id="id" type="text" className="form-control" />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">Descrição</label>
          <input id="descricao" type="text" className="form-control" />
        </div>
        <hr />
        <div className="col-12">
          <button className='btn-outline-secondary'
            onClick={addAtividade}>
            + Atividade
          </button>
        </div>
      </form>

      <div className="mt-3">
        {atividades.map((ativ) => (
          <li key={ativ.id} className="list-group-item">
            {ativ.id} - {ativ.descricao}
          </li>
        ))}
      </div>
    </>
  );
}

export default App;
