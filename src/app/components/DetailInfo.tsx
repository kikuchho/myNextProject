'use client'

import { Get_AllHistory, Get_Detail, Get_HistoryByID, Get_MessageByID, SearchCarData } from "@/src/gqlSchema";
import { useSuspenseQuery } from "@apollo/client";
import Image from "next/image";
import { useState } from "react";
import { MdOutlineImage } from "react-icons/md";

interface Props {
    ID: string;
    carName: string;
    searchValue? : string,
    searchByStartYear? : number,
    searchByEndYear? : number,
    searchByCar? : string
  }

  type messageData = {
    date : Date,
    message : string,
    messageID : string
  }
  
  const DetailInfo: React.FC<Props> = ({ ID , carName,  searchValue, searchByCar, searchByStartYear, searchByEndYear }) => {

    const _ilike : string = carName

    // fetch image url from cardata table 
    const {data} = useSuspenseQuery(SearchCarData,
        {
          variables: {  _ilike },
        }
        
    );
    // fetch other info to display 
    const _eq  : string = ID

    console.log("detailinfo---------------------------------", _eq)
      
    //get service history, purchase history 
    //search data by phID,shID,cvID
    const  data1  = useSuspenseQuery(Get_HistoryByID ,
      {
        variables: { _eq },
      }
      
    ); 

    console.log("detailinfo---------------------------------2",data1.data.carPurchaseHistory)

    //search message data by phID 
    const  data2  = useSuspenseQuery(Get_MessageByID,
      {
        variables: { _eq },
      }
      
    );

    console.log("detailinfi000000000000000000000000000",  searchValue,searchByStartYear,searchByEndYear,searchByCar  )
    

    //filter by the person who commented 
    
    

    //this will center the item 
    //<div className=" bg-slate-400 flex justify-center items-center ">
    //<div className=" " >{data1.data.carPurchaseHistory[0].Title}</div>
            
    //justify ---> adjust horizontal position 
    //item-center , ect..  ---> adjust vertical position 

    return (
    <div>
      <div className=" border-t-2 border-black  pt-4">
        <p>ID for this history , {ID}  </p>
        <div className="flex  gap-8">
          <Image src={ data.cardata[0].imageURL! } width={100} height={100}  alt="car picture" /> 

          <p> {data1.data.carPurchaseHistory[0].Car}</p>
          
          <p className=" pl-5"> 管理番号： {data1.data.carPurchaseHistory[0].clientID}</p>
        </div>
      
      <div className="py-5  grid   grid-cols-2">
        <p className="  font-semibold">商品名</p>
        <p className="  justify-self-end  ">  {data1.data.carPurchaseHistory[0].Price } $ </p>
      </div>
        
      </div>

      <div className=" border-t-2  border-slate-300  pt-4">
        <div className="py-5  grid   grid-cols-2">
          <p className=" py-5 font-semibold  ">メモ</p>
          <div className=" bg-slate-400 flex items-center ">
            
            <div className=" pl-4" >{data1.data.carPurchaseHistory[0].Title}</div>
            
          </div>
         
        </div>
        
        


      </div>
      <div className=" border-t-2 grid   grid-cols-2 border-slate-300  pt-4">

        <p className=" py-5 font-semibold  ">商品URL</p>



      </div>
      <div className=" border-t-2 grid   grid-cols-2 border-slate-300  pt-4 pb-4">

        <p className=" font-semibold ">取付車</p>
        <p>{data1.data.carPurchaseHistory[0].Car } </p> 


      </div>





      <div>
        <div className=" border-y-2 border-slate-300 py-5 font-semibold"> 
          管理コメント
        </div>
        <div className="flex flex-row gap-10">
          <div className=" bg-slate-400 rounded-lg w-10 " >  <MdOutlineImage size={42} />  </div>
          <form className=" bg-slate-400 rounded-lg grow  pt-1 pl-4"> add a comment   
          
          <input type="text" />
          
          </form>
        </div>
        {
        
        data2.data.messageData.map((numList,i) =>(
                    <div key={i}   className=" p-5 flex" >
                      <div>
                        <p className=" pl-4 font-light  text-black/50 "> Date posted :  {numList.date.toString()}  </p>
                        <p className=" pl-4 font-semibold "> comments :  { numList.message }  </p>
                      </div>
                      
                    </div>

                ))

        }
      </div>


    </div>

    )
    
  };
  
  export default DetailInfo;