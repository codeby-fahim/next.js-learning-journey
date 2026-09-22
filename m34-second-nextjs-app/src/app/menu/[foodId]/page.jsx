import React from 'react';

const FoodDetailPage = async({params}) => {
  const resolvedParams = await params;
  const foodId = resolvedParams.foodId;
  const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`);
  const data = await res.json();
  const {origin_and_popularity} = data.data;
  return (
    <div>
      <h2>Food Detail Page:{foodId} </h2>
      <div>
        <h3>Origin: {origin_and_popularity}</h3>
      </div>
    </div>
  );
};

export default FoodDetailPage;


