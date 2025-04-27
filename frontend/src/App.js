import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [livros, setLivros] = useState([]);
  const [livroAtual, setLivroAtual] = useState({ titulo: "", autor: "", ano: "" });
  const [modoEdicao, setModoEdicao] = useState(false);

  useEffect(() => {
    buscarLivros();
  }, []);

  const buscarLivros = async () => {
    try {
      const resposta = await axios.get("http://localhost:3001/api/livros");
      setLivros(resposta.data);
    } catch (error) {
      console.error("Erro ao buscar livros:", error);
    }
  };

  const adicionarLivro = async () => {
    if (!livroAtual.titulo || !livroAtual.autor || !livroAtual.ano) {
      alert("Preencha todos os campos!");
      return;
    }
    try {
      await axios.post("http://localhost:3001/api/livros", livroAtual);
      buscarLivros();
      setLivroAtual({ titulo: "", autor: "", ano: "" });
    } catch (error) {
      console.error("Erro ao adicionar livro:", error);
      alert("Erro ao adicionar livro.");
    }
  };

  const atualizarLivro = async () => {
    if (!livroAtual.titulo || !livroAtual.autor || !livroAtual.ano) {
      alert("Preencha todos os campos!");
      return;
    }
    try {
      await axios.put(`http://localhost:3001/api/livros/${livroAtual.id}`, livroAtual);
      buscarLivros();
      setLivroAtual({ titulo: "", autor: "", ano: "" });
      setModoEdicao(false);
    } catch (error) {
      console.error("Erro ao atualizar livro:", error);
      alert("Erro ao atualizar livro.");
    }
  };

  const deletarLivro = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/livros/${id}`);
      buscarLivros();
    } catch (error) {
      console.error("Erro ao deletar livro:", error);
      alert("Erro ao deletar livro.");
    }
  };

  const selecionarLivro = (livro) => {
    setLivroAtual(livro);
    setModoEdicao(true);
  };

  return (
    <div className="App">
      <h1>Gerenciador de Livros</h1>

      <div className="formulario">
        <input
          type="text"
          placeholder="Título"
          value={livroAtual.titulo}
          onChange={(e) => setLivroAtual({ ...livroAtual, titulo: e.target.value })}
        />
        <input
          type="text"
          placeholder="Autor"
          value={livroAtual.autor}
          onChange={(e) => setLivroAtual({ ...livroAtual, autor: e.target.value })}
        />
        <input
          type="text"
          placeholder="Ano"
          value={livroAtual.ano}
          onChange={(e) => setLivroAtual({ ...livroAtual, ano: e.target.value })}
        />

        {modoEdicao ? (
          <button onClick={atualizarLivro}>Atualizar Livro</button>
        ) : (
          <button onClick={adicionarLivro}>Adicionar Livro</button>
        )}
      </div>

      <div className="lista">
        {livros.map((livro) => (
          <div key={livro.id} className="livro-item">
            <h3>{livro.titulo}</h3>
            <p>Autor: {livro.autor}</p>
            <p>Ano: {livro.ano}</p>
            <button onClick={() => selecionarLivro(livro)}>Editar</button>
            <button onClick={() => deletarLivro(livro.id)}>Deletar</button>
          </div>
        ))}
      </div>

      <footer>
        <p>Desenvolvido por Rafaella Somoza</p>
      </footer>
    </div>
  );
}

export default App;
