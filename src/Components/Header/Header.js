import React from 'react'

import { MainHeader } from '../../Styles/HeaderStyle';

const Header = () => {
    return (
        <MainHeader>
            <div className='container'>
                <p>Highcharts Project - By Arthur Cabral</p>
                <a className='githubButton' href='https://github.com/CabralArthur' target='_blank' rel="noreferrer">
                    <i class="fab fa-github"></i> My Github
                </a>
            </div>
        </MainHeader>
    )
}

export default Header
