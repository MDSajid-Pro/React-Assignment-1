
import './App.css'
import Person from './Components/Person'
import Button from './Components/Button'
import Header from './Components/Header'
import List from './Components/List'


function App() {

  let onClick = () => {
    alert("Clicked")
    
  }

  let items =["Apple","Orange","Grapes","Banana"]

  return (
    <>
      <Person name = "Md Sajid" age="22" />
      <Button text="Submit" onClick={onClick} />
      <Header title="Header" />

      <h1>My List</h1>
      <List items={items} />
    </>
  )
}

export default App
