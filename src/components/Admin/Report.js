import React from 'react'

import Container from 'aws-northstar/layouts/Container';
import Text from 'aws-northstar/components/Text';
import ColumnLayout, { Column } from 'aws-northstar/layouts/ColumnLayout';
import Link from 'aws-northstar/components/Link';
import StatusIndicator from 'aws-northstar/components/StatusIndicator';
import KeyValuePair from 'aws-northstar/components/KeyValuePair';
import Stack from 'aws-northstar/layouts/Stack';

import PercentageSaleByItems from './components/PercentageSaleByItems';
import SaleByItems from './components/SaleByItems';
import SaleByMonths from './components/SaleByMonths';

const ExternalLink = (
    <Link href="https://www.amazon.com" target="_blank">
        Value with external link
    </Link>
);

const Status = <StatusIndicator statusType="positive">Available</StatusIndicator>;

const Report = () => {
    return (
        <>
        <Stack>
         <Container headingVariant='h4' 
            title="Report" 
            subtitle="description">
            <ColumnLayout>
                <Column key="column1">
                    <Stack>
                        <KeyValuePair label="Distribution Id" value="SLCCSMWOHOFUY0"></KeyValuePair>
                        <KeyValuePair label="Domain name" value="bbb.cloudfront.net"></KeyValuePair>
                        <KeyValuePair label="ARN" value={ExternalLink}></KeyValuePair>
                    </Stack>
                </Column>
                <Column key="column2">
                    <Stack>
                        <KeyValuePair label="Status" value={Status}></KeyValuePair>
                        <KeyValuePair label="Price class" value="Use only US, Canada, Europe, and Asia"></KeyValuePair>
                        <KeyValuePair label="CNAMEs"></KeyValuePair>
                    </Stack>
                </Column>
                <Column key="column3">
                    <Stack>
                        <KeyValuePair label="SSL certificate" value="Default CloudFront SSL certificate"></KeyValuePair>
                        <KeyValuePair label="Custom SSL client support"></KeyValuePair>
                        <KeyValuePair label="Logging" value="Off"></KeyValuePair>
                    </Stack>
                </Column>
            </ColumnLayout>
        </Container>
        <Container title="Dashboard">
                <ColumnLayout>
                    <Column key="column1">
                        <PercentageSaleByItems />
                    </Column>
                    <Column key="column2">
                        <SaleByItems />
                    </Column>
                    <Column key="column3">
                        <SaleByMonths />
                    </Column>
                </ColumnLayout>
            </Container>
        </Stack>  
        </>
    )
}

export default Report
