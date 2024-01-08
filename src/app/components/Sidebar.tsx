'use client'

import React from 'react';
import styled from 'styled-components';

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './sidebarData';
import SubMenu from './SubMenu';

import { SlArrowRight } from "react-icons/sl";
import { AiFillAmazonCircle } from 'react-icons/ai'
import { FaTimes } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import Link from 'next/link'

   
export default function Sidebar () {


    const [open, setopen] = useState(false)
    const [activate, setactivate] = useState(true)
  
    useEffect( ()=>{
     
        console.log('from first useeffect, clikecd')
        setopen(!open)
      
      
    }, [activate] )



    const [isClient, setIsClient] = useState(false)
 
    useEffect(() => {
        setIsClient(true)
    }, [])



    return (


    
            
        <div> {isClient ? 
        
            <div className={` ${open ? "  w-24 " :  "  w-60"   }  h-screen     bg-cyan-800 relative`}>

                <div  className={  ' bg-gray-100 '  }   >


                    <div className={ ` ${open ?  "" : "hidden"  } text-center relative  hover    `   }>
                    <button className=" relative  items-center  top-1    bg-slate-100 "  onClick={()=>{ setactivate(!activate) } }>
                        <SlArrowRight size={40}/>
                    </button>


                    <div className='flex pt-8'> 
                        <div className=' peer  text-center absolute  w-[100%]   flex-1      bg-lime-300 border-2 border-y-rose-600 h-16'>
                        <div className='  '>value new cars : t </div>

                        </div>
                        <div className='  ml-[100%] relative    h-10 flex-1  group invisible peer-hover:visible'>
                        <nav className='  group-hover:visible bg-stone-600   w-28 '>
                            <li className=' '> <Link href='/'> value new cars  </Link>   </li>
                            <li> <Link href="/user_search"> on-sale car sub menu  </Link>   </li>
                            <li> <Link href="/user_search"> register new client </Link>   </li>
                        </nav>
                        </div>
                    </div>

                    <div className='flex  pt-6'> 
                        <div className=' peer text-center absolute  w-[100%]   flex-1   bg-lime-300 border-2 border-y-rose-600  h-16 '>
                        <div className='  '>on-sale car sub menu : t </div>

                        </div>
                        <div className='  ml-[100%] relative    h-10 flex-1  group invisible peer-hover:visible'>
                        <nav className='  group-hover:visible bg-stone-600   w-28 '>
                            <li className=' '> <Link href='/'> value new cars  </Link>   </li>
                            <li> <Link href="/user_search"> on-sale car sub menu  </Link>   </li>
                            <li> <Link href="/user_search"> register new client </Link>   </li>
                        </nav>
                        </div>
                    </div>

                    <div className='flex  pt-6'> 
                        <div className=' peer text-center absolute  w-[100%]   flex-1   bg-lime-300 border-2 border-y-rose-600   h-16'>
                        <div className='  '>register new client : t</div>

                        </div>
                        <div className='  ml-[100%] relative    h-10 flex-1  group invisible peer-hover:visible'>
                        <nav className='  group-hover:visible bg-stone-600   w-28 '>
                            <li className=' '> <Link href='/'> value new cars  </Link>   </li>
                            <li> <Link href="/user_search"> on-sale car sub menu  </Link>   </li>
                            <li> <Link href="/user_search"> register new client </Link>   </li>
                        </nav>
                        </div>
                    </div>
                    

                    </div>
                    

                    <nav className={ ` ${open ?  "hidden" : ""  } bg-slate-100  z-10  ` }  >
                    <button className=" absolute right-2 w-7 h-7 top-1   bg-slate-100 "  onClick={()=>{ setactivate(!activate) } }>
                            <FaTimes/>
                    </button> 
                    <p> valuing car </p>
                    <li> <Link href='/'> value new cars  </Link>   </li>
                    <li> <Link href="/user_search"> purchase contract   </Link>   </li>
                    <li> <Link href="/user_search"> car list  </Link>   </li>
                    <li> <Link href="/user_search"> change condition rank  </Link>   </li>
                    <p> on-sale car  </p>
                    <li> <Link href="/user_search"> on-sale car sub menu  </Link>  </li>
                    <li> <Link href="/user_search"> on-sale car sub menu  </Link>  </li>
                    <p> client</p>
                    <li> <Link href="/user_search"> register new client  </Link>  </li>
                    <li> <Link href="/user_search"> crooberid search  </Link>  </li>
                    </nav>

                </div>

            </div>
      
            : 
            
            <div className=' w-24   h-screen     bg-cyan-800 relative '>  
                    <div  className={  ' bg-gray-100 '  }   >


                        <div className={ ` text-center relative  hover   ` }>

                                            <button className=" relative  items-center  top-1    bg-slate-100 "  onClick={()=>{ setactivate(!activate) } }>
                                                <SlArrowRight size={40}/>
                                            </button>


                                            <div className='flex pt-8'> 
                                                <div className=' peer  text-center absolute  w-[100%]   flex-1      bg-lime-300 border-2 border-y-rose-600 h-16'>
                                                <div className='  '>value new cars : t </div>

                                                </div>
                                                <div className='  ml-[100%] relative    h-10 flex-1  group invisible peer-hover:visible'>
                                                <nav className='  group-hover:visible bg-stone-600   w-28 '>
                                                    <li className=' '> <Link href='/'> value new cars  </Link>   </li>
                                                    <li> <Link href="/user_search"> on-sale car sub menu  </Link>   </li>
                                                    <li> <Link href="/user_search"> register new client </Link>   </li>
                                                </nav>
                                                </div>
                                            </div>

                                            <div className='flex  pt-6'> 
                                                <div className=' peer text-center absolute  w-[100%]   flex-1   bg-lime-300 border-2 border-y-rose-600  h-16 '>
                                                    <div className='  '>on-sale car sub menu : t </div>

                                                </div>
                                                <div className='  ml-[100%] relative    h-10 flex-1  group invisible peer-hover:visible'>
                                                    <nav className='  group-hover:visible bg-stone-600   w-28 '>
                                                        <li className=' '> <Link href='/'> value new cars  </Link>   </li>
                                                        <li> <Link href="/user_search"> on-sale car sub menu  </Link>   </li>
                                                        <li> <Link href="/user_search"> register new client </Link>   </li>
                                                    </nav>
                                                </div>
                                            </div>

                                            <div className='flex  pt-6'> 
                                                <div className=' peer text-center absolute  w-[100%]   flex-1   bg-lime-300 border-2 border-y-rose-600   h-16'>
                                                    <div className='  '>register new client : t</div>

                                                </div>
                                                <div className='  ml-[100%] relative    h-10 flex-1  group invisible peer-hover:visible'>
                                                    <nav className='  group-hover:visible bg-stone-600   w-28 '>
                                                        <li className=' '> <Link href='/'> value new cars  </Link>   </li>
                                                        <li> <Link href="/user_search"> on-sale car sub menu  </Link>   </li>
                                                        <li> <Link href="/user_search"> register new client </Link>   </li>
                                                    </nav>
                                                </div>
                                            </div>
                        </div>

                    </div>
            </div>
            
        }</div>



    
    )










}

/*
<nav className='  py-5 relative   '>
                        <li > <Link href='/'> value new cars  </Link>   </li>
                        <li> <Link href="/user_search"> on-sale car sub menu  </Link>   </li>
                        <li> <Link href="/user_search"> register new client </Link>   </li>
                    </nav>


*/