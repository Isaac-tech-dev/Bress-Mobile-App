import {
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SvgXml } from "react-native-svg";
import { ARROW, BELL, SEARCH, SETTINGS } from "../../svg";
import Budget from "../../components/Budget";
import Transactions from "../../components/Transactions";
import { StatusBar } from "expo-status-bar";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HEADER */}
        <View className={`flex-row justify-between items-center mt-[30px]`}>
          <View>
            <Text className={`text-[16px] text-white font-Inter-Medium`}>
              Hello John
            </Text>
            <Text className={`text-[12px] text-white font-Inter-Regular`}>
              Your finances are looking good
            </Text>
          </View>
          <View className={`flex-row justify-center items-center space-x-3`}>
            <Pressable
              className={`bg-[#2812C9] w-[38px] h-[38px] rounded-full flex items-center justify-center`}
            >
              <SvgXml xml={BELL} />
            </Pressable>
            <Pressable
              className={`bg-[#2812C9] w-[38px] h-[38px] rounded-full flex items-center justify-center`}
            >
              <SvgXml xml={SEARCH} />
            </Pressable>
          </View>
        </View>

        {/* CARD 1 */}
        <View
          className={`shadow-sm bg-[#210FA4] rounded-[24px] h-[335px] mt-[20px]`}
        >
          <ImageBackground
            source={require("../../../assets/background.png")}
            style={{ flex: 1, justifyContent: "center", height: 335 }}
            imageStyle={{ resizeMode: "cover" }}
          >
            <View
              className={`flex-1 justify-center items-center px-[20px] py-[10px] space-y-[60px]`}
            >
              {/* AVATAR */}
              <View className={`flex items-center w-full space-y-3`}>
                <Image source={require("../../../assets/img.png")} />
                <Text className={`text-[11px] text-white font-Inter-Medium`}>
                  Your available balance is
                </Text>
                <Text className={`text-[28px] text-white font-Inter-ExtraBold`}>
                  N20,983
                </Text>
                <Text
                  className={`w-3/4 text-center text-[11px] text-white font-Inter-Medium`}
                >
                  By this time last month, you spent slightly higher (N22,719)
                </Text>
              </View>
              {/* BANK */}
              <View className={`w-full`}>
                <View className={`flex-row justify-between items-center w-fu`}>
                  <Text className={`text-[12px] text-white font-Inter-Medium`}>
                    Kuda bank
                  </Text>
                  <Text className={`text-[12px] text-white font-Inter-Medium`}>
                    N12,000.00
                  </Text>
                </View>
                <View className={`flex-row justify-between items-center`}>
                  <Text className={`text-[12px] text-white font-Inter-Medium`}>
                    GT bank
                  </Text>
                  <Text className={`text-[12px] text-white font-Inter-Medium`}>
                    N950.00
                  </Text>
                </View>
                <View className={`flex-row justify-between items-center`}>
                  <Text className={`text-[12px] text-white font-Inter-Medium`}>
                    PiggyVest
                  </Text>
                  <Text className={`text-[12px] text-white font-Inter-Medium`}>
                    N1,050.00
                  </Text>
                </View>
              </View>
            </View>
          </ImageBackground>
          <View
            className={`bg-[#2310B2] w-[30px] h-[30px] rounded-full justify-center items-center absolute top-[15px] left-[350px]`}
          >
            <SvgXml xml={ARROW} />
          </View>
        </View>

        {/* SORT TRANSACTION */}
        <View
          className={`h-[90px] bg-[#2816A7] mt-[20px] shadow-sm rounded-[16px] flex-row justify-center items-center space-x-5`}
        >
          <View
            className={`bg-[#5844EE] h-[40px] w-[40px] rounded-[10px] justify-center items-center`}
          >
            <SvgXml xml={SETTINGS} />
            <View
              className={`bg-[#FFAE58] w-[10px] h-[10px] rounded-full absolute -top-[5px] left-[32px]`}
            />
          </View>
          <View>
            <Text className={`text-[14px] text-white font-Inter-SemiBold`}>
              Sort your transactions
            </Text>
            <Text className={`text-white text-[12px] w-3/4 font-Inter-Regular`}>
              Get points for sorting your transactions
            </Text>
          </View>
          <View
            className={`bg-[#2310B2] w-[30px] h-[30px] rounded-full justify-center items-center`}
          >
            <SvgXml xml={ARROW} />
          </View>
        </View>

        {/* BUDGET */}
        <View className={`mt-[20px]`}>
          <Text
            className={`text-light2 text-[13px] mb-[10px] font-Inter-SemiBold`}
          >
            My Budgets
          </Text>
          <Budget />
        </View>

        {/* TRANSACTIONS */}
        <View className={`mt-[20px]`}>
          <Text
            className={`text-light2 text-[13px] mb-[10px] font-Inter-SemiBold`}
          >
            Transactions
          </Text>
          <Transactions />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2C14DD",
    paddingHorizontal: 20,
  },
});
