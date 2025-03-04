
import './App.css';

import QuoteCard from './components/QuoteCard/QuoteCard';
import { Outlet } from "react-router-dom";
import Home from './components/Home/Home';
function App() {
  

  return (
      <>
      
      <Outlet></Outlet>
      </>
 );
}

export default App;

    // <div className="App">
    //   {/* Header Section */}
    //   <div>
    //     <Header/>
    //   </div>

    //   {/* Hero Section */}
    //   <div> <HeroSection/></div>

    //    {/* Card Section */}
       
    //    <div className='card-grid'>
    //     {blogList.map((blog) => (
    //       <CardSection key={blog.id} blog={blog} />
    //     ))}
    //   </div>

    //   {/* Footer Section */}
    //   <div>
    //     <Footer/>
    //   </div>

    //   {/* Quote Card */}
    //   <div>
    //         {
    //           CardList.map((card)=>{
    //             return <QuoteCard key={card.id} card= {card}/>
    //           })
    //         };
    //       </div>
    // </div>
 
