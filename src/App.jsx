import { useState } from "react"
import {TodoList} from './components/TodoList'

function App() {
  const [isLogged, setIsLogged] = useState(false)

  const doLogin = () => setIsLogged(true)
  const undoLogin = () => setIsLogged(false)

  return (
    <>
    {isLogged ? <div>Seja Bem Vindo, Fulano de tal! <a href="#" onClick={undoLogin}>Deslogue aqui</a></div> : <div>Faça seu login, <a href="#" onClick={doLogin}>clique aqui</a>!</div>}
    <TodoList/>
    </>
  )
}

export default App
