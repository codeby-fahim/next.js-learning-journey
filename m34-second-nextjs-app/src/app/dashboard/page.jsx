import React from 'react';
import Counter from '../Components/Counter';

const DashboardPage = () => {
  console.log("Dashboard Page Render");
  return (
    <div>
      <h2>This is Dashboard Page</h2>
      <Counter></Counter>
      <ul>
        <li>Dashboard Item 1</li>
        <li>Dashboard Item 2</li>
        <li>Dashboard Item 3</li>
      </ul>
    </div>
  );
};

export default DashboardPage;