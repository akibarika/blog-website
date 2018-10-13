import styled from 'styled-components'

const Row = styled.div`
    &::after {
        content: '';
        clear: both;
        display: table;
    }
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
`

export default Row
