### Here is my project idea:
Probably beat to death, but I’m very interested in implementation of a chat messaging app.
The message transport will be handled by external messaging API (integration of which is the area of interest). 
As MVP, users should be able to send and receive text messages.
The app will be built with React.
Have not decided on db flavor yet, but will most likely have a database to store historical data and to store user auth data. 
To build upon, nice styling and extra messaging functionality could be a stretch goal.



### Research & Planning Log
#### Friday, 12/03
* 8:20: prioritize to-dos
* 8:40: research messaging communication stacks
* 10:00: Research Socket.io for real time communiction - https://www.youtube.com/watch?v=BAZ-tJOYhlA

* 11:00 : Research real time chat app projects- with Socket.io, Node.js
https://www.youtube.com/watch?v=NU-HfZY3ATQ

* 12:00: Setting up rough POC 

* 13:00: Look into FB Messanger clone project
https://www.youtube.com/watch?v=KB7JEnfc7Dc

* 14:30: Node.js Authentication and MongoDB research
https://www.youtube.com/playlist?list=PL4cUxeGkcC9iqqESP8335DA5cRFp8loyp

* 15:00: Research Stream Chat API
https://getstream.io/chat/docs/sdk/react/

* 16:00: MongoDB research for Auth

#### Friday, 12/10
* 8:18: picked up from last week, Node Auth and Stream conn good to go

Instructor's comments:
====================
1.	React vs React Native?
o	I see that you said you'd be building it with React, but you also mention being able to receive and send text messages 
o	React Native is basically the mobile-friendly version of React, which may be the direction you want to go
o	Are you potentially needing to also look at other languages, such as Swift or Kotlin, since this may be a mobile-directed app?
o	If you're just going to send/receive messages in a proprietary format (the app itself handles communication), then it will probably be easier. 
2.	User authentication and authorization
o	Make sure that you store this information securely.
o	If phone numbers are part of the user information, I'd be careful to look at any potential laws pertaining to storing that information, if there are any, for account creation. 
3.	Databases
o	I'd say you may want to plan this out first, if it's part of the MVP. 
o	I'd consider what sort of information you're hoping to store here. Will it be a relational database type? NoSQL? 
o	Also, consider security concerns here. Chats can be very private. Do you also want to include images? There are some ethical things to consider there too. 
4.	MVP and stretch goals 
o	I'd like to see you be more specific on extra messaging functionality/stretch goals. 
o	I think styling is a great stretch goal in general. If it's being built in React.js, check out Semantic-UI or any other React style library to get ideas! :) 
o	I think your MVP has the potential to go either way - quickly or slowly. It's better to have more ideas for your stretch goals if you end up needing some more things to do :) 
