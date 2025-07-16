import Home from "./home"; 
import Header from "./header";
import Projects from "./projects"; 
import About from "./about"; 
import ContactForm from './contactForm';
import Footer from "./footer"; 

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="pt-20">
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <ContactForm />
        <section id="footer"><Footer /></section>
      </main>
    </div>
  );
}

