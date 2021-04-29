import React from 'react';

import { Image } from 'react-native';

import { Star } from '../../../../assets/icons/star';
import { Open } from '../../../../assets/icons/open';
import { Spacer } from '../../../components/spacer/spacer.component';
import {
  Restaurant,
  Cover,
  Content,
  Info,
  Title,
  Address,
  Icons,
  Rating,
  Status,
  ClosedTemporarily,
} from './restaurant-info-card.styles';

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
              {Array.from(new Array(Math.floor(rating))).map((item, i) => (
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
