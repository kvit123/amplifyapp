import React from 'react'
import Table from 'aws-northstar/components/Table';
import StatusIndicator from 'aws-northstar/components/StatusIndicator';
import Button from 'aws-northstar/components/Button';
import Inline from 'aws-northstar/layouts/Inline';
import Stack from 'aws-northstar/layouts/Stack';
import Container from 'aws-northstar/layouts/Container';
import ColumnLayout, { Column } from 'aws-northstar/layouts/ColumnLayout';
import CustomerTable from './components/CustomerTable';

const customerDB = () => {


    return (
        <Stack>
            <CustomerTable />
        </Stack>
    )
}

export default customerDB
