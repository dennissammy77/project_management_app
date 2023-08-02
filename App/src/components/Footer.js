import { View, Text, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import { profile } from '../../assets';

const Footer = () => {
    const navigation =useNavigation();
    const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
  return (
    <View className='bg-[#fff] items-center justify-between p-2 pr-6 pl-6 fixed bottom-0 left-0 right-0 flex-row'>
        <TouchableOpacity onPress={(()=>{navigation.navigate('Home')})}>
            <Octicons name="home" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={(()=>{navigation.navigate('Projects')})}>
            <Ionicons name="file-tray-full-outline" size={26} color="black" />
        </TouchableOpacity>
        <TouchableOpacity className='bg-secondary-color-1 p-4 rounded-full'>
            <Ionicons name="md-add-sharp" size={26} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
            <Feather name="file" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
            {profile?
                <Image 
                    source={profile}
                    placeholder={blurhash}
                    className='w-10 h-10 rounded-full -ml-2' 
                    contentFit="cover"
                />
                :
                <MaterialIcons name="account-circle" size={32} color="black" />
            }
        </TouchableOpacity>
    </View>
  )
}

export default Footer;
