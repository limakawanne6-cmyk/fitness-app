import { useState } from 'react'

export default function App() {
  const [peso, setPeso] = useState('')
  const [historico, setHistorico] = useState([])

  function adicionarPeso() {
    if (!peso) return
    setHistorico([...historico, { semana: historico.length + 1, peso }])
    setPeso('')
  }

  return (
    <div style={{ padding: 20, fontFamily: 'Arial' }}>
      <h1>Meu Sistema Fitness</h1>
      <h2>Registro de Peso</h2>
      <input 
        type="number"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
        placeholder="Peso atual"
      />
      <button onClick={adicionarPeso}>Salvar</button>

      <ul>
        {historico.map((item, i) => (
          <li key={i}>Semana {item.semana}: {item.peso}kg</li>
        ))}
      </ul>
    </div>
  )
}