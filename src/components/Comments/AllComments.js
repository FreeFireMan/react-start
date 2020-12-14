import React, {Component} from 'react';
import CommentService from "../../service/CommentService";
import Comment from "./Comment";
import FullComment from "./FullComment";

import {Route, Switch, withRouter} from 'react-router-dom';


class AllComments extends Component {

    commentService = new CommentService()
    state = {comment: []}

    componentDidMount() {
        this.commentService
            .comments()
            .then(value =>
                this.setState({comment: value}))
    }

    render() {
        let {comment} = this.state
        let {match: {url}} = this.props
        return (
            <div>
                {
                    comment.map(value => <Comment item={value} key={value.id}/>)
                }
                <hr/>
                <Route
                    path={url + '/:id'}
                    render={({match: {params: {id}}}) =>
                            <FullComment commentId={id} key={id}/>
                    }
                />
                <hr/>
            </div>
        );
    }
}

export default withRouter(AllComments);
