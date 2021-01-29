//get result element
const result = document.querySelector("#result"); 
//get input filter element
const filter = document.querySelector("#filter"); 
//define an array variable
const listItems = [];

//add an event listener to filter element
filter.addEventListener('input', function(e){
    filterData(e.target.value.toLowerCase());
})

filter.addEventListener('submit', function(e){
    e.preventDefault();
})

getData();

async function getData() {
    const res = await fetch('https://randomuser.me/api?results=50')
    const { results } = await res.json()

    // Clear result
    result.innerHTML = ''

    //iterate every result and display inside of UL
    // <img src=?? 
    // <div class="user-info"
        //h4 --- name
        //p -- any info you wanna put
    // </div
    for (const r of results) {
        const li = document.createElement('li');
        // const img = document.createElement('img');
        // const div = document.createElement('div');
        // const h4 = document.createElement('h4');
        // const p = document.createElement('p');
                
        result.appendChild(li);
        // li.appendChild(img);
        // li.appendChild(div);
        // div.appendChild(h4);
        // div.appendChild(p);
        
        // div.classList.add('user-info');
        // img.src = `${r.picture.thumbnail}`; 
        // h4.innerText = `${r.name.first} ${r.name.last}`;
        // p.innerText = `${r.location.city}, ${r.location.country}`;

        listItems.push(li);

        //another solution
        li.innerHTML = `
            <img src="${r.picture.thumbnail}" alt="${r.name.first}" />
            <div class="user-info">
                <h4>${r.name.first} ${r.name.last}</h4>
                <p>${r.location.city}, ${r.location.country}</p>
            </div>
        `;
    }
}

function filterData(searchTerm) {
    listItems.forEach(item => {
        const search = item.innerText.toLowerCase();
        /* add conditional logic below */
        if(search.includes(searchTerm)) {
            //remove the class of .hide
            item.classList.remove('hide');
        } else {
            //add the class of .hide
            item.classList.add('hide');
        }
    })
}