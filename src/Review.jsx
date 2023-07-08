import React from 'react'

const Review = ({reviews, setReviews, setShowReview, setReviewLists}) => {
    

    const getRating = (e) => {
        console.log(e?.target?.value)
        setReviews((prev) => ({...prev, rating : e?.target?.value}))
    }

    const getComment = (e) => {
        console.log(e?.target?.value)
        setReviews((prev) => ({...prev, comment : e?.target?.value}))
    }

    const revNames = ['Mohan', 'Jack', 'Siya', 'Raj', 'Mohit', 'Raju', 'Shayam'];
    const PPs = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5tbKdv1HDbAjPc526SK0yDZuoOmaaOyGNoj_e1q3ngruK2bTqzub3&s=0",

        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3uO7UUBnkvtntc2R8Y9krkgWvbl-BTKMazZjg8Ul-gmDgzQeb8I6DIQ&s=0",

        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoZ_Xg9XbpVTth91jSsUrrGzlx_v-YZ8pD4YLfGUR4CAdzq_D-DhN_&s=0"
    ]
    
    const getReview = (e) => {
        e?.preventDefault();
 
        setReviews((prev) => ({...prev, PP : PPs[Math.floor(Math.random() * PPs?.length)],  revName : revNames[Math.floor(Math.random() * revNames?.length)] }));

        console.log(reviews)
 
        setReviewLists((prev) => [...prev, reviews]);
        setShowReview(false)
    }
  
    return (
    <div className='review'>
        <button onClick={() => setShowReview(false)}>X</button>
        <h1>add your review</h1>

        <form className='review__form' onSubmit={(e) => getReview(e)}>
            <label htmlFor="">
                rating:
                <select onChange={(e) => getRating(e)}>
                    <option>select rating</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </label>

            <label htmlFor="">
                comment : 
               <textarea onChange={(e) => getComment(e)} name="" id="" cols="30" rows="2"></textarea>
            </label>

            <button>submit</button>
        </form>
    </div>
  )
}

export default Review