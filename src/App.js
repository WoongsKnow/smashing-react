import logo from './logo.svg';
import './App.css';
// 과제!!
// 리액트 creat-react-app 사용해서 프로젝트 생성하면 된다.
// 오픈 api를 사용, 리액트 프로젝트 구성해서 호출하고 브라우저에서 그리기

//망함 모르겟음....
// 여기에 작성하는게 맞는건가..
const axios = require('axios');
/*function test(){
    console.log('호츌');
    //{}로 어ㅓ케 불러오지..

}*/
function call(){
    axios.get('https://dog.ceo/api/breeds/list/all')
        //.then을 사용하면 promise 객체를 부른거다
        .then(function(response){
            console.log(response.data.message);
            // setter(response)
        })
}

function App() {
    console.log('sdfghj');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            모르겠다.. 구글링의 한계다..d
        </p>
      </header>
    </div>
  );
}

export default App;
