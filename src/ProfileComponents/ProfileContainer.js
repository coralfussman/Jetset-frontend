import React, { Component } from 'react';
//import Trip from './ProfileComponents/Trip'
//import NewTripForm from './ProfileComponents/NewTripForm'

class ProfileContainer extends Component {

  render() {
    
    return (
      <div>
        <h2>{"USERNAME"}&apos;s Profile</h2>
        <ol>
          {"RENDER TRIPS"}
        </ol>

        {/* <NewTripForm />
        <Trip /> */}

      </div>
    );
  }

}

export default ProfileContainer;