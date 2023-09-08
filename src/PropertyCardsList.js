


function PropertyCardsList({ listings }) {


  return (
    <div className='PropertyCardsList'>

      {listings.map(listing =>
        <div>
          <h1>Title: {listing.title}</h1>
          <p>Description: {listing.description}</p>
          <p>Price per day: {listing.pricePerDay}</p>
          <p>Host: {listing.host}</p>
          <p>Photo Primary Name: {listing.photoPrimaryName}</p>
          <img src={listing.photoPrimaryUrl}
            width='300px'
            heigth='300px'
            alt={listing.photoPrimaryName}>
          </img>
        </div>
      )}
    </div>


  );
}



export default PropertyCardsList;