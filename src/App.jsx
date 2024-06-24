import Header from './Header.jsx' 
import Footer from './Footer.jsx' 
import Food from "./Food.jsx" 
import Card from "./Card.jsx" 
import Button from "./Button.jsx" 
import Student from "./Student.jsx" 
import UserGreeting from './UserGreeting.jsx' 
import List from "./List.jsx"





function App() {

  const fruits = [
    {id: 0, name: "apple", calories: 30},
  ];
  const vegetables = [
    {id: 1, name: "carrots", calories: 25 }, 
    {id: 2, name: "corn", calories: 63}]; 

  return(
    <>
      <Header></Header>
      <UserGreeting isLoggedIn={true} username="Brian"></UserGreeting>
      <Card></Card>
      <Food></Food>
      {fruits.length > 0 ? <List items={fruits} category="Fruits"></List> : null}
      {vegetables.length > 0 ? <List items={vegetables} category="Vegetables"></List> : null}
      <Button></Button>
      <Student name="Spongebob" age={20} isStudent={true}></Student>
      <Student name="Patrick" age={42} isStudent={false}></Student>
      <Student name="Squidward" age={50} isStudent={false}></Student>
      <Student name="Sandy" age={27} isStudent={true}></Student>
      <Student name="Larry"></Student>
      <Footer></Footer>
    </>
  );
}

export default App
