import { Button, Htag, P, Rating, Tag } from '../components';
import { useEffect, useState } from 'react';
import { Layout } from '../layout/Layout';

export default function Home(): JSX.Element {
  const [counter, setCounter] = useState<number>(0);

  const [rating, setRating] = useState<number>(4);

  useEffect(() => {
    console.log('Counter ' + counter);
    return function cleanup() {
      console.log('Unmount');
    };
  });

  return (
    <Layout>
      <Htag tag="h1">Hello World! {counter}</Htag>
      <Button
        appearance={'primary'}
        className={'test'}
        onClick={() => setCounter((x) => x + 1)}
        arrow={'right'}
      >
        Кнопка
      </Button>
      <Button appearance={'ghost'} arrow={'down'}>
        Кнопка
      </Button>
      <P size={'l'}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum,
        laboriosam!
      </P>
      <P>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis,
        itaque.
      </P>
      <P size={'s'}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, sit.
      </P>

      <Tag color={'primary'} size={'m'}>
        Lorem.
      </Tag>
      <Tag color={'grey'} href={'test'}>
        Lorem.
      </Tag>
      <Tag color={'green'} size={'m'} href={'test'}>
        Lorem.
      </Tag>
      <Rating
        className={'test'}
        rating={rating}
        isEditable={true}
        setRating={setRating}
      />
    </Layout>
  );
}
