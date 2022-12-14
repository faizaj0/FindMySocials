export default function ProfileImage({fixed=false}) {
    return (
      <img
        className={"profileImage" + (fixed ? ' fixed' : '')}
        src={require("../images/placeholderprofile.jpg")}
      />
    );
  }