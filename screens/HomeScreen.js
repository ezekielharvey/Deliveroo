import React, {useEffect, useLayoutEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, SafeAreaView, Image, TextInput, ScrollView} from 'react-native';
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from 'react-native-heroicons/outline';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import sanityClient from '../sanity';
import colors from '../config/colors';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    sanityClient.fetch(`
      *[_type == "featured"] {
        ...,
        restaurants[]->{
          ...,
          dishes[]->
        }
      }`).then(data => {
        setFeaturedCategories(data);
      });
  }, []);

  console.log(featuredCategories);

  return (
    <SafeAreaView className="bg-white">
        {/* Header */}
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
          <Image
            source={{
              uri: 'https://picsum.photos/600',
            }}
            className="h-7 w-7 p-4 rounded-full"
          />

          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">
              Deliver Now!
            </Text>
            <Text className="font-bold text-xl">
              Current Location
              <ChevronDownIcon size={20} color={colors.primary} />
            </Text>
          </View>
          <UserIcon size={35} color={colors.primary} />
        </View>
        <View className='flex-row items-center space-x-2 pb-2 mx-4'>
          <View className='flex-row flex-1 space-x-2 bg-gray-200 p-3'>
            <MagnifyingGlassIcon color='gray' size={20} />
            <TextInput placeholder='Building Materials and Design' keyboardType='default' placeholderTextColor={'gray'}/>
          </View>
          <AdjustmentsVerticalIcon color={colors.primary} /> 
        </View>
          <ScrollView className='bg-gray-100'
            contentContainerStyle={{
              paddingBottom: 100,
            }}
          >
            <Categories />

            {featuredCategories?.map(category => (
              <FeaturedRow
              key={category._id}
              id={category._id} 
              title={category.name}
              description={category.short_description}
            />
            ))}

          </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
