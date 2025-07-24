import styles from './app.module.less';
export interface IAppProps {}

export default function IApp() {
  console.log('Hello React Typescript!');
  return <h1 className={styles.heading}>Hello React Typescript!</h1>;
}