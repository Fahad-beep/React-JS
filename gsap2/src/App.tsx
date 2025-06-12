import Hero from "./components/Hero";

const App = () => {
  return (
    <main className="min-h-screen w-screen relative overflow-x-hidden">
      <Hero />
      <div className="min-h-screen w-screen bg-blue-400" />
    </main>
  );
};

export default App;
