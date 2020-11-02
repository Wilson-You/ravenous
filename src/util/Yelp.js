const apiKey = 'hdmy1BdjYME9qhMea8KEJNOiwyTcALxOwTYSkiw76rkHiN_NyrazEFtg8N4VT6fVKg_ShO7vM1hik_o0Fbf0vni_O6uDD6UoXWLCmgBB7Ik4BF8wAnh7VWG8v4acX3Yx';

const Yelp = {
    search: function (term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, { headers: { Authorization: `Bearer ${apiKey}` } })
            .then(response => response.json())
            .then(jsonResponse => {
                console.log(jsonResponse);
                if (jsonResponse.businesses) {
                    return jsonResponse.businesses.map(business => {
                        return {
                            id: business.id,
                            imageSrc: business.image_url,
                            name: business.name,
                            rating: business.rating,
                            address: business.location.city,
                            state: business.location.state,
                            category: business.categories[0].title,
                            zipcode: business.location.zip_code,
                            reviewCount: business.review_count
                        }
                    })
                }
            })
    }
};


export default Yelp;