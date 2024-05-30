import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface ProgressBarProps {
  spent: number;
  total: number;
}


const ProgressBar: React.FC<ProgressBarProps> = ({ spent, total }) => {
  const progress = (spent / total) * 100;

  return (
    <View className={`py-[20px]`}>
      <View style={styles.progressBarContainer}>
        <LinearGradient
          colors={['#32FC65', '#32FC65']}
          start={[0, 0]}
          end={[1, 1]}
          style={[styles.progressBar, { width: `${progress}%` }]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  progressBarContainer: {
    height: 4,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    borderRadius: 10,
  },
});

export default ProgressBar;
