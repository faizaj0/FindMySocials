import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SignInForm from '../components/SignInForm'
import { apiURL } from '../constants/config';
import { paths } from '../constants/paths';
import { handleReq } from '../constants/utils';

export default function SignIn() {
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const profileData = await handleReq(apiURL + "/dj/api/users/user-profile/", 'GET', null, navigate);
            console.log('User Profile: ', profileData);

            if (!profileData) { // If not logged in
                console.log('User Profile Data Could Not Be Retrieved');
                return;
            }

            // Redirect to home of already logged in
            navigate(paths.HOME);
        }
        fetchData();
    }, [])

    return (
        <div className='page-sign-in'>
            <SignInForm />
        </div>
    );
}