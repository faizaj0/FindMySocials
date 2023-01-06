import { paths } from "./paths";

export const getUserToken = () => {
    return localStorage.getItem("userToken") || sessionStorage.getItem('userToken');
}

export const setUserToken = (token, rememberMe) => {
    sessionStorage.setItem('userToken', token);
    if (rememberMe) {
        localStorage.setItem("userToken", token);
    }
}

export const deleteUserToken = () => {
    localStorage.removeItem("userToken");
    sessionStorage.removeItem("userToken");
}

export const getReqHeaders = (token) => {
    const headers = {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
    }
    if (token) {
        // Login return 401 if invalid Authorization is set
        // so only set it if token is present
        headers.Authorization = "Token " + token;
    }
    return headers;
}

export const handleReq = async (url, method='GET', body, navigate, withAuth=true) => {
    // Navigate must be passed from the component
    // as it cannot be called outside a component
    const userToken = getUserToken();
    console.log("Token: ", userToken);
    console.log('Request Body: ', body);

    // If user token is missing and not currently signing in
    if (!userToken && withAuth) {
        navigate(paths.SIGN_IN);
        return;
    }

    const options = {
        method: method,
        headers: getReqHeaders(userToken),
    }
    if (body) {
        options.body = JSON.stringify(body);
    }

    // Fetch request
    return await fetch(url, options)
    .then(response => {
        // Sign out if token is expired
        if (response.status == 401) {
            navigate(paths.SIGN_OUT);
            return;
        }
        return response.json();
    })
    .then(data => {
        return data;
    })
    .catch(error => {
        console.error("Error: ", error);
    });
}

export const getDistance = (lat1, lon1, lat2, lon2) => {
    function deg2rad(deg) {
        return deg * (Math.PI/180)
    }

    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2-lat1);  // deg2rad below
    const dLon = deg2rad(lon2-lon1); 
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2); 
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    const d = R * c; // Distance in km
    return Math.round(d);
}