import React, { useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import Review from './Review';
import { restaurantsData } from './db/data';


const RestaurantDetailPage = () => {
    const [showReview, setShowReview] = useState(false)
    const navigate = useNavigate();
    const {restaurantID} = useParams();

    const revNames = ['Mohan', 'Jack', 'Siya', 'Raj', 'Mohit', 'Raju', 'Shayam'];
    const PPs = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5tbKdv1HDbAjPc526SK0yDZuoOmaaOyGNoj_e1q3ngruK2bTqzub3&s=0",

        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3uO7UUBnkvtntc2R8Y9krkgWvbl-BTKMazZjg8Ul-gmDgzQeb8I6DIQ&s=0",

        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoZ_Xg9XbpVTth91jSsUrrGzlx_v-YZ8pD4YLfGUR4CAdzq_D-DhN_&s=0"
    ]


    const [reviews, setReviews] = useState({
        rating : '',
        comment : '',
    })

    const [reviewLists, setReviewLists] = useState([])


    const data = restaurantsData?.filter(({id}) => {
        return id === Number(restaurantID)
    })

    const [{name, address, averageRating , description, ratings }] = data;


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
                {reviewLists?.map(({comment, rating}, index) => (
                    <li key={index} className='ratings'>
                        <div>
                            <img className='ratings__PP' src={revNames[Math.floor(Math.random() * revNames?.length)]} />
                            <h3>{revNames[Math.floor(Math.random() * revNames?.length)]}</h3>
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