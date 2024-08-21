
import React, { useState } from "react";
import { Comment as CommentType } from "../types";
import Comment from "./Comment";
import CommentInput from "./CommentInput";

const CommentList: React.FC = () => {
  const [comments, setComments] = useState<CommentType[]>([
    { id: 1, likes: 0, content: "This is the first comment", replies: [] },
  ]);
  const [newCommentContent, setNewCommentContent] = useState<string>("");

  const addReply = (id: number, content: string) => {
    const addReplyToComment = (comments: CommentType[]): CommentType[] => {
      return comments.map((comment) => {
        if (comment.id === id) {
          const newReply: CommentType = {
            id: Date.now(),
            likes: 0,
            content,
            replies: [],
          };
          return { ...comment, replies: [...comment.replies, newReply] };
        } else {
          return { ...comment, replies: addReplyToComment(comment.replies) };
        }
      });
    };

    setComments(addReplyToComment(comments));
  };

  const addNewComment = () => {
    if (newCommentContent.trim()) {
      const newComment: CommentType = {
        id: Date.now(),
        likes: 0,
        content: newCommentContent,
        replies: [],
      };
      setComments([...comments, newComment]);
      setNewCommentContent("");
    }
  };

  return (
    <div>
      <h2>Comments</h2>
      <CommentInput
        replyContent={newCommentContent}
        setReplyContent={setNewCommentContent}
        handleReply={addNewComment}
      />
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} addReply={addReply} />
      ))}
    </div>
  );
};

export default CommentList;
