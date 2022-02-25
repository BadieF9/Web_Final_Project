import React, { useState } from 'react'
import Header from '../components/Header'
import{ useLocation, useNavigate } from 'react-router-dom'

const CreateMovieScreen = () => {
  let navigate = useNavigate()
  let location = useLocation()
  const [image, setImage] = useState(location.state ? location.state.img_url : '')
  const [name, setName] = useState(location.state ? location.state.name : '')
  const [desc, setDesc] = useState(location.state ? location.state.description : '')
  const [year, setYear] = useState(location.state ? location.state.year : '')

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      const data = new URLSearchParams();
      for (const pair of new FormData(document.getElementById('form'))) {
          data.append(pair[0], pair[1]);
      }

      let request;
      let response;

      if(location.state) {
        console.log(data)
        request = await fetch("http://localhost:8000/", {
          method: 'PUT',
          body: JSON.stringify({image, name, desc, year}),
          headers: {
            'Content-Type': 'application/json'
          }
         })
      } else {
        request = await fetch("http://localhost:8000/", {
          method: "POST",
          body: data
        })
      }
      response = await request
      if(response.status === 201)
        navigate('../')
    } catch(error) {
      console.error(error)
    }
  }

  return (
    <>
      <Header/>
      <div className='container' onSubmit={(e) => submitHandler(e)}>
        <form className='form-group' id="form">
          <label>Movie Name: <input type='text' name='title' className='form-control' onChange={(e) => setName(e.target.value)} value={name}/></label>
          <label>Description: <textarea type='text' name='description' className='form-control' onChange={(e) => setDesc(e.target.value)} value={desc}/></label>
          <label>Year of publication: <input type='number' name='year' className='form-control' onChange={(e) => setYear(e.target.value)} value={year}/></label>
          <label>Movie Photo Link: <input type='text' name='image' className='form-control' onChange={(e) => setImage(e.target.value)} value={image}/></label>
          <input type='submit' name='submit' value='submit' className='form-control btn-submit'/>
        </form>
      </div>
    </>
  )
}

export default CreateMovieScreen