import React, { useEffect } from 'react';
import { View, Text, Image, Pressable } from 'react-native';

import { useFonts } from 'expo-font';
import Swiper from 'react-native-swiper';
import { screen_one, screen_three, screen_two } from '../../assets';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OnboardingScreen = () => {

  const navigation =useNavigation();

  useEffect(()=>{
    async function checkOnboardingStatus(){
      const value = await AsyncStorage.getItem("@onboarding_complete");
      //console.log(value)
      if (value === 'true' && value !== null){
        navigation.navigate("Home")
      }
    }
    checkOnboardingStatus();
  },[])

  const handleOnboardingComplete = async(e)=>{
    //console.log("Triggered:" , e);
    if (e === 3){
      try{
        await AsyncStorage.setItem("@onboarding_complete", "true");
        navigation.replace("Home")
      }catch{
        //console.log("Error on storing onboarding status", error)
      }
    }
  }

  return (
    <View className='flex-1 items-center justify-center bg-primary-color'>
      <Swiper 
        loop={false} 
        activeDot={<View style={{backgroundColor: '#714DD9', width: 40, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />} 
        onIndexChanged={handleOnboardingComplete}
      >
        <Splashscreen />
        <ScreenOne/>
        <ScreenTwo/>
        <ScreenThree/>
      </Swiper>
    </View>
  )
}
export default OnboardingScreen;

export const Splashscreen =()=>{
  return(
    <View className='flex-1 items-center justify-center bg-secondary-color-1'>
      <Text className='text-4xl font-extrabold text-white '>Peakflow</Text>
    </View>
  )
}

export const ScreenOne =()=>{
  return(
    <View className='flex-1 items-center justify-center bg-primary-color'>
      <View className=' text-center'>
        <Image source={screen_one} className='w-screen h-96' resizeMode='contain'/>
      </View>
      <View className=' text-center items-center'>
        <Text className='text-secondary-color-2 mt-10 text-2xl text-center font-semibold'>Focus on the work that matters</Text>
      </View>
    </View>
  )
}

export const ScreenTwo =()=>{
  return(
    <View className='flex-1 items-center justify-center bg-primary-color'>
      <View className=' text-center'>
        <Image source={screen_two} className='w-screen h-96' resizeMode='contain'/>
      </View>
      <View className=' text-center items-center'>
        <Text className='text-secondary-color-2 mt-10 text-2xl text-center font-semibold'>Stay organized and efficient</Text>
      </View>
    </View>
  )
}

export const ScreenThree =()=>{
  return(
    <View className='flex-1 items-center justify-center bg-primary-color'>
      <View className=' text-center'>
        <Image source={screen_three} className='w-screen h-96' resizeMode='contain'/>
      </View>
      <View className=' text-center items-center'>
        <Text className='text-secondary-color-2 mt-10 text-2xl text-center font-semibold'>Plan, manage and track tasks</Text>
      </View>
    </View>
  )
}