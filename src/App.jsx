import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import { Home } from './Pages/Home';

export default function App() {
  return (
    <>
      <Header />
      <main className="my-20 mx-80">
        <Home />
      </main>
      <Footer />
    </>
  );
}
