
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import UserGrid from "../components/UserGrid.js";
import { useEffect, useState } from "react";
import { handleReq } from "../constants/utils";
import { useNavigate } from "react-router-dom";
import { apiURL } from "../constants/config";

export default function Home() {
    const navigate = useNavigate();

    const [nearbyUsers, setNearbyUsers] = useState([]);
    const [loading, setLoading] = useState(true);
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
        <div className="page-home">
            {loading && <p>Loading...</p>}
            <Header name={userProfile?.general_info?.first_name} />
            <SearchBar />
            <UserGrid users={nearbyUsers} userProfile={userProfile} />
            <Footer />
        </div>
    );
}