import { useNavigate, useParams } from "react-router-dom";

import { data } from "../constants/userdummydata";

export default function ProfileImage(uri) {
  console.log(uri);
  const { id } = useParams();

  return (
    <div>
      {data.map((item) => {
        if (id == item.generalinfo.first_name) {
          return (
            <div>
              <img className={"profileImage"} src={item.generalinfo.image.uri} />
            </div>
          );
        }
      })}
    </div>
   
  );
}
