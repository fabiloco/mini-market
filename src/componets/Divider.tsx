import { CSSProperties, FC } from 'react';

import styles from './styles/Divider.module.css';

interface Props {
  props?: CSSProperties;
}
export const Divider: FC<Props> = ({ props }) => {
  return <div className={styles.divider} style={{ ...props }} />;
};
