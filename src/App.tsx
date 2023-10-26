import './App.css'
import {Link} from "react-router-dom";

function App() {

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Link to="/home/pokemon-list" className="button">Hola</Link>
      </main>
    </>
  )
}

export default App
