import { TopPageComponentProps } from './TopPageComponent.props';
import { Advantages, Htag, Product, Sort, Tag } from '../../components';
import styles from './TopPageComponent.module.css';
import { HhData } from '../../components/HhData/HhData';
import { TopLevelCategory } from '../../interfaces/page.interface';
import { SortEnum } from '../../components/Sort/Sort.props';
import { useEffect, useReducer } from 'react';
import { sortReducer } from './sort.reducer';

export const TopPageComponent = ({
  page,
  products,
  firstCategory,
}: TopPageComponentProps): JSX.Element => {
  const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(
    sortReducer,
    {
      products,
      sort: SortEnum.Rating,
    }
  );

  const setSort = (sort: SortEnum) => {
    dispatchSort({ type: sort });
  };

  useEffect(() => {
    dispatchSort({ type: 'reset', newState: products });
  }, [products]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag={'h1'}>{page.title}</Htag>
        {sortedProducts && (
          <Tag color="grey" size="m">
            {sortedProducts.length}
          </Tag>
        )}
        <Sort setSort={setSort} sort={sort} />
      </div>
      <div>
        {sortedProducts &&
          sortedProducts.map((p) => <Product key={p._id} product={p} />)}
      </div>
      <div className={styles.hhTitle}>
        <Htag tag={'h2'}>Вакансии - {page.category}</Htag>
        <Tag color="red" size="m">
          hh.ru
        </Tag>
      </div>
      {firstCategory === TopLevelCategory.Courses && page.hh && (
        <HhData {...page.hh} />
      )}
      {page.advantages && page.advantages.length > 0 && (
        <Advantages advantages={page.advantages} />
      )}
      {page.seoText && (
        <div
          className={styles.seo}
          dangerouslySetInnerHTML={{ __html: page.seoText }}
        />
      )}
      <Htag tag={'h2'}>Получаемые навыки</Htag>
      {page.tags.map((tag) => (
        <Tag key={tag} color={'primary'}>
          {tag}
        </Tag>
      ))}
    </div>
  );
};
