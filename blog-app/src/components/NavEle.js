import React from 'react'

const NavEle = ({name, link}) => {
    return (
        <li> <a href={link}> {name} </a></li>
    )
}

export default NavEle
