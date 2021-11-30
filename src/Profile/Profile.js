export default function Profile(props) {
    return (
      <div className="App">
        <p>{props.fullName}</p>
        <p>{props.bio}</p>
        <p>{props.profession}</p>
        <img src={props.Photo} alt="img in src" />
        <br />
        <button onClick={props.alert}>sucsess</button>
      </div>
    );
  }