import React, { useState } from "react"
import Api from './Api';
import "../Style/search.css"


export default function Search(){
    const [name , setname] = useState("");
     const [data , setData] = useState([]);
     const [select , setSelect] = useState(null);
   async function formSubmit(e){
     e.preventDefault();
     const response = await Api.get("/search",{
        params:{
            q:name
        }
     });
     setData(response.data.items);
     setSelect(response.data.items[0])
     console.log(response.data.items[0])

    }

    return<>

    <form onSubmit={formSubmit}>
        <div id="hold"> 
    <input type="text" id="searchBar" placeholder="search the name of the vedio"  onChange={(e)=>setname(e.target.value)}/>
    <button id="search">Search</button>
    </div>
    </form>


    {/* showing on screen that vedios */}
    <div className="dsplay-blogs">
        <div className="leftSide">
          <div>
            { select &&<><iframe width="820" height="440" src={`https://www.youtube.com/embed/${select.id.videoId}`}  allowfullscreen ></iframe>
           <h3>{select.snippet.title}</h3></> }
          </div>
        </div>
        <div className="rightSide">
        {data.length>0 ?data.map((d, i)=>{
             return<div key={i}>
              <iframe width="320" height="240" src={`https://www.youtube.com/embed/${d.id.videoId}`}  allowfullscreen  onClick={()=>setSelect(d)}>
           </iframe>
           <h3>{d.snippet.title}</h3>
             </div>
        }):<></>}
        </div>
    </div>

   
    </>
}