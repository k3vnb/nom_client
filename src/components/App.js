import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NomsContext from '../NomsContext';
import STORE from '../store.js';
import uuid from 'uuid';
// import config from "../config";
import {
  fetchUserData,
  fetchRestaurantsData,
  fetchAllLikesAndComments,
  postNewUpvote,
  deleteUpvote,
  patchComment,
} from '../api/routes';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import LandingPage from './LandingPage/LandingPage';
import NominatedRestaurantPage from './NominatedRestaurantPage/NominatedRestaurantPage';
import LoginForm from './LoginForm/LoginForm';
import RegisterForm from './RegisterForm/RegisterForm';
import AddRestaurantForm from './AddRestaurantForm/AddRestaurantForm';
import MyReviews from './MyReviews/MyReviews';
import About from './About/About';
import TermsAndConditions from './TermsAndConditions/TermsAndConditions';
import PrivacyPolicy from './TermsAndConditions/PrivacyPolicy';
import NotFoundPage from './NotFoundPage/NotFoundPage';

import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true,
      userId: uuid.v4(),
      nominatedRestaurants: [],
      users: [],
      user: {},
      likes_and_comments: [],
      likesAndComments: [],
      voteTallies: {},
      error: null,
    };
  }

  componentDidMount() {
    this.setState(STORE);
    //add current user session
    this.getUser();
    this.getRestaurants();
    this.getLikesAndComments();
  }

  getUser = () =>
    fetchUserData().then(user =>
      this.setState({ user }, () => {
        const newUserId = this.state.user.id;
        const newUserObj = { username: 'You' };
        this.setState(({ users }) => (users[newUserId] = newUserObj));
      })
    );

  getRestaurants = () =>
    fetchRestaurantsData().then(nominatedRestaurants =>
      this.setState({ nominatedRestaurants }, () => this.getVoteTallies())
    );

  getVoteTallies = () => {
    const voteTallyObj = {};
    this.state.nominatedRestaurants.forEach(
      restaurant =>
        (voteTallyObj[restaurant.id] = Number(restaurant.vote_count))
    );
    this.setState({ voteTallies: voteTallyObj });
  };

  getLikesAndComments = () =>
    fetchAllLikesAndComments().then(likesAndComments =>
      this.setState({ likesAndComments })
    );

  handleAddRestaurant = (newRestaurant, newLike, newLikesTableID) => {
    this.setState({
      nominatedRestaurants: [...this.state.nominatedRestaurants, newRestaurant],
    });
    this.setState(
      ({ likes_and_comments }) =>
        (likes_and_comments[newLikesTableID] = newLike)
    );
  };

  handleVoteForRestaurant = async (userId, restaurantId) => {
    const newUpvote = await postNewUpvote(userId, restaurantId);
    const newVoteTallies = { ...this.state.voteTallies };
    ++newVoteTallies[restaurantId];
    this.setState(prevState => ({
      likesAndComments: [...prevState.likesAndComments, newUpvote],
      voteTallies: newVoteTallies,
    }));
  };

  handleUndoVoteForRestaurant = (userId, restaurantId, likesCommentsId) => {
    this.addEditComment(likesCommentsId, '', restaurantId);
    deleteUpvote(userId, restaurantId);
    const newVoteTallies = { ...this.state.voteTallies };
    --newVoteTallies[restaurantId];
    this.setState({
      likesAndComments: this.state.likesAndComments.filter(
        ({ id }) => id !== likesCommentsId
      ),
      voteTallies: newVoteTallies,
    });
  };

  addEditComment = async (commentId, updatedComment, restaurantId) => {
    const { user, likesAndComments } = this.state;
    patchComment(commentId, updatedComment, user.id, restaurantId);
    // console.log(commentId, updatedComment)
    const newLikesAndComments = [...likesAndComments];
    const commentToUpdate = newLikesAndComments.findIndex(
      ({ id }) => id === commentId
    );
    newLikesAndComments[commentToUpdate].comment = updatedComment;
    this.setState({ likesAndComments: newLikesAndComments });
  };

  render() {
    const {
      loggedIn,
      userId,
      nominatedRestaurants,
      users,
      user,
      voteTallies,
      likesAndComments,
    } = this.state;
    const contextVal = {
      loggedIn,
      userId,
      nominatedRestaurants,
      users,
      user,
      voteTallies,
      likesAndComments,
      nominateNewRestaurant: this.handleAddRestaurant,
      voteForRestaurant: this.handleVoteForRestaurant,
      undoVoteForRestaurant: this.handleUndoVoteForRestaurant,
      addEditComment: this.addEditComment,
    };
    return (
      <NomsContext.Provider value={contextVal}>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/register" component={RegisterForm} />
            <Route
              path="/add-new-nom"
              render={props => (
                <AddRestaurantForm
                  {...props}
                  handleAddRestaurant={this.handleAddRestaurant}
                  userId={userId}
                />
              )}
            />
            <Route
              path="/my-reviews"
              render={props => (
                <MyReviews
                  {...props}
                  restaurants={nominatedRestaurants}
                  userId={userId}
                  loggedIn={loggedIn}
                />
              )}
            />
            <Route
              path="/category/:food_category/:restaurant_id"
              render={props => (
                <NominatedRestaurantPage
                  {...props}
                  userId={userId}
                  loggedIn={loggedIn}
                  onLogout={this.handleLogout}
                />
              )}
            />
            <Route
              path="/about"
              render={props => (
                <About
                  {...props}
                  loggedIn={loggedIn}
                  onLogout={this.handleLogout}
                />
              )}
            />
            <Route path="/termsandconditions" component={TermsAndConditions} />
            <Route path="/privacypolicy" component={PrivacyPolicy} />
            <Route component={NotFoundPage} />
          </Switch>
          <Footer />
        </div>
      </NomsContext.Provider>
    );
  }
}
