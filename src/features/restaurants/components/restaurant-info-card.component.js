import React from 'react';
import styled from 'styled-components/native';

import { Image } from 'react-native';
import { Card } from 'react-native-paper';

import { Star } from '../../../../assets/icons/star';
import { Open } from '../../../../assets/icons/open';
import { Spacer } from '../../../components/spacer/spacer.component';
import { Text } from '../../../components/text/text.component';

const Restaurant = styled(Card)`
  margin: ${(props) => props.theme.space.md};
`;

const Cover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space.lg};
`;

const Content = styled(Card.Content)`
  margin-top: ${(props) => props.theme.space.md};
`;

const Info = styled.View``;

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.text.primary};
`;

const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.text.primary};
`;

const Icons = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Rating = styled.View`
  flex-direction: row;
  margin: ${(props) => props.theme.space.md} 0;
`;

const Status = styled.View`
  flex-direction: row;
`;

const ClosedTemporarily = styled(Text)`
  color: ${(props) => props.theme.colors.text.error};
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = 'Some Restaurant',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/02/messy-pizza-on-a-black-table.jpg',
    ],
    address = '100 Random Street',
    rating = 4,
    isOpenNow = true,
    isClosedTemporarily = true,
  } = restaurant;

  return (
    <Restaurant elevation={5}>
      <Cover key={name} source={{ uri: photos[0] }} />
      <Content>
        <Info>
          <Title>{name}</Title>
          <Icons>
            <Rating>
              {Array.from(new Array(rating)).map((item, i) => (
                <Star key={i} />
              ))}
            </Rating>

            <Status>
              {isOpenNow && <Open />}

              <Spacer variant="left.md" />

              {isClosedTemporarily && (
                <ClosedTemporarily variant="caption">
                  CLOSED TEMPORARILY
                </ClosedTemporarily>
              )}

              <Spacer variant="left.md" />

              <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
            </Status>
          </Icons>
          <Address>{address}</Address>
        </Info>
      </Content>
    </Restaurant>
  );
};
