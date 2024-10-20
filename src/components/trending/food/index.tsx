import React from 'react';
import { View, Pressable, Text, Image } from 'react-native';
import {FoodProps} from ".."
import {Ionicons} from "@expo/vector-icons"

export function CardHorizontalFood({food} : {food: FoodProps}) {
  return (
    <Pressable className="flex flex-col rounded-xl relative">
        <Image source={{uri: food.image}} className="w-44 h-36 rounded-xl" />
        <View className="flex flex-row bg-neutral-900/90 w-fit gap-1 rounded-full absolute top-2 right-3 px-2 py-1 items-center justify-center">
            <Ionicons size={14} color="#ca8a04" name="star" />
            <Text className="text-white text-sm">{food.rating}</Text>
        </View>

        <Text className="text-green-700 font-medium text-lg">R$ {food.price}</Text>
        <Text className="text-black mt-1">{food.name}</Text>
        <Text className="text-neutral-600 text-sm">{food.time} - R$ {food.delivery}</Text>
    </Pressable>
  );
}