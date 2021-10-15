In this assessment, I use GitHub as backup storage to prevent data lost and using GitHub Schule feature to track assessment progress and time cost

In this assessment, I have four classes, as the image shows. The User class have a user id, password, email address and other information to display. The Char class have the chart room information with id room name and channel name. The Char database has a child class called channel name, this child class used to store multiple channels. The channels database have a child class used to hold multiple users in that channel. The channel name class use room id as key to find char room class. All the data in those class are stored by MongoDB to the local storage


In this assessment, I put most of the calculations on the server-side to reduce the client data burden . As the image shows, the server holds all the javascript to pass data back to the server, the server service the route requirement from component, the component receive the data and process to the screen 

` `The image shows the route file for this assessment. Add user allows the system to add a new user from the input. Logout allows the user to change identity. List function prints all the users to the screen. The current user checks the current user role. Showchan function will call all the channels fit the requirement, list, delete edit room will change the user information. The new room, edit room, delete room will change room information add channel will add a new channel to the room, the put user and show user will add the new user to channel and display.

Comment As the image shows, the add user, edit user, edit room, upload image, create a new room and upload image will put users to the new page. Those functions are created to handle and display user requirements. The routes file hold have all the javascript files that handle the requirement from serciver. The server.js hold all the sub redirect routes for the system as image shows.



This is an example of the system architecture for this system. The image shows the list comments display all the users on the running in line24, the delete function, edit function and add function is showing in next image, in this image, the user ID is passed to the delete.js file and removed from the local database. The final image shows the HTTP file for the list component. In this HTTP file, some button is for the direct user to other pages. The ngfor loop is used to display the list of users from the MongoDB object.



