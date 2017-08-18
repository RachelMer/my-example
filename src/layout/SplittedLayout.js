import React, {Component} from 'react';
import Split from 'grommet/components/Split';
import Article from 'grommet/components/Article';
import Header from 'grommet/components/Header';
import Box from 'grommet/components/Box';
import Route from '../authRoute';
import SideNav from '../components/private/SideNav';
import Home from '../components/private/Home';
import Ciaone from '../components/private/Ciaone';
import {navResponsive} from "../actions/navbar";
import {connect} from 'react-redux';
import NavControl from '../components/NavControl';

class SplittedLayout extends Component {
    
    static isPrivate = true;
    
    constructor (props) {
        super(props);
        this._onResponsive = this._onResponsive.bind(this);
    }
    
    
    _onResponsive (responsive) {
        this.props.dispatch(navResponsive(responsive));
    }
    
    render() {
        const { navbar: {active: navActive, enabled: navEnabled, responsive} } = this.props;
        const includeNav = (navActive && navEnabled);
        let nav;
        if (includeNav) {
            nav = <SideNav />;
        }
        const priority = (includeNav && 'single' === responsive ? 'left' : 'right');
        
        return (
            <Split priority={priority} flex='right' fixed={true}>
                {nav}
                <Article pad="none" full={true}>
                    <Header fixed={true} colorIndex="neutral-1">
                        <Box pad="small">
                            <NavControl/>
                        </Box>
                    </Header>
                    <Box align="center" justify="center" flex="grow">
                        <Route exact path="/private/" component={Home}/>
                        <Route exact path="/private/ciaone" component={Ciaone}/>
                    </Box>
                </Article>
            </Split>
        )
    }
}

const mapStateToProps = (state) => ({
    navbar: state.navbar
});

export default connect(mapStateToProps)(SplittedLayout)



