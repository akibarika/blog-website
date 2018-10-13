import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const PointOutContentContainer = styled.div`
    margin-top: 20px;
    text-align: center;
    font-size: 1.4rem;
    color: rgba(0, 0, 0, 0.65);
`

const PointOutContent = ({text}) => (
    <PointOutContentContainer>{text}</PointOutContentContainer>
)

PointOutContent.proptypes = {
    text: PropTypes.string
}

export default PointOutContent
