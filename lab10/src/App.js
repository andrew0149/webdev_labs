import MainBlock from "./components/mainBlock";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";

function App() {
  return (
    <div className="container">
      <h2 className="main_title">Что вам необходимо?</h2>
      <div className="wrapper">
        <MainBlock title="Первый блок" image={icon1}/>
        <MainBlock title="Второй блок" image={icon2}/>
        <MainBlock title="Третий блок" image={icon3}/>
      </div>
    </div>
  );
}

export default App;