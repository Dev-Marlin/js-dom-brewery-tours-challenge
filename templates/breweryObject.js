const breweries = [
  {
    address_2: null,
    address_3: null,
    brewery_type: "large",
    city: "San Diego",
    country: "United States",
    county_province: null,
    created_at: "2018-07-24T00:00:00.000Z",
    id: 8041,
    latitude: "32.714813",
    longitude: "-117.129593",
    name: "10 Barrel Brewing Co",
    obdb_id: "10-barrel-brewing-co-san-diego",
    phone: "6195782311",
    postal_code: "92101-6618",
    state: "California",
    street: "1501 E St",
    updated_at: "2018-08-23T00:00:00.000Z",
    website_url: "http://10barrel.com"
  }
];

// breweries-list

//function drawList(breweries)
//{
  const brewList = document.querySelector(".breweries-list");

  for(let x = 0; x < breweries.length; x++)//(let brew in breweries)
  {
    const brewery = document.createElement("li");

    const name = document.createElement("h2");
    name.innerText = breweries[x].name;//brew.name;
    brewery.append(name);

    const type = document.createElement("div");
    type.classList.add("type");
    type.innerText = breweries[x].brewery_type;
    brewery.append(type);


    // First Section
    const section1 = document.createElement("section");
    section1.classList.add("address");

    const addressTitle = document.createElement("h3");
    addressTitle.innerText = "Address:";

    //test
    let postalString = breweries[x].postal_code.split("-");
    console.log(postalString);
    
    const address = document.createElement("p");
    address.innerText = postalString[1];

    const city = document.createElement("strong");
    city.innerText = breweries[x].city+", "+postalString[0];
    const cityContainer = document.createElement("p");
    cityContainer.append(city);

    section1.append(addressTitle);
    section1.append(address);
    section1.append(cityContainer);
    brewery.append(section1);

    // Second Section
    const section2 = document.createElement("section");
    section2.classList.add("phone")

    const phoneTitle = document.createElement("h3");
    phoneTitle.innerText = "Phone:";
    
    const phoneNbr = document.createElement("p");
    phoneNbr.innerText = breweries[x].phone;

    section2.append(phoneTitle);
    section2.append(phoneNbr);
    brewery.append(section2);

    // Third Section
    const section3 = document.createElement("section");
    section3.classList.add("link");

    const link = document.createElement("a");
    link.href = breweries[x].website_url;
    link.traget = 
    link.innerText = "Visit Website";

    section3.append(link);
    brewery.append(section3);

    brewList.append(brewery);
  }
//}

//drawList(breweries);

