import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
    return (
      <h1>{props.course}</h1>
    )}

const Osa = (props) => {
  return (
    <p>{props.part.nimi} {props.part.tehtavia}</p>
  )

    
}

const Sisalto = (props) => {
  return (
    <div>
      <Osa part={props.contents[0]} />
      <Osa part={props.contents[1]} />
      <Osa part={props.contents[2]} />
    </div>
  )
}

const Yhteensa = (props) => {
  return (
    <p>yhteensä {props.sum_excercise[0].tehtavia + props.sum_excercise[1].tehtavia + props.sum_excercise[2].tehtavia} tehtävää</p>
  )

    
}


const App = () => {
  const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
    osat  : [{
    nimi: 'Reactin perusteet',
    tehtavia: 10
  }, {
    nimi: 'Tiedonvälitys propseilla',
    tehtavia: 7
  }, {
    nimi: 'Komponenttien tila',
    tehtavia: 14
  }
  ]
  }


  return (
    <div>

      <Otsikko course={kurssi.nimi}/>
      <Sisalto contents={kurssi.osat}/>
      <Yhteensa sum_excercise={kurssi.osat} />
    </div>
  )
}

ReactDOM.render(<App />,document.getElementById('root'))

