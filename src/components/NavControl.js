// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { navActivate } from '../actions/actions';
import Button from 'grommet/components/Button';
import Logo from './Logo';

class NavControl extends Component {
    render () {
        const { navbar: { active }, title } = this.props;
        
        let result;
        if (! active) {
            let label;
            if (title) {
                label = 'ciaone';
            }
            result = (
                <Button onClick={() => this.props.dispatch(navActivate(true))}>
                    <Logo />
                    {label}
                </Button>
            );
        } else {
            result = null;
        }
        return result;
    }
};

const {string, object, bool} = PropTypes;

NavControl.propTypes = {
    nav: PropTypes.object,
    title: PropTypes.bool
};

let mapStateToProps = (state, props) => ({
    navbar: state.navbar
});

export default connect(mapStateToProps)(NavControl);
