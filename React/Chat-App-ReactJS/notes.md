Sun 12/25/2022(JavaScript Mastery)
# Chat application using React JS - Build and Deploy a Chat App 
- Build a full-fledged chat application with online statuses, great design and functionality ; icons telling you who read the message, image support, sound notifications. The ability to create muptiple rooms and much more. This chat app is like no other that you can currently find on YouTube. At the end, we're going to deploy the chat app, so that you can shre it with your friends or put it on your portfolio.
==================================================================================
Demo:
- We start off with a login screen where you can enter your username and password, you have to use the credentials that were given to you by the chat admin. Once you logged in, you'll be greeeted with this great looking chat application. On the left side, you can see all the chat rooms that the currently logged in,user has access to.
- New Chat: Demo => new chat room named Demo just added.
- On the right side, you have a list of all the people available in the chat room.
- I'm logged in as the admin right now, so it even allows me to add new people into the chat room. For example, let's add Wendy; let's login as Wendy and let's exerience the real-time messaging feel
- wendywalker, password => the online offline status was automatically changed to online for both javascript mastery and wendy, Wendy also has access to the newly created chat that she has been added to. 
- Finally, let's see how the messaging works. You send the message, let's do "hello" => and all the other users immediately receive it. There's even a sound notification that notifies you when there's a new message
==================================================================================
# Technologies:
- sockets, hooks, props, JavaScript, APIs, and more...
- All the great features of this application are made possible by chat engine.
- Chat engine - uses sockets behind the scenes. And it allows you to createe a simple chat in just 12 lines but it also allows for a complete customization of absulutely any part of the chat application.
- //install all dependencies that we'll be using for this project.
- axios =>to make request
npm install @ant-design/icons axios react-chat-engine
==================================================================================
- To create an instance of the chat-application, you can go to chatengine.io =>Signup.
- New Project: 
Project Title: Chat App => create =>copy project ID =>App.js
New User: create a new user =>ThanhNgo_888;mypassword
New Chat: create a new chat room =>Roman Community; Admin Username:ThanhNgo_888
terminal: npm start
==================================================================================
# Add new person to the chat
- add a new user on chatengine.io
BinhVien,password
==================================================================================
- creating a login system so that different people can log in and communicate together.