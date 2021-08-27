import { AdvantagesProps } from './Advantages.props';
import { Htag } from '../Htag/Htag';
import styles from './Advantages.module.css';
import CheckIcon from './check.svg';

export const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {
  return (
    <div>
      <Htag tag={'h2'}>Преимущества</Htag>
      {advantages.map((advantage) => (
        <div key={advantage._id} className={styles.advantage}>
          <CheckIcon />
          <div className={styles.title}>{advantage.title}</div>
          <hr className={styles.vLine} />
          <div>{advantage.description}</div>
        </div>
      ))}
    </div>
  );
};
