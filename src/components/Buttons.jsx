import satData from './satData';
import filterByType from '../App'
import setSat from '../App'
import displaySats from '../App'


const Buttons = ({ filterByType, setSat, displaySats }) => {

  return (
    <div>
      {displaySats.map((sat, id) => {
      
        return (
          <button onClick={() => filterByType(sat)} key={id} >
            {sat} Orbit
          </button>
        )
      })}
      
      <button onClick={() => setSat(satData)}>
        All Orbits
      </button>
    </div>
  );
};

export default Buttons;