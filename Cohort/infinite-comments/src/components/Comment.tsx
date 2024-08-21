
import React, { useState } from "react";
import { Comment as CommentType } from "../types";
import CommentInput from "./CommentInput";

interface CommentProps {
  comment: CommentType;
  addReply: (id: number, content: string) => void;
}

const Comment: React.FC<CommentProps> = ({ comment, addReply }) => {
  const [replyContent, setReplyContent] = useState<string>("");
  const [showReplyInput, setShowReplyInput] = useState<boolean>(false);

  const handleReply = () => {
    if (replyContent?.trim()) {
      addReply(comment.id, replyContent);
      setReplyContent("");
      setShowReplyInput(false);
    }
  };

  return (
    <div style={{ marginLeft: "20px", marginTop: "10px", borderLeft: "1px solid #ccc", paddingLeft: "10px" }}>
      <strong>Comment {comment.id}</strong>
      <p>{comment.content}</p>
      <b style={{ cursor: "pointer" }} onClick={() => setShowReplyInput(true)}>Reply</b>
      {showReplyInput && (
        <CommentInput replyContent={replyContent} setReplyContent={setReplyContent} handleReply={handleReply} />
      )}
      {comment.replies.map((reply) => (
        <Comment key={reply.id} comment={reply} addReply={addReply} />
      ))}
    </div>
  );
};

export default Comment;
