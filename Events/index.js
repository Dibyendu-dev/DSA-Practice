document.getElementById("japan").addEventListener("click", () => {
  alert("japan is clicked");
});

document.getElementById("images").addEventListener("click", (e) => {
  document.getElementById("images").addEventListener("click", (e) => {
    console.log("Target:", e.target);
    console.log("To Element:", e.toElement);
    console.log("Current Target:", e.currentTarget);
    console.log("ClientX:", e.clientX);
    console.log("ClientY:", e.clientY);
    console.log("ScreenX:", e.screenX);
    console.log("ScreenY:", e.screenY);
    console.log("Ctrl Key Pressed?", e.ctrlKey);
    console.log("Alt Key Pressed?", e.altKey);
    console.log("Shift Key Pressed?", e.shiftKey);
  });
  
});

document.getElementById("google").addEventListener("click", (e) => {
  e.preventDefault();
});

{
  let timeStamp = Date.now();
  const dateFromTimeStamp = new Date(timeStamp);
  console.log(dateFromTimeStamp.toLocaleDateString());
}
