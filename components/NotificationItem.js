import React, {useState, useEffect} from 'react';
import { View, Text } from 'native-base';
import { TouchableOpacity } from 'react-native';
import nbStyles from '../style/nb-styles';

const NotificationItem = ({topic, info, date}) => {
    const [showFullInfo, setShowFullInfo] = useState(false);
    const [processedInfo, setProcessedInfo] = useState(info);
    const [infoCut, setInfoCut] = useState(false);

    useEffect(() => {
        let newInfo = info;
        if(newInfo?.length >= 70){
            newInfo = newInfo.slice(0, 70);
            setProcessedInfo(newInfo+'...');
            setInfoCut(true);
        }
    })
    
    return (
        <TouchableOpacity
            onPress={()=>setShowFullInfo(prev=>!prev)}
        >
            <View
                {...nbStyles.notificationItem.container}
            >
                <Text {...nbStyles.notificationItem.topic}>{topic}</Text>
                <Text {...nbStyles.notificationItem.info}>
                    {showFullInfo?info:processedInfo}
                    {infoCut && !showFullInfo && <Text {...nbStyles.textMuted}> See More</Text>}
                </Text>
                <Text {...nbStyles.notificationItem.date}>{date}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default NotificationItem;