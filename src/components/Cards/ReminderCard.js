import React, { useState } from 'react'
import { Card, CardBody } from '@windmill/react-ui'
import { Button } from '@windmill/react-ui'
import { AddIcon } from '../../icons'

function ReminderCard({ title, value, image }) {
  const [toggle, setToggle] = useState(true);
  const [openingTime, setOpeningTime] = useState(true);
  const toggleClass = ' transform translate-x-5'; //toggle transform effect 
  const backgroundColor = ' bg-gray-500 bg-green-500' //toggle background effect 
  return (
    <Card className="reminder-card text-white bg-dark-card" colored>
      <CardBody className="items-right">
        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400 card-title">{title}</p>
        <div className='mb-2 flex' onClick={() => {
          setOpeningTime(!openingTime);
        }}>
          <div
            className={"md:w-14 md:h-7 w-12 h-6 flex items-center bg-gray-500 toggler rounded-full p-1 cursor-pointer" + (openingTime ? null : backgroundColor)}
          >
            <div
              className={"bg-white md:w-6 md:h-6 h-5 w-5 rounded-full transform" + (openingTime ? null : toggleClass)}>
            </div>
          </div>
          <p className="text-white training-time">Training session 10:00 am</p>
        </div>

        <div className='mb-2 flex' onClick={() => {
          setToggle(!toggle);
        }}>
          <div
            className={"md:w-14 md:h-7 w-12 h-6 flex items-center bg-gray-500 toggler rounded-full p-1 cursor-pointer" + (toggle ? null : backgroundColor)}
          >
            <div
              className={"bg-white md:w-6 md:h-6 h-5 w-5 rounded-full transform" + (toggle ? null : toggleClass)}>
            </div>
          </div>

          <p className="text-white training-time">Training session 10:00 pm</p>
        </div>
      </CardBody>

      <div className='mx-auto flex center items-center ' style={{marginTop: '30px'}}>
        <Button className="btn-outline-default mx-auto footer-btn" iconLeft={AddIcon}>
          <span>Add new</span>
        </Button>
      </div>
    </Card>
  )
}

export default ReminderCard
