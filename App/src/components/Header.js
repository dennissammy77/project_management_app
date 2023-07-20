import React from 'react'
import { View, Image} from 'react-native';

//icons
import { Feather,MaterialCommunityIcons } from '@expo/vector-icons';
//assets
import { profile } from '../../assets';

const Header = () => {
    return (
        <View className='flex-row items-center align-middle w-full justify-between mt-4'>
            <Feather name="sidebar" size={28} color="#232229" />
            <View className='flex-row items-center space-x-4'>
                <View className='bg-white p-2 rounded-full'>
                    <MaterialCommunityIcons name="bell" size={20} color="#232229" />
                </View>
                <Image source={profile} className='w-10 h-10 rounded-full' resizeMode='contain'/>
            </View>
        </View>
    )
  }
  
  export default Header;