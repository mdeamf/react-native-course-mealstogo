import React from 'react';
import styled from 'styled-components/native';

export const Spacer = ({ variant }) => {
  const [direction, size] = variant.split('.');

  console.log(variant, direction, size);

  const SpacerVariant = styled.View`
    margin-${direction}: ${(props) => props.theme.space[size]};
  `;

  console.log(SpacerVariant);

  return <SpacerVariant />;
};
