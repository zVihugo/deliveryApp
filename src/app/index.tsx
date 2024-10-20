import {Text, View, ScrollView} from "react-native";
import Header from "../components/header";
import Constants from "expo-constants";
import { Banner } from "../components/banner";
import { Search } from "../components/search";
import { Section } from "../components/section";
import { Trending } from "../components/trending";
import { Restaurants } from "../components/restaurants";
import { List } from "../components/list";

const statusBarHeight = Constants.statusBarHeight;

export default function Index(){
    return (
        <ScrollView style={{flex: 1}} className="bg-slate-200" showsVerticalScrollIndicator={false}>
            <View className="w-full px-4" style={{marginTop: statusBarHeight + 8}}>
               <Header /> 

               <Banner />

               <Search />
            </View>

               <Section name="Comidas em alta" label="Veja mais" action={()=> console.log("Clicou em ver mais")} size="text-2xl" />

                <Trending />

                <Section name="Famosos no DevFood" label="Veja todos" action={()=> console.log("Clicou no famosos")} size="text-2xl" />

                <Restaurants />

                <Section name="Restaurantes" label="Veja todos" action={()=> console.log("Clicou no restaurantes")} size="text-2xl" />
            
                <List />

        </ScrollView>
    )
}