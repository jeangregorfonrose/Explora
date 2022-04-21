const apiKey =
  "rqNU04gkcFHJ_S1mpWErsnk9Qbd5xSdJThAUIuQjbYgeO9oH8lroR8o2i2ITpwyGrLJg21Lbx1hrL4Xc2Tum2Xfwzh5XHIyoG22u7tYeNcrp5fv66-aEHs2E8g5gYnYx";

const Yelp = {
  search: (term, location, sortBy) => {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      { headers: { Authorization: `Bearer ${apiKey}` } }
    )
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse.businesses) {
          const businesses = jsonResponse.businesses.map((business) => {
            const businessInfo = {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories,
              rating: business.rating,
              reviewCount: business.review_count,
            };
            return businessInfo;
          });
          return businesses;
        }
      });
  },
};

export default Yelp;
