import * as React from 'react';
import styled from 'styled-components';

interface IconProps {
  label: string;
  iconColor: string;
}

const IconWrapper = styled.div`
  display: flex;
  font-size: 20px;
  width: 100px;
  height: 100px;
  margin-top: 1rem;
  background: ${(props: IconProps) => props.iconColor};
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.25), 0 6px 20px 0 rgba(0, 0, 0, 0.25);
  color: #ffffff;
`;

const Icon: React.FunctionComponent<IconProps> = props => {
  return (
    <IconWrapper {...props}>
      <p>{props.label}</p>
    </IconWrapper>
  );
};

export default Icon;
