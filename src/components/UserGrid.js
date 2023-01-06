import { Grid } from "@chakra-ui/react";

import UserGridItem from './UserGridItem';

export default function UserGrid({ users, userProfile }) {
    return (
        <div className="userGrid">
            <Grid templateColumns="repeat(3, 1fr)" gap={1}>
                {users ?
                    users.map((user, index) => {
                        return (
                            <UserGridItem key={index} user={user} userProfile={userProfile} index={index} />
                        )
                    })
                    :
                    <p>No Users Found</p>
                }
            </Grid>
        </div>
    );
}
