
import React, { FunctionComponent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Box from 'aws-northstar/layouts/Box';
import Button from 'aws-northstar/components/Button';
import Checkbox from 'aws-northstar/components/Checkbox';
import Inline from 'aws-northstar/layouts/Inline';
import StatusIndicator from 'aws-northstar/components/StatusIndicator';
import Table, { Column } from 'aws-northstar/components/Table';

import data, { Order } from '../../../../data';

const columnDefinitions: Column<Order>[] = [
    {
        id: 'customer',
        width: 150,
        Header: 'Customer name',
        accessor: 'customer',
    },
    {
        id: 'item',
        width: 150,
        Header: 'Item',
        accessor: 'item',
    },
    {
        id: 'amount',
        width: 150,
        Header: 'Total',
        accessor: 'amount',
        Cell: ({ row }) => <Box textAlign="right">${row.original.amount}</Box>,
    },
    {
        id: 'discounted',
        width: 120,
        Header: 'Discounted?',
        accessor: 'discounted',
        Cell: ({ row }) => (
            <Box textAlign="center">
                <Checkbox checked={row.original.discounted} disabled />
            </Box>
        ),
    },
    {
        id: 'discountAmount',
        width: 100,
        Header: 'Discount',
        accessor: 'discountAmount',
        Cell: ({ row }) => (
            <Box textAlign="right">{row.original.discountAmount ? `$${row.original.discountAmount}` : '-'}</Box>
        ),
    },
    {
        id: 'date',
        width: 150,
        Header: 'Purchase date',
        accessor: 'date',
    },
    {
        id: 'status',
        width: 150,
        Header: 'Status',
        accessor: 'status',
        Cell: ({ row }) => {
            const status = row.original.status;
            switch (status) {
                case 'Delivered':
                    return <StatusIndicator statusType="positive">Delivered</StatusIndicator>;
                case 'Canceled':
                    return <StatusIndicator statusType="negative">Canceled</StatusIndicator>;
                case 'Returned':
                    return <StatusIndicator statusType="negative">Returned</StatusIndicator>;
                case 'Processing':
                    return <StatusIndicator statusType="info">Processing</StatusIndicator>;
                default:
                    return null;
            }
        },
    },
];

const OrdersTable: FunctionComponent = () => {
    const [selectedItems, setSelectedItems] = useState<object[]>([]);
    const history = useHistory();

    const onCreateClick = () => {
        history.push('/createOrder');
    };

    const handleSelectionChange = (items: object[]) => {
        if (!(selectedItems.length === 0 && items.length === 0)) {
            setSelectedItems(items);
        }
    };

    const tableActions = (
        <Inline>
            <Button disabled={selectedItems.length !== 1} onClick={() => {}}>
                Delete
            </Button>
            <Button onClick={onCreateClick} variant="primary">
                New Customer
            </Button>
        </Inline>
    );

    return (
        <Table
            onSelectionChange={handleSelectionChange}
            tableTitle="Customer Database"
            columnDefinitions={columnDefinitions}
            items={data}
            actionGroup={tableActions}
            multiSelect={false}
        />
    );
};

export default OrdersTable;
