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
    
    const getReview = (e) => {
        e?.preventDefault();
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