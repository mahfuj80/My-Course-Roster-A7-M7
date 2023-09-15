import { useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Courses from './components/Courses/Courses';

function App() {
  const totalValidCreditHour = 20;
  const [selectedCoursesId, setSelectedCoursesId] = useState([]);
  const [selectedCoursesName, setSelectedCoursesName] = useState([]);
  const [remainingCreditHour, setRemainingCreditHour] = useState(0);
  const [usedCreditHour, setUsedCreditHour] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleSelectedCourses = (id, course_name, credit, price) => {
    const isAlreadySelected = selectedCoursesId.find(
      (selectedCourseId) => selectedCourseId === id
    );
    const newUsedCredit = usedCreditHour + credit;
    const newRemainingCredit = totalValidCreditHour - newUsedCredit;
    const isCreditValid = newUsedCredit <= totalValidCreditHour;
    if (isAlreadySelected) {
      return alert("you can't add one course twice");
    } else {
      if (!isCreditValid) {
        return alert('Credit hour problem');
      } else {
        const newSelectedCoursesId = [...selectedCoursesId, id];
        const newCoursesName = [...selectedCoursesName, course_name];
        setSelectedCoursesName(newCoursesName);
        setSelectedCoursesId(newSelectedCoursesId);
        setUsedCreditHour(newUsedCredit);
        setRemainingCreditHour(newRemainingCredit);
        setTotalPrice(totalPrice + price);
      }
    }
  };

  // console.log(selectedCourses);
  // console.log(selectedCoursesName);
  // console.log(totalPrice);
  // console.log(remainingCreditHour);
  return (
    <>
      <div className="p-6">
        <h1 className="text-3xl font-bold pt-14 pb-10">Course Registration</h1>
        <div className="grid gap-3 grid-cols-1 md:grid-cols-4 ">
          <div className="md:col-span-3">
            <Courses handleSelectedCourses={handleSelectedCourses}></Courses>
          </div>
          <div className="text-left p-5 bg-white rounded-lg h-fit">
            <Cart
              remainingCreditHour={remainingCreditHour}
              selectedCoursesName={selectedCoursesName}
              usedCreditHour={usedCreditHour}
              totalPrice={totalPrice}
            ></Cart>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
