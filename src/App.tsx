import Card from "./components/Card/Card"
import Contador from "./components/Contador/Contador"
import Task from "./components/Task/Task"
import RendCond from "./components/rend/RendCond"

function App() {
  return (
    <>
      <Card titulo="React" descricao="Biblioteca do Javascript"/>
      <Card titulo="Spring" descricao="Framework do Java"/>

      <Contador/>

      <Task/>

      <RendCond/>
    </>
  )
}

export default App
