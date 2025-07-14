import React, { useState } from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
const Home = () => {
    const [category, setCategory] = useState("all");
  return (
    <div>
      <Header>
      </Header>
       <ExploreMenu category={category} setCategory={setCategory}></ExploreMenu>
       <FoodDisplay category={category}/>
    </div>
  );
}

export default Home;
