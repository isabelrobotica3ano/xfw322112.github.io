import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Technologies } from './components/Technologies/Technologies';

function App() {
  return (
    <div className="min-h-screen bg-navy-900">
      <Header />
      <main className="pt-16">
        <Hero />
        <Technologies />
      </main>
    </div>
  );
}

export default App;