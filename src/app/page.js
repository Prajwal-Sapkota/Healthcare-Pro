import Banner from './components/Banner';
import BoxesInfo from './components/BoxesInfo';
import { Welcome } from './components/Welcome';
import { Stats } from './components/Stats';
import { Team } from './components/Team';
import { Value } from './components/Value';
import { Tabs } from './components/Tabs';
import { Contact } from './components/Contact';

export default function Home() {
  return (
    <>
      
      <Banner />
      <BoxesInfo />
      <Welcome/> 
      <Stats/>
      <Value/>
      <Team/>
      <Tabs/>
      <Contact/>
    </>
  );
}
