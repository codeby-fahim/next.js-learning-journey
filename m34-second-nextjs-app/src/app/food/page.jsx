import React, { Suspense } from 'react';
import SearchFood from '../Components/SearchFood';

// Option-1: to write promise
const foodPromise= async()=>{
  const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods');
  const data = await res.json();
  const foods = data.data;
  return foods;
}
// Option-2: 
// const foodPromise2 = fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods').then(res=> res.json());

const FoodPage = () => {
  return (
    <div>
      <Suspense fallback={<h2>Loading...</h2>}>
      <SearchFood foodPromise={foodPromise()}></SearchFood>
      {/* <SearchFood foodPromise={foodPromise2}></SearchFood> */}

      </Suspense>
    </div>
  );
};

export default FoodPage;