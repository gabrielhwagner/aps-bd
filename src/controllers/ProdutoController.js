const connection = require('../database/connection');

module.exports = {

  async listarTodos(request, response) {
    try {     
      const produtos = await connection('produto').select('*');

      return response.json({produtos});
  
    } catch (err) {
      response.status(err.response.status)
        .json(err.response.data);
    }
  },

  async listar(request, response) {
    try {
      const { id } = request.params;

      const produtos = await connection('produto')
        .select('*')
        .where('id', id);

      return response.json({produtos});
  
    } catch (err) {
      response.status(err.response.status)
        .json(err.response.data);
    }
  },

  async criar(request, response) {
    try { 
      const { nome, valor } = request.body;

      await connection('produto')
        .insert({
          nome,
          valor
        });

      return response.json({ ok: true }).status(201);

    } catch (err) {
      response.status(err.response.status)
        .json(err.response.data);
    }
  },

  async deletar(request, response) {
    try { 
      const { id } = request.params;

      await connection('produto')
        .where('id', id)
        .del();

      return response.json({ ok: true });

    } catch (err) {
      response.status(err.response.status)
        .json(err.response.data);
    }
  },

  async editar(request, response) {
    try { 
      const { id } = request.params;
      const { nome, valor } = request.body;

      await connection('produto')
        .where('id', id)
        .update({
          nome,
          valor
        });

      return response.json({ ok: true }).status(200);

    } catch (err) {
      response.status(err.response.status)
        .json(err.response.data);
    }
  }
  
}