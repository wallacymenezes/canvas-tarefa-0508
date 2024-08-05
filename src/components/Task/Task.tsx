import { useEffect, useState } from 'react'
import './Task.css'

function Task() {

  // criando variaveis de estado
  const [finalizada, setFinalizada] = useState<boolean>(false);
  const [task, setTask] = useState<string>("Tarefa Pendente");

  // Função de Efeito Colateral
  useEffect(()  => {

    if(finalizada === true){
      setTask("Tarefa Concluida");
    }

  }, [finalizada])

  return (
    <div className="container">
        <h1>Tarefa</h1>
        <h3>Status da Tarefa: {task}</h3>
        <button onClick={ () => { setFinalizada(true) } }>Conclua a Tarefa</button>
    </div>
  )
}

export default Task