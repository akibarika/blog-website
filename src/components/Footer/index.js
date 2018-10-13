import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div`
    padding: 60px 0 10px;
    text-align: center;
    font-size: 1.3rem;
    font-weight: 500;
    line-height: 2;
    color: #3c3b3b;
    
    position: absolute;
    left: 0;
    bottom: 0;
    height: 100px;
    width: 100%;
`

const StyledHeart = styled.span`
    color: #e16b8c;
`

const Footer = () => (
    <StyledFooter>
        Made with <StyledHeart>{'<'}3</StyledHeart> in React <i className="far fa-user-circle"/>&nbsp;Sawyer
    </StyledFooter>
)

export default Footer
