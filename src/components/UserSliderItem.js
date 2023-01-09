import { getDistance } from "../constants/utils";

import SocialsModal from "./SocialsModal";

export default function UserSliderItem({ user, userProfile }) {
    return (
        <div className="flex-container userdetail">
            <div>
                <h1>
                    {user.general_info.first_name} {user.general_info.last_name}
                </h1>
                <p>
                    Distance: {getDistance(
                      userProfile.location.latitude,
                      userProfile.location.longitude,
                      user.location.latitude,
                      user.location.longitude
                    )} km
                </p>
                <SocialsModal user={user} />
            </div>
            <div className='swipebuttons flex-container'>
            </div>
        </div>
    );
}
