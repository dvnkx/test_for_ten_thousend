import {FC} from 'react';
import {Image, ImageSourcePropType, StyleSheet, View} from 'react-native';
import {AppStyles} from '../utils/styles';

type IntroBlockProps = {
  image: ImageSourcePropType;
};

const IntroBlock: FC<IntroBlockProps> = ({image}) => {
  return (
    <View style={AppStyles.blockContainer}>
      <Image style={styles.image} source={image} alt={`image:${image}`} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 100,
  },
});

export default IntroBlock;
