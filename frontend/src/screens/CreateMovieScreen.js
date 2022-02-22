import React, { useState } from 'react'
import Header from '../components/Header'
import{ useNavigate } from 'react-router-dom'

const CreateMovieScreen = () => {
  const [image, setImage] = useState()
  const [name, setName] = useState()
  const [desc, setDesc] = useState()
  const [year, setYear] = useState() 
  let navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      const data = new URLSearchParams();
      for (const pair of new FormData(document.getElementById('form'))) {
          data.append(pair[0], pair[1]);
      }

      const request = await fetch("http://localhost:8000/", {
        method: "POST",
        body: data
      })
      const response = await request
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