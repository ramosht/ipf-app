import theme from '@styles/Theme';
import styled from 'styled-components/native';

export const ThumbnailWrapper = styled.View``;

export const Thumbnail = styled.Image`
  width: 100%;
  height: 250px;
`;

export const TurnOnAlarm = styled.TouchableOpacity`
  position: absolute;
  top: 16px;
  right: 16px;
`;

export const Wrapper = styled.View`
  padding: 16px;
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Date = styled.View`
  align-items: center;
  background: ${theme.colors.white};
  padding: 8px 12px;
  border-radius: 8px;
  margin-right: 16px;
`;

export const Time = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 4px;
`;

export const Footer = styled.View`
  padding: 16px;
`;
