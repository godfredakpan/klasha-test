import React from 'react'
import PageTitle from '../components/Typography/PageTitle'
import { Card } from '@windmill/react-ui'
import GreetingsCard from '../components/Cards/GreetingsCard'
import ReminderCard from '../components/Cards/ReminderCard'
import SportGirl from '../assets/img/sportGirl.svg';
import DatePicker from 'sassy-datepicker';
import '../assets/css/bootstrap.min.css';
import SchedulesCard from '../components/Cards/SchedulesCard'
import WorkResultCard from '../components/Cards/WorkResultCard'
import UsersCard from '../components/Cards/UsersCard'
import mockData from '../data/mockData.json';

function Dashboard() {
  const { users, schedules, greetings, user } = mockData.data;
  const onChange = (date) => {
    console.log(date.toString());
  };

  return (
    <>
      <PageTitle>Dashboard</PageTitle>
      <div className="row col-md-12">
        <div className="col-12 col-md-8">
          <div className="col-md-8 card-margin">
            <GreetingsCard title={'Good Morning, ' + user.name} value={greetings} image={SportGirl} />
          </div>

          <div className="col-md-4 card-margin">
            <ReminderCard title="Reminder" />
          </div>

          <div className="col-md-5 card-margin">
            <UsersCard users={users} title="Contacts" />
          </div>

          <div className="col-md-7 card-margin">
            <WorkResultCard title="Half Year Work Results" />
          </div>
        </div>

        <div className="col-12 col-md-4 scheduler">
            <DatePicker allowTransparency={true} className='dateScheduler' onChange={onChange} /><br/>
            <SchedulesCard title="Schedules" schedules={schedules} />
        </div>
      </div>
    </>
  )
}

export default Dashboard
