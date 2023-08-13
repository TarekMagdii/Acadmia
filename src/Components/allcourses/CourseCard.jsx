import React from "react";
import { coursesCard } from "../../dummydata";
import "./courses.css"

const CourseCard = () => {
  return (
    <>
      <section className="courseCard">
        <div className="container grid2">
          {coursesCard.map((value) => {
            return (
              <div className="items">
                <div className="content flex">
                  <div className="left">
                    <div className="img">
                      <img src={value.cover} alt="" />
                    </div>
                  </div>
                  <div className="text">
                  <h1>{value.coursesName}</h1>
                  <div className="rate">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <label htmlFor="">(5.0)</label>
                  </div>
                  <div className="details">
                  {value.courTeacher.map((details)=> (
                    <>
                    <div className="box">
                    <div className="dimg">
                    <img src={details.dcover} alt=""/>
                    </div>
                    <div className="para">
                    <h4>{details.name}</h4>
                    </div>
                    </div>
                    <span>{details.totalTime}</span>
                    </>
                  ))}
                  </div>
                  </div>
                </div>
                <div className="price">
                <h3>{value.priceAll} / {value.pricePer}</h3>
                </div>
                <button className="outline-btn">ENPOLL NOW !</button>
              </div>
            ); 
          })}
        </div>
      </section>
    </>
  );
};

export default CourseCard;
