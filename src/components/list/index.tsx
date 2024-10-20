import {useState, useEffect} from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { RestaurantItem } from './item';

export interface RestaurantProps{
  id: string;
  name: string;
  image: string;
}



export function List() {

  const [restaurants, setRestaurants] = useState<RestaurantProps[]>([]);

  useEffect(() => {
    async function getFoods() {
        const response = await fetch("http://192.168.0.105:3000/restaurants")
        const data = await response.json()
        setRestaurants(data)
    }
    getFoods()
  },[])


  return (
    <View className="px-4 flex-1 w-full h-full mb-11 gap-4">
      {restaurants.map(item => (
        <RestaurantItem item={item} key={item.id}/>
      ))}
    </View>
  );
}