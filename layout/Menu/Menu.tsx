import styles from './Menu.module.css';
import { useContext } from 'react';
import { AppContext } from '../../context/app.context';
import { MenuItem } from '../../interfaces/menu.interface';

export const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);
  return (
    <div>
      <ul>
        {menu.map((m: MenuItem) => (
          <li key={m._id.secondCategory}>{m._id.secondCategory}</li>
        ))}
      </ul>
    </div>
  );
};
