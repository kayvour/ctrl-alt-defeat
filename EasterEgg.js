const emperorLines = [
  "Execute Order 66…",
  "I am the Senate!",
  "Your feeble skills are no match for the power of the Dark Side."
];

function EasterEgg({ trigger }) {
  React.useEffect(() => {
    if (!trigger) return;
    const body = document.body;
    body.classList.add("order66-active");
    new Audio("sounds/imperial_march.mp3").play();
    alert(emperorLines[Math.floor(Math.random()*emperorLines.length)]);
    setTimeout(() => body.classList.remove("order66-active"), 2200);
  }, [trigger]);

  return null;
}
