import React, {FC} from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import {AppStyles} from '../../../utils/styles';

type InfoBlockProps = {
  images: any[];
  title: string;
};

const InfoBlock: FC<InfoBlockProps> = ({images, title}) => {
  return (
    <View style={AppStyles.blockContainer}>
      <View style={styles.rowContainer}>
        {images.map((image, index) => (
          <Image
            key={index}
            source={image}
            style={[styles.image, index === 1 && styles.middleImage]}
            alt={`image:${image}`}
          />
        ))}
      </View>
      <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    height: 50,
    gap: 30,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: -8,
  },
  middleImage: {
    position: 'absolute',
    zIndex: 2,
    transform: [{scale: 1.2}],
  },
  title: {
    marginTop: 16,
    fontSize: 16,
    fontWeight: '600',
  },
});
export default InfoBlock;
