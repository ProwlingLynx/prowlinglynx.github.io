import { NavBar } from './components/NavBar';
import { Greeting } from './components/Greeting';
import { Bio } from './components/Bio';
import { Footer } from './components/footer';
import { Projects } from './components/projects';
import './App.css';

/**
 * Renders the app views.
 * TODO: migrate to React Router
 * @returns {JSX.Element}
 */

function App() {
  return (
    <article className={`flex-column`}>
      <NavBar />
      <Greeting />
      <Projects />
      <Bio />
      <Footer />
    </article>
  );
}

export default App;
