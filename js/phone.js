const loadPhone = async (searchText) => {
	const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);  // synatx error: becktick ` `
	const data = await res.json();
	const phones = data.data;   // select object within object 
	displayPhones(phones);
}

const displayPhones = phones => {
	// step 1: where should we append the newly created div
	const phoneContainer = document.getElementById("phone-container");
	// clear phone container cards before adding new cards
	phoneContainer.textContent='';

	phones.forEach(phone =>{   // accessing each object one by one
		// step 2: create a div
		const phoneCard = document.createElement('div');
		phoneCard.classList = `card p-4 bg-gray-100 shadow-xl`;

		// step 3: set inner html : craete a card's layout
		phoneCard.innerHTML = `
		<figure class="px-10 pt-10">
		<img src="${phone.image}" alt="Shoes" class="rounded-xl" />
	    </figure>
	    <div class="card-body items-center text-center">
		    <h2 class="card-title">${phone.phone_name}</h2>
		    <p>If a dog chews shoes whose shoes does he choose?</p>
		    <div class="card-actions">
		       <button class="btn btn-primary">Buy Now</button>
		    </div>
	    </div>
	    `;

		// step 4: append child 
		phoneContainer.appendChild(phoneCard);

	})
}

loadPhone();

// handle search button 
const handleSearch = () =>{
	 console.log('search here'); 
	const searchField = document.getElementById('search-field');
	const searchText = searchField.value;
//	console.log(searchText);
	loadPhone(searchText);
}

