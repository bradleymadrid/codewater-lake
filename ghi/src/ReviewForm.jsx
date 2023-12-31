import React, { useEffect, useState } from "react";
import {
    MDBBtn,
    MDBInput,
    MDBCheckbox
} from 'mdb-react-ui-kit';
import { useNavigate } from "react-router-dom";
import { useCreateReviewMutation } from "./redux/apiSlice";

function ReviewForm(props) {
    const [review, setReview] = useState({
        cabin_id: 0,
        reservation_id: 0,
        rating: 0,
        comment: '',
        anonymous: true
    })
    const [createReview] = useCreateReviewMutation()
    const navigate = useNavigate()

    useEffect(() => {
        setReview((prevReview) => ({
            ...prevReview,
            cabin_id: props.cabin,
            reservation_id: props.reservation
        }));
}, [props.cabin, props.reservation, setReview]);

    function handleSubmit(e){
        createReview(review);
        navigate('/')
    }

    const changeField = (e) => {
        let value = e.target.value;
        let name = e.target.name;
        if (e.target.type === "checkbox") {
            value = e.target.checked;
        }
        setReview({
            ...review,
            [name]: value
        });
    }

    return (
    <div className="card text-bg-light mb-3">
        <div className="input-wrapper">
            <MDBInput label='rating' id="rating" name="rating" type="number" max={5} value={review.rating} onChange={changeField} />
        </div>
        <div className="input-wrapper">
            <MDBInput label='comments' id="comments" name="comment" type="text" value={review.comment} onChange={changeField} />
        </div>
        <div className="input-wrapper">
            <MDBCheckbox label='anonymous' id="anonymous" name="anonymous" value={review.anonymous} onChange={changeField} />
        </div>
        <MDBBtn outline rounded className='mx-2' color='info' onClick={handleSubmit}>
            Submit Feedback
        </MDBBtn>
    </div>
    )
}

export default ReviewForm;
