import { Field, reduxForm } from "redux-form";

const ProfileDataForm = ({ handleSubmit, profile, error}) => {
  return (
    <form onSubmit={handleSubmit}>
      <button>save</button>
      {error && <div>
        {error}
      </div>

      }
      <div>
        <b>FullName</b>:
        <Field name={"fullName"} component={"input"} placeholder={"FullName"} />
      </div>
      <div>
        <b>LookingForAJob</b>:
        <Field component={"input"} type={"checkbox"} name={"lookingForAJob"} />
      </div>
      <div>
        <b>My professional skills</b>:
        <Field
          name={"lookingForAJobDescription"}
          component={"textarea"}
          placeholder={"My professional skills"}
        ></Field>
      </div>
      <div>
      <b>Contacts</b>: {Object.keys(profile.contacts).map(key =>{
    return <div key={key}> 
      <b>{key}:  <Field name={"contacts." + key} component={"input"} placeholder={key} /> </b>
    </div>
  })
}</div>
    </form>
  );
};

const ProfileDataFormRedux = reduxForm({
  form: "edit",
})(ProfileDataForm);

export default ProfileDataFormRedux;
