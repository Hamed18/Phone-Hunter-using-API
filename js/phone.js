const loadPhone = async () => {
	const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
	const data = await res.json();
	const phones = data.data;   // select object within object 
	displayPhones(phones);
}

const displayPhones = phones => {
	// step 1: where should we append the newly created div
	const phoneContainer = document.getElementById("phone-container");
	phones.forEach(phone =>{
		// step 2: create a div
		const phoneCard = document.createElement('div');
		phoneCard.classList = `card w-96 bg-gray-100 shadow-xl`;

		// step 3: set inner html : card's layout
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