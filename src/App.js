import { useState } from 'react';
import './App.css';



let initialState = [
  {
    id: 1,
    prioridade: '2',
    titulo: "Título",
    descricao: "Primeira Atividade",
  },
  {
    id: 2,
    prioridade: '2',
    titulo: "Título",
    descricao: "Segunda Atividade",
  },
];

function App() {
  const [atividades, setAtividades] = useState(initialState)


  function addAtividade(e) {
    e.preventDefault();
    const atividade = {
      id: document.getElementById('id').value,
      prioridade: document.getElementById('id').value,
      titulo: document.getElementById('descricao').value,
      descricao: document.getElementById('descricao').value,
    };
    setAtividades([...atividades, { ...atividade }]);
  }

  function prioridadeLabel(param) {
    switch (param) {
      case '1':
        return "Baixa";
      case '2':
        return "Regular";
      case '3':
        return "Alta";
      default:
        return "Não definido";
    }
  }

  function prioridadeStyle(param) {
    switch (param) {
      case '1':
        return "smile";
      case '2':
        return "meh";
      case '3':
        return "frown";
      default:
        return "Não definido";
    }
  }

  return (
    <>
      <form className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Id</label>
          <input id="id" type="text" className="form-control" />
        </div>
        <div className="col-md-6">
          <label className="form-label">Prioridade</label>
          <select id="prioridade" className="form-select">
            <option defaultValue="0">Selecionar...</option>
            <option value="1">Baixa</option>
            <option value="2">Regular</option>
            <option value="3">Alta</option>
          </select>
        </div>
        <div className="col-md-6">
          <label className="form-label">Título</label>
          <input id="titulo" type="text" className="form-control" />
        </div>
        <div className="col-md-6">
          <label className="form-label">Descrição</label>
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
          <div key={ativ.id} className="card mb-1 shadow-sm" >
            <div className="card-body">
              <div className='.d-flex.justif-content-between'>
                <h5 className='card-title'>
                  <span className="badge bg-secondary me-2">{ativ.id}</span>
                  - {ativ.titulo}
                </h5>
                <h6>
                  Prioridade:
                  <span className='ms-1 text-black'>
                    <i className={'me-1 far fa-' + prioridadeStyle(ativ.prioridade)}></i>
                    {prioridadeLabel(ativ.prioridade)}
                  </span>
                </h6>
              </div>
              <p className="card-text">{ativ.descricao}</p>
              <div className='d-flex.justify-content-end'>
                <button className="btn btn-sm btn-outline-primary me-2">
                  <i className='fas fa-pen me-2'></i>
                  Editar
                </button>
                <button className="btn btn-sm btn-outline-danger">
                  <i className='fas fa-trash me-2'></i>
                  Deletar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
