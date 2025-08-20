// console.log("Step1");
// console.log("Step2");

// async function order() {
//   // api call
//   const data = await "Step3";
//   console.log(data);
// }
// order();

// console.log("Step4");

// Fetch method old method

// fetch("https://dummyjson.com/users")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(`Internal server error ${error}`);
//   });

// Fetch new method

async function fetchData() {
  try {
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();
    console.log(data.users[0].address.coordinates.lat);
  } catch (error) {
    console.log(`Internal server error ${error}`);
  }
}

fetchData();
