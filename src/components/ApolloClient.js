import React from 'react';
import {useQuery} from "@apollo/client";
import {HELLO} from "../../lib/graphql/Queries/hello";

const ApolloClient = () => {
    const {error, loading, data} = useQuery(HELLO); //can also use useLazyQuery
    console.log({error, loading, data})
    return (
        <div>
            <h1>Testing Graphql Query</h1>
        </div>
    );
};

export default ApolloClient;