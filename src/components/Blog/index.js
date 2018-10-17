import React from "react";
import styled from 'styled-components'
import PropTypes from 'prop-types'
import ContentLoader from '../ContentLoader'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {requestGetBlog} from '../../reducers/blog'
import PointOutContent from '../PointOutContent'

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
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.requestGetBlog()
    }

    render() {
        const {status} = this.props

        if (status === '' || status === 'pending') {
            return <ContentLoader height={800}/>
        } else if (status === 'failure') {
            return <PointOutContent text="error, please refresh the page"/>
        }
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
                            __html: `
                                <p>Lorem ipsum dolor sit amet, odio tempor vel, vel nec pharetra maecenas metus fusce, tortor eu eleifend. Lacus suspendisse at non urna vestibulum, lacus dolor, orci consectetuer in enim wisi malesuada dui, egestas sed a quisque ligula natoque per, at ultricies nulla a pede. Ultricies elit, in donec rhoncus luctus. Interdum tincidunt, natoque erat, magna donec odio dictum semper pede cursus, pede lectus dapibus elementum. Porta mauris sem. Pretium eget nullam sed, dolor luctus pretium eu etiam. Ac mattis aliquam sapien. Id iaculis.</p>
                                <p>Tempor adipiscing sit tellus dui, mattis arcu donec, nisl nec. Dolor vel orci vivamus ultricies, pellentesque facilisi nulla, suscipit lectus enim sapien nec sem, leo vel vitae urna, adipiscing vitae. Ut mauris erat non eos in imperdiet. Congue vitae congue pellentesque. Praesent orci nullam sollicitudin, est aliquam taciti sed neque a, lacus mauris dis vitae. Ipsum non. Platea metus mi temporibus, nec maecenas ipsum sodales purus, nulla malesuada nunc fermentum duis. Nunc feugiat.</p>
                                <p>Voluptatum ac luctus magna exercitation, orci ut, ut quis netus, natoque sagittis venenatis magnis ante in, felis accumsan in. Pellentesque erat sem in, porttitor vel massa leo, labore nulla mi fringilla. Suscipit dolor sociis sagittis, pellentesque enim orci. Curabitur amet luctus, iaculis scelerisque, semper sed dui sit. Molestie nunc. Et at, donec neque tellus, nunc euismod sed sit vestibulum amet justo, in eget maecenas, leo lacus libero. Quis in morbi quisque pede odio. Montes id morbi mauris ante, mus netus, nunc at ut velit vel. Vel neque libero, sed ultrices sed ultrices magna, malesuada dolor lobortis justo, non arcu in neque id adipiscing, nonummy nam mauris wisi enim.</p>
                                <p>Ullamcorper ornare vestibulum aliquam convallis. Nunc et posuere, nullam etiam, sit metus at morbi nibh, orci maecenas eu viverra ac mattis. Ante lacinia mauris fusce vel faucibus, luctus feugiat aliquam lectus accumsan et. Sagittis ornare turpis sodales, magna id, ligula nam egestas, sodales nulla dictum et. Cum vulputate sed iaculis dignissim ridiculus quis, pariatur vestibulum, vitae donec suspendisse curabitur auctor leo, sit lectus eget. Consequat amet, pellentesque urna, semper a libero sed urna eu morbi. Luctus lectus vel enim metus ligula, rutrum suspendisse libero ac nec semper, et ut lectus.</p>
                            `
                        }}
                    />
                </StyledBlogContent>
            </StyledBlogContainer>
        )
    }
}

const mapStateToProps = state => ({
    status: state.blog.status,
    blog: state.blog.data
})

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        requestGetBlog
    },
    dispatch
)

Blog.propTypes = {
    status: PropTypes.string,
    blog: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog)
