import { Image, Text } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom";
import { paths } from "../constants/paths";
import { getDistance } from "../constants/utils";

export default function UserGridItem({ user, userProfile, index }) {
    const navigate = useNavigate();
    const placeholder = "https://via.placeholder.com/250x250";

    return (
        <div className="userlistitem" style={{display: user.visible ? 'block' : 'none'}}>            
            <Image
                src={placeholder}
                onClick={() => {
                    navigate(paths.USER_DETAIL_INDEX.replace(':index', index))
                }}
            />
            <Text fontSize='sm' fontWeight={'bold'}>
                {user.general_info.first_name}
            </Text>
            <Text fontSize={'xs'}>
                {getDistance(
                    userProfile.location.latitude,
                    userProfile.location.longitude,
                    user.location.latitude,
                    user.location.longitude
                )} km
            </Text>
        </div>
    )
}