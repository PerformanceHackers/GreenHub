import React, { useEffect, useState } from 'react'

const list = [
 {
 id:1,
 imageUrl:1,
 Name:"Name of Project",
 cat:"Kitchen"
},
 {
 id:2,
 imageUrl:2,
 Name:"Name of Project",
 cat:"living"
},
 {
 id:3,
 imageUrl:3,
 Name:"Name of Project",
 cat:"Kitchen"
},
 {
 id:4,
 imageUrl:4,
 Name:"Name of Project",
 cat:"wardrobe"
},
 {
 id:5,
 imageUrl:5,
 Name:"Name of Project",
 cat:"wardrobe"
},
 {
 id:6,
 imageUrl:6,
 Name:"Name of Project",
 cat:"Kitchen"
},
 {
 id:7,
 imageUrl:7,
 Name:"Name of Project",
 cat:"living"
// },
//  {
//  id:8,
//  imageUrl:8,
//  Name:"Name of Project",
//  cat:"wardrobe"
// },
//  {
//  id:9,
//  imageUrl:9,
//  Name:"Name of Project",
//  cat:"living"
},
]
function Portfolio() {

const [currentState , setCurrentState] = useState("all")
const [displayList , setDisplayList] = useState([])

const handleChange = (name) => {

 setCurrentState(i => name)

}

useEffect(() => {
 if(currentState === "all"){

  setDisplayList( i => [...list])
 }else {
  setDisplayList(i => list.filter(x => x.cat === currentState))
 }
},[currentState ])
 return (
  <section id="portfolio" className="portfolio">
  <div className="container">
    <div className="row text-center mt-5">
      <h1 className="display-3 fw-bold text-capitalize">Latest work</h1>
      <div className="heading-line"></div>
      <p className="lead">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint porro temporibus distinctio.
      </p>
    </div>

    <div className="row mt-5 mb-4 g-3 text-center">
      <div className="col-md-12">
        <button  onClick={() => handleChange("all")}   className={`btn btn-outline-primary ${currentState === "all" ? "active" : ""}`}  type="button">All</button>
        <button  onClick={() => handleChange("wardrobe")} className={`btn btn-outline-primary ${currentState === "wardrobe" ? "active" : ""}`} type="button">wardrobe</button>
        <button onClick={() => handleChange("Kitchen")}  className={`btn btn-outline-primary ${currentState === "Kitchen" ? "active" : ""}`} type="button">Kitchen</button>
        <button  onClick={() => handleChange("living")} className={`btn btn-outline-primary ${currentState === "living" ? "active" : ""}`} type="button">Living Room</button>
      </div>
    </div>

 
    <div className="row">
     {
      displayList.length >0 && displayList.map((i) => {
       return <div key={i.id} className="col-lg-4 col-md-6">
       <div className="portfolio-box shadow">
         <img src={require(`../../assets/images/portfolio/${i.cat} ${i.imageUrl}.jpg`).default} alt={`${i.cat} ${i.imageUrl} `}  className="img-fluid"/>
         <div className="portfolio-info">
           <div className="caption">
             <h4>{i.Name}</h4>
             <p>{i.cat}</p>
           </div>
         </div>
       </div>
     </div>
      })
     }
      
      
    
    </div>
  </div>
</section>
 )
}

export default Portfolio
