import React, {Component} from 'react';

class Battle extends Component {

    constructor(props){
        super(props)
    }

    componentDidMount() {

        console.log('runngins');


        console.log(this.props);
    }


    render() {
        return (
            <div className={'pa3 mh7-l mh7-m'}>

                <div className="flex flex-column">

                </div>

            </div>
        );
    }
}

export default Battle;
