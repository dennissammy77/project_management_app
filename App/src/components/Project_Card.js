import React, { useEffect, useState } from 'react'
import { View, Text} from 'react-native';
import { Image } from 'expo-image';

//utilities
import ProgressBar from 'react-native-progress/Bar';
import { AntDesign } from '@expo/vector-icons';
//assets

const Project_Card = ({project}) => {
    //console.log(project)
    let [progressvalue,set_progressvalue]=useState(0);
    progressvalue = project?.progress/100;
    //console.log(progressvalue)


    const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

    return (
        <View className='p-4 w-60 rounded-xl space-y-2 mr-2 bg-white'>
            <View className='space-x-2 flex-row items-center'>
                <Text className='text-2xl font-bold text-secondary-color-2'>{project?.name}</Text>
            </View>
            <View className='space-y-8'>
                <Text className='text-[#37353D] text-xl h-20'>{project?.description}</Text>
                <View className='flex-row items-center -space-x-2'>
                    {project?.members?.slice(0,2).map((member,index)=>{
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
                    {project?.members?.length > 3 ? 
                        <Text className='-ml-2 bg-white rounded-full p-3 font-bold -pl-2'>+{project?.members?.length - 2}</Text>
                        :
                    null
                    }
                </View>
            </View>
            <View className='space-x-2 flex-row items-center'>
                <ProgressBar progress={progressvalue} width={175} color={'#714DD9'} animated={false} borderWidth={0} unfilledColor={'#e3e3e3'}/>
                <Text className='font-bold text-secondary-color-2'>{project?.progress? project?.progress : 0}%</Text>
            </View>
            <View className='space-x-2 flex-row items-center'>
                <AntDesign name="calendar" size={16} color="#232229" />
                <Text className='font-medium text-secondary-color-2'>{project?.duedate? project?.duedate : '-'}</Text>
            </View>
            
        </View>
    )
  }
  
  export default Project_Card;