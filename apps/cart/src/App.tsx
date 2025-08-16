import './App.css'
import AddToCartBtn from './components/AddToCart'

function App() {

  return (
    <>
      < AddToCartBtn product={{id: 1, title:"name", price: 1, image: "string"}}/>
      {/* < AddToCartBtn inCart={true} quantity={10}/> */}
    </>
  )
}

export default App
