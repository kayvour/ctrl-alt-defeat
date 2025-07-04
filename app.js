function App() {
  const [responses, setResponses] = React.useState(null);
  const [order66Flag, setOrder66Flag] = React.useState(false);

  return (
    <main className="flex flex-col items-center text-center pb-20">
      <h1 className="text-4xl md:text-5xl font-extrabold glow-jedi drop-shadow-lg mt-20">
        Prompt Side of the Force
      </h1>

      <PromptInput
        setResponses={setResponses}
        onOrder66={() => setOrder66Flag(prev => !prev)}
      />
      <OutputPanel responses={responses} />
      <EasterEgg trigger={order66Flag} />
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
