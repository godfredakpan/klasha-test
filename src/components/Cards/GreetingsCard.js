import React from 'react'
import { Card, CardBody } from '@windmill/react-ui'
import Image from '../elements/Image'
import { Button } from '@windmill/react-ui'
import { AddIcon } from '../../icons'

function GreetingsCard({ title, value, image }) {
  return (
    <Card colored className="text-white greetings-card bg-green-custom">
      <CardBody>
        <div className='col-md-12'>
          <div className='col-md-8'>
            <p className="card-title">{title}</p><br/>
            <p className="card-description">{value}</p>
          </div>
        </div>
        <div style={{position:'absolute'}} className='col-md-12 greeting-img-card'>
          <Image
            className={'greeting-image'}
            src={image}
            aria-hidden="true"
          />
          </div>
        <div className='col-md-12 footer-btn'>
          <Button layout="default" className="btn-default btn-primary" iconLeft={AddIcon}>
            <h2>Create event</h2>
          </Button>
        </div>
      </CardBody>
    </Card>
  )
}

export default GreetingsCard
