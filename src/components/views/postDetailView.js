import React, { Component } from 'react';
import { fetchPostsById } from './../../actions/index';
import { connect } from 'react-redux';

class PostDetailView extends Component {

    componentDidMount() {
        this.props.fetchPostsById(this.props.match.params.id);
        console.log(this.props);
    }

    render() {
        return (
            <div>
               ID: {this.props.postDetail.id} <br />
               TTITLE: {this.props.postDetail.title}
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    console.log(state);

    return { postDetail: state.postDetail }
}

export default connect(mapStateToProps, {
    fetchPostsById: fetchPostsById
})(PostDetailView);
