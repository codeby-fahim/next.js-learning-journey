import React from 'react';
import FoodCard from '../Components/FoodCard';

const MenuPage = async() => {
  const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods');
  const data = await res.json();
  const foods = data.data
  console.log("Fetch data", foods);
  return (
    <div>
      <h2>Menu Page</h2>
      <div className='grid grid-cols-3 gap-4'>
        {
          foods.map(food=> <FoodCard food={food} key={food.id}></FoodCard>)
        }
      </div>
    </div>
  );
};

export default MenuPage;