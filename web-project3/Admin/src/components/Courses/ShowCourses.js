import React from 'react'

const ShowCourses = ({course}) => {
    return (
        <>
            <div className="card"  style={{
                width:'300px',
                marginRight:'10px',
                marginTop:'40px',
                backgroundColor:'black',
                border:'none',
                color:'whitesmoke'}}>
                <img className="card-img-top" src={course.image} alt="" style={{height:'200px'}}></img>
                <div className="card-body">
                <h5 className="card-title"><a href={`/detail/${course._id}`} style={{textDecoration:'none'}}>{course.name}</a></h5>
                <p className="card-text"><small className="text-muted">{course.startDate}</small></p>
                </div>
            </div>
        </>
 
    )

}
export default ShowCourses