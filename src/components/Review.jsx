import { useState } from "react";
import { review } from "../data";

const Review = () => {
  const [activeUser, setActiveUser] = useState(review[0]);

  const handleUserClick = (user) => {
    setActiveUser(user);
  };
  return (
    <div className="review" id="review">
      <div className="container py-20">
        <div className="md:w-1/2 mx-auto text-center">
          <h4 className="font-bold text-color-secondary mb-4">User Review</h4>
          <h1 className="text-3xl lg:text-4xl font-bold leading-snug mb-4">
            What Client Say About Our App After Use It
          </h1>
        </div>
        <div className="mt-8">
          <div className="flex items-center justify-center flex-wrap py-9">
            {review.map((user) => {
              return (
                <img
                  key={user.img}
                  src={user.img}
                  alt="user"
                  className={`h-20 w-20 rounded-full m-3 p-1 cursor-pointer ${
                    activeUser === user ? "border-2 border-color-secondary" : ""
                  }`}
                  onClick={() => handleUserClick(user)}
                />
              );
            })}
          </div>
          <div className="text-center md:w-4/5 mx-auto min-h-[20vh]">
            <h4 className="text-xl font-semibold mb-7">{activeUser.desc}</h4>
            <p className="font-medium text-color-secondary">
              {activeUser.name}
            </p>
            <p className="font-medium">{activeUser.as}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
