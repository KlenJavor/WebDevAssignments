
const createTrail = (x, y) => {
  const trail = document.createElement("div");
  trail.innerText = "🌟"
  trail.style.position = "absolute"
  trail.className = "trail";
  trail.style.top = y + "px";
  trail.style.left = x + "px";
  return trail;
};

window.addEventListener("mousemove", (event) => {
  const trails = document.querySelectorAll(".trail");
  if (trails.length == 20) trails[0].remove();
  setTimeout(() => trail.remove(), 300)
  const trail = createTrail(event.pageX, event.pageY);
  document.body.appendChild(trail);
});
