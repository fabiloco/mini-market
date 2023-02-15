import { FC, ReactNode } from 'react';

import styles from './styles/Button.module.css';

interface Props {
  children: string | ReactNode;
  icon?: ReactNode;
  colorSchema?: 'primary' | 'default';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  dataTestId?: string;
}

export const Button: FC<Props> = ({
  children,
  icon,
  colorSchema,
  onClick,
  dataTestId,
}) => {
  const background = colorSchema === 'primary' ? '#a718ba' : '#eeeeee';
  const color = colorSchema === 'primary' ? '#ffffff' : '#000000';

  return (
    <button
      className={styles.button}
      style={{ background, color }}
      onClick={onClick}
      data-testid={dataTestId}
    >
      {icon && <div className={styles.icon_container}>{icon}</div>}
      {children}
    </button>
  );
};
