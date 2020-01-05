import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Comments from "../Comments/Comments";
import VoteButtons from "../VoteButtons/VoteButtons";
import "./NominatedRestaurantPage.css";
import NomsContext from "../../NomsContext";

export default function NominatedRestaurantPage(props) {
  return (
    <NomsContext.Consumer>
      {context => {
        const { food_category, restaurant_id } = props.match.params;
        const restaurantInfoContainer = context.nominated_restaurants.find(
          restaurant =>
            restaurant.id === restaurant_id &&
            restaurant.food_category === food_category
        );

        let restaurantInfo;
        restaurantInfoContainer
          ? (restaurantInfo = restaurantInfoContainer)
          : (restaurantInfo = {
              id: "1",
              name: "",
              date_nominated: "1970-01-01",
              food_category: "",
              likes_table: "1"
            });
        const {
          name,
          date_nominated,
          likes_table,
          food_category: category
        } = restaurantInfo;

        let likesCount;
        context.likes_and_comments[likes_table]
          ? (likesCount =
              context.likes_and_comments[likes_table].liked_by.length)
          : (likesCount = 0);

        function getComments() {
          let comments;
          if (context.likes_and_comments[likes_table]) {
            const findComments = context.likes_and_comments[
              likes_table
            ].liked_by.filter(like => like.comment.length);

            comments = findComments.map((like, i) => (
              <Comments
                key={i}
                comment={like.comment}
                username={context.users[like.user].username}
              />
            ));
          } else {
            comments = "uh oh something went wrong";
          }
          return comments;
        }

        return (
          <>
            <Header
              {...props}
              loggedIn={props.loggedIn}
              onLogout={props.onLogout}
            />
            <main className="restaurant-page-main-container">
              <Link to="/">Go back</Link>
              <h2>{name}</h2>
              <VoteButtons id={restaurant_id} />
              <p>
                <span className="restaurant-page-label">Current Votes: </span>{" "}
                {likesCount}
              </p>
              <p>
                <span className="restaurant-page-label">
                  Nominated for Best {category} on:{" "}
                </span>
                {new Date(date_nominated).toDateString()}
              </p>
              <section className="comment-section">
                <h3>Comments</h3>
                {getComments()}
              </section>
            </main>
            <Footer />
          </>
        );
      }}
    </NomsContext.Consumer>
  );
}