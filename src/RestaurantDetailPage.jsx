import React, { useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import Review from './Review';
import { restaurantsData } from './db/data';


const RestaurantDetailPage = () => {
    const [showReview, setShowReview] = useState(false)
    const navigate = useNavigate();
    const {restaurantID} = useParams();

    


    const [reviews, setReviews] = useState({
        rating : '',
        comment : '',
        PP : '',
        revName : ''
    })

    const [reviewLists, setReviewLists] = useState([])


    const data = restaurantsData?.filter(({id}) => {
        return id === Number(restaurantID)
    })

    const [{name, address, averageRating , description, ratings }] = data;

    console.log(reviewLists)

  return (
    <div className='restaurant__detailpage'>
        <button onClick={() => navigate(-1)}>go back</button>
        
        <div>
            <div>
                <h1>{name}</h1>
                <p>{description}</p>
                <p>{address}</p>
                <p><strong>average rating : </strong> {averageRating}</p>
            </div>

            <button onClick={() => setShowReview(true)}>add review</button>
        </div>

        <hr />
        
        <h2>reviews</h2>
         
            <ul>
                {ratings?.map(({comment, pp, rating, revName}, index) => (
                    <li key={index} className='ratings'>
                        <div>
                            <img className='ratings__PP' src={pp} alt={revName} />
                            <h3>{revName}</h3>
                        </div>
                        <div>
                            <p>{comment}</p>
                            <p><strong>{rating} ⭐</strong></p>
                        </div>
                    </li>
                ))}
            </ul>
    
                    
        {reviewLists?.length > 0 && (
            <ul>
                {reviewLists?.map(({comment, rating, PP, revName}, index) => (
                    <li key={index} className='ratings'>
                        <div>
                            <img className='ratings__PP' src={PP} />
                            <h3>{revName}</h3>
                        </div>
                        <div>
                            <p>{comment}</p>
                            <p><strong>{rating} ⭐</strong></p>
                        </div>
                    </li>
                ))}
            </ul>
        )}            
        


        


        {showReview && <Review setReviewLists={setReviewLists} reviews={reviews} setReviews={setReviews} setShowReview={setShowReview} /> }

    </div>
  )
}

export default RestaurantDetailPage