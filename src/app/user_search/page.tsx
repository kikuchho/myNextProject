'use client'
import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import Sidebar from "../components/SideBar";
import { useSearchParams } from 'next/navigation'
import { TypedDocumentNode, gql } from '@apollo/client';
import { useSuspenseQuery } from '@apollo/client';
import Image from 'next/image'
import './page.css'

import { SlArrowDown, SlArrowRight } from "react-icons/sl";
import Header from "../components/Header";
import { GetAllHistoryQuery, GetClientByPkQuery,GetAllHistoryDocument} from '@/src/gql/graphql'

import { Get_Detail, Get_AllHistory } from "@/src/gqlSchema";
import DetailInfo from "../components/DetailInfo"; 
//const searchObject1= carPurchasearray.filter((car) => ( (car.Date ?? currentYear  >= startyear) && (car.Date ?? currentYear  <= endyear )   )); 　　　　　　?? OPERATOR　　　 
/*

{
  "data": {
    "clients_info_by_pk": {
      "ID": "1234567",
      "address": "myaddress",
      "name": "wojack",
      "phone": "08012345678",
      "ServiceHistory": {
        "ServiceHistory1": [
          {
            "History": [
              {
                "comment": " NA ",
                "date": 20100101,
                "title": "oil change"
              },
              {
                "comment": "",
                "date": 20420909,
                "title": "engine swap"
              }
            ],
            "carName": "mustang"
            "image": "https://www.everycar.jp/upimg/cars/641eac9b24593.jpg"
          },
          {

            
          }

        ]
      }
    }
  }
}
*/
/*
const Get_Detail : TypedDocumentNode<Data, Variables> = gql`
  query MyQuery2 ($ID1: String! ) {
      clients_info_by_pk(ID: $ID1) {
      ID
      name
      ServiceHistory
      Car
    }
  }`;


const Get_AllHistory : TypedDocumentNode<Data2, Variables2> = gql`
query MyQuery3( $_eq: String!) {
  carvaluation(where: {clientID: {_eq: $_eq}}) {
    __typename
*/


//car history/service history 


type ServiceHistory = {
  ServiceHistory: ServiceHistory1[]
  
}

type ServiceHistory1 = {
  History?: History[],
  Maker?: string,
  carName?: string,
  image?: string
}


type History = {
  comment?: string,
  date?: Date,
  title?: string
}

//car valuation /service history / purchase history for myquery3


type carvaluation = {
  ID?: string,
  Car?: string,
  Maker?: string,
  Date?: Date,
  Price?: string,
  clientID?: string,
  Comment?: string,
  Title?: string,
  __typename?:string
}

type carServiceHistory = {
  ID?: string,
  Car?: string,
  clientID?: string,
  Comment?: string,
  Date?: Date,
  Maker?: string,
  Price?: string,
  Title?: string,
  __typename?:string
}

type carPurchaseHistory = {
  ID?: string,
  clientID?: string,
  Car?: string, 
  Comment?: string,
  Maker?: string,
  Price?: string,
  Title?: string,
  Date?: Date,
  __typename?:string
}


const HomePage: NextPage = () => {
  //this is for switching tabs 
  const [toggle, settoggle] = useState(1)
  function updatetoggle(id:number) {
    settoggle(id)

    //diable showdetail when applicable 
    setShowDetail(false)

    console.log("button clicked --------------line184")
  }

  //userinput in search bar 
  const [userInput, setuserInput] = useState("")
  //check state of whether any searchbar is empty / dropdown search is empty 
  const [isempty, setisempty] = useState(true)
  //arrays that hold search result , used to display the result data 
  const [searchresult, setsearchresult]   = useState<carPurchaseHistory[]>([])
  const [SHsearchresult, setSHsearchresult]   = useState<carPurchaseHistory[]>([])
  const [PHsearchresult, setPHsearchresult]   = useState<carPurchaseHistory[]>([])
  const [VHsearchresult, setVHsearchresult]   = useState<carPurchaseHistory[]>([])
  //track button state 
  const [isclickedR , setisclickedR] = useState(false)
  const [isclickedL, setisclickedL] = useState(false)
  const [isclickedM, setisclickedM] = useState(false)
  //track total entries length 
  const [totalLength, settotalLength] = useState(0)


  //show detail page on purcahse page (for now)
  const [showDetail, setShowDetail] = useState(false)
  //clientid holder for detailinfo component
  const [detailID, setdetailID] = useState<string>("")
  //index number of the the array 
  const [arrayNum, setarrayNum] = useState<number>(0)
  //search by car value 
  const [searchByCar, setsearchByCar] = useState<string>()

  //get search param 
  const searchParams = useSearchParams()

  const theparam = searchParams.get('selected')
  
  if(theparam == ''){
    const theparam = '1234567'
  }
  
  console.log( theparam )

  const  ID1 : string = theparam as string;


  //--------------- 1: this is responsible for displaying left side list --------------------
  //get client detail info 
  const {data} = useSuspenseQuery(Get_Detail ,
    {
      variables: {  ID1 },
    }
    
    );

    // declare all the variables for storing the data
      let thehistory : History[] = [{
        comment : "NA",
        date: new Date("1995-12-25"),
        title: "NA"
      }]
      let userId  = data?.clients_info_by_pk?.ID;
      let userName = data?.clients_info_by_pk?.name;
      let ServiceHistoryarray : ServiceHistory1[] =  [{
        History: thehistory,
        carName: "NA",
        image: "/NA"
      }] ; 

      let carnames : string[] = ["NA"];

      //copy the data to service history array for render 
      if( data.clients_info_by_pk != null){
          if( data?.clients_info_by_pk?.ServiceHistory?.ServiceHistory?.length != 0  ){
            for(let i = 0; i < data?.clients_info_by_pk?.ServiceHistory?.ServiceHistory?.length ; i++  ){
              carnames[i]= ( data?.clients_info_by_pk?.ServiceHistory?.ServiceHistory[i]?.carName as string)
              //use assertion operator if the variable  might be undefined    data.clients_info_by_pk.Car![0]
              //ServiceHistoryarray[i] = data.clients_info_by_pk?.ServiceHistory?.ServiceHistory[i]
            }
          }
          
      }
      


      console.log( "99999999999999999" , data.clients_info_by_pk?.ServiceHistory?.ServiceHistory, "  :  "  , ServiceHistoryarray  )

    //------------2: this is responsible for displaying right side------------ 

    const _eq  : string = theparam as string;

    console.log("88888855555555", _eq)
      
    //get service history, purchase history 
    const  data1  = useSuspenseQuery(Get_AllHistory ,
      {
        variables: { _eq },
      }
      
    );

   

    console.log( ' 00000000000000 ', data1.data  )

    
    
    //total length of the top result 
    const topLength = data1.data?.carPurchaseHistory.length + data1.data?.carServiceHistory.length + data1.data?.carvaluation.length
    //search based on the  input 
    function handlesearch(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault()

      console.log(userInput) 

      if(userInput === ""){
        //display the result
        setisempty(true)
      }else{
        setisempty(false)
      }
    }

    useEffect(() => {
      //implement any search 
      // Finding  object  that match the search input 
      
      const searchObject1= data1.data?.carPurchaseHistory.filter((car) => ( car.Car?.includes(userInput)  || String(car.Date).includes(userInput) || car.Price?.includes(userInput) || car.Title?.includes(userInput) ));
      const searchObject2= data1.data?.carServiceHistory.filter((car) => (car.Car?.includes(userInput)  || String(car.Date).includes(userInput) || car.Price?.includes(userInput) || car.Title?.includes(userInput) ) );
      const searchObject3= data1.data?.carvaluation.filter((car) =>( car.Car?.includes(userInput)  || String(car.Date).includes(userInput) || car.Price?.includes(userInput) || car.Title?.includes(userInput) ) );
      

      setPHsearchresult(searchObject1)
      setSHsearchresult(searchObject2)
      setVHsearchresult(searchObject3)
      const searchresult0 = searchObject1.concat(searchObject2)
      setsearchresult(searchObject3.concat(searchresult0))
     
      //set altotal number of data entry 
      settotalLength(searchresult.length ) 

      console.log("1111111100000000000000000",searchresult, "------------", searchObject1, searchObject2, searchObject3)

      //if the searchbar is empty, hide the  result 
      if(userInput === ""){
        setisempty(true)
      }
      
    },[userInput]);





     //year list for the leftmost, middle dropdown 
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    const yearList: number[] = []
    for(let i = 0; i < 50 ; i++){
      yearList.push(currentYear - i)
    }

    //display drowdown when button is clicked  -> line 470
    //let startyear = 0
    const [endyear, setendyear] = useState<number>(3000)
    const [startyear, setstartyear] = useState<number>(1000)
    function handledropdown1(i : number, year? : number ){
      
      if(i === 1){
        setisclickedR(!isclickedR)
      }
      //year dropdown
      if(i === 2){
        

          if(year! <= endyear ){
            setstartyear(year!) 
          }
          
        setisclickedL(!isclickedL)
      }
      if(i === 3){
        
          if(year! >= startyear){
            setendyear(year!)
          }         
        
        setisclickedM(!isclickedM)
      }
    }




    function yearfilter(item : carPurchaseHistory) {
      let filterPass = true
      const date = new Date( item.Date!   )
      if (startyear !== 0) {
        filterPass = filterPass && (new Date(startyear,0,0) < date)
      }
      if (endyear !== 0) {
        filterPass = filterPass && (new Date(endyear,12,31 ) > date)
      }
      //if filterPass comes back `false` the row is filtered out
      return filterPass
    }

    //search by car dropdown
    useEffect(()=>{
      //search when the both year were selected
      if(endyear !== 3000 && startyear !== 1000 ){
          if(toggle === 1){
            console.log(" ---------================----------year------end-start  ",endyear, startyear)
            //(car.Date ?? currentYear  >= startyear) && (car.Date ?? currentYear  <= endyear )
            const searchObject1= data1.data?.carPurchaseHistory.filter((car) => yearfilter(car) );
            console.log("-------====================------year-11111111-----000000000",searchObject1)
            const searchObject2= data1.data?.carServiceHistory.filter((car) => yearfilter(car) );

            console.log("-------====================------year-11111111-----111111111",searchObject2)
            const searchObject3= data1.data?.carvaluation.filter((car) =>yearfilter(car) );


            const totalresult = searchObject1.concat(searchObject2)
            setsearchresult(searchObject3.concat(totalresult))

            console.log("-------====================------year-11111111",searchresult)
          }
          if(toggle === 2){
            const searchObject2= data1.data?.carServiceHistory.filter((car) => yearfilter(car) );
            setSHsearchresult(searchObject2)
            console.log("-------====================-------year----22222222222",searchresult)
          }
          if(toggle === 3){
            const searchObject1= data1.data?.carPurchaseHistory.filter((car) => yearfilter(car));
            setPHsearchresult(searchObject1)
            console.log("-------====================--------year----33333333333",searchresult)
          }
          if(toggle === 4){
            const searchObject3= data1.data?.carvaluation.filter((car) =>yearfilter(car) );
            setVHsearchresult(searchObject3)
          }

          //display teh result no matter what 
          setisempty(false)
      }

      //set altotal number of data entry 
      settotalLength(searchresult.length ) 

    }, [endyear, startyear])







    //display theresult when user clicked list on the rightmost dropdown
    function handledropdown12(i : number, selectedcar : string){
      //1 -> top, 2-> searvice hist, and so on 

      setsearchByCar(selectedcar)

      if(toggle === 1){
        
        const searchObject1= data1.data?.carPurchaseHistory.filter((car) => ( car.Car?.includes(selectedcar)  ));
        const searchObject2= data1.data?.carServiceHistory.filter((car) => (car.Car?.includes(selectedcar) ) );
        const searchObject3= data1.data?.carvaluation.filter((car) =>( car.Car?.includes(selectedcar)  ) );
        const totalresult = searchObject1.concat(searchObject2)
        setsearchresult(searchObject3.concat(totalresult))

        console.log("-------====================----------------11111111",searchresult)
      }
      if(toggle === 2){
        const searchObject2= data1.data?.carServiceHistory.filter((car) => (car.Car?.includes(selectedcar) ) );
        setSHsearchresult(searchObject2)
        console.log("-------====================----------------22222222222",searchresult)
      }
      if(toggle === 3){
        const searchObject1= data1.data?.carPurchaseHistory.filter((car) => ( car.Car?.includes(selectedcar)  ));
        setPHsearchresult(searchObject1)
        console.log("-------====================----------------33333333333",searchresult)
      }
      if(toggle === 4){
        const searchObject3= data1.data?.carvaluation.filter((car) =>( car.Car?.includes(selectedcar)  ) );
        setVHsearchresult(searchObject3)
      }

      setisempty(false)

    }


    //show detail page after rightarrow is clicked 
    function handleShowDetail(ID: string, arraynum: number) {
      //to do : pass client id and show the detail

      //set clientid and array index to display for showinfo component
      setdetailID(ID)
      setarrayNum(arraynum)

      console.log("from line 463 ---------------------",ID, arraynum)

      setShowDetail(!showDetail)
    }

   // <DetailInfo  ID = {clientID1}  />

  return (
    <div>
      
        <div className=' border-b bg-gray-300 h-12 flex items-center'>

          <image className=' px-3'> logo </image>
          <div className=' px-10 '>maintenance note</div>
          <div> {theparam}  </div>
          
        </div>

        <div className='flex   '>
          

          <Sidebar/>
          
          <div className="border-r-2  border-slate-500 ">
            <div className="flex flex-col items-center   bg-blue-200  ">
              <p>croober ID</p>
              <p> { userId  }</p>

              <p className=" text-center "> {userName} 様 </p>
              <button className="justify-center" > 編集  </button>
            </div>
          
              <div  className='flex flex-col items-center  '>

                {
                  data.clients_info_by_pk?.ServiceHistory?.ServiceHistory?.map((numList,i) =>(
                    <div key={i}   className=" p-5 flex" >
                      <Image src={ numList.image as string } width={100} height={100}  alt="car picture" /> 
                      <div>
                        <p className=" pl-4 font-light  text-black/50">  {numList.Maker}  </p>
                        <p className=" pl-4 font-semibold "> { numList.carName }  </p>
                      </div>
                      
                    </div>


                ))
                }
              
              </div>

              <div className=" flex flex-col items-center  gap-5 py-5  border-t-2 border-slate-500">
                <button
                  type="button"
                  className="w-4/6 inline-block border-sky-700 rounded border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                  >
                  新車見積り
                </button>

                <button
                  type="button"
                  className="w-4/6 inline-block border-sky-700 rounded border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                  >
                  新規買取査定
                </button>

                <button
                  type="button"
                  className="w-4/6 inline-block border-sky-700 rounded border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                  >
                  make new service appointment 
                </button>

              </div>

          </div>

            <div className="  translate-x-[5%]   w-2/3  relative ">
              <ul className=" flex   justify-center p-4">
                <li className={ `   p-4 bg-orange-200  border-t-2 ${ toggle === 1 ? " bg-orange-300  border-t-black"  : ""  }  `  } onClick={()=> updatetoggle(1)  }>top </li>
                <li className={ `   p-4 bg-orange-200  border-t-2 ${ toggle === 2 ? " bg-orange-300  border-t-black"  : ""  }  `  } onClick={()=> updatetoggle(2)} > service history </li>
                <li className={ `   p-4 bg-orange-200  border-t-2 ${ toggle === 3 ? " bg-orange-300  border-t-black"  : ""  }  `  } onClick={()=> updatetoggle(3)}> purchase history  </li>
                <li className={ `   p-4 bg-orange-200  border-t-2 ${ toggle === 4 ? " bg-orange-300  border-t-black"  : ""  }  `  } onClick={()=> updatetoggle(4)}> valuation history </li>
                <li className={ `   p-4 bg-orange-200  border-t-2 ${ toggle === 5 ? " bg-orange-300  border-t-black"  : ""  }  `  } onClick={()=> updatetoggle(5)}> message </li>
                <li className={ `   p-4 bg-orange-200  border-t-2 ${ toggle === 6 ? " bg-orange-300  border-t-black"  : ""  }  `  } onClick={()=> updatetoggle(6)}> in valuation </li>
              </ul>
              <div>
                {
                  !showDetail ? 

                  <div>
                    <div className=" m-4">
                      <p>取引履歴</p>
                    </div>
                    <div className="border-t-2 border-slate-600 flex justify-between   ">
                        <form className="relative my-4 flex   "  onSubmit={ handlesearch}  >
                          <input
                            type="search"
                            className=" peer   relative   block  min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="button-addon1" 
                            id="userInput"
                            value={userInput}
                            onChange={ (e) => { setuserInput(e.target.value)   }}
                            />
                            
                          <button className= { `   ml-4  peer-placeholder-shown:disabled    `}    type='submit'       >
                            search
                          </button >
                        </form>

                        <div className="flex">
                          <div>
                            <button className="flex border-2 border-slate-700 h-8 translate-y-[50%] " onClick={ ()=>{handledropdown1(2)}} >{startyear === 1000 ? 'dropsown2' : startyear }  <div className=" pt-2"><SlArrowDown /></div> </button>
                              
                                <div className={`${  isclickedL ? " "  : "  invisible "  }  absolute  translate-y-3 z-30 w-[100px] min-h-[100px] max-h-[200px] overflow-auto flex flex-col py-4 bg-zinc-400 rounded-md `}>
                                    {
                                        yearList.map((item,i) => ( <button
                                                key={i}
                                                className="hover:bg-zinc-300 hover:text-zinc-500 px-4  py-0.5"
                                                onClick={ ()=>{handledropdown1(2, item)} }
                                          >{item}</button>    
                                        ))
                                    }
                                </div>
                          </div>
                          
                          <p className="translate-y-[30%]"> ~ </p>

                          <div>
                            <button className="flex border-2 border-slate-700 h-8 translate-y-[50%]"onClick={ ()=>{handledropdown1(3)} }> {endyear === 3000 ? 'dropsown2' : endyear }  <div className=" pt-2"><SlArrowDown /></div> </button>

                                <div className={`${  isclickedM ? " "  : "  invisible "  }   absolute  translate-y-3 z-30 w-[100px] min-h-[100px] max-h-[200px] overflow-auto flex flex-col py-4 bg-zinc-400 rounded-md `}>
                                      {
                                          yearList.map((item,i) => ( <button
                                                  key={i}
                                                  className="hover:bg-zinc-300 hover:text-zinc-500 px-4  py-0.5"
                                                  onClick={ ()=>{handledropdown1(3, item)} }
                                            >{item}</button>    
                                          ))
                                      }
                                </div>

                          </div>
                          
                        </div>
                        <div  >
                          <button className=" flex bg-slate-400   translate-y-[70%]  " onClick={ ()=>{handledropdown1(1)}  }> search by car <div className=" pt-2"><SlArrowDown /></div>  </button>
                            <div className={`${  isclickedR ? " "  : "  invisible "  }  translate-y-5  bg-stone-200    `}>
                              {
                                carnames.map((numList,i) =>( <button key={i} className=" p-1 flex" onClick={ ()=>{ handledropdown12(1 , numList)}  } >{  numList  } </button>  ) )

                              }
                            </div>
                        </div>


                    
                    </div>

                  </div> 
                
                  :

                  <div>

                  </div>
                }
              </div>
                
                <div className="  border-slate-500">
                  <div className={ toggle === 1 ? "show-content" : "content hidden"    }>
                    <div>
                      <p  className=" py-4 border-2 border-y-slate-800 "> {topLength} 件   </p>
                    </div>
                    <div className="  bg-orange-100">
                        { isempty ? 
                        <div>  
                          <p>top</p>
                           {
                            
                            data1.data?.carvaluation?.map((numList,i) =>(
                              <div key={i}   className=" p-5 flex" >
                                <p>査定</p>
                                <p className=" pl-4 "> {numList.Car} </p>
                                <p className=" pl-4 font-light  text-black/50">  {numList.Date?.toString()}</p>
                                <p className=" pl-4 font-semibold "> { numList.Price } usd </p>
                                <p  className=" pl-4"> { numList.Title } </p>
                                <p className=" pl-4"> { numList.Comment } </p>
                              </div>

                            ))
                            }
                            {
                              data1.data?.carServiceHistory?.map((numList,i) =>(
                                <div key={i}   className=" p-5 flex" >
                                  <p>作業</p>
                                  <p className=" pl-4 "> {numList.Car} </p>
                                  <p className=" pl-4 font-light  text-black/50">  {numList.Date?.toString()}</p>
                                  <p className=" pl-4 font-semibold "> { numList.Price } usd </p>
                                  <p  className=" pl-4"> { numList.Title } </p>
                                </div>

                              ))
                            }
                            {
                              data1.data?.carPurchaseHistory?.map((numList,i) =>(
                                <div key={i}   className=" p-5 flex" >
                                  <p>購入</p>
                                  <p className=" pl-4 "> {numList.Car} </p>
                                  <p className=" pl-4 font-light  text-black/50">  {numList.Date?.toString()}</p>
                                  <p className=" pl-4 font-semibold "> { numList.Price } usd </p>
                                  <p  className=" pl-4"> { numList.Title } </p>
                                </div>

                              ))
                            }
                        </div> 
                        : 
                          <div> 
                            <p>search result : {searchresult.length} 件</p>
                            {
                              searchresult?.map((numList,i) =>(
                                <div key={i}   className=" p-5 flex" >
                                  <p>{numList.__typename}</p>
                                  <p className=" pl-4 "> {numList.Car} </p>
                                  <p className=" pl-4 font-light  text-black/50">  {numList.Date?.toString()}</p>
                                  <p className=" pl-4 font-semibold "> { numList.Price } usd </p>
                                  <p  className=" pl-4"> { numList.Title } </p>
                                  <p className=" pl-4"> { numList.Comment } </p>
                                </div>

                              ))
                            }
                          </div>
                        }
                     
                    </div>
                  </div>
                  <div className={ toggle === 2 ? "show-content" : "content hidden"    }>
                    <div>
                      <p  className=" py-4 border-2 border-y-slate-800 "> {data1.data?.carServiceHistory.length} 件   </p>
                    </div>
                    <div className="  bg-orange-200">
                    { isempty ? 
                        <div>  
                          <p>searvice history</p>
                          
                            {
                              data1.data?.carServiceHistory?.map((numList,i) =>(
                                <div key={i}   className=" p-5 flex" >
                                  <p>作業</p>
                                  <p className=" pl-4 "> {numList.Car} </p>
                                  <p className=" pl-4 font-light  text-black/50">  {numList.Date?.toString()}</p>
                                  <p className=" pl-4 font-semibold "> { numList.Price } usd </p>
                                  <p  className=" pl-4"> { numList.Title } </p>
                                </div>

                              ))
                            }
                           
                        </div> 
                        : 
                          <div> 
                            <p>search result : {SHsearchresult.length} 件</p>
                            {
                              SHsearchresult?.map((numList,i) =>(
                                <div key={i}   className=" p-5 flex" >
                                  <p>作業</p>
                                  <p className=" pl-4 "> {numList.Car} </p>
                                  <p className=" pl-4 font-light  text-black/50">  {numList.Date?.toString()}</p>
                                  <p className=" pl-4 font-semibold "> { numList.Price } usd </p>
                                  <p  className=" pl-4"> { numList.Title } </p>
                                  <p className=" pl-4"> { numList.Comment } </p>
                                </div>

                              ))
                            }
                          </div>
                        }
                    </div>
                  </div>
                  <div className= { `${ toggle === 3 ? "show-content" : "content hidden"  }   `   }>

                   { showDetail ? 

                    <div>
                      <p className="font-semibold py-3"> 購入履歴  </p>
                        <div>
                         
                          <DetailInfo  ID = {detailID} carName = { data1.data?.carPurchaseHistory[arrayNum].Car!}  searchByCar = {searchByCar}  searchValue = {userInput} searchByStartYear={endyear} searchByEndYear={startyear} />

                        </div>
                    </div>

                    :

                    <div>
                      <div>
                        <p  className=" py-4 border-2 border-y-slate-800 "> {data1.data?.carPurchaseHistory.length} 件   </p>
                      </div>
                        <div className=" bg-orange-300">
                        { isempty ? 
                          
                          <div>  
                            <p>purchase history</p>
                            
                              {
                                data1.data?.carPurchaseHistory?.map((numList,i) =>(
                                  <div key={i}   className=" p-5 flex" >
                                    <p>購入</p>
                                    <p className=" pl-4 "> {numList.Car} </p>
                                    <p className=" pl-4 font-light  text-black/50">  {numList.Date?.toString()}</p>
                                    <p className=" pl-4 font-semibold "> { numList.Price } usd </p>
                                    <p  className=" pl-4"> { numList.Title } </p>
                                    <p>{data1.data?.carPurchaseHistory[arrayNum].Car}</p>
                                    <button className= " pl-4 " onClick={ ()=>{ handleShowDetail(numList.ID!, i)}  }> <div className=" pt-2"><SlArrowRight /></div>  </button>
                                  </div>

                                ))
                              }
                            
                          </div> 
                          : 
                            <div> 
                              <p>search result : {PHsearchresult.length} 件</p>
                              {
                                PHsearchresult?.map((numList,i) =>(
                                  <div key={i}   className=" p-5 flex" >
                                    <p>購入</p>
                                    <p className=" pl-4 "> {numList.Car} </p>
                                    <p className=" pl-4 font-light  text-black/50">  {numList.Date?.toString()}</p>
                                    <p className=" pl-4 font-semibold "> { numList.Price } usd </p>
                                    <p  className=" pl-4"> { numList.Title } </p>
                                    <p className=" pl-4"> { numList.Comment } </p>
                                  </div>

                                ))
                              }
                            </div>
                          }
                        </div>

                    </div>
                   }







                    
                  </div>
                  <div className= { `${ toggle === 4 ? "show-content" : "content hidden"    }   `   }>
                    <div>
                      <p  className=" py-4 border-2 border-y-slate-800 "> {data1.data?.carvaluation.length} 件   </p>
                    </div>
                      <div className=" bg-orange-300">
                      { isempty ? 
                        <div>  
                          <p>valuation history</p>
                          
                            {
                              data1.data?.carvaluation?.map((numList,i) =>(
                                <div key={i}   className=" p-5 flex" >
                                  <p>査定</p>
                                  <p className=" pl-4 "> {numList.Car} </p>
                                  <p className=" pl-4 font-light  text-black/50">  {numList.Date?.toString()}</p>
                                  <p className=" pl-4 font-semibold "> { numList.Price } usd </p>
                                  <p  className=" pl-4"> { numList.Title } </p>
                                </div>

                              ))
                            }
                           
                        </div> 
                        : 
                          <div> 
                            <p>search result : {VHsearchresult.length} 件 </p>
                            {
                              VHsearchresult?.map((numList,i) =>(
                                <div key={i}   className=" p-5 flex" >
                                  <p>査定</p>
                                  <p className=" pl-4 "> {numList.Car} </p>
                                  <p className=" pl-4 font-light  text-black/50">  {numList.Date?.toString()}</p>
                                  <p className=" pl-4 font-semibold "> { numList.Price } usd </p>
                                  <p  className=" pl-4"> { numList.Title } </p>
                                  <p className=" pl-4"> { numList.Comment } </p>
                                </div>

                              ))
                            }
                          </div>
                        }
                      </div>
                  </div>

                  
                  <div className= { `${ toggle === 5 ? "show-content" : "content hidden"    }   `   }>
                    <div>
                      <p  className=" py-4 border-2 border-y-slate-800 "> {data1.data?.carvaluation.length} 件   </p>
                    </div>
                      <div className=" bg-orange-300">
                      { isempty ? 
                        <div>  
                          <p>message history</p>
                          
                            
                           
                        </div> 
                        : 
                          <div> 
                            <p>search result :  件 </p>
                            
                          </div>
                        }
                      </div>
                  </div>



                </div>

            </div>





        </div>


    </div>
  );
};

export default HomePage;


/*
export default function user_search ()  {
 

  return (


    <div> page </div>
  )
}


<div className="container h-screen">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl my-8">
            Welcome to NextJS Collapsible Sidebar Tutorial
          </h1>
          


          
        </div>
      </div>
      //line 100 
      
      type carvaluation = {
        __typename?: string;
          clientID: string;
          Car: string;
          Date?: any;
          Price: string;
          Title?: string | null | undefined;
          Comment?: string | null | undefined;
          Maker?: string;
      }

      type carServiceHistory = {
        __typename?: string;
          Car: string;
          clientID: string;
          Comment?: string | null | undefined;
          Date?: any;
          Maker: string;
          Price?: string | null | undefined;
          Title?: string | null | undefined;
      }

      type carPurchaseHistory = {
        __typename?: string;
          Car?: string | null | undefined;
          Comment?: string | null | undefined;
          Date?: any;
          Maker?: string | null | undefined;
          Price?: string | null | undefined;
          Title?: string | null| undefined;
          clientID: string;
      }

      
      //line 260 -> 360
      let carValuationarray : carvaluation[] =  [{
      
      Car: "NA",
      Maker: "NA",
      Date: new Date("1995-12-25"),
      Price: "NA",
      clientID: "NA",
      Comment: "NA",
      Title: "NA"
    }] ; 

    let carServicearray : carServiceHistory[] =  [{
      clientID: "NA",
      Car: "NA",
      Comment: "NA",
      Date: new Date("1995-12-25"),
      Maker: "NA",
      Price: "NA",
      Title: "NA"
    }]; 

    let carPurchasearray : carPurchaseHistory[] = [{
      ID: "NA",
      Car: "NA", 
      Comment: "NA",
      Price: "NA",
      Title: "NA",
      Date: new Date("1995-12-25")
    }]



*/
/*
//line 246
    let carnames2 : string[] = [];
    let carnames3 : string[] = [];
    //copy the data to service history array for render 
    if( data1.data.carvaluation != null){
      if( data1.data?.carvaluation?.length   != 0  ){
        for(let i = 0; i < data1.data?.carvaluation?.length ; i++  ){
          carnames2[i]= ( data1.data?.carvaluation[i].Car as string)
        }
      }
    }
    if( data1.data.carServiceHistory != null){
      if( data1.data?.carServiceHistory?.length   != 0  ){
        for(let i = 0; i < data1.data?.carServiceHistory?.length ; i++  ){
          carnames3[i]= ( data1.data?.carServiceHistory[i].Car as string)
        }
      }
    }
    if( data1.data.carPurchaseHistory != null){
      if( data1.data?.carPurchaseHistory?.length   != 0  ){
        for(let i = 0; i < data1.data?.carPurchaseHistory?.length ; i++  ){
          carnames3[i]= ( data1.data?.carPurchaseHistory[i].Car as string)
        }
      }
    }
    */
  