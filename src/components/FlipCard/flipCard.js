import React from 'react';
import {View, Text} from 'react-native';
import FlipCard from 'react-native-flip-card';
import flipStyle from './style';

const names = [
  {
    index: '1',
    name: 'vinod',
    uri: 'https://picsum.photos/id/1002/200',
  },
  {
    index: '2',
    name: 'thapa',
    uri: 'https://picsum.photos/id/1/200',
  },
  {
    index: '3',
    name: 'bahadur',
    uri: 'https://picsum.photos/id/10/200',
  },
  {
    index: '4',
    name: 'technical',
    uri: 'https://picsum.photos/id/1006/200',
  },
  {
    index: '5',
    name: 'vinod',
    uri: 'https://picsum.photos/id/1008/200',
  },
  {
    index: '6',
    name: 'technical',
    uri: 'https://picsum.photos/id/1011/200',
  },
  {
    index: '7',
    name: 'vinod',
    uri: 'https://picsum.photos/id/1012/200',
  },
];

const FlipCardAnimation = () => {
  return (
    <View style={flipStyle.cardWrapper}>
      <FlipCard
        style={flipStyle.itemPhoto}
        friction={6}
        data={names}
        perspective={1000}
        flipHorizontal={true}
        flipVertical={false}
        flip={false}
        clickable={true}
        onFlipEnd={isFlipEnd => {
          console.log('isFlipEnd', isFlipEnd);
        }}>
        <View style={flipStyle.cardView}>
          <Text style={flipStyle.cardValue} numberOfLines={2}>
            Flip the card
          </Text>
          <Text
            style={[flipStyle.cardValue, {marginTop: 20, textAlign: 'center'}]}>
            3
          </Text>
        </View>
        <View style={flipStyle.cardView}>
          <Text style={flipStyle.cardValue}>Better Luck Next Time</Text>
        </View>
      </FlipCard>
    </View>
  );
};

export default FlipCardAnimation;
