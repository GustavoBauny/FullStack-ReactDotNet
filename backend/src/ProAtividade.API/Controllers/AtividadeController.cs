using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ProAtividade.API.Data;
using ProAtividade.API.Models;

namespace ProAtividade.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AtividadeController : ControllerBase
    {
        private readonly DataContext context;

        public AtividadeController(DataContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public IEnumerable<Atividade> Get()
        {
            return context.Atividades;
        }

        [HttpGet("{id}")]
        public Atividade Get(int id)
        {
            return context.Atividades.FirstOrDefault(ati => ati.Id == id);
        }

        [HttpPost]
        public IEnumerable<Atividade> Post(Atividade atividade)
        {
            context.Atividades.Add(atividade);
            if (context.SaveChanges() > 0)
                return context.Atividades;
            else        
                throw new Exception("Você não conseguiu adicionar uma atividade");
        }

        [HttpPut("{id}")]
        public Atividade Put(int id, Atividade atividade)
        {
            if (atividade.Id != id) throw new Exception("Você está tentando atualizar a atividade errada");

            context.Update(atividade);
            if (context.SaveChanges() > 0)
                return context.Atividades.FirstOrDefault(ativ => ativ.Id == id);
            else    
                return new Atividade();
        }

        [HttpDelete("{id}")]
        public bool Delete(int id)
        {
           var atividade = context.Atividades.FirstOrDefault(ativ => ativ.Id == id);
           if (atividade == null)
                throw new Exception("Você está tentando deletar uma atividade que não existe!");
            
            context.Remove(atividade);

            return context.SaveChanges() > 0;
        }
    }
}
