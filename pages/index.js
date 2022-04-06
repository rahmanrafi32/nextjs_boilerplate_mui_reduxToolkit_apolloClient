import * as React from 'react';
import {Stack, Typography} from "@mui/material";

export default function Index() {
    return (
        <Stack alignItems={"center"}>
            <Typography variant={"h1"}>Welcome to NextJS boilerplate with <br/> Apollo Client and <br/> Redux
                Toolkit</Typography>
        </Stack>
    );
}