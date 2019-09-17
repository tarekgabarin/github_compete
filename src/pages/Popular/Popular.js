import React, {Component} from 'react';
import {fetchPopularRepos} from '../../utils/api';
import ReposList from '../../components/ReposList/ReposList'

class Popular extends Component {

    constructor(props){
        super(props);

        this.state = {
            categories: [
                'All',
                'Javascript',
                'Ruby',
                'Java',
                'CSS',
                'Python'
            ],
            selectedCategory: 'All',
            listOfRepos: []
        }

    }

    componentDidMount() {

        fetchPopularRepos(this.state.selectedCategory).then(repos => {
            this.setState({
                listOfRepos: repos
            });

            console.log('repos is', repos);
        })
    }

    selectCategory = (event, category) => {

        event.preventDefault();

        this.setState({
            selectedCategory: category
        });

        fetchPopularRepos(category).then(repos => {
            this.setState({
                listOfRepos: repos
            });
        })
    };


    render() {

        const categoriesListJSX = this.state.categories.map(item => {
            if (item === this.state.selectedCategory){
                return (
                    <div  className={'link dark-red pa1 pointer'}>
                        {item}
                    </div>
                )
            } else {
                return (
                    <div  onClick={(e) => this.selectCategory(e, item)} className={'link pa1 pointer'}>
                        {item}
                    </div>
                )
            }
        });

        return (
            <div className={'pa3 mh7-l mh7-m'}>

                <div className="flex flex-column">
                    <div className="flex justify-center tc">
                        {categoriesListJSX}
                    </div>
                </div>

                <ReposList items={this.state.listOfRepos} />

            </div>
        );
    }
}

export default Popular;
