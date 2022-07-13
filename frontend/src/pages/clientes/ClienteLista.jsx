import React, { useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import TitlePage from '../../components/TitlePage'

const clientes = [
  {
    id: 1,
    nome: 'Cliente 1',
    responsavel: 'Nome 1',
    contato: '99999999999',
    situacao: 'Ativa'
  },
  {
    id: 2,
    nome: 'Cliente 2',
    responsavel: 'Nome 2',
    contato: '99999999999',
    situacao: 'Ativa'
  },
  {
    id: 3,
    nome: 'Cliente 3',
    responsavel: 'Nome 3',
    contato: '99999999999',
    situacao: 'Em Análise'
  },
  {
    id: 4,
    nome: 'Cliente 4',
    responsavel: 'Nome 4',
    contato: '99999999999',
    situacao: 'Desativado'
  },
  {
    id: 5,
    nome: 'Cliente 5',
    responsavel: 'Nome 5',
    contato: '99999999999',
    situacao: 'Ativa'
  },
]

export default function ClienteLista() {
  const history = useHistory();
  const [termoBusca, setTermoBusca] = useState('');

  const handleInputChange = (e) => {
      setTermoBusca(e.target.value);
  };

  const clientesFiltrados = clientes.filter((cliente) => {
       return (
          Object.values(cliente)
          .join(' ')
          .toLowerCase()
          .includes(termoBusca.toLowerCase())
       )
  }); 

  const novoCliente = () => {
    history.push('/cliente/detalhe');
  }

  return (
    <>
      <TitlePage title="Cliente Lista">
          <Button variant='outline-secondary' onClick={novoCliente}>
            <i className='fas fa-plus me-2'></i>
            Novo Cliente
          </Button>
      </TitlePage>
      <InputGroup className="mt-3 mb-3">
          <InputGroup.Text>
            Buscar:
          </InputGroup.Text>
          <Form.Control
            onChange={handleInputChange}
            placeholder='Pesquise aqui'
          />
      </InputGroup>
        <table className="table table-striped table-hover">
          <thead className='table-dark mt-3'>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nome</th>
              <th scope="col">Responsável</th>
              <th scope="col">Contato</th>
              <th scope="col">Situação</th>
              <th scope="col">Opções</th>
            </tr>
          </thead>
          <tbody>
            {clientesFiltrados.map((cliente) => (
            <tr key={cliente.id}>
              <td>{cliente.id}</td>
              <td>{cliente.nome}</td>
              <td>{cliente.responsavel}</td>
              <td>{cliente.contato}</td>
              <td>{cliente.situacao}</td>
              <td>
                  <div>
                      <button 
                      className='btn btn-sm btn-outline-primary me-2' 
                      onClick={() => history.push(
                          `/cliente/detalhe/${cliente.id}`
                      )
                    }
                  >
                        <i className='fas fa-user-edit me-2'></i>
                        Editar
                      </button>
                      <button className='btn btn-sm btn-outline-danger me-2'>
                        <i className='fas fa-user-times me-2'></i>
                        Desativar
                      </button>
                  </div>
              </td>
            </tr>
            ))}
          </tbody>
        </table>
    </>
  )
}
