import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks"
import userPhoto from "./../../../assets/images/user.png"
import { useState } from "react";
import ProfileDataForm from "./ProfileDataForm"

const ProfileInfo = (props) => {
 
  let [editMode,setEditMode] = useState(false);
let [status,setStatus] = useState(props.status);


  if(!props.profile){
    return <Preloader />
  }

const onMainPhotoSelected = (e) =>{

  if(e.target.files.length){
props.savePhoto(e.target.files[0]);
  }
}

const onSubmit = (formData) => {
  props.updateProfile(formData);
  setEditMode(false);
}
  return (
    <div>
      {/* <div>
        <img src="https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w="></img>
      </div> */}
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large || userPhoto} className={s.mainPhoto}/>
      
        {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
        { editMode ? <ProfileDataForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit}/> : 
        <ProfileData profile={props.profile} isOwner={props.isOwner} goToEditMode={() => {setEditMode(true)}}/>}
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} updateProfile={props.updateProfile}/>
        </div>
    </div>
  );
};
const ProfileData = ({profile, isOwner, goToEditMode}) => {
return  <div> 
  {isOwner && <button onClick={goToEditMode}>edit</button>}
  <div><b>FullName</b>:{profile.fullName}</div>
<div><b>LookingForAJob</b>:{profile.lookingForAJob ? "yes" : "no"}</div>
<div><b>My professional skills</b>:{profile.lookingForAJobDescription}</div>
<div>{profile.userId}</div>
<div>
  <b>Contacts</b>: {Object.keys(profile.contacts).map(key =>{
    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
  })

  }
</div>
</div>
}


const Contact = ({contactTitle,contactValue}) => {
  return <div><b>{contactTitle}:</b>{contactValue}</div>
}

export default ProfileInfo;