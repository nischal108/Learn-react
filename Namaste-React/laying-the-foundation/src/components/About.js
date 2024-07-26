import React from "react";
import AboutShimmer from "./AboutShimmer";

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userinfo: {},
      isLoading: true,
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/nischal108");
    const json = await data.json();
    this.setState({
      userinfo: json,
      isLoading: false,
    });
  }

  render() {
    const { userinfo, isLoading } = this.state;

    if (isLoading) {
      return <AboutShimmer />;
    }

    const {
      name,
      location,
      bio,
      avatar_url,
      public_repos,
      followers,
      following,
    } = userinfo;
    return (
      <div className="about-card">
        <div className="profile-picture">
          <img src={avatar_url} alt={`${name}'s avatar`} />
        </div>
        <div className="profile-info">
          <h1>{name}</h1>
          <h2>{location}</h2>
          <p>{bio}</p>
          <div className="additional-info">
            <p>Public Repositories: {public_repos}</p>
            <p>Followers: {followers}</p>
            <p>Following: {following}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
