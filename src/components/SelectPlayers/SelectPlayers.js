import React from 'react';


function SelectPlayers(props) {
    return (
        <div className={'pa3 mh7-l mh7-m'}>
            <div className="flex flex-column">


                <div className={'mb1'}>
                    <h1 className={'mb0'}>Player One</h1>
                    <input type="text" className={'input-reset pa1 w-100 h2 ba b--black br2'}/>
                </div>

                <div className="tc dark-red">
                    <h1>Versus</h1>
                </div>

                <div className={'mb3'}>
                    <h1 className={'mb0 mt0 tr'}>Player Two</h1>
                    <input type="text" className={'input-reset pa1 w-100 h2 ba b--black br2'}/>
                </div>

                <div>
                    <button className={'input-reset pa1 h2 fw1 bg-black white ba w-100 b--black br2'}>Battle</button>
                </div>

            </div>
        </div>
    );
}

export default SelectPlayers;
