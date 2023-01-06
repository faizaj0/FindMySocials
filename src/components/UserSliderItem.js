import { getDistance } from "../constants/utils";

import SocialsModal from "./SocialsModal";

export default function UserSliderItem({ item, userProfile }) {
    return (
        <div className="flex-container userdetail">
            <div>
                <h1>
                    {item.general_info.first_name} {item.general_info.last_name}
                </h1>
                <p>
                    Distance: {getDistance(
                      userProfile.location.latitude,
                      userProfile.location.longitude,
                      item.location.latitude,
                      item.location.longitude
                    )} km
                </p>
                <SocialsModal />
            </div>
            <div className='swipebuttons flex-container'>
            </div>
        </div>
    );
}
