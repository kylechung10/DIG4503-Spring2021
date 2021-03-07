import React from 'react';
import Search from '../Search';
import Team from '../Team';

export default class Menu extends React.Component {
    constructor(props) {
        super(props)
            this.state = { search: false, team: false}
    }

    searchActive = () => {
        this.setState({ search: true})
    }

    teamActive = () => {
        this.setState({ team: true})
    }

    backButton = () => {
        this.setState({ team: false, search: false})
    }

    render() {
        let menuSelect;
        if (this.state.search) {
            menuSelect = (
                <>
                    <Search />
                    <br />
                    <button onClick={this.backButton}>Back to Menu</button>
                </>    
            )
        }
        else if (this.state.team) {
            menuSelect = (
                <>
                    <Team />
                    <br />
                    <button onClick={this.backButton}>Back to Menu</button>
                </>    
            )
        }
        else {
            menuSelect = (
                <div>
                    <h1>Welcome to the Pokemon App</h1>
                    <h2>Search for Pokemon within the database to find out more information</h2>
                    <button onClick={this.searchActive}>Search Pokemon</button>
                    <h2>Build your very own team with the team builder!</h2>
                    <button onClick={this.teamActive}>Build Pokemon Team</button>
                </div>
            )
        }
        return menuSelect;
    }
}