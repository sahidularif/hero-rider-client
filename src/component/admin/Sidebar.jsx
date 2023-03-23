import React from 'react'

import { styled, useStyletron } from 'baseui';

import logo from '../../assets/logo.png'
import SideNavListItem from './SideNavListItem';
import { menuData } from '../constant';
import { LabelLarge } from 'baseui/typography';
import { Avatar } from 'baseui/avatar';



const Sidebar = ({ open, setOpen }) => {

    const [css] = useStyletron();

    return (
        <SidebarWrapper className={css({
            '@media (max-width: 768px)': {
                display: open ? 'block' : 'none',
            }
        })}>
            <div className={css({
                position: 'fixed',
                top: '0',
                left: '0',
                width: '100vw',
                background: 'rgba(0, 0, 0, 0.5)',
                height: '100vh',
                zIndex: '-1',
                display: 'none',

                '@media (max-width: 768px)': {
                    display: open ? 'block' : 'none',
                }
            })}
                onClick={() => setOpen(false)}
            />
            <Logo>
                {/* <img className={css({
                    width: '2rem',
                    height: '2rem',
                    marginRight: '0.5rem',
                })} src={logo} alt="logo" /> */}
                Hero Rider
            </Logo>

            <Title>
                <Avatar
                    name="Jane Doe"
                    size="2.5rem"
                    src="https://api.dicebear.com/5.x/avataaars/svg?seed=Ginger"
                />
                <p>Hello! Good Evening<br/>Admin</p>
            </Title>

            {
                menuData.map(({ icon, title, active }, index) => (
                    <SideNavListItem key={index} active={active} title={title}>
                        {icon}
                    </SideNavListItem>
                ))
            }
        </SidebarWrapper>
    )
}

export default Sidebar

const SidebarWrapper = styled('section', {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    maxWidth: '255px',
    height: '100vh',
    background: 'white',
    borderRight: '.5px solid powderblue',
    zIndex: '1',
    overflowX: 'hidden',
});

const Logo = styled('div', {
    padding: '1rem 2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.25rem',
    color: 'black',
    fontWeight: 'bold',
    boxSizing: 'border-box',
    background: 'none',
})
const Title = styled('div', {
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1rem',
    color: 'black',
    fontWeight: 'normal',
    boxSizing: 'border-box',
    background: 'none',
    borderBottom: '1px solid powderblue'
})