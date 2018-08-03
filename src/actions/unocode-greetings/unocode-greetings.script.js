export default function() {
  const greetingsButton = document.getElementById('uno-greetings-close');
  greetingsButton.addEventListener('click', () => {
    const greetings = greetingsButton.parentElement;
    greetings.parentElement.removeChild(greetings);
  });
}