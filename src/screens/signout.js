import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { paths } from "../constants/paths";
import { deleteUserToken } from "../constants/utils";

export default function SignOut() {
    const navigate = useNavigate();

    useEffect(() => {
        deleteUserToken();
        navigate(paths.SIGN_IN);
    })

    return (
        <div className="page-sign-out">
            Signed out
        </div>
    );
}