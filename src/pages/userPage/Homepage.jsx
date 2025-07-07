
import Hero from '../../components/userHome/Hero'
import ShareRecipe from '../../components/userHome/ShareRecipe'
import TrendingRecipe from '../../components/UserHome/TrendingRecipe'
import Blog from '../../components/userHome/Blog'
import Explore_Recipe from '../../components/userHome/Explore_Recipe'
import Newsletter from '../../components/userHome/Newsletter'
import PopularCategories from '../../components/userHome/PopularCategories'


function Homepage() {
 
    return (
      <>

        <Hero/>
        <ShareRecipe/>
        <TrendingRecipe/>
        <Blog/>
        <Explore_Recipe/>
        <Newsletter/>
        <PopularCategories/>
       

      </>
    );
  }
  
  export default Homepage
  