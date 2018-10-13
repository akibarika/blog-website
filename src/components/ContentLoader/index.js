import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledContentLoaderContainer = styled.div`
    background-color: #fff;
    height: ${({height}) => height + 'px'};
    border: 1px solid #fff;
    padding: 0 20px;
    margin-bottom: 20px;
    overflow: hidden;
`

const StyledContentContainer = styled.div`
    box-sizing: border-box;
    margin-top: 20px;
    margin-bottom: 20px;
    width: ${({width}) => width + '%'};
    height: 25px;
`

const StyledContent = styled.div`
    width: 100%;
    height: 100%;
    background-color: #f1f1f1;
`

const getWidthArrayByHeight = height => {
    const number = Math.floor(height / 50)
    const arr = []
    for (let i = 0; i < number; i++) {
        arr.push(Math.floor(Math.random() * 90 + 10))
    }
    return arr
}

class ContentLoader extends React.Component {
    constructor(props) {
        super(props)

        const height = this.props.height
        this.state = {
            height,
            WidthArrayByHeight: getWidthArrayByHeight(height)
        }
    }

    render() {
        return (<StyledContentLoaderContainer height={this.state.height}>
            {this.state.WidthArrayByHeight.map((width, index) => (
                <StyledContentContainer key={index} width={width}>
                    <StyledContent/>
                </StyledContentContainer>
            ))}
        </StyledContentLoaderContainer>)
    }
}


ContentLoader.propTypes = {
    height: PropTypes.number
}

export default ContentLoader