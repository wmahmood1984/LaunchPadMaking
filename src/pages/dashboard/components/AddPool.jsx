import React from 'react'
import { Card } from 'react-bootstrap'
import {FaPlusCircle} from 'react-icons/fa'
import { Link } from 'react-router-dom'

function AddPool() {
  return (
    <>
    <Card bg='secondary' className='mt-5 border border-3 border-success w-50 mx-auto text-center text-light py-3'>
    <Link to='/dashboard/create-pool'>
        <FaPlusCircle className='mx-auto fs-1 mb-3' />
        <h3>Add Pool</h3>
    </Link>
    </Card>
    </>
  )
}

export default AddPool