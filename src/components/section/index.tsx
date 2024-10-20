import React from 'react';
import { View, Text, Pressable } from 'react-native';

interface props{
    name: string;
    size: "text-lg" | "text-xl" | "text-2xl" | "text-3xl" | "text-4xl" | "text-5xl" | "text-6xl" | "text-7xl" | "text-8xl" | "text-9xl";
    label: string;
    action: () => void;
}

export function Section({name, size, label, action}: props) {
  return (
    <View className="w-full flex flex-row items-center justify-between px-4">
        <Text className={`${size} font-semibold my-4 self-start`}>
            {name}
        </Text>
        <Pressable>
            <Text>{label}</Text>
        </Pressable>
    </View>
  );
}