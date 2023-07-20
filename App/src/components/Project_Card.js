import React from 'react'
import { View, Image, Text} from 'react-native';

//icons
import { Entypo } from '@expo/vector-icons';
//assets
import { profile } from '../../assets';

const Project_Card = ({bg}) => {
    return (
        <View className='p-2 w-60 rounded-md space-y-2 mr-2' style={{backgroundColor:bg}}>
            <View className='space-x-2 flex-row'>
                <Image source={profile} className='w-10 h-10 rounded' resizeMode='contain'/>
                <Text className='text-2xl font-bold text-white'>Prokemia</Text>
            </View>
            <View className='space-y-3'>
                <Text className='text-white font-medium text-xl'>The Marketplace for Ingredients, Polymers and Chemistry.</Text>
                <View className='flex-row space-x-2'>
                    <Entypo name="dot-single" size={12} color="white" />
                    <Text className='text-white font-medium'>Create a Documentation for the user guide and the codebase</Text>
                </View>
                <View className='flex-row space-x-2'>
                    <Entypo name="dot-single" size={12} color="white" />
                    <Text className='text-white font-medium'>Create a Documentation for the user guide and the codebase</Text>
                </View>
                <View className='flex-row space-x-1'>
                    <Image source={profile} className='w-10 h-10 rounded-xl' resizeMode='contain'/>
                    <Image source={profile} className='w-10 h-10 rounded-xl' resizeMode='contain'/>
                    <Image source={profile} className='w-10 h-10 rounded-xl' resizeMode='contain'/>
                </View>
            </View>
        </View>
    )
  }
  
  export default Project_Card;