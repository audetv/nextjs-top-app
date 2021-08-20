import { Button, Htag } from '../components';

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">Hello World!</Htag>
      <Button
        appearance={'primary'}
        className={'test'}
        onClick={() => console.log('here')}
      >
        Кнопка
      </Button>
      <Button appearance={'ghost'}>Кнопка</Button>
    </>
  );
}
