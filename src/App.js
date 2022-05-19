import { useState } from 'react'
import './App.css'

export default function App() {
  // states
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [mensagem, setMensagem] = useState('')

  const calcularIMC = () => {
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    // lógica da aplicação
    if (imc < 18.6) {
      setMensagem("Você está abaixo do peso, Seu IMC: " + imc.toFixed(2))
    } else if (imc >= 18.6 && imc < 24.9) {
      setMensagem("Você está no peso ideal, Seu IMC: " + imc.toFixed(2))
    } else if (imc >= 24.9 && imc < 34.9) {
      setMensagem("Você está levemente acima do peso, Seu IMC: " + imc.toFixed(2))
    } else if (imc > 34.9) {
      setMensagem("Cuidado! obesidade seu IMC: " + imc.toFixed(2))
    } else {
      alert("Insira um Valor!")
    }

  };

  // corpo da página
  return (

    <div className="app">
      <h1>Calculadora de IMC</h1>
      <span>Vamos calcular seu imc!</span>


      <div className="area-input">

        <input type="text"
          placeholder="peso em (kg) - ex 90"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />

        <input type="text"
          placeholder="altura em (cm) - ex 150"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />

        <button onClick={calcularIMC}>Calcular</button>

        <h2>{mensagem}</h2>

        <a href="https://pt.wikipedia.org/wiki/%C3%8Dndice_de_massa_corporal" target="_blank" rel="noreferrer">👉 Saiba mais sobre o IMC.</a>

      </div>
    </div>
  )
}
