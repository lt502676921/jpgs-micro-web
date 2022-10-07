import { useEffect } from 'react'
import { getMain } from '../../utils/main'
import '../../App.css'

function Index() {
  useEffect(() => {
    const main = getMain()
    if (main) {
      main.appInfo.header.changeHeaderStatus(false)
      main.appInfo.nav.changeNavStatus(false)
    }
  }, [])

  return (
    <div className="App">
      <header className="App-header">Product Login</header>
    </div>
  )
}

export default Index
