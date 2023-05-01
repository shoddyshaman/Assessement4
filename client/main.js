const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById('fortuneButton');


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

const getFortune = () => {
    console.log('fortune')
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

complimentBtn.addEventListener('click', getCompliment);
fortuneBtn.addEventListener('click', getFortune);

//Part2 

const shoesContainer = document.querySelector('#shoes-container');
const form = document.querySelector('form');

//set base url
const baseURL = `http://localhost:4000/api/shoes`

//catch
const errCallback = err => console.log(err.response.data);

const getShoes = () => {
    axios.get(baseURL).then((res) => {
        shoes = res.data
        displayShoes(shoes)
    })
        .catch(errCallback)
}

const createShoes = (body) => {
    axios.post(baseURL, body).then((res) => {
        shoes = res.data
        displayShoes(shoes)
    })
        .catch(errCallback)
}

const deleteShoes = (id) => {
    axios.delete(`${baseURL}/${id}`).then((res) => {
        shoes = res.data
        displayShoes(shoes)
    })
        .catch(errCallback)
}
const updateShoes = (id, type) => {
    axios.put(`${baseURL}/${id}`, { type }).then((res) => {
        shoes = res.data
        displayShoes(shoes)
    })
        .catch(errCallback)
}


function submitHandler(event) {
    event.preventDefault()

    let title = document.querySelector('#title');
    let rating = document.querySelector('input[name="ratings"]:checked');



    //create body object for post
    let body = {
        title: title.value,
        rating: rating.value,
    }

    createShoes(body)

    title.value = ''
    rating.checked = false
}

// function createShoes(shoes) {
//     const shoesCard = document.createElement('div')
//     shoesCard.classList.add('shoes-card')

//     shoesCard.innerHTML = `<p class="shoes-title">${shoes.title}</p>
//     <div class="btns-container">
//         <button onclick="updateShoes(${shoes.id}, 'minus')">-</button>
//         <p class="shoes-rating">${shoes.rating} stars</p>
//         <button onclick="updateShoes(${shoes.id}, 'plus')">+</button>
//     </div>
//     <button onclick="deleteShoes(${shoes.id})">delete</button>
//     `


//     shoesContainer.appendChild(shoesCard)
// }


function displayShoes(arr) {
    shoesContainer.innerHTML = ''
    for (let i = 0; i < arr.length; i++) {
        createShoes(arr[i])
    }
}

form.addEventListener('submit', submitHandler)

getShoes();

