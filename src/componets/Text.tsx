import { CSSProperties, FC } from 'react';

interface Props {
  children: string;
  size?: string;
  props?: CSSProperties;
  color?: 'white' | 'primary' | 'black' | 'caption';
}

export const Text: FC<Props> = ({
  children,
  size = '1rem',
  props,
  color = 'black',
}) => {
  const textColor =
    color === 'primary' ? '#a718ba' : color === 'caption' ? '#757575' : color;

  return (
    <p style={{ fontSize: size, color: textColor, ...props }}>{children}</p>
  );
};
