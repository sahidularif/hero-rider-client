import React from 'react'
import {
    HeaderNavigation,
    ALIGN,
    StyledNavigationItem as NavigationItem,
    StyledNavigationList as NavigationList,
} from 'baseui/header-navigation';

import { Avatar } from "baseui/avatar";
import { useStyletron } from 'baseui';

import Menu from 'baseui/icon/menu'
import { Block } from 'baseui/block';
import { Input } from 'baseui/input';

const DashboardHeader = ({ open, setOpen }) => {

    const [css] = useStyletron();

    return (
        <React.Fragment>
            <HeaderNavigation className={css({
                width: '100%',
                borderBottom: 'none !important',
                marginBottom: '1.5rem',

                '@media (max-width: 768px)': {
                    paddingLeft: '0',
                }
            })}>
                <NavigationList $align={ALIGN.left}>
                    <NavigationItem className={css({
                        fontSize: '1.5rem',
                    })}>
                        <div className={css({
                            display: 'none',
                            '@media (max-width: 768px)': {
                                display: 'block',
                            }
                        })}>
                            <Menu
                                size='1.5rem'
                                onClick={() => setOpen(!open)}
                            />
                        </div>
                        <span className={css({
                            fontWeight: 'bold',
                            display: 'block',
                            '@media (max-width: 768px)': {
                                display: 'none',
                            }
                        })}>
                            Users
                        </span>
                        <span className={css({
                            display: 'block',
                            fontSize: '1rem',
                            '@media (max-width: 768px)': {
                                display: 'none',
                            }
                        })}>
                            Defficulties increase the nearer we got to the goal
                        </span>
                    </NavigationItem>
                </NavigationList>
                <NavigationList $align={ALIGN.center} />
                <NavigationList $align={ALIGN.right}>
                    <NavigationItem>
                        <Avatar
                            name="Jane Doe"
                            size="2.5rem"
                            src="https://api.dicebear.com/5.x/avataaars/svg?seed=Ginger"
                        />
                    </NavigationItem>
                </NavigationList>
            </HeaderNavigation>
            <Block
                className={css({
                    display: 'block',
                    fontSize: '1rem',
                    marginBottom: '1rem',
                    '@media (max-width: 768px)': {
                        display: 'none',
                    }
                })}
            >
               
            </Block>
        </React.Fragment>
    )
}

export default DashboardHeader
