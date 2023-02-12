import { FC, ReactNode } from 'react';

import styles from './styles/Button.module.css';

interface Props {
  children: string;
  icon?: ReactNode;
}

export const Button: FC<Props> = ({ children, icon }) => {
  return (
    <button className={styles.button}>
      {icon && <div className={styles.icon_container}>{icon}</div>}
      {children}
    </button>
  );
};
