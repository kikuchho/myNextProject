//wrapper 

'use client'
 
import { ChangeEvent, FormEvent, SetStateAction, useCallback, useEffect, useState } from 'react'
import { getClient } from '../lib/client';
import { ApolloClient, InMemoryCache, gql, useQuery,TypedDocumentNode, empty, } from '@apollo/client';
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const dynamic = "force-dynamic";

import { useSuspenseQuery } from '@apollo/client';

import ServerComponent from './servercomponent';

import {Search_Client, Get_ALLClient } from '@/src/gqlSchema'
/*
const aclient = new ApolloClient({
    
  uri: 'https://closing-muskrat-16.hasura.app/v1/graphql',
   
  cache: new InMemoryCache(),

  //https://cloud.hasura.io/project/3246199a-0b78-493b-83e9-cb0f13ccda39/console/api/api-explorer
  //if you take a look at the websites it shows you the request header and these are the things you need to make an api request 
  //https://www.apollographql.com/docs/react/networking/basic-http-networking 
  headers: {
    'content-type' : 'application/json',
    'x-hasura-admin-secret': 'GEBiWvxHO1XpFOhC17rJzg3KfLM05h73cy216qkOlraHyrFmSMi0Wds22mNuWTVO'
  }
});

const Get_Client = gql`
  query MyQuery2 ($_eq1: String! ) {
    clients_info(where: {ID: {_eq: $_eq1}}) {
      ID
      address
      name
      phone
    }
  }`;

const Search_Client : TypedDocumentNode<Data, Variables> = gql`
query MyQuery2( $_ilike: String! ) {
  clients_info(where: {ID: {_ilike: $_ilike}}) {
    ID
    address
    name
    phone
  }
}`;



const Get_ALLClient = gql` query allclients {
    clients_info {
      ID
      address
      name
      phone
    }
  }
  `;
*/

interface Data {
  clients_info: clients_info[];
}

interface Variables {
  _ilike : string;
}


type clients_info = {
          __typename: string,
          name: string,
          ID: string,
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











export default function ClientComponent() {
    // all clients data
    const [coins, setcoins] = useState< tabletype2  >(  )
    //this is for checking if the search input is empty 
    const [isempty, setisempty] = useState(true)

    //EXPRIMENTAL
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const createQueryString = useCallback(
      (name: string, value: string) => {

        const params = new URLSearchParams(searchParams)
        params.set(name, value)
   
        return params.toString()
      },
      [searchParams]
    )

    /*
    setcoins( 
      [ {
        
        __typename: 'a',
        name: 'myname',
        ID: 1000000,
        address: 'a',
        phone: '000000000'
      } ]
    )
      */


    const [count, setCount] = useState(0)
    const [searchInput, setSearchInput] = useState("");

    //false if the table hidden true otherwise 
    const [ishidden, setishidden] = useState(true);


    //store selected row in table 
    const [selectedrow, setselectedrow] = useState(0);



    // set the serchinput after submit
    const handleChange = (e: HTMLInputElement) => {
       
        setSearchInput(e.value);   

        console.log(searchInput);
        /*
        //EXPERIMENTAL 
        const current = new URLSearchParams(searchParams);


        console.log('00000000000000000', current )


        if (!searchInput) {
          current.delete("selected");
        } else {
          current.set("selected", searchInput);
        }

        const search = current.toString();
        const query = searchInput ? `?${searchInput}` : "";


        console.log('00000000000000000', searchInput  )
        console.log('00000000000000000', pathname  )
        console.log('00000000000000000', current )


        //router.push(`${pathname}${query}`);
        router.push(`/?${  createQueryString("selected", searchInput.toString())}`)
        */
       
        // disable button when empty 
        if( searchInput.length !== 0  )
        {
            setisempty(false);
        }
      };

      /*
      //use effect to get the search result
      useEffect(()=>{
        
        fetch(`../api/table/search?query=${query}`)
              .then((res) => res.json())
              .then((data) => {
                  //setcoins( data.clients_info )

                  })

        console.log(searchInput)

      },[searchInput])
      */

      //display the table on submit 
      function displaytable(e:  FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log('test3');
        //display table only when search bar is not empty 
        if(!isempty){
          setishidden(false);
        }
        
      };

      
      //open new page after clicking 'open edit page '
      function pushpage(e: HTMLInputElement) {
        
        //the first row is 1 
        //push page only when it is selected 
        if(selectedrow !== 0){

        //EXPERIMENTAL 
        //push new param based on selected row 
        const current = new URLSearchParams(searchParams);

        console.log('00000000000000000', current )

        const selectedrowS = selectedrow.toString()
        const selectedID =  data.clients_info[selectedrow-1].ID

        if (!selectedrowS) {
          current.delete("selected");
        } else {
          current.set("selected", selectedrowS);
        }

        const search = current.toString();
        const query = selectedrowS ? `?${selectedrowS}` : "";


        console.log('00000000000000000', selectedrowS )
        console.log('00000000000000000', pathname  )
        console.log('00000000000000000', current )


        //router.push(`${pathname}${query}`);
        router.push(`/user_search/?${  createQueryString("selected", selectedID)}`)

        

        }

      };




      //get all clients when button is clicked  
      useEffect(()=>{
        
        const getdata = async () => {
            

          fetch('../api/table')
            .then((res) => res.json())
            .then((data) => {
                setcoins( data )
          })

        }
            //const response  = await('/api/table') as string[];

            //const coins = await response.json() 

           getdata();
        
          console.log(coins)
      }, [count] )




      const getdata = async () => {
        fetch('../api/table')
          .then((res) => res.json())
          .then((data) => {
              setcoins( data )
       })
    }


     
    // not sure if it's defined or not so coins?.clients
      console.log( 'from clients test 5'  ,coins)
      console.log('from clients test 6'  ,coins?.clients_info[0])
      //console.log(coins?[0])

    //method 2:   usequery to fetch the table 
    //const { data } = aclient.query(  query )
    //console.log( 'testfrom clientcomponent'  ,data  )


    //an array that store all the client table from page.tsx(server component ), will be used for displaying on table 
    const thetable : tabletype1[] = []
    //store the each info into the array, 
    

    //TODO: USE USEQLIENT TO FETCH DATA AS A EXPERIMENT 
   

    const _ilike ='%' + searchInput +'%' ;

    const {data} = useSuspenseQuery(Search_Client ,
      {
        variables: { _ilike},
      }
      
      );

      console.log( ' 88888888888888 ', data  )

      let searchedid = []
      let searchedname = []
      let searchedphone: string = 'NA'

      if( data.clients_info != null){
          if( data.clients_info.length != 0  ){
            for(let i = 0; i < data.clients_info.length ; i++  ){
              searchedid[i] = data?.clients_info[i]?.ID;
              searchedname[i] = data?.clients_info[i]?.name;
              searchedphone = data?.clients_info[0]?.phone;
            }
          

          }
          
      }else{
        searchedid[0] = 'na'
        searchedname[0] = 'na'
      }

      const theresulttable : clients_info[] = []
      if( data.clients_info.length != 0){
        console.log('path 1 -------------------')
        //store the each info into the array, 
        for(let i = 0; i < searchedid.length ; i++  )
        {
          const therow : clients_info = {
            __typename: ' my typename ',
              name: data?.clients_info[i]?.name,
              ID: data?.clients_info[i]?.ID,
              address: ' my address  ',
              phone: data?.clients_info[i]?.phone
          }

          theresulttable.push(therow)

        }
      }else{
        console.log('path 2 -------------------')
        const therow : clients_info = {
          __typename: ' my typename ',
            name: 'na',
            ID: 'na',
            address: ' na ',
            phone: 'na'
        }

        theresulttable.push(therow)

      }

    



      

      const result1  =   useSuspenseQuery(Get_ALLClient 
        );  

        console.log( ' 9999999999999999 ',result1.data )


    //w-screen h-screen flex items-center justify-center  ${ishidden ?  "hidden" :   ""   }`
      


    // solution to -> Hydration failed because the initial UI does not match what was rendered on the server. 

    
 
  return (
    <>
      <button onClick={() => setCount(count + 1) }   >{count}</button>
      


      <div className="  translate-y-[40%]  translate-x-[40%]   relative    w-3/6" >
            <form className="relative mb-4 flex    "  onSubmit={ (e) =>{ displaytable( e ) }  }  >
                  <input
                    type="search"
                    className=" peer   relative   block  min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="button-addon1" 
                    onChange={ (e) => {  handleChange( (e.target as HTMLInputElement )) }    }
                    value={searchInput}
                    />
                    
                  <button className= { `   ml-4  peer-placeholder-shown:disabled    `}    type='submit'       >
                    search
                  </button >
            </form>

            <div  className={ `  ${ (ishidden || isempty) ?  " invisible" :   ""   }    relative  `}  >
              <table className="table-fixed bg-slate-200 relative    w-full ">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>name</th>
                      <th>phone No</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>  test   </td>
                      <td>Earth, Wind, and Fire</td>
                      <td>1975</td>
                    </tr>
                  
                  
                  
                  {
                      theresulttable?.map( 
                        (numList,i) =>(
                          <tr key={i}  className=' active:bg-red-500 '   onClick={ ( )  =>{  setselectedrow(i+1); console.log('row selected', selectedrow) }  }     >
                           
                            <td >{ numList.ID }</td>
                            <td >{ numList.name }</td>
                            <td >{ numList.phone }</td>
                           
                          </tr>
                       )
                      )
                   }


                  </tbody>
                </table>

                
                <div className=' bg-yellow-400 flex justify-center'>
                          <button   className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full   m-5 ' onClick={ (e )  =>{ pushpage((e.target as HTMLInputElement ))  }}  > open  edit page </button>
                          <button  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full  m-5  ' > cancel </button>

                </div>


                     

            </div>
       

        </div>


    </>
  )
}
/*

from line 420 ,



 {
                      thetable?.map( 
                        (numList,i) =>(
                          <tr key={i}>
                           
                            <td >{ numList.ID }</td>
                            <td >{ numList.name }</td>
                            <td >{ numList.name }</td>
                           
                          </tr>
                       )
                      )
                   }
                  
                  
 {
                      coins?.clients_info.map( 
                        (numList,i) =>(
                          <tr key={i}>
                           
                            <td >{ numList.ID }</td>
                            <td >{ numList.name }</td>
                            <td >{ numList.name }</td>
                           
                          </tr>
                       )
                      )
                   }



 value={searchQuery}
 onInput={e => setSearchQuery( (e.target as HTMLInputElement).value) }

*/