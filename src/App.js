import Rewievs from './Rewievs';
import reviews from './data';
import './App.css';

function App() {
  return (
  <main>
    <section className='container'>
        <div className='title'>
          <h2>Our Rewievs</h2>
          <div className='underline'></div>
        </div>
        <Rewievs info={reviews} />
    </section>
  </main>
  )
}

export default App;
