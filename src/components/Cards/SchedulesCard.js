import React from 'react'
import { Card, CardBody } from '@windmill/react-ui'

function SchedulesCard({ schedules, title }) {
    return (
        <>
            {schedules.length === 0 ? (
                <div>
                    <div className="title">No Schedules yet</div>
                </div>
            ) : (
                <>
                <p className="card-title schedule-header-title">{title} <span className='view-all'>View all</span></p>
                    {schedules.map((schedule) => (
                        <Card className="schedule-card" key={schedule.id}>
                            <CardBody className="items-center">
                                <div style={{ lineHeight: '30px' }}>
                                    <span className='schedule-title text-lg' style={{ backgroundColor: schedule.status === 'pending' ? '#505cd7' : '#40ba4b' }}>{schedule.title}</span>
                                    <p className="text-lg font-semibold text-gray-500 dark:text-gray-200">{schedule.location}</p>
                                    <p className="text-md font-semibold text-gray-600">{schedule.time}</p>
                                </div>
                            </CardBody>
                        </Card>
                    ))}
                </>
            )}
        </>
    )
}

export default SchedulesCard
