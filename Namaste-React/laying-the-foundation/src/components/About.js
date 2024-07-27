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
      <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto mt-6">
        <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
          <img
            src={avatar_url}
            alt={`${name}'s avatar`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-1">{name}</h1>
          <h2 className="text-lg text-gray-600 mb-2">{location}</h2>
          <p className="text-sm text-gray-700 mb-4">{bio}</p>
          <div className="text-gray-600">
            <p className="mb-1">
              <strong>Public Repositories:</strong> {public_repos}
            </p>
            <p className="mb-1">
              <strong>Followers:</strong> {followers}
            </p>
            <p className="mb-1">
              <strong>Following:</strong> {following}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
