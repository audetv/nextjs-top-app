import { Button, Htag, P } from '../components';

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">Hello World!</Htag>
      <Button
        appearance={'primary'}
        className={'test'}
        onClick={() => console.log('here')}
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
    </>
  );
}
