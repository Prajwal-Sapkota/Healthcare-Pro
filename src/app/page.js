import Banner from './components/Banner';
import BoxesInfo from './components/BoxesInfo';
import { Welcome } from './components/Welcome';
import { Stats } from './components/Stats';
import { Team } from './components/Team';
import { Value } from './components/Value';
import { Tabs } from './components/Tabs';
import { Contact } from './components/Contact';
import FAQ from './components/Faq';
import Faq from './components/Faq1';


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
      <Faq/>
      
    </>
  );
}
