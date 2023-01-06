import './App.css';

function App() {
  const hola = 'hello';
  const mundo = 'world!!!';

  const obj ={
    name:'juan',
    apellido:'perez'
  }

  const arry = [1,2,3,4,5,6];
  const  [uno, dos] = arry;

  const {name, apellido} = obj;
  const msg =`${hola} ${mundo}`;

  const suma =(num1 = 0, num2 =2) => num1 + num2;

  const show =(...arg)=>{
    for (let i = 0; i < arg.length; i++) {
      const element = arg[i];
      console.log(`${element},`);
      
    }
  }
  //
  show(arry);

  console.log({...arry});

  return (
    <div className='App'>
      <h1>{msg}</h1>
      <h2>{name} {apellido}</h2>
      <h2>{uno} {dos}</h2>

      <h2>{suma(0)}</h2>

     
    </div>
  );
}

export default App;
