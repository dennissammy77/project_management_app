import React, { useEffect, useState } from 'react'
import { View, Text} from 'react-native';
import { Image } from 'expo-image';

//utilities
import * as Progress from 'react-native-progress';
import { AntDesign } from '@expo/vector-icons';
//assets

const Task_Card = ({task}) => {
    let [progressvalue,set_progressvalue]=useState(0);
    progressvalue = task?.progress/100;
    //console.log(progressvalue)

    const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

    return (
        <View className='p-4 w-full rounded-xl space-y-3 mr-2 bg-white mb-2'>
            <View className='items-center justify-between flex-row border-b-2 border-[#eee] pb-2'>
                <View className='space-y-1'>
                    <Text className='text-md font-bold text-secondary-color-2 w-60'>{task?.title}</Text>
                    <Text className='text-md font-light text-[#615F69]'>{task?.project_name}</Text>
                </View>
                <Progress.Pie progress={progressvalue} size={35} color={'#714DD9'}/>
            </View>
            <View className='flex-row justify-between items-center'>
                <View className='space-y-2 '>
                    <View className='space-x-2 flex-row items-center'>
                        <AntDesign name="clockcircleo" size={16} color="grey" />
                        <Text className='text-xs'>04-06-2023</Text>
                    </View>
                    <Text className='text-white text-md font-semibold p-2 rounded-md w-30 bg-[#B399FF]'>In progress</Text>
                </View>
                <View className='space-y-2'>
                    <View className='flex-row items-center -space-x-2'>
                        {task?.members?.slice(0,2).map((member,index)=>{
                            return(
                                <Image 
                                    source={member}
                                    placeholder={blurhash}
                                    className='w-10 h-10 rounded-full -ml-2' 
                                    contentFit="cover"
                                    key={index}
                                />
                            )
                        })}
                        {task?.members?.length > 3 ? 
                            <Text className='-ml-2 bg-white rounded-full p-3 font-bold -pl-2'>+{task?.members?.length - 2}</Text>
                            :
                        null
                        }
                    </View>
                </View>            
            </View>
        </View>
    )
  }
  
  export default Task_Card;