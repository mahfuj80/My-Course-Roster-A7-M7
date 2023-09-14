import './App.css';
import Cart from './components/Cart/Cart';
import Courses from './components/Courses/Courses';

function App() {
  return (
    <>
      <div className="p-6">
        <h1 className="text-3xl font-bold pt-14 pb-10">Course Registration</h1>
        <div className="grid gap-3 grid-cols-1 md:grid-cols-4 ">
          <div className="md:col-span-3">
            <Courses></Courses>
          </div>
          <div className="text-left p-5 bg-white rounded-lg h-fit">
            <Cart></Cart>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
