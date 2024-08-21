
import React from 'react';

interface InputProps {
  replyContent: string;
  setReplyContent: (content: string) => void;
  handleReply: () => void;
}

const CommentInput: React.FC<InputProps> = ({ replyContent, setReplyContent, handleReply }) => {
  return (
    <div>
      <input
        type="text"
        value={replyContent}
        className='rounded-md px-3 text-black'
        onChange={(e) => setReplyContent(e.target.value)}
        placeholder="Write a reply..."
      />
      <button onClick={handleReply}>Reply</button>
    </div>
  );
};

export default CommentInput;
