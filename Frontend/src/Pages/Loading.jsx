import React from 'react'
import LoadingImg from './load.gif'

const Loading = () => {
  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
    <div> <img src={LoadingImg} width="100"alt="" /></div>
    </div>
  )
}

export default Loading