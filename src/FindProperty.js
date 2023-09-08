import ShareBnbApi from "./api";
import { useState, useEffect } from 'react';
import PropertyCardsList from "./PropertyCardsList";

function FindProperty(){

  const [listings, setListings] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(function fetchListingsOnMount(){
    async function fetchListings(){
      const listings = await ShareBnbApi.getAllListings();
      setListings(listings);
      setIsLoading(false);
    }
    fetchListings();
  }, [])


  if (isLoading) return <div><p>Loading...</p></div>

  return(
    <div className='FindProperty'>

      <PropertyCardsList listings={listings}/>

    </div>

  )

}






export default FindProperty;