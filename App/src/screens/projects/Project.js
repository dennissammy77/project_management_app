import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import PageHeader from '../../components/Page_Header'
import { Image } from 'expo-image';
import { AntDesign } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';
const Project = () => {
    const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
  
  return (
    <SafeAreaView className="flex-1 justify-start bg-background-color-1 px-6 py-8 space-y-4 ">
        <PageHeader page_title={'project'}/>
        <View className=''>
            <Text className='text-4xl font-medium'>Prokemia</Text>
        </View>
        <View className='space-y-2'>
            <Text className='text-lg font-medium text-[#565659]'>Team Members</Text>
            <View className='justify-between flex-row items-center'>
                <View className='flex-row items-center -space-x-2 ml-2'>
                    {members?.slice(0,2).map((member,index)=>{
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
                    {members?.length > 3 ? 
                        <Text className='-ml-2 bg-white rounded-full p-3 font-bold -pl-2'>+{members?.length - 2}</Text>
                        :
                    null
                    }
                </View>
                <View className='flex-row items-end space-x-2'>
                    <Progress.Pie progress={0.8} size={45} color={'#714DD9'}/>
                    <Text className='font-medium text-lg'>80%</Text>
                </View>
            </View>
        </View>
        <View className='flex-row space-x-6 items-center'>
            <View className='flex-row space-x-2 items-center'>
                <AntDesign name="calendar" size={24} color="black" />
                <Text className='text-md font-medium text-[#565659]'>05-07-2023</Text>
            </View>
            <Text className='text-medium'>to</Text>
            <View className='flex-row space-x-2 items-center'>
                <AntDesign name="calendar" size={24} color="black" />
                <Text className='text-md font-medium text-[#565659]'>05-08-2023</Text>
            </View>
        </View>
        <View className='space-y-2'>
            <Text className='text-lg font-medium text-[#565659]'>Description</Text>
            <Text className='font-light text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </Text>
        </View>
    </SafeAreaView>
  )
}

export default Project;

const members = [
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
  ]