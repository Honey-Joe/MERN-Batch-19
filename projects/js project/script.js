const API_URL = "http://localhost:5000/api/user";

const getDataBtn = document.getElementById("getData");

const resultGetData = document.getElementById("result-getdata");

getDataBtn.addEventListener("click", async () => {
  try {
     const response = await fetch(`${API_URL}/get-user`);
        const data = await response.json();
        console.log(data);
        resultGetData.innerHTML = data.user.map((e)=>{
            return `<p>ID: ${e._id} | Name : ${e.name} | Email : ${e.email} | Phone No: ${e.phoneno}</p>`
        })
  } catch (error) {
    console.log(error);
  }
});

const deleteForm = document.getElementById("deleteForm");

deleteForm.addEventListener("submit", async(e)=>{
    e.preventDefault();
    const id  = document.getElementById("getId").value;
     try {
        const res = await fetch(`${API_URL}/delete-user/${id}`,{
            method: 'DELETE',
            
        })
        const data = await res.json();
        console.log(data);
        alert(data.message);     

     } catch (error) {
        console.log(error)
     }
})



