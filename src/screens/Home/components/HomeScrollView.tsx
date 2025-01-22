import React, {FC, ReactNode} from 'react';
import {ScrollViewProps, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

type HomeScrollViewProps = ScrollViewProps & {
  subtitle?: string;
  children: ReactNode;
};

const HomeScrollView: FC<HomeScrollViewProps> = ({children, ...rest}) => {
  return (
    <ScrollView
      contentContainerStyle={{
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
      }}
      style={styles.container}
      {...rest}>
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingHorizontal: 10,
    minHeight: 120,
  },
});

export default HomeScrollView;
