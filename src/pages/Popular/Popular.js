import React, {Component} from 'react';

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
                'Python',
                'PHP',
                'Shell'
            ],
            selectedCategory: 'All',
            listOfRepos: []
        }

    }

    render() {

        const categoriesListJSX = this.state.categories.map(item => {
            if (item === this.state.selectedCategory){
                return (
                    <div className={'dark-red pa1'}>
                        {item}
                    </div>
                )
            } else {
                return (
                    <div className={'pa1'}>
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

                

            </div>
        );
    }
}

export default Popular;
