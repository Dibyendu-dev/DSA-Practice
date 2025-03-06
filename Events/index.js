document.getElementById("japan").addEventListener("click", () => {
  alert("japan is clicked");
});

document.getElementById("images").addEventListener("click", (e) => {
 

 console.log(e);
});

{
  let timeStamp = Date.now();
  const dateFromTimeStamp= new Date(timeStamp);
  console.log(dateFromTimeStamp.toLocaleDateString())
}
