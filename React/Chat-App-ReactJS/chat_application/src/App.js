import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';

//simple functional component
const App = () => {
  return (
    //props = styles
    <ChatEngine 
      height="100vh"
      projectID="
      be34d9fa-b1cd-4e9c-b929-cd9301550bad"
      userName="ThanhNgo_888
      "
      userPassword="mypassword"
      //enter a new prop called renderChatFeed
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
    />
  );
}

export default App;
