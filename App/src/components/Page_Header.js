import React from 'react'
import { Text, View } from 'react-native';

//icons
import { Ionicons } from '@expo/vector-icons';
//assets
import { useNavigation } from '@react-navigation/native';

const PageHeader = ({page_title}) => {
    const navigation = useNavigation();

    const handleRouteToPreviousPage = () => {
        navigation.goBack();
    }
    return (
        <View className='flex-row items-center align-middle w-full justify-between mt-6'>
            <Ionicons name="arrow-back" size={24} color="black"  onPress={handleRouteToPreviousPage}/>
            {page_title == 'projects' ?
                <View className='items-center justify-center bg-secondary-color-1 p-2 rounded-md'>
                    <Text className='text-xl font-medium text-white'>Add project</Text>
                </View>
                :
                null
            }
            {page_title == 'project' ?
                <View className='items-center justify-center bg-[#D9D9D9] border-2 border-[#fff] p-2 rounded-md'>
                    <Text className='text-lg font-medium text-secondary-color-2'>mark as completed</Text>
                </View>
                :
                null
            }
        </View>
    )
  }
  
export default PageHeader;