
import Hero from '../../components/Home/hero'
import ShareRecipe from '../../components/Home/ShareRecipe'
import TrendingRecipes from '../../components/Home/TrendingRecipe';
import Blog from '../../components/Home/Blog'
import Explore_Recipe from '../../components/Home/Explore_Recipe';
import Newsletter from '../../components/Home/Newsletter';

function Homepage() {
 
    return (
      <>
        <div >
        <Hero/>
        <ShareRecipe/>
        <TrendingRecipes/>
        <Blog/>
        <Explore_Recipe/>
        <Newsletter/>

        </div>
      </>
    );
  }
  
  export default Homepage
  