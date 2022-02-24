import Button from "./Button"


const Header = () => {
    const onClick= () => {
        console.log('clicked')
    }
  return (
    <header className='header'>
        <h1>To-do-list</h1>
        <Button color='grey' text='Add' onClick={onClick} />
    </header>
  )
}

export default Header