
import React, { FunctionComponent, useMemo } from 'react';
import AppLayoutBase from 'aws-northstar/layouts/AppLayout';
import HeaderBase from 'aws-northstar/components/Header';
import SideNavigationBase, { SideNavigationItemType } from 'aws-northstar/components/SideNavigation';
import BreadcrumbGroup from 'aws-northstar/components/BreadcrumbGroup';

const AppLayout: FunctionComponent = ({ children }) => {
    const Header = useMemo(
        () => <HeaderBase title="Connect Demo" logoPath="/amazon_connect_logo.png" />,
        []
    );
    const Breadcrumbs = useMemo(() => <BreadcrumbGroup rootPath="Home" />, []);
    const SideNavigation = useMemo(() => {
        return (
            <SideNavigationBase
                header={{ text: 'Connect Demo', href: '/' }}
                items={[
                    { text: 'Home', type: SideNavigationItemType.LINK, href: '/' },
                    { text: 'Agent', type: SideNavigationItemType.LINK, href: '/agent' },
                    { text: 'OTP', type: SideNavigationItemType.LINK, href: '/otp' },
                    { text: 'Analytics', type: SideNavigationItemType.LINK, href: '/data' },
                    { text: 'Create order', type: SideNavigationItemType.LINK, href: '/createOrder' },
                    { text: "Management",type: SideNavigationItemType.SECTION,
                        
                        "items": [
                          {
                            "type": SideNavigationItemType.LINK,
                            "text": "DynamoDB",
                            "href": "/customerDB"
                          },
                          {
                            "type": SideNavigationItemType.LINK,
                            "text": "IVR",
                            "href": "/messageIVR"
                          },
                          {
                            "type": SideNavigationItemType.LINK,
                            "text": "Report",
                            "href": "/report"
                          },
                        ]},
                ]}
            ></SideNavigationBase>
        );
    }, []);

    return (
        <AppLayoutBase header={Header} navigation={SideNavigation} breadcrumbs={Breadcrumbs}>
            {children}
        </AppLayoutBase>
    );
};

export default AppLayout;
