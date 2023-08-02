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
        <View className='flex-row items-center align-middle w-full justify-between mt-10 p-4'>
            <Ionicons name="arrow-back" size={24} color="black"  onPress={handleRouteToPreviousPage}/>
            {page_title == 'projects' ?
                <View className='items-center justify-center bg-secondary-color-1 p-2 rounded-md'>
                    <Text className='text-xl font-medium text-white'>Add project</Text>
                </View>
                :
                null
            }
            {page_title == 'project' ?
                <Text className='text-lg text-white rounded-md p-2 bg-secondary-color-1'>Add task</Text>
                :
                null
            }
            {page_title == 'task' ?
                <View className='items-center justify-center bg-[#D9D9D9] border-2 border-[#fff] p-2 rounded-md'>
                    <Text className='text-md font-medium text-secondary-color-2'>mark as completed</Text>
                </View>
                :
                null
            }
        </View>
    )
  }
  
export default PageHeader;