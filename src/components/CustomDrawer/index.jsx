import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 

const CustomDrawer = ({ onClose }) => {
  const liste = [
    {
      text: "Users",
      imgSrc:
        "https://st.depositphotos.com/1669155/4285/i/950/depositphotos_42855699-stock-photo-lion.jpg",
    },
    {
      text: "Orders",
      imgSrc:
        "https://st.depositphotos.com/1669155/4285/i/950/depositphotos_42855699-stock-photo-lion.jpg",
    },
    {
      text: "libaries",
      imgSrc:
        "https://st.depositphotos.com/1669155/4285/i/950/depositphotos_42855699-stock-photo-lion.jpg",
    },
    {
      text: "Categories",
      imgSrc:
        "https://st.depositphotos.com/1669155/4285/i/950/depositphotos_42855699-stock-photo-lion.jpg",
    },
    {
      text: "Frameworks",
      imgSrc:
        "https://st.depositphotos.com/1669155/4285/i/950/depositphotos_42855699-stock-photo-lion.jpg",
    },
  ];
  return (
    <View className="w-screen h-screen flex flex-row">
      <View className="flex flex-col items-center justify-start w-[60vw] h-full relative z-40">
        <View className="w-full h-[20vh] bg-red-300 flex flex-row justify-between p-6">
          <Image
            source={{
              uri: "https://st.depositphotos.com/1669155/4285/i/950/depositphotos_42855699-stock-photo-lion.jpg",
            }}
            className="h-[8vh] w-[15vw] border border-gray-500 shadow-2xl rounded-lg object-center "
          />

          <View className="flex flex-col w-auto h-full items-end justify-between">
            <TouchableOpacity onPress={onClose}>
            <Ionicons name="exit-outline" size={24} color="black" />
            </TouchableOpacity>

            <Text className="font-semibold text-xl ">Uğur Yaşa</Text>
          </View>
        </View>
        <View className="w-full h-full border-[1px] border-gray-500 bg-white">
          {liste.map((e) => (
            <View className="w-full h-auto flex flex-row items-center border-b-[1px] p-2">
              <Image
                source={{
                  uri: e.imgSrc,
                }}
                className="h-[5vh] w-[10vw] shadow-2xl rounded-full object-contain mr-10"
              />
              <Text className="h-[2vh] w-[35vw]">{e.text}</Text>
            </View>
          ))}
        </View>
        {/* Diğer menü öğelerini ekleyin */}
      </View>

      <TouchableOpacity
        onPress={onClose}
        className="w-[40vw] h-full opacity-50"
      ></TouchableOpacity>
    </View>
  );
};

export default CustomDrawer;
