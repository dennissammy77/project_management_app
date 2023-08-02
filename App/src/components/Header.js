import React from 'react'
import { View, Image} from 'react-native';

//icons
import { Feather,MaterialCommunityIcons } from '@expo/vector-icons';
//assets
import { profile } from '../../assets';

const Header = () => {
    return (
        <View className='flex-row items-center w-full justify-end p-4 mt-6 space-x-4'>
            <View className='bg-white p-2 rounded-full'>
                <MaterialCommunityIcons name="bell" size={20} color="#232229" />
            </View>
        </View>
    )
  }
  
  export default Header;