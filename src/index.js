import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

// function Student()
// {
//   return(
//     <>
//     <h1>Hello</h1>
//     </>
//   )
// }

// function Friday()
// {
//   return(
//     <>
//     <h1>shweta</h1>
//     </>
//   )
// }

// root.render(
// <Friday/>

// );

// function Shweta()
// {
//   return(
//     <>
//     <h1>Hii I am Shweta🥰</h1>
//     </>
//   )
// }
// root.render(
//  <>
//  <Shweta/>
//  <Shweta/>
//  <Shweta/>
//  </>
// )

//props and component

function FirstPage({name, city})
{


  return(
    <>
    <h1>Hii I am {name} from {city}. </h1>
    <hr/>

    </>
  )
}

root.render(
  <>
  <FirstPage name="Shweta" city="Ahmednagar"/>
  <FirstPage name="Varsha" city="Nagpur"/>
  </>
)


