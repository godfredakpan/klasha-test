import React from 'react'
import { Card, CardBody } from '@windmill/react-ui'
import Image from '../elements/Image'
import { OptionIcon } from '../../icons'

function UsersCard({ users, title }) {
  return (
    <Card colored className="text-white bg-dark-card">
      <CardBody>
        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400 card-title">{title} <span className='view-all'>View all</span></p>
        <>
          {users.length === 0 ? (
            <p className="title">{'No Schedules yet'}</p>
          ) : (
            <>
              <table className="min-w-full divide-gray-200" width={'100%'}>
                <tbody className="divide-gray-200" style={{ lineHeight: '30px' }}>
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td>
                        <Image
                          src={user.avatar}
                          alt={user.name}
                        />
                      </td>
                      <td className="user-name-role ">
                        <h1 className="text-lg text-white">{user.name}</h1>
                        <div className="text-sm leading-5 text-gray-500">{user.role}</div>
                      </td>
                      <td className="option-btn">
                        <OptionIcon onClick={() => alert('Clicked ' + user.name)} width={20} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
        </>
      </CardBody>
    </Card>
  )
}

export default UsersCard
