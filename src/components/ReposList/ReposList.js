import React from 'react'

function ReposList(props) {

        const {items} = props;

        return(
            <ul className={'flex flex-wrap justify-around list'}>
                {items.map((repo, index) => {
                    return (
                        <li
                            key={repo.name}
                            //className={`popular-item ${index % 2 ? 'to-right' : 'to-left'}`}
                            style={{margin: '20px', textAlign: 'center'}}
                        >
                            <div style={{fontSize: '20px', margin: '10px', marginLeft: '30px'}}> #{index + 1}</div>
                            <ul className={'list'} style={{marginBottom: '7px', textAlign: 'center'}}>
                                <li>
                                    <img
                                        style={{borderRadius: '50%', width: '150px'}}
                                        src={repo.owner.avatar_url}
                                        alt={`Avatar for ${repo.owner.login}`}
                                    />
                                </li>

                                <li>
                                    <a href={repo.html_url} target="_blank">
                                        {repo.name}
                                    </a>
                                </li>
                                <li>@{repo.owner.login}</li>
                                <li>{repo.stargazers_count} stars</li>
                            </ul>
                        </li>
                    );
                })}
            </ul>
        )

}

export default ReposList
