
import Hero from '../../components/Home/hero'
import ShareRecipe from '../../components/Home/ShareRecipe'
import TrendingRecipes from '../../components/Home/TrendingRecipe';
import Blog from '../../components/Home/Blog'


function Homepage() {
 
    return (
      <>
        <div >
        <Hero/>
        <ShareRecipe/>
        <TrendingRecipes/>
        <Blog/>
        </div>
      </>
    );
  }
  
  export default Homepage
  