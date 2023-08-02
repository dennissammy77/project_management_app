import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity} from 'react-native';
import { Image } from 'expo-image';

//utilities
import { AntDesign } from '@expo/vector-icons';
//assets

const Team_Member_Card = ({member}) => {

    const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

    const [show_details,set_show_details]=useState(false);
    const handle_show_details=()=>{
        set_show_details(!show_details)
    }

    return (
        <View className='p-4 w-full rounded-xl space-y-3 mr-2 bg-white mb-2 z-50'>
            <View className='items-center space-x-2 flex-row border-b-2 border-[#eee] pb-2'>
                <Image 
                    source={member?.Profile_image}
                    placeholder={blurhash}
                    className='w-10 h-10 rounded-full -ml-2' 
                    contentFit="cover"
                />
                <View className='items-center flex-row pr-2' onPress={handle_show_details}>
                    <View className='space-y-0'>
                        <Text className='text-lg font-bold text-secondary-color-2 w-60'>{member?.Name}</Text>
                        <Text className='text-md font-light text-[#615F69]'>{member?.department}</Text>
                    </View>
                    <View className='bg-slate-300 rounded-full -ml-2 p-1'>
                        {show_details?
                            <TouchableOpacity onPress={handle_show_details} >
                                <AntDesign name="caretup" size={14} color="grey"/>
                            </TouchableOpacity>
                            
                            :
                            <TouchableOpacity onPress={handle_show_details}>
                                <AntDesign name="caretdown" size={14} color="grey"/>
                            </TouchableOpacity>
                            
                        }
                    </View>
                </View>
            </View>
            {/**Details about member starts here */}
            {show_details?
                <View>
                    <Text>Role:   {member?.Role}</Text>
                    <Text>Email:  {member?.Email}</Text>
                    <Text>mobile: {member?.mobile}</Text>
                    <Text>tasks:  {member?.tasks}</Text>
                    <Text>status: {member?.status}</Text>
                </View>
                :
                null
            }
        </View>
    )
  }
  
  export default Team_Member_Card;