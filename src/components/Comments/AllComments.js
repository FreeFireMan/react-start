import React, {Component} from 'react';
import CommentService from "../../service/CommentService";
import Comment from "./Comment";
import FullComment from "./FullComment";

import {Route, Switch, withRouter} from 'react-router-dom';


class AllComments extends Component {

    commentService = new CommentService()

    state = {comment: []}

   async componentDidMount() { await this.commentService.comments().then(value => this.setState({comment: value}))
    }

    render() {
        let {comment} = this.state
        let {match:{url}} = this.props
        return (
            <div>
                {
                    comment.map(value => <Comment item={value} key={value.id}/>)
                }
                <hr/>
                <Switch>
                    <Route path={url+'/:id'} render={(props)=>{
                        const {match:{params:{id}}} = props;
                        return <FullComment commentId={id} key={id}/>
                    }}/>
                </Switch>
                <hr/>
            </div>
        );
    }
}

export default withRouter(AllComments);