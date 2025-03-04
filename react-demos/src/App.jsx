import Main from "../components/Main";
import Header from "../components/Header";
import Footer from "../components/footer";
import Props from "../components/Props";
import Person from "../components/dynamic-props";
import Card from "../components/children-props";
import Password from "../components/conditional-rendering";
import ButtonPractice from "../components/Button-practice";
import UseStatePractice from "../components/useStatePractice";
import SharedStateVar from "../components/SharedStateVar";
import InitState from "../components/initState";
import UseEffect from "../components/UseEffect";
import ToDoList from "../components/ToDoList";
import Profile from "../components/profile";
import ContextApi from "../components/ContextApi";
const number = [1, 2, 3, 4, 5];
function App() {
  return (
    <>
      <h1>hello world</h1>
      <Header />
      <Main />
      {number.map((number) => (
        <ul key={number}>
          <li>{number}</li>
        </ul>
      ))}
      <Props />
      <Person name="Habib" phone="Iphone13" price={90000} />
      <Person name="fahad" phone="Iphone9" price={40000} />
      <Card>
        <h2>inside card 2</h2>
        <h2>inside card 3</h2>
      </Card>
      <Password />
      <ButtonPractice />
      <UseStatePractice />
      <SharedStateVar />
      <InitState />
      <UseEffect />
      <ToDoList />
      <Profile />
      <ContextApi />
      <Footer />
    </>
  );
}

export default App;
