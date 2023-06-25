import { ScheduleComponent ,Day,Week, WorkWeek,Month,Agenda, Inject } from '@syncfusion/ej2-react-schedule'
import React from 'react'
import {DataManager, WebApiAdaptor} from '@syncfusion/ej2-data'
const Calender = () => {
  let calendarId = "en-gb.np#holiday@group.v.calendar.google.com"
  let apiAccessKey = "AIzaSyAkuVU34J2B7ED8gpM-2hLQ4CRvT8mq4vk"
  let remoteData = new DataManager({
    url: 'https://www.googleapis.com/calendar/v3/calendars/'+ calendarId +'/events?key='+ apiAccessKey,
    adaptor: new WebApiAdaptor(),
    crossDomain:true
  })
  function onDataBinding(e){
    let items = e.result;
    let schedulerData = []
    if(items.length > 0){
      for(let event of items){
        let isAllDay = !event.start.dateTime;
        let start = event.start.dateTime;
        let end = event.end.dateTime;
        if(isAllDay){
          start = event.start.date;
          end = event.end.data;
        }
        schedulerData.push({
          Id: event.id,
          Subject:event.summary,
          StartTime: new Date(start),
          EndTime : new Date(end),
          IsAllDay : isAllDay
      })
      }
    }
  }
  
  
  return (
    <>
      <ScheduleComponent width={'100%'} height={'650px'} currentView='Month' eventSettings={{dataSource:remoteData}} dataBinding={onDataBinding}>
          <Inject services={[Day, Week, WorkWeek,Month,Agenda]}>

          </Inject>
          
      </ScheduleComponent>
    </>
  )
}

export default Calender 