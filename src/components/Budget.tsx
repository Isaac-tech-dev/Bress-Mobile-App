import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { SvgXml } from "react-native-svg";
import { ARROW, EMOJI } from "../svg";
import ProgressBar from "./ProgressBar";

const Data = {
  spent: "51,000",
  total: "80,888"
}

const Budget = () => {
  return (
    <View
      className={`bg-[#432DEC] h-[194px] rounded-[16px] px-[20px] py-[10px] space-y-4`}
    >
      <View className={`flex-row justify-between items-center`}>
        <View className={`space-y-3`}>
          <Text className={`text-[12px] text-white font-Inter-Medium`}>You have</Text>
          <Text className={`text-[18px] text-white font-Inter-ExtraBold`}>N{Data.spent}</Text>
          <Text className={`text-[12px] text-white font-Inter-Medium`}>Left out of N{Data.total} budgeted</Text>
        </View>
        <View
          className={`bg-[#2310B2] w-[30px] h-[30px] rounded-full justify-center items-center`}
        >
          <SvgXml xml={ARROW} />
        </View>
      </View>

      <View>
        <ProgressBar spent={51000} total={80888} />
        <View className={`flex-row items-center space-x-2`}>
          <Image source={require("../../assets/emoji.png")} />
          <Text className={`text-[11px] text-white font-Inter-Medium`}>Sapa go soon catch you bros, calm down!!</Text>
        </View>
      </View>
    </View>
  );
};

export default Budget;

const styles = StyleSheet.create({});
