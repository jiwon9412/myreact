import React from "react";
import styled from 'styled-components'

export default function MenuList ({data = []}) {
    data.map((item) => {
        console.log(item.menuNm);
    })
    return <div>    
        <MenuUl>  
        {data.map((item) => {
            return(
            <li>{item.menuNm}</li>
            )
        })}
        </MenuUl> 
    </div>
      
}

const MenuUl = styled.ul`
    list-style : none;
    display : flex;
`;
