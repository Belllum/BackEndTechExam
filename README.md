

#  Technical Exam Kitra
#A. Find treasure boxes within 1km/10 (km)
Get http://localhost:3001](https://backendtechexam.onrender.com)/kitra?latitude=14.552036595352455&longitude=121.01696118771324&distance=10

#B. Find treasure boxes that have a value of more than $10 (inclusive) prize_value value within 1km / 10 (km) with the following input.
Get https://backendtechexam.onrender.com/kitra/prize?latitude=14.552036595352455&longitude=121.01696118771324&distance=10&prize_value=15

#2. Create a bonus endpoint which you think would be useful. Anything that comes in your mind.
Get https://backendtechexam.onrender.com/treasure?latitude=14.552036595352455&longitude=121.01696118771324

First, I set up a database and put the given data into tables. Then, I used an SQL query to find treasures that are either 1 or 10 km away. 
For treasure boxes worth more than $10, I did the same thing but added an extra step to find the exact location in the table. 
I used a loop to figure out which location had the lowest value, considering the treasure ID from before.

For the bonus endpoint of the project, I thought about finding the closest treasure box based on your location. 
To do this, I made a function (calculateDistance) that measures the distance between your location and all the treasures in the table. 
I then saved these distances in a new list and used a loop to find the one with the shortest distance.




