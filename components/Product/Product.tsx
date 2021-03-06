import { ProductProps } from './Product.props';
import styles from './Product.module.css';
import { Card } from '../Card/Card';
import { Rating } from '../Rating/Rating';
import { Tag } from '../Tag/Tag';
import { Button } from '../Button/Button';
import { declOfNum, priceRu } from '../../helpers/helpers';
import { Divider } from '../Divider/Divider';
import cn from 'classnames';
import Image from 'next/image';
import { useState } from 'react';
import { Review } from '../Review/Review';

export const Product = ({
  product,
  className,
  ...props
}: ProductProps): JSX.Element => {
  const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);
  return (
    <>
      <Card className={cn(styles.product, className)}>
        <div className={styles.logo}>
          <Image
            src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
            alt={product.title}
            className={styles.image}
            width={70}
            height={70}
          />
        </div>
        <div className={styles.title}>{product.title}</div>
        <div className={styles.price}>
          {priceRu(product.price)}
          {product.oldPrice && (
            <Tag className={styles.oldPrice} color={'green'}>
              {priceRu(product.price - product.oldPrice)}
            </Tag>
          )}
        </div>
        <div className={styles.credit}>
          {priceRu(product.credit)}/<span className={styles.month}>мес</span>
        </div>
        <div className={styles.rating}>
          <Rating rating={product.reviewAvg ?? product.initialRating} />
        </div>
        <div className={styles.tags}>
          {product.categories.map((c) => (
            <Tag key={c} color={'ghost'} className={styles.category}>
              {c}
            </Tag>
          ))}
        </div>
        <div className={styles.priceTitle}>Цена</div>
        <div className={styles.creditTitle}>Кредит</div>
        <div className={styles.rateTitle}>
          {product.reviewCount}{' '}
          {declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}
        </div>

        <Divider className={styles.hr} />

        <div className={styles.description}>{product.description}</div>
        <div className={styles.features}>
          {product.characteristics.map((c) => (
            <div key={c.name} className={styles.characteristics}>
              <span className={styles.characteristicName}>{c.name}</span>
              <span className={styles.characteristicDots} />
              <span className={styles.characteristicValue}>{c.value}</span>
            </div>
          ))}
        </div>
        <div className={styles.advBlock}>
          {product.advantages && (
            <div className={styles.advantages}>
              <div className={styles.advTitle}>Преимущества</div>
              {product.advantages}
            </div>
          )}

          {product.disadvantages && (
            <div className={styles.disadvantages}>
              <div className={styles.advTitle}>Недостатки</div>
              {product.disadvantages}
            </div>
          )}
        </div>

        <Divider className={cn(styles.hr, styles.hr2)} />

        <div className={styles.actions}>
          <Button appearance={'primary'}>Узнать подробнее</Button>
          <Button
            appearance={'ghost'}
            arrow={isReviewOpened ? 'down' : 'right'}
            className={styles.reviewButton}
            onClick={() => setIsReviewOpened(!isReviewOpened)}
          >
            Читать отзывы
          </Button>
        </div>
      </Card>
      <Card
        color={'blue'}
        className={cn(styles.reviews, {
          [styles.opened]: isReviewOpened,
          [styles.closed]: !isReviewOpened,
        })}
      >
        {product.reviews.map((r) => (
          <Review key={r._id} review={r} />
        ))}
      </Card>
    </>
  );
};
