import Profile from "./Profile";
import React from "react";
import { connect } from "react-redux";
import { getUserProfile, getStatus, updateStatus, savePhoto, updateProfile } from "../../redux/profile-reducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { compose } from "redux";


class ProfileContainer extends React.Component {
debuger;
  refreshProfile(){
    let userId = this.props.router.params.userId;
    if(!userId){
     userId = 2;
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  componentDidMount() {
   this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState){
    if(this.props.router.params.userId != prevProps.router.params.userId){
    this.refreshProfile();
    }
  }


  render() {
    return <Profile {...this.props} isOwner={!this.props.router.params.userId} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}
    savePhoto={this.props.savePhoto} updateProfile={this.props.updateProfile}/>;
  }
  
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    
  };
};

export default compose(
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, updateProfile}),
  withRouter
)(ProfileContainer)

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
   
      
      return (
          <Component
              {...props}
              router={{ location, navigate, params }}
          />
      );
  }
  

  return ComponentWithRouterProp;
}

