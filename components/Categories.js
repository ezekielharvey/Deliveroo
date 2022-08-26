import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Categorycard from './CategoryCard';

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}>
      <Categorycard imgUrl="https://picsum.photos/200" title="Testing" />
      <Categorycard imgUrl="https://picsum.photos/200" title="Testing" />
      <Categorycard imgUrl="https://picsum.photos/200" title="Testing" />
      <Categorycard imgUrl="https://picsum.photos/200" title="Testing" />
      <Categorycard imgUrl="https://picsum.photos/200" title="Testing" />
      <Categorycard imgUrl="https://picsum.photos/200" title="Testing" />
    </ScrollView>
  );
};

export default Categories;
