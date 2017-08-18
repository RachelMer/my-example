// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { navActivate } from '../../actions/navbar';
import Sidebar from 'grommet/components/Sidebar';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Logo from '../Logo';
import Menu from 'grommet/components/Menu';
import Button from 'grommet/components/Button';
import CloseIcon from 'grommet/components/icons/base/Close';
import Anchor from 'grommet/components/Anchor';

const items = [
    {
        label: 'home',
        path: '/private/'
    },
    {
        label: 'ciaone',
        path: '/private/ciaone'
    }
];

class SideNav extends Component {
    
    static isPrivate = true;

    constructor(props) {
        super(props);
        this._onClose = this._onClose.bind(this);
    }

    _onClose() {
        this.props.dispatch(navActivate(false));
    }

    render() {
        var links = items.map((page) => {
            return (
                <Anchor key={page.label} path={page.path} label={page.label}/>
            );
        });

        return (
            <Sidebar colorIndex="neutral-3-a" ref='sidebar' size='medium' separator='right' fixed={true} full={true}>
                <Header size="large" justify="between" pad={{horizontal: 'medium'}}>
                    <Title onClick={this._onClose} a11yTitle="Close Menu">
                        <Logo colorIndex='light-1' />
                        <span>Project</span>
                    </Title>
                    <Button icon={<CloseIcon />} onClick={this._onClose} plain={true}
                            a11yTitle="Close Menu" />
                </Header>
                <Menu fill={true} primary={true}>
                    {links}
                </Menu>
            </Sidebar>
        );
    }
}

let mapStateToProps = (state) => ({
    navbar: state.navbar
});

export default connect(mapStateToProps)(SideNav);
