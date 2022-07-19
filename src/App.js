import React from 'react';
import './style.css';
import data from './mockData.js';
import Category from './Category.js';
export default function App() {
  console.log('data', data.categorys);
  return (
    <div>
      <Category categoryData={data.categorys} />
    </div>
  );
}
