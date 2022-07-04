import { useState } from 'react';
import './App.css';



let initialState = [
  {
    id: 1,
    prioridade: '1',
    titulo: "Título",
    descricao: "Primeira Atividade",
  },
  {
    id: 2,
    prioridade: '2',
    titulo: "Título",
    descricao: "Segunda Atividade",
  },
  {
    id: 3,
    prioridade: '3',
    titulo: "Título",
    descricao: "Terceira Atividade",
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

  function deletarAtividade(id) {
    const atividadesFiltradas = atividades.filter(atividade => atividade.id !== id);
    setAtividades([...atividadesFiltradas]);
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

  function prioridadeStyle(param, icone) {
    switch (param) {
      case '1':
        return icone ? "smile" : 'success';
      case '2':
        return icone ? "meh" : 'warning';
      case '3':
        return icone ? "frown" : 'danger';
      default:
        return "Não definido";
    }
  }

  return (
    <>
      <form className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Id</label>
          <input id="id" type="text" className="form-control border-secondary" readOnly
            value={Math.max.apply(Math, atividades.map(item => item.id)) + 1}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Prioridade</label>
          <select id="prioridade" className="form-select border-secondary">
            <option defaultValue="0">Selecionar...</option>
            <option value="1">Baixa</option>
            <option value="2">Regular</option>
            <option value="3">Alta</option>
          </select>
        </div>
        <div className="col-md-6">
          <label className="form-label">Título</label>
          <input id="titulo" type="text" placeholder='Digite o Título' className="form-control border-secondary" />
        </div>
        <div className="col-md-6">
          <label className="form-label">Descrição</label>
          <input id="descricao" type="text" placeholder='Digite a Descrição' className="form-control border-secondary" />
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
          <div key={ativ.id} className="card mb-1 shadow-sm border-secondary">
            <div className="card-body">
              <div className='.d-flex.justif-content-between'>
                <h5 className='card-title'>
                  <span className="badge bg-secondary me-2">{ativ.id}</span>
                  - {ativ.titulo}
                </h5>
                <h6>
                  Prioridade:
                  <span className={'ms-1 text-' + prioridadeStyle(ativ.prioridade)}>
                    <i className={'me-1 far fa-' + prioridadeStyle(ativ.prioridade, true)}></i>
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
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => deletarAtividade(ativ.id)}
                >
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
