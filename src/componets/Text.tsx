import { CSSProperties, FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  size?: string;
  props?: CSSProperties;
  color?: 'white' | 'primary' | 'black' | 'caption';
  bold?: boolean;
}

export const Text: FC<Props> = ({
  children,
  size = '1rem',
  props,
  color = 'black',
  bold = false,
}) => {
  const textColor =
    color === 'primary' ? '#a718ba' : color === 'caption' ? '#757575' : color;

  return (
    <p
      style={{
        fontSize: size,
        color: textColor,
        fontWeight: bold ? 600 : 400,
        ...props,
      }}
    >
      {children}
    </p>
  );
};
