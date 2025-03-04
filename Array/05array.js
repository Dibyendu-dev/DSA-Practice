
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

// How to Remove Elements from an Array in JS
{
  const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑']
  salad.pop();
  console.log(salad)
}

// How to Copy and Clone an Array in JS
{
  const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
  const newSalad = salad.slice();
  console.log(newSalad);
  console.log(salad);
  console.log(salad===newSalad)
}

// How to Determine if a Value is an Array in JS
{
  const salad =['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑']
  console.log(Array.isArray(salad));
  console.log(Array.isArray({username:"biki",loc:"wb"}));
  console.log(Array.isArray([]))
}

 // Array Destructuring
{
  

  let vegetables = ['🍅', '🍄', '🥕'];
  let tomato = vegetables[0];
  let mushroom = vegetables[1];
  let carrot = vegetables[2];
  console.log(`${tomato},${mushroom},${carrot}`);
  

}

{
  let [tomato,mushroom,carrot] = ['🍅', '🍄', '🥕'];
  console.log(tomato,mushroom,carrot);
}

