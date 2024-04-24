

//const button= document.querySelector("#btn-1")
const button = document.querySelector(".btn-1")

button.addEventListener("click", handleClick);

const div = document.querySelector('#container')


function handleClick() {

    fetch('https://p-9x7e.onrender.com/products/products')
    .then(respose => respose.json())
    .then(res =>
    {
        console.log(res.data);
        for (let i = 0; i<res.data.length; i++) 
        {
            const tr=  document.createElement("tr")
            const td1=  document.createElement("td")
            const td2=  document.createElement("td")
            const td3=  document.createElement("td")
            const td4=  document.createElement("td")
            const td5=  document.createElement("td")
            td1.innerText = res.data[i]._EregNo
            td1.innerText = res.data[i].Ename
            td1.innerText = res.data[i].Edesignation
            td1.innerText = res.data[i].Esalary
            td1.innerText = res.data[i].Eloc

            tr.append(td1,td2,td3,td4,td5)

            table.append(tr)

        }
    })
}
