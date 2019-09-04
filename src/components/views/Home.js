import React, { Component } from 'react';
import { fetchPosts } from './../../actions/index';
import Card from './../shared/card';
import { connect } from 'react-redux';

class HomeView extends Component {

    componentDidMount() {
        this.props.fetchPosts();
        console.log(this.props);

    }

    postClick = (post) => {
        console.log(post.id);
        this.props.history.push('/posts/' + post.id)

    }



    render() {

        const cards = this.props.posts.map((post) => {
            return (
                <div key={post.id}>
                    <Card title={post.title}
                        body={post.body}
                        onClick={() => this.postClick(post)} />

                </div>
            )

        })
        return (
            <div>
                {cards}
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    console.log(state);

    return { posts: state.posts }
}

export default connect(mapStateToProps, {
    fetchPosts: fetchPosts
})(HomeView);
