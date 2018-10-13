import React from "react";
import styled from 'styled-components'

const StyledContainer = styled.div`
    background-color: #fff;
    padding: 1.1rem 1.3rem;
    margin-bottom: 1rem;
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.2);
`


const StyledTitle = styled.div`
    margin: 0.3rem 0 0.7rem 0;
    overflow: hidden;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.2;
    & a:hover,
    & a:active {
        color: #1890ff;
    }
    & a {
        color: rgba(0, 0, 0, 0.65);
    }
`

const StyledSummary = styled.div`
    font-size: 1.15rem;
    font-weight: 400;
    line-height: 1.6;
    color: rgba(0, 0, 0, 0.45);
    margin-bottom: 0.5rem;
`
const StyledInfoContainer = styled.div`
    &::after {
        content: '';
        clear: both;
        display: table;
    }
`

const StyledInfo = styled.div`
    float: left;
    display: block;
    padding-right: 1.6rem;
    padding-bottom: 0.3rem; 
    font-size: 1.1rem;
    font-weight: 400;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.45);
`


class BlogList extends React.Component {
    render() {
        return (
            <StyledContainer>
                <StyledTitle>
                    <a href="" onClick="">
                        Lorem Ipsum
                    </a>
                    <StyledSummary>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vulputate tortor quis euismod
                        tempor.
                        Quisque eleifend, leo ac efficitur varius, odio felis gravida elit, ut laoreet erat purus vitae
                        neque.
                        Nam congue orci vel ligula tempor molestie. Nullam dolor ligula, auctor eu nisi vel, euismod
                        dignissim
                        orci. Aenean non lorem accumsan, mollis dolor a, imperdiet massa. Aenean lectus lacus, molestie
                        eget
                        ultricies eu, pretium id nibh. Phasellus malesuada laoreet turpis ut finibus.
                    </StyledSummary>
                    <StyledInfoContainer>
                        <StyledInfo>
                            <i className="fas fa-clock"/>&nbsp;&nbsp; 13/10/2018
                        </StyledInfo>
                        <StyledInfo>
                            <i className="fas fa-eye"/>&nbsp;&nbsp;23
                        </StyledInfo>
                        <StyledInfo>
                            <i className="fas fa-tag"/>&nbsp;&nbsp;Tag
                        </StyledInfo>
                    </StyledInfoContainer>
                </StyledTitle>
            </StyledContainer>
        )
    }
}


export default BlogList
