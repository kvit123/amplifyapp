
import React, { FunctionComponent, useMemo } from 'react';
import AppLayoutBase from 'aws-northstar/layouts/AppLayout';
import HeaderBase from 'aws-northstar/components/Header';
import SideNavigationBase, { SideNavigationItemType } from 'aws-northstar/components/SideNavigation';
import BreadcrumbGroup from 'aws-northstar/components/BreadcrumbGroup';
import HelpPanel from 'aws-northstar/components/HelpPanel';
import Link from 'aws-northstar/components/Link';
import Text from 'aws-northstar/components/Text';
import Heading from 'aws-northstar/components/Heading';


const helpPanel = (
    <HelpPanel
        header="Help panel title (h2)"
        learnMoreFooter={[
            <Link href="/docs">Link to internal documentation</Link>,
            <Link href="https://www.yoursite.com">Link to external documentation</Link>,
        ]}
    >
        <Text variant="p">
            This is a paragraph with some <b>bold text</b> and also some <i>italic text.</i>
        </Text>
        <Heading variant="h4">h4 section header</Heading>
        <Heading variant="h5">h5 section header</Heading>
    </HelpPanel>
);

const AppLayout: FunctionComponent = ({ children }) => {
    const Header = useMemo(
        () => <HeaderBase title="Amazon Connect" logoPath="/amazon_connect_logo.png" />,
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
                    { text: 'Click2Call', type: SideNavigationItemType.LINK, href: '/c2c' },
                    { text: "Management",type: SideNavigationItemType.SECTION,
                        
                        "items": [
                          {
                            "type": SideNavigationItemType.LINK,
                            "text": "Customer Profile",
                            "href": "/customerDB"
                          },
                          {
                            "type": SideNavigationItemType.LINK,
                            "text": "Message IVR",
                            "href": "/messageIVR"
                          },
                          {
                            "type": SideNavigationItemType.LINK,
                            "text": "Prompt",
                            "href": "/prompt"
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
        <AppLayoutBase 
            header={Header} 
            navigation={SideNavigation} 
            breadcrumbs={Breadcrumbs}
            helpPanel={helpPanel}
        >
            {children}
        </AppLayoutBase>
    );
};



export default AppLayout;
