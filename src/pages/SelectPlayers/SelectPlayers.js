import React, {useState} from 'react';

function SelectPlayers(props) {


    const [playerOne, setPlayerOne] = useState('');
    const [playerTwo, setPlayerTwo] = useState('');

    function setPlayerName(event, player){

        if (player === 1){
            setPlayerOne(event.target.value)

        } else if (player === 2) {
            setPlayerTwo(event.target.value)
        }
    }


    function goToBattle(event){

        event.preventDefault();

        props.history.push(`/results/${playerOne}/${playerTwo}`)

    }


    return (
        <div className={'pa3 mh7-l mh7-m'}>
            <div className="flex flex-column">


                <div className={'mb1'}>
                    <h1 className={'mb0'}>Player One</h1>
                    <input onChange={(e) => setPlayerName(e, 1)} type="text" placeholder={'github username'} className={'input-reset pa1 w-100 h2 ba b--black br2'}/>
                </div>

                <div className="tc dark-red">
                    <h1>Versus</h1>
                </div>

                <div className={'mb3'}>
                    <h1 className={'mb0 mt0 tr'}>Player Two</h1>
                    <input onChange={(e) => setPlayerName(e, 2)}  type="text" placeholder={'github username'} className={'input-reset pa1 w-100 h2 ba b--black br2'}/>
                </div>

                <div>
                    <button onClick={(e) => goToBattle(e)} className={'input-reset pa1 h2 fw1 bg-black white ba w-100 b--black br2'}>Battle</button>
                </div>

            </div>
        </div>
    );
}

export default SelectPlayers;
