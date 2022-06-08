import React, { useState } from 'react'
import { Heading, View, FlatList } from "native-base";
import NotificationItem from '../components/NotificationItem';
import nbStyles from '../style/nb-styles';

export default function () {
  const [notifications] = useState([
    {
      i: 1,
      topic: "Borrow power success.",
      info: "You just successfully borrowed 220.12 AMPH of meter units; it will be deducted from your next purchase of units.",
      date: "1-12-2021 | 12:49pm"
    },
    {
      i: 2,
      topic: "Airtime to units conversion failed.",
      info: "You just tried converting airtime to meter units but it seems like you do not have as much airtime as you specified.",
      date: "1-12-2021 | 12:49pm"
    },
    {
      i: 3,
      topic: "Usage Alert.",
      info: "Your meter seems to be using up power too quickly, hope you are aware of that.",
      date: "1-12-2021 | 12:49pm"
    },
    {
      i: 4,
      topic: "Meter suspension success.",
      info: "You just suspended your meter from disbursting power. There is no more power supply in your building.",
      date: "1-12-2021 | 12:49pm"
    },
    {
      i: 5,
      topic: "Meter suspension raised.",
      info: "The suspension set on your building has been raised.",
      date: "1-12-2021 | 12:49pm"
    }
  ])
  return (
    <View>
      <Heading {...nbStyles.notificationHeading}>Notifications</Heading>
      <FlatList
        data={notifications}
        keyExtractor={item => item.i}
        renderItem={({item})=>(
          <NotificationItem 
            topic={item.topic}
            info={item.info}
            date={item.date}
          />
        )}
      >
        
        
      </FlatList>
    </View>
  );
}
