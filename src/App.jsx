import React, { useState, useRef } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  PanResponder,
  Animated,
  SafeAreaView,
} from "react-native"; // Gerekli bileşenleri ekledik
import CustomDrawer from "./components/CustomDrawer";
import { AntDesign } from "@expo/vector-icons";

export default function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const drawerAnimation = new Animated.Value(0); // Animasyon değeri
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponderCapture: (_, { dx }) => dx > 10, // Sürükleme işlemi 10 piksel veya daha fazla ise pan responder'ı etkinleştir
      onPanResponderMove: (_, { dx }) => {
        // Sürükleme hareketi sırasında animasyonu güncelle
        drawerAnimation.setValue(dx);
      },
      onPanResponderRelease: (_, { dx }) => {
        // Sürükleme işlemi bittiğinde yan menüyü aç veya kapat
        if (dx > 50) {
          openDrawer();
        } else {
          closeDrawer();
        }
      },
    })
  ).current;

  const openDrawer = () => {
    setIsDrawerOpen(true);

    Animated.timing(drawerAnimation, {
      toValue: 1,
      duration: 400, // Animasyon süresi
      useNativeDriver: false, // useNativeDriver true olmamalı
    }).start();
  };

  const closeDrawer = () => {
    Animated.timing(drawerAnimation, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start(() => {
      setIsDrawerOpen(false);
    });
  };

  const drawerTranslateX = drawerAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-450, 0], // Menüyü ekranın dışına çıkar
  });

  const drawerZIndex = 1;

  const otherComponentsOpacity = useState(1); // 1 olarak initialize ederek, drawer menu kapalıyken diğer bileşenlerin opaklığını 1 olarak ayarlıyoruz.

  const toggleOpacity = () => {
    otherComponentsOpacity.setValue(otherComponentsOpacity.value === 1 ? 0 : 1);
  };

  const handleDrawerClose = () => {
    closeDrawer();
  };

  return (
    <SafeAreaView className="flex" {...panResponder.panHandlers}>
      <View className="w-full bg-slate-500">
        <Animated.View
          className={`w-[50vw] absolute`}
          style={{
            transform: [{ translateX: drawerTranslateX }],
            zIndex: drawerZIndex,
          }}
        >
          <CustomDrawer
            onClose={() => {
              closeDrawer();
            }}
          />
        </Animated.View>
        {/* Appbar Design */}
        <SafeAreaView
          className={`w-screen h-[10vh] py-5 px-2 bg-slate-400 flex flex-row items-center justify-between`}
        >
          <TouchableOpacity
            onPress={openDrawer}
            onPressIn={() => {
              // Yan menü açılsın
              setIsDrawerOpen(true);
            }}
            onPressOut={() => {
              // Yan menü kapansın
              setIsDrawerOpen(false);
            }}
          >
            <AntDesign name="bars" size={30} color="black" />
          </TouchableOpacity>
          <Text className="text-lg font-bold">Menu Drawer</Text>
        </SafeAreaView>
        {/* Main Design */}
        <View className="bg-white h-[90vh] flex justify-center items-center">
          <Text className='font-black text-6xl'>Uğur Yaşa</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
