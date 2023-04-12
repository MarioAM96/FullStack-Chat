import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div style={{ height: '100vh'}}>
      <PrettyChatWindow
        projectId='b80619a4-4a1a-4301-a7f1-22d3d2b3b084'
        username={props.user.username}
        secret={props.user.secret}
        style={{height: '100%'}}
      />
    </div>
  );
};

export default ChatsPage;