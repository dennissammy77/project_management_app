import { View, Text, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

import PageHeader from '../../components/Page_Header';
import Project_Card from '../../components/Project_Card';
//icons
import { AntDesign } from '@expo/vector-icons';

const Projects = () => {
  const [search_value,set_search_value]=useState('');
  return (
    <SafeAreaView className="flex-1 justify-start bg-background-color-1 px-6 py-8 space-y-4 ">
        <PageHeader page_title={'projects'}/>
         {/**Search Component starts here*/}
         <SearchComponent search_value={search_value} set_search_value={set_search_value}/>
         {/**Search Component ends here*/}
         {search_value.length > 0 ?
            <View>
              <Text>{search_value}</Text>
            </View>
            :
            <ScrollView
              className=' space-y-2 w-full'
              showsVerticalScrollIndicator ={false}
            >
              {projects?.map((project,index)=>{
                return(
                  <Project_Card 
                    project={project} 
                    key={project?.id} 
                    componentbg={'#ffffff'}
                    focus_bg={'#714DD9'}
                    progress_bar_unfilled_bg={'#eee'}
                  />
                )
              })}
            </ScrollView>
          }
    </SafeAreaView>
  )
}

export default Projects;

const SearchComponent=({search_value,set_search_value})=>{
  const handleSearchValue=(text)=>{
    set_search_value(text)
  }
  const handleClearSearchValue=()=>{
    set_search_value("");
  }
  return(
    <View className='flex-row space-x-2 mt-4 items-center'>
      <View className='flex-row flex-1 p-2 bg-white rounded-md space-x-2 items-center'>
        <TextInput 
          placeholder='Search your projects...'
          value={search_value}
          className='text-lg font-medium flex-1 text-secondary-color-2 '
          onChangeText={handleSearchValue}
        />
        {search_value?.length > 0?
          <AntDesign name="close" size={18} color="black" onPress={handleClearSearchValue}/>
          :
          <AntDesign name="search1" size={16} color="black" />
        }
        </View>
        <TouchableOpacity className='bg-white rounded-md p-3'>
          <AntDesign name="filter" size={18} color="black" />
        </TouchableOpacity>
    </View>
  )
}

const projects = [
  {
    id:1,
    name: 'Prokemia',
    description: 'The Marketplace for Ingredients, Polymers and Chemistry.',
    duedate:'02 May 2023',
    members: [
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
    ],
    progress: 90,
  },
  {
    id:2,
    name: 'Smartpharma',
    description: 'The number one sharing and networking pharmaceutical platform.',
    duedate:'05 Aug 2023',
    members: [
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    ],
    progress: 20,
  },
  {
    id:3,
    name: 'BillonBoard',
    description: 'BillonBoard is envisioned to be a comprehensive repository of physical OOH billboard structures, meticulously pinned on an interactive map, making it easier than ever to locate and manage billboard advertising campaigns.',
    duedate:'25 Aug 2023',
    members: [
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    ],
    progress: 0,
  },
  {
    id:4,
    name: 'Prokemia',
    description: 'The Marketplace for Ingredients, Polymers and Chemistry.',
    duedate:'02 May 2023',
    members: [
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
    ],
    progress: 90,
  },
  {
    id:5,
    name: 'Smartpharma',
    description: 'The number one sharing and networking pharmaceutical platform.',
    duedate:'05 Aug 2023',
    members: [
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    ],
    progress: 20,
  },
  {
    id:6,
    name: 'BillonBoard',
    description: 'BillonBoard is envisioned to be a comprehensive repository of physical OOH billboard structures, meticulously pinned on an interactive map, making it easier than ever to locate and manage billboard advertising campaigns.',
    duedate:'25 Aug 2023',
    members: [
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    ],
    progress: 0,
  },
  
]