
import React, { FunctionComponent } from 'react';
import KeyValuePair from 'aws-northstar/components/KeyValuePair';
import Container from 'aws-northstar/layouts/Container';
import ColumnLayout, { Column } from 'aws-northstar/layouts/ColumnLayout';
import data, { sumByItem } from '../../../../data';

const totalOrder = data.length;
const mostSoldItem = sumByItem[sumByItem.length - 1].item;
const totalAmount = sumByItem.reduce((sum: number, item: any) => {
    sum += item.amount;
    return sum;
}, 0);

const totalDiscount = sumByItem.reduce((sum: number, item: any) => {
    sum += item.discount;
    return sum;
}, 0);

const transactionsWithDiscount = data.reduce((count, order) => {
    if (order.discounted) {
        count++;
    }
    return count;
}, 0);

const pendingOrder = data.reduce((count, order) => {
    if (order.status === 'Processing') {
        count++;
    }
    return count;
}, 0);

const Overview: FunctionComponent = () => {
    return (
        <Container title="Agent Stat">
            <ColumnLayout>
                <Column key="column1">
                    <KeyValuePair label="Agent available" value={totalOrder} />
                    <KeyValuePair
                        label="Call in queue"
                        value={transactionsWithDiscount}
                    ></KeyValuePair>
                </Column>
                <Column key="column2">
                    <KeyValuePair label="Average Handle Time" value={`$${totalAmount}`} />
                    <KeyValuePair label="Average ACW" value={`$${totalDiscount}`} />
                </Column>
                <Column key="column3">
                    <KeyValuePair label="Missed call" value={mostSoldItem} />
                    <KeyValuePair label="Number of pending orders" value={pendingOrder} />
                </Column>
            </ColumnLayout>
        </Container>
    );
};

export default Overview;
