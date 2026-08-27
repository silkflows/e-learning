import { FaSearch } from "react-icons/fa";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoMenuSharp } from "react-icons/io5";
import { useState,useEffect,useReducer } from "react";



 function App() {
  let [isOpen,setOpen]= useState(false)
 
  let [saveTheme,setThemeSave]= useState(false)

   let [removeTheme,setRemoveTheme]= useState(false)
   let [theme,setTheme]= useState(false)
  

   
   useEffect(()=>{
    let storedTheme =localStorage.getItem("theme")
    if(JSON.parse(storedTheme)){
      setTheme(true)
    }

    
    if(saveTheme){
      localStorage.setItem("theme",JSON.stringify({theme:"dark"}))
      setTheme(true)
    }
    if(removeTheme){
      localStorage.removeItem("theme")
      setTheme(false)
    }
    if(theme){
      document.body.style.background="black"
      document.body.style.color="white"

        

    }
    if(!theme){
      document.body.style.background="white"
          document.body.style.color="black"

    }

   },[saveTheme,removeTheme,theme])
  
  


  
  return (
    <>
      <header className="border bg-white text-black border-b-gray-200 h-14 fixed top-0 w-full right-0  left-0 ">
        <nav className={` bg-white  md:h-full  ${isOpen && "h-screen"} grid grid-cols-1 md:grid-cols-4 md:items-center md:mx-5 `}>
          {/* brand */}
          <div className=" flex justify-between md:flex-col px-5 md:px-0 items-center md:items-start h-14 md:h-auto md:border-0 border border-b-gray-200 ">
            <h3>
              {" "}
              <span className="font-bold text-3xl italic text-green-500">
                E-
              </span>
              Learning
            </h3>
            <div className="flex gap-4 md:hidden items-center">
              <span>
                {" "}
                <CiLight onClick={()=>{

                    setThemeSave(true)
                    setRemoveTheme(false)
                
                }
                
                  
                  } className={`${theme? "hidden":"block"}`} size={25} />
                  
                  {" "}
                  <MdDarkMode onClick={()=>{
                  
                    setRemoveTheme(true)
                    setThemeSave(false)
                  
                  } 
                    
                    
                    }className={`${ theme ?"block":"hidden"}`} />
              </span>
              <span>
                {" "}
                <IoMenuSharp onClick={()=>setOpen(!isOpen)} size={28} />{" "}
              </span>
            </div>
          </div>
          {/* links */}
          <ul className={` ${isOpen ?"block":"hidden"} md:col-span-2  space-y-3 md:space-y-0 px-5 md:px-0 md:flex md:flex-row gap-3 md:justify-center  md:mt-0`}>
            <li className="font-medium capitalize cursor-pointer hover:underline opacity-85 hover:opacity-100">
              Home
            </li>
            <li className="font-medium capitalize cursor-pointer hover:underline opacity-85 hover:opacity-100">
              Careers
            </li>
            <li className="font-medium capitalize cursor-pointer hover:underline opacity-85 hover:opacity-100">
              Pages
            </li>
            <li className="font-medium capitalize cursor-pointer hover:underline opacity-85 hover:opacity-100">
              Shop
            </li>
            <li className="font-medium capitalize cursor-pointer hover:underline opacity-85 hover:opacity-100">
              Blog
            </li>
            <li className="font-medium capitalize cursor-pointer hover:underline opacity-85 hover:opacity-100">
              Contacts
            </li>
          </ul>
          {/* theme,cart,lgin bnt,search icion */}
          <div className={`${isOpen ?"block":"hidden"}  px-5 md:px-0  md:flex  md:flex-row gap-3 md:items-center md:justify-end`}>
             <span>
                {" "}
                <CiLight onClick={()=>{

                  
                    setThemeSave(true)
                    setRemoveTheme(false)
                
                }
                
                  
                  } className={`${theme? "hidden":"block"}`} size={25} />
                  
                  {" "}
                  <MdDarkMode onClick={()=>{
                   
                    setRemoveTheme(true)
                    setThemeSave(false)
                  
                  } 
                    
                    
                    }className={`${theme  ?"block":"hidden"}`} />
              </span>
            <FaSearch className="hidden md:inline" />
            <span className="flex space-x-3 gap-1 items-center ">
              {" "}
              <FaUserAlt /> login
            </span>
            <FaCartShopping  className="hidden md:inline-block" />
          </div>
        </nav>
      </header>
      <main className="mx-5 mt-17 ">

<section className="hero_section grid grid-cols-1 md:grid-cols-2 gap-3 md:min-h-100  ">
  <div className=" flex-1 flex flex-col justify-center gap-2 items-center md:items-start  py-4 md;py-0 ">

<h3>Learn from 2000k+ with quality courses</h3>
<h1 className="text-5xl font-bold font-sans text-center md:text-left">  Best Platform Empower Skils</h1>
<button className="bg-green-600 px-10 py-2 rounded text-white hover:bg-green-400 "> Start Learning</button>
  </div>
   <div className=" h-full flex-1">
    <img className="h-full rounded-2xl object-cover object-center aspect-video" src="src/assets/hero.jpg" alt="" />

  </div>



</section>


      </main>

      
    </>
  );
}

export default App;
