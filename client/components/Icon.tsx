import * as React from 'react';
import styled from 'styled-components';

interface IconProps {
  label: string;
  color: string;
}

const IconWrapper = styled.div`
  display: flex;
  font-size: 20px;
  width: 120px;
  height: 120px;
  margin-top: 1rem;
  background: ${props => props.color};
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Icon: React.FunctionComponent<IconProps> = props => {
  return (
    <IconWrapper>
      <p>{props.label}</p>
    </IconWrapper>
  );
};

export default Icon;
