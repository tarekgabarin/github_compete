import React, {useState, useEffect} from 'react';
import {intersectionTypeAnnotation} from "@babel/types";

function Battle(props){

    useEffect(() => {

        console.log(props)

    });

    return (
        <section className={'pa3 mh7-l mh7-m'}>
            <h1>Stuff</h1>
        </section>
    )

}

export default Battle
