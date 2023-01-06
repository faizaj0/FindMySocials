import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { handleReq } from "../constants/utils.js";
import { apiURL } from "../constants/config.js";

import UserSlider from "../components/UserSlider.js";
import Footer from "../components/footer.js";

export default function UserDetail() {
    const placeholder = "https://via.placeholder.com/250x250";

    const { index } = useParams();

    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [nearbyUsers, setNearbyUsers] = useState([]);
    const [userProfile, setUserProfile] = useState();

    useEffect(() => {
      const fetchData = async () => {
        const nearbyUsersData = await handleReq(apiURL+"/dj/api/users/test-users-nearby", 'GET', null, navigate);
        const profileData = await handleReq(apiURL+"/dj/api/users/user-profile/", 'GET', null, navigate);
        console.log('Nearby Users: ', nearbyUsersData);
        console.log('User Profile: ', profileData);
  
        if (!nearbyUsersData) {
            console.log('Nearby Users Data Could Not Be Retrieved');
            return;
        }
        if (!profileData) {
            console.log('User Profile Data Could Not Be Retrieved');
            return;
        }

        setNearbyUsers(nearbyUsersData.nearby_users);
        setUserProfile(profileData[0]);
        setLoading(false);
      }
      fetchData();
    }, [])

  return (
    <div className="flex-container swipe-profile">
      <UserSlider users={nearbyUsers} initialSlide={index} />
      <Footer />
    </div>
  );
}
