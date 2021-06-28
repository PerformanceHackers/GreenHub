import React, { useEffect, useState } from 'react'

const list = [
 {
 id:1,
 imageUrl:1,
 Name:"Name of Project",
 cat:"kitchen"
},
 {
 id:2,
 imageUrl:2,
 Name:"Name of Project",
 cat:"livingRoom"
},
 {
 id:3,
 imageUrl:3,
 Name:"Name of Project",
 cat:"kitchen"
},
 {
 id:4,
 imageUrl:4,
 Name:"Name of Project",
 cat:"room"
},
 {
 id:5,
 imageUrl:5,
 Name:"Name of Project",
 cat:"room"
},
 {
 id:6,
 imageUrl:6,
 Name:"Name of Project",
 cat:"kitchen"
},
 {
 id:7,
 imageUrl:7,
 Name:"Name of Project",
 cat:"livingRoom"
},
 {
 id:8,
 imageUrl:8,
 Name:"Name of Project",
 cat:"room"
},
 {
 id:9,
 imageUrl:9,
 Name:"Name of Project",
 cat:"livingRoom"
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
        <button  onClick={() => handleChange("room")} className={`btn btn-outline-primary ${currentState === "room" ? "active" : ""}`} type="button">Room</button>
        <button onClick={() => handleChange("kitchen")}  className={`btn btn-outline-primary ${currentState === "kitchen" ? "active" : ""}`} type="button">Kitchen</button>
        <button  onClick={() => handleChange("livingRoom")} className={`btn btn-outline-primary ${currentState === "livingRoom" ? "active" : ""}`} type="button">Living Room</button>
      </div>
    </div>

 
    <div className="row">
     {
      displayList.length >0 && displayList.map((i) => {
       return <div key={i.id} className="col-lg-4 col-md-6">
       <div className="portfolio-box shadow">
         <img src={require(`../../assets/images/portfolio/portfolio-${i.imageUrl}.jpg`).default} alt={`portfolio ${i.imageUrl} `} title="portfolio 1 picture" className="img-fluid"/>
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
