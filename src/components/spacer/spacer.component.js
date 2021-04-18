import React from 'react';
import styled from 'styled-components/native';

export const Spacer = ({ variant }) => {
  const [direction, size] = variant.split('.');

  const SpacerVariant = styled.View`
    margin-${direction}: ${(props) => props.theme.space[size]};
  `;

  return <SpacerVariant />;
};
