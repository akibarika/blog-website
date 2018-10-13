import React from "react";
import styled from 'styled-components'

const StyledBlogContainer = styled.div`
    background-color: #fff;
    margin-bottom: 1rem;
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.2);
    color: rgba(51, 51, 51, 0.9);
`
const StyledInfoContainer = styled.div`
    padding: 1.1rem 1.3rem 1rem 1.3rem;
    text-align: center;
`
const StyledInfo = styled.span`
    padding-right: 1.6rem;
    padding-bottom: 0.3rem; 
    font-size: 1.1rem;
    font-weight: 400;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.45);
`
const StyledTitle = styled.div`
    font-size: 1.8rem;
    padding-bottom: 1.3rem;
`
const StyledBlogContent = styled.div`
  padding: 1rem 1.3rem 2rem 1.3rem;
`

class Blog extends React.Component {
    render() {
        return (
            <StyledBlogContainer>
                <StyledInfoContainer>
                    <StyledTitle>
                        Lorem Ipsum
                    </StyledTitle>
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
                <StyledBlogContent>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vulputate tortor quis euismod
                    tempor.
                    Quisque eleifend, leo ac efficitur varius, odio felis gravida elit, ut laoreet erat purus vitae
                    neque.
                    Nam congue orci vel ligula tempor molestie. Nullam dolor ligula, auctor eu nisi vel, euismod
                    dignissim
                    orci. Aenean non lorem accumsan, mollis dolor a, imperdiet massa. Aenean lectus lacus, molestie
                    eget
                    ultricies eu, pretium id nibh. Phasellus malesuada laoreet turpis ut finibus.`
                        }}
                    />
                </StyledBlogContent>
            </StyledBlogContainer>
        )
    }
}


export default Blog
