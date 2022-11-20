import { Button, Card } from 'react-bootstrap'
import { FaEdit } from 'react-icons/fa'
import {GoDiffRemoved} from "react-icons/go"
import { Link } from 'react-router-dom'

function PoolItem({title,price,poolId}) {
  return (
    <>
    <Card bg='dark' className='border border-3 border-success text-center position-relative'>
      <div className='fs-2 position-absolute iconsDelEdi'>
      <Link to={`/dashboard/edit/${poolId}`}>
      <FaEdit className='text-primary' />
      </Link>
        <GoDiffRemoved className='text-danger edit mx-3' />
      </div>
        <Card.Header className='fs-1'>{title}</Card.Header>
        <Card.Body>
            <Card.Title className='text-success py-2 fw-bold fs-3'>Price - $ {price}</Card.Title>
            <Link to={`/igo/details/${poolId}`}>
            <Button variant='outline-warning' className='w-50'>View Pool</Button>
            </Link>
        </Card.Body>
    </Card>
    </>
  )
}

export default PoolItem