import React from 'react'
import {useParams} from 'react-router-dom'

function ViewBoard({data}) {
  const params = useParams()
  console.log(params)
  console.log(data)
  return (
    <>
      <div className='viewBoard'>
        title
      </div>
      <div>
        content
      </div>
      <div>
        comment
      </div>
      viewBoard  
    </>
  )
}

export default ViewBoard