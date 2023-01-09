import React, { useEffect, useState } from "react";

import { Button, ButtonGroup, VStack, StackDivider, Text, Alert, AlertIcon } from "@chakra-ui/react";
import {
    FaFacebook,
    FaInstagram,
    FaSnapchat,
    FaTiktok,
    FaTwitter,
} from "react-icons/fa";

export default function SocialsLinks({ user }) {
    const [facebook, setFacebook] = useState();
    const [twitter, setTwitter] = useState();
    const [instagram, setInstagram] = useState();
    const [snapchat, setSnapchat] = useState();
    const [tiktok, setTiktok] = useState();

    useEffect(() => {
        setTwitter(
            user.social_links.filter(obj => {
                return obj.site === 'Twitter'
            })[0]
        )
        setInstagram(
            user.social_links.filter(obj => {
                return obj.site === 'Instagram'
            })[0]
        )
        setFacebook(
            user.social_links.filter(obj => {
                return obj.site === 'Facebook'
            })[0]
        )
        setSnapchat(
            user.social_links.filter(obj => {
                return obj.site === 'Snapchat'
            })[0]
        )
        setTiktok(
            user.social_links.filter(obj => {
                return obj.site === 'Tiktok'
            })[0]
        )
    }, [])

    function socialsExist() {
        return Boolean(facebook || twitter || instagram || snapchat || tiktok);
    }

    return (
        <div className="usersocials flex-container">
            <VStack spacing={5} align="stretch">
                {!socialsExist() &&
                    <Alert status='info'>
                        <AlertIcon />
                        No Socials Found
                    </Alert>
                }
                {twitter &&
                    <Button
                        classname='socialbutton'
                        colorScheme="twitter"
                        leftIcon={<FaTwitter/>}
                        onClick={() => window.location.href = twitter.url}
                    >
                        Twitter
                    </Button>
                }
                {instagram &&
                    <Button
                        classname='socialbutton'
                        colorScheme="pink"
                        leftIcon={<FaInstagram/>}
                        onClick={() => window.location.href = instagram.url}
                    >
                        Instagram
                    </Button>
                }
                {facebook &&
                    <Button
                        classname='socialbutton'
                        colorScheme="facebook"
                        leftIcon={<FaFacebook/>}
                        onClick={() => window.location.href = facebook.url}
                    >
                        Facebook
                    </Button>
                }
                {snapchat &&
                    <Button
                        classname='socialbutton'
                        colorScheme="yellow"
                        leftIcon={<FaSnapchat/>}
                        onClick={() => window.location.href = snapchat.url}
                    >
                        Snapchat
                    </Button>
                }
                {tiktok &&
                    <Button
                        classname='socialbutton'
                        colorScheme="blue"
                        leftIcon={<FaTiktok/>}
                        onClick={() => window.location.href = tiktok.url}
                    >
                        Tiktok
                    </Button>
                }
            </VStack>
        </div>
    );
}
