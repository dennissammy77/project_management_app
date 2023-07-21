import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity} from 'react-native';
import { Image } from 'expo-image';

//utilities
import ProgressBar from 'react-native-progress/Bar';
import { useNavigation } from '@react-navigation/native';
//assets

const Project_Card = ({project,componentbg ,focus_bg,width, progress_bar_unfilled_bg}) => {
    const navigation = useNavigation();
    //console.log(project)
    let [progressvalue,set_progressvalue]=useState(0);
    progressvalue = project?.progress/100;
    //console.log(progressvalue)


    const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

    return (
        <View className='p-4 rounded-xl space-y-2 m-1' style={{backgroundColor:componentbg ,width:width}}>
            <View className='space-x-2 flex-row items-center mb-2'>
                <Text className='text-2xl font-bold text-secondary-color-2'>{project?.name}</Text>
            </View>
            <View className='space-x-2 flex-row items-center'>
                <ProgressBar progress={progressvalue} width={175} color={focus_bg} animated={false} borderWidth={0} unfilledColor={progress_bar_unfilled_bg}/>
                <Text className='font-bold text-secondary-color-2'>{project?.progress? project?.progress : 0}%</Text>
            </View>
            <View className='flex-row justify-between items-center'>
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
                <TouchableOpacity onPress={(()=>{navigation.navigate('Project')})}>
                    <Text className='font-medium text-white p-2 rounded-full' style={{backgroundColor:focus_bg}}>view details</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
  }
  
  export default Project_Card;