import { useState } from 'react';
import './Contador.css'

function Contador() {

  //variavel 
  const [valor, setValor] = useState(0);

  //Função
  function somarMaisUm(){
    setValor(valor + 1);
  }

  console.log(valor)

  return (
    <div className="container">
        <p>O valor é: {valor}</p>
        <button onClick={somarMaisUm}>Adicionar +1</button>
    </div>
  )
}

export default Contador