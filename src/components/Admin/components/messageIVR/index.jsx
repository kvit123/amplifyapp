
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Table from 'aws-northstar/components/Table';
import Button from 'aws-northstar/components/Button';
import Inline from 'aws-northstar/layouts/Inline';


import { API, graphqlOperation, Storage } from 'aws-amplify';
import { listCustDBS } from '../../../../graphql/queries';


import { CustomerProfile } from '../../../../data';


const columnDefinitions = [
    {
        id: 'id',
        width: 150,
        Header: 'Customer ID',
        accessor: 'id',
    },
    {
        id: 'firstName',
        width: 150,
        Header: 'FirstName',
        accessor: 'firstName',
    },
    {
        id: 'lastName',
        width: 150,
        Header: 'LastName',
        accessor: 'lastName',
    },
    {
        id: 'phone',
        width: 150,
        Header: 'Phone',
        accessor: 'phone',
    },
    {
        id: 'language',
        width: 150,
        Header: 'language',
        accessor: 'language',
    },
    {
        id: 'memberLevel',
        width: 150,
        Header: 'memberLevel',
        accessor: 'memberLevel',
    },
    {
        id: 'pin',
        width: 150,
        Header: 'pin',
        accessor: 'pin',
    },
    {
        id: 'email',
        width: 150,
        Header: 'email',
        accessor: 'email',
    },
];

const MessageIVR = () => {

    const [selectedItems, setSelectedItems] = useState([])
    const history = useHistory()

    const [customerProfile, setCustomerProfile] = useState([])

    useEffect( () => {
        fetchCustomerProfile()
    }, [])

    const fetchCustomerProfile = async () => {
        try {
            const customerProfileData = await API.graphql(graphqlOperation(listCustDBS))
            const customerProfileList = customerProfileData.data.listCustDBS.items
            console.log('customer profile list', customerProfileList)
            setCustomerProfile(customerProfileList)
        } catch (error) {
            console.log('error on fetching customer profile', error);
        }
    }
    const onCreateClick = () => {
        history.push('/creatCustomer');
    };

    // const handleSelectionChange = (items) => {
    //     if (!(selectedItems.length === 0 && items.length === 0)) {
    //         setSelectedItems(items);
    //     }
    // };

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
            //onSelectionChange={handleSelectionChange}
            tableTitle="Message IVR"
            columnDefinitions={columnDefinitions}
            items={customerProfile}
            actionGroup={tableActions}
            multiSelect={false}
        />
    );
};

export default MessageIVR;
