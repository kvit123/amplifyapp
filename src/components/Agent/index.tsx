
import React, { FunctionComponent, Suspense, useCallback } from 'react';
import Box from 'aws-northstar/layouts/Box';
import LoadingIndicator from 'aws-northstar/components/LoadingIndicator';
import data from '../../data';
import Tabs from 'aws-northstar/components/Tabs';
import Text from 'aws-northstar/components/Text';


import Stack from 'aws-northstar/layouts/Stack';
import Overview from './components/Overview';

import Grid from "aws-northstar/layouts/Grid";
import ConnectCCP from "./lib/ConnectCCP";
import CustomerInfo from "./lib/CustomerInfo"


import 'amazon-connect-streams';



const Agent: FunctionComponent = () => {

    const CCP = useCallback(() => <ConnectCCP />, []);

    const tabs = [
        {
            label: 'Customer engagement',
            id: 'first',
            content: <Grid container spacing={3} style={{ height: "85vh" }}>
            <Grid item xs={4}>
              <CCP />
            </Grid>
            <Grid item xs={8}>
                <CustomerInfo />
            </Grid>
          </Grid>
            // <Overview />
            // <Text>First tab content area</Text>

        },
        {
            label: 'Screen',
            id: 'second',
            content: <iframe src='https://www.bangkokpost.com/' height="600px" width="960px" scrolling="yes"
            />
            
        }
    ]

    

    return (
        <Suspense
            fallback={
                <Box width="100%" minHeight="100px" display="flex" justifyContent="center" pt={10}>
                    <LoadingIndicator size="large"></LoadingIndicator>
                </Box>
            }
        >
            <h2>Agent</h2>
            <Tabs tabs={tabs} variant="container" />

        </Suspense>
    );
};
  
  export default Agent;
  