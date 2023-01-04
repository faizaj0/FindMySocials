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

    // Fetch request
    return await fetch(url, {
        method: method,
        headers: getReqHeaders(userToken),
        body: JSON.stringify(body),
    })
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