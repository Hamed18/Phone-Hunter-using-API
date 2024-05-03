const loadPhone = async (searchText, showAll) => {
	const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);  // synatx error: becktick ` `
	const data = await res.json();
	const phones = data.data;   // select object within object 
	displayPhones(phones,showAll);
}

const displayPhones = (phones,showAll) => {
	// step 1: where should we append the newly created div
	const phoneContainer = document.getElementById("phone-container");
	// clear phone container cards before adding new cards
	phoneContainer.textContent='';

    // show all button : hidden - remove hidden functionality
	const showAllButton = document.getElementById('show-all-container');
    if (phones.length > 12){
		showAllButton.classList.remove('hidden');
	}   
	else {
		showAllButton.classList.add('hidden');
	}

	// display only first 12 phones
	if (!showAll){
	    phones = phones.slice(0,12);
	}
	else{
		showAllButton.classList.add('hidden');
	}

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

	// after showing all object then hide loading
	toggleLoadingSpinner(false);
	
}

loadPhone();

// handle search button 
const handleSearch = (showAll) =>{
	toggleLoadingSpinner(true);
//	 console.log('search here'); 
	const searchField = document.getElementById('search-field');
	const searchText = searchField.value;
//	console.log(searchText);
	loadPhone(searchText, showAll);
}

// Loading spinner arrow function
const toggleLoadingSpinner = (isLoading) => {
	const loadingSpinner = document.getElementById('loading-spinner');
	if (isLoading)
	    loadingSpinner.classList.remove('hidden');
	else
	    loadingSpinner.classList.add('hidden');
}

// show all button has a parameter that other search button don't have
const showAll = () => {
	handleSearch(true);
}