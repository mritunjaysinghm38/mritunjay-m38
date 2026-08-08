import React, { useContext } from 'react'
import { Link,useNavigate,useLocation } from 'react-router-dom'
import AppContext from '../context/AppContext'
const Navbar = () => {
  const {setFilteredData, products, logout,isAuthenticated,cart} = useContext(AppContext)
  
  const location = useLocation()
  const navigate = useNavigate();
  const filterbyCategory =(cat)=>{
    setFilteredData(products?.filter((data)=>data?.category?.toLowerCase()==cat?.toLowerCase()))
  }
  const filterbyPrice =(price)=>{
    setFilteredData(products?.filter((data)=>data?.price>=price))
  }
  return (
    <div className='nav sticky-top'>
      <div className="nav-bar  ">
        <Link to ={'/'} className="left" style={{textDecoration:'none',color:'white'}}>
        <div style={{display:"flex"}}><h3><pre>Abhay.HOME </pre> </h3><span className="material-symbols-outlined " >
home
</span></div>
        </Link>
         <div className="search_bar"><span className="material-symbols-outlined">
         search
         </span>
         
        <input type="text" placeholder='Search Products...' style={{width:"90%"}} />
         </div>
       <div className="right">
        {isAuthenticated &&(
          <>
        
             <Link to = {'/cart'}type="button" className="btn btn-primary position-relative" style={{height:"30px"}}>
<span class="material-symbols-outlined" >
shopping_cart
</span>
{cart?.items?.length>0 &&(

  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{height:"20px",width:"20px"}}>
    {cart?.items?.length}
    <span className="visually-hidden">unread messages</span>
  </span>
  )}
             </Link>
       <Link to ={'/profile'} className="btn btn-primary mx-3">profile</Link>
       <button className="btn btn-danger mx-3" onClick={()=>{
        logout();
         navigate('/');
       }
       }>logout</button>
          </>
        )}
        {!isAuthenticated && (
          <>
          <Link to ={'/login'} className="btn btn-secondary mx-3">login</Link>
       <Link to ={'/register'} className="btn btn-info mx-3">register</Link>
      
          </>
        )}
       
      
       </div>

       <div className="sub-bar"></div>
     </div>
{location.pathname=='/' && (

     <div className='sub_bar'>
      <div className="items"onClick={()=>setFilteredData(products)}>No Filter</div>
      <div className="items"onClick={()=>filterbyCategory("mobiles")}>Mobiles</div>
      <div className="items"onClick={()=>filterbyCategory("laptop")}>Laptops</div>
      <div className="items"onClick={()=>filterbyCategory("camara")}>Camara</div>
      <div className="items"onClick={()=>filterbyCategory("Headphone")}>Headphones</div>
      <div className="items"onClick={()=>filterbyCategory("watch")}>watches</div>
      <div className="items"onClick={()=>filterbyPrice(25999)}>25999</div>
      <div className="items"onClick={()=>filterbyPrice(49999)}>49999</div>
      <div className="items"onClick={()=>filterbyPrice(100000)}>100000</div>
      <div className="items"onClick={()=>filterbyPrice(200000)}>200000</div>
     </div>

)}

    </div>

  );
}


export default Navbar
