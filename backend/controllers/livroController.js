const connection = require('../db');

// Listar livros
exports.listarLivros = (req, res) => {
  connection.query('SELECT * FROM livros', (err, results) => {
    if (err) return res.status(500).json({ error: 'Erro ao buscar livros' });
    res.json(results);
  });
};

// Adicionar livro
exports.adicionarLivro = (req, res) => {
  const { titulo, autor, ano } = req.body;
  if (!titulo || !autor || !ano) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
  }
  connection.query(
    'INSERT INTO livros (titulo, autor, ano) VALUES (?, ?, ?)',
    [titulo, autor, ano],
    (err, results) => {
      if (err) return res.status(500).json({ error: 'Erro ao adicionar livro' });
      res.status(201).json({ message: 'Livro adicionado', id: results.insertId });
    }
  );
};

// Atualizar livro
exports.atualizarLivro = (req, res) => {
  const { id } = req.params;
  const { titulo, autor, ano } = req.body;
  if (!titulo || !autor || !ano) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
  }
  connection.query(
    'UPDATE livros SET titulo = ?, autor = ?, ano = ? WHERE id = ?',
    [titulo, autor, ano, id],
    (err) => {
      if (err) return res.status(500).json({ error: 'Erro ao atualizar livro' });
      res.json({ message: 'Livro atualizado' });
    }
  );
};

// Deletar livro
exports.removerLivro = (req, res) => {
  const { id } = req.params;
  connection.query('DELETE FROM livros WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).json({ error: 'Erro ao deletar livro' });
    res.json({ message: 'Livro removido' });
  });
};
