import React from 'react'
import Header from './Header'
import Place from './Place'
import Data from './Data'


function App() {
  console.log(Data)
const visitedPlace = Data.map(place => {
  return(
    <Place key={place.id} {...place} />
  )
})

  return (
    <div className="travel--journal">
      <Header />
      <section>
        {visitedPlace}
      </section>
    </div>
  );
}

export default App;
