import React from 'react';

class AboutShimmer extends React.Component {
  render() {
    return (
      <div className="about-card skeleton">
        <div className="profile-picture skeleton-picture"></div>
        <div className="profile-info">
          <div className="skeleton-text"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-text"></div>
          <div className="additional-info">
            <div className="skeleton-text"></div>
            <div className="skeleton-text"></div>
            <div className="skeleton-text"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutShimmer;
