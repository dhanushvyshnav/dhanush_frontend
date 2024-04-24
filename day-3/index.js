const button = document.querySelector(".btn-1")
button.addEventListener("click", handleClick);

const div = document.querySelector('#container')

//let movie= "KGF"
function handleClick() {
    fetch('https://p-9x7e.onrender.com/products/products')
    .then(respose => respose.json())
    .then(res =>
    {
        console.log(res.data);
        for (let i = 0; i<res.data.length; i++) 
        {
            const para = document.createElement('p');
            para.innerText= res.data[i]._id + "====" + res.data[i].pName;
            div.append(para);
            
        }
    })    
}