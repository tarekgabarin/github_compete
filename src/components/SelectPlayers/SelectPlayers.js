import React from 'react';

function SelectPlayers(props) {
    return (
        <div className={'pa3 mh7-l'}>
            <div className="flex flex-column">
                <div className="outline w-25 pa3 mr2">
                    <code>1</code>
                </div>
                <div className="outline w-25 pa3 mr2">
                    <code>2</code>
                </div>
                <div className="outline w-25 pa3 mr2">
                    <code>3</code>
                </div>
                <div className="outline w-25 pa3 mr2">
                    <code>4</code>
                </div>
                <div className="outline w-25 pa3">
                    <code>5</code>
                </div>
            </div>
        </div>
    );
}

export default SelectPlayers;
