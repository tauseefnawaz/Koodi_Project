import React,{useState} from 'react'
import axios from 'axios'

const initialState = {
    name:'',
    description:'',
    teacherName: '',
    teacherIntroduction:'',
    teacherQualification: '',
    image:'',
    err: '',
    success: ''
}

const AddCourses = () => {
    const [course, setCourse] = useState(initialState)

    const {name,description,image,teacherName,teacherIntroduction, teacherQualification, err, success} = course
    
    const isEmpty = value => {
        if(!value) return true
        return false
    }

    const handleChangeInput = e => {
        const {name, value} = e.target
        setCourse({...course, [name]:value, err: '', success: ''})
    }

    const showErrMsg = (msg) => {
        return <div className="errMsg">{msg}</div>
    }
    
    const showSuccessMsg = (msg) => {
        return <div className="successMsg">{msg}</div>
    }

    const handleSubmit = async e => {
        e.preventDefault()
        if(isEmpty(name) || isEmpty(description) || isEmpty(teacherName) || isEmpty(teacherIntroduction) ||isEmpty(teacherQualification))
            return setCourse({...course, err: "Please fill in all fields.", success: ''})
        try {
            const res = await axios.post('/course/add', {
                name,
                description,
                teacherName,
                teacherIntroduction, 
                teacherQualification,
                image
            });
            setCourse({...course, err: '', success: res.data.msg})
        } catch (err) {
            err.response.data.msg && setCourse({...course, err: err.response.data.msg, success: ''})
        }
    }
    
    return (
        <div className="container w-50 mt-4">
            <h2 className="text-center">ADD NEW COURSE</h2>
            {err && showErrMsg(err)}
            {success && showSuccessMsg(success)} 
            <form onSubmit={handleSubmit} encType='multipart/form-data'>
                <h4>Course Detail</h4>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Enter Name ..." 
                    value={name} name="name" onChange={handleChangeInput}/>
                </div>

                <div className="mb-3">
                    <textarea type="text" className="form-control" placeholder="Enter Description ..." 
                    value={description} name="description" onChange={handleChangeInput} rows="3"/>
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Enter Image Path ..." 
                    value={image} name="image" onChange={handleChangeInput} rows="3"/>
                </div>
                
                <hr></hr>
                <h4>Teacher Detail</h4>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Enter Teacher Name ..." 
                    value={teacherName} name="teacherName" onChange={handleChangeInput}/>
                </div>

                <div className="mb-3">
                    <textarea type="text" rows="3" className="form-control" placeholder="Teacher Introduction..." 
                    value={teacherIntroduction} name="teacherIntroduction" onChange={handleChangeInput}/>
                </div>

                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Enter Qualification ..." 
                    value={teacherQualification} name="teacherQualification" onChange={handleChangeInput}/>
                </div>

                <div className="mb-3 justify-content-end d-flex">
                    <button type="submit" className="btn btn-dark rounded">Sing Up</button>
                </div>

            </form>
        </div>
    )
}

export default AddCourses
