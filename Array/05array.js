
// how to create an array
{
const salad =["onion","cucumber","tomato","carrot"];
const newSalad = new Array ("onion","cucumber","tomato","carrot");

console.log(salad === newSalad);

}

  // How to Get Elements from an Array in JS
{
     
  const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
  console.log(salad[0]);
  console.log(salad[2]);
  console.log(salad[5]);
    console.log(salad.length)
    console.log(salad[salad.length-1]);

    for(let i=0 ; i<salad.length ; i++){
        console.log(`${salad[i]} is present in the position on ${i+1}`);
    }
}

// How to Add Elements to an Array in JS
{
  const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
  const newsalad = salad;
  const clonesalad = [...salad]

    salad.push("🧅","🫚")
    console.log(salad)
    console.log(newsalad)
    console.log(clonesalad)

   
}