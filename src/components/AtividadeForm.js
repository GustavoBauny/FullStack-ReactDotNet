import React from 'react'

export default function AtividadeForm(props) {
    return (
        <form className="row g-3">
            <div className="col-md-6">
                <label className="form-label">Id</label>
                <input id="id" type="text" className="form-control border-secondary" readOnly
                    value={Math.max.apply(Math, props.atividades.map(item => item.id)) + 1}
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
                    onClick={props.addAtividade}>
                    + Atividade
                </button>
            </div>
        </form>
    )
}