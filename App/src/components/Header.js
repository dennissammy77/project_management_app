import React from 'react'
import { View, Image} from 'react-native';

//icons
import { Feather,MaterialCommunityIcons } from '@expo/vector-icons';
//assets
import { profile } from '../../assets';

const Header = () => {
    return (
        <View className='flex-row items-center align-middle w-full justify-between'>
            <Feather name="sidebar" size={28} color="#232229" />
            <View className='flex-row items-center space-x-4'>
                <MaterialCommunityIcons name="bell" size={20} color="#232229" />
                <Image source={profile} className='w-10 h-10 rounded' resizeMode='contain'/>
            </View>
        </View>
    )
  }
  
  export default Header;