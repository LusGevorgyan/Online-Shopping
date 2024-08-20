import React, { useState } from 'react'

const RatingList: React.FC<{values: number}> = (values) => {
    const [ rating, setRating ] = useState(values)

    return (
        <div className='rating'>
            {[1, 2, 3, 4, 5].map((value) => (
                <span
                    key={value}
                    className={`star ${rating ? 'selected' : 'star'}`}
                >
                  &#9733;
                </span>
            ))}
        </div>
    );
};

export default RatingList
