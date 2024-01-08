'use client'

import Image from 'next/image'
import Layout from './layout'
import Sidebar from './components/SideBar'
import { FaIcons } from 'react-icons/fa'
import { AiFillAmazonCircle } from 'react-icons/ai'
import { FaTimes } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import  Styles  from './thepage.module.css'


import searchtable from './searchtable'

import type { GetStaticProps } from 'next'


import { ApolloClient, InMemoryCache, ApolloProvider, gql, HttpLink, useQuery } from '@apollo/client'

import PollPage from './components/message'

import createApolloClient from './components/apolloclient'

import ThePage from './index'

import ClientComponent from './components/clientcomponent'
import ServerComponent from './components/servercomponent'


//import dynamic from 'next/dynamic'



//const NoSSR = dynamic(() => import('./components/SideBar'), { ssr: false })

//import { getClient } from './lib/client'

export const dynamic = "force-dynamic";

/*
//firing up mock server 
import('./mocks').then( ({setupMocks}) => {
    setupMocks()
  })
*/



type clients_info = {
  __typename: string,
  name: string,
  ID: number,
  address: string,
  phone: string
}



type tabletype1 = {


__typename: string,
  name: string,
  ID: number,
  address: string,
  phone: string
}

type tabletype2 = {
clients_info:   clients_info[]
}


 //EXPERIMENTAL
 
 const Get_Client = gql`
  query MyQuery2 ($_eq1: String! ) {
    clients_info(where: {ID: {_eq: $_eq1}}) {
      ID
      address
      name
      phone
    }
  }
  

`;







// this will call createapollocliient to use 

export default  function Home( 
  


) {


let IDs : number[] = [11112];
let names : string[] = ['2121212'];
let phones : string[] = ['212121'] ;
let addreses : string[] = ['212121'] ;
let counter = 0;


  return (
    <>
      <div>

      </div>
      <div className=' border-b bg-gray-300 h-12 flex items-center'>
          <image className=' px-3'> logo </image>
          <div className=' px-10 '>maintenance note</div>
          <div>  </div>
         
      </div>

      <div className='flex'>
     
          <Sidebar/>
          

          <ClientComponent />
            
          
      </div>


        

    </>

  )
 
}
function forceUpdate() {
  throw new Error('Function not implemented.')
}


/*
{
    params,
    searchParams,
  }: {
    params: { slug: string }
    searchParams?: { [key: string]: string | string[] | undefined }
  }
*/