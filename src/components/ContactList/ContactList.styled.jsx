import styled from 'styled-components';

export const ContactText = styled.p`
  color: ${p => p.theme.colors.black};
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.body};
  font-weight: ${p => p.theme.fontWeights.normal};

  margin-right: ${p => p.theme.space[4]}px;

  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;
