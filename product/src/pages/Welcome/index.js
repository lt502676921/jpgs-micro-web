import '../../App.css'
import { Link } from 'react-router-dom'

const Index = () => {
  return (
    <div className="App">
      <header className="App-header">
        Welcome to Product Center
        <Link to="rule">Rule</Link>
        <Link to="category">Category</Link>
      </header>
    </div>
  )
}

export default Index
