import React, { useState } from 'react'
import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar';

//icons
import { AntDesign } from '@expo/vector-icons';
//assets
import { profile } from '../../assets';
//components
import Header from '../components/Header';
import Project_Card from '../components/Project_Card';

const HomeScreen = () => {
  const [search_value,set_search_value]=useState('');

  return (
    <SafeAreaView className="flex-1 justify-start bg-white px-6 py-8 space-y-4 ">
      <Header/>
      <View className='w-full '>
        <Text className='text-2xl text-secondary-color-2'>Hello,</Text>
        <Text className='text-3xl font-bold text-secondary-color-2'>Sammy</Text>
      </View>
      {/**Search Component starts here*/}
        <SearchComponent search_value={search_value} set_search_value={set_search_value}/>
      {/**Search Component ends here*/}

      {/**Projects data starts here */}
      <View className='w-full h-80 space-y-2'>
        <View className='flex-row w-full justify-between items-center'>
          <Text className='text-2xl font-bold'>Projects</Text>
          <Text className='text-sm font-medium'>see all</Text>
        </View>
        <ScrollView 
          horizontal
          className='flex-row space-x-2'
        >
          <Project_Card bg={'#714DD9'}/>
          <Project_Card bg={'#232229'}/>
          <Project_Card bg={'#ffa31a'}/>
        </ScrollView>
      </View>
      {/**Projects data ends here */}
      <Text>{search_value}</Text>
    </SafeAreaView>
  )
}

export default HomeScreen;

const SearchComponent=({search_value,set_search_value})=>{
  const handleSearchValue=(text)=>{
    set_search_value(text)
  }
  const handleClearSearchValue=()=>{
    set_search_value("");
  }
  return(
    <View className='flex-row w-full bg-[#eee] p-3 mt-4 rounded-md space-x-2 items-center'>
      <TextInput 
        placeholder='Search task...'
        value={search_value}
        className='text-lg font-semibold flex-1 text-secondary-color-2 '
        onChangeText={handleSearchValue}
      />
      {search_value?.length > 0?
        <AntDesign name="close" size={18} color="black" onPress={handleClearSearchValue}/>
        :
        <AntDesign name="search1" size={16} color="black" />
      }
    </View>
  )
}