import { CSSProperties, FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  size?: string;
  props?: CSSProperties;
  color?: 'white' | 'primary' | 'black' | 'caption';
  bold?: boolean;
  dataTestId?: string;
}

export const Text: FC<Props> = ({
  children,
  size = '1rem',
  props,
  color = 'black',
  bold = false,
  dataTestId,
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
      data-testid={dataTestId}
    >
      {children}
    </p>
  );
};
