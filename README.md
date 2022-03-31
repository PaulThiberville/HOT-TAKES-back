# HOT TAKES API

- User authentication
- CRUD endpoints to manage sauces

## Installation

- Clone this repo then run `npm install`.

## Usage

- Run `npm start` This should run the local server on http://localhost:3000;
- You can alternatively use `npm dev` if you want to use nodemon.

## Test

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/17651575-09078ed2-499a-47ea-8687-8abd621419a6?action=collection%2Ffork&collection-url=entityId%3D17651575-09078ed2-499a-47ea-8687-8abd621419a6%26entityType%3Dcollection%26workspaceId%3D13755646-0184-4ee3-835d-51ff17bf304c#?env%5BHot%20Takes%20Environement%5D=W3sia2V5IjoiYmFzZVVybFxuIiwidmFsdWUiOiJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpIiwiZW5hYmxlZCI6ZmFsc2UsInR5cGUiOiJkZWZhdWx0Iiwic2Vzc2lvblZhbHVlIjoiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaSIsInNlc3Npb25JbmRleCI6MH0seyJrZXkiOiJlbWFpbCIsInZhbHVlIjoicGF1bC50aGliZXJ2aWxsZUBsaXZlLmZyIiwiZW5hYmxlZCI6ZmFsc2UsInR5cGUiOiJkZWZhdWx0Iiwic2Vzc2lvblZhbHVlIjoicGF1bC50aGliZXJ2aWxsZUBsaXZlLmZyIiwic2Vzc2lvbkluZGV4IjoxfSx7ImtleSI6InBhc3N3b3JkIiwidmFsdWUiOiJhYmNkMTIzNCIsImVuYWJsZWQiOmZhbHNlLCJ0eXBlIjoiZGVmYXVsdCIsInNlc3Npb25WYWx1ZSI6ImFiY2QxMjM0Iiwic2Vzc2lvbkluZGV4IjoyfSx7ImtleSI6InRva2VuIiwidmFsdWUiOiJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKMWMyVnlTV1FpT2lJMk1qRmxNMlk0WkRWa05HTXhZVEUxWVdNd016VXpNR1FpTENKcFlYUWlPakUyTkRZek1qUTNNRFlzSW1WNGNDSTZNVFkwTmpReE1URXdObjAuSXRoQkJ6b2FZQkhIT3JZeDl2QnpJQS1jY0xBUUpoVU1UQmxEWG5iWjNuYyIsImVuYWJsZWQiOmZhbHNlLCJ0eXBlIjoiZGVmYXVsdCIsInNlc3Npb25WYWx1ZSI6ImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUoxYzJWeVNXUWlPaUkyTWpGbE0yWTRaRFZrTkdNeFlURTFZV013TXpVek1HUWlMQ0pwWVhRaU9qRTJORFl6TWpRM01EWXNJbVY0Y0NJNk1UWTBOalF4TVRFd05uMC5JdGhCLi4uIiwic2Vzc2lvbkluZGV4IjozfV0=)

- Use this collection if you want to test the API with Postman.
- You can use different users by changing email and password in collection's variables.
- Then you can use "Signup" request to create a user.
- You have to use "Login" request before using your first request in the "Sauces" folder, it will automaticly update the collection's variable "token" used for requests Auth in this folder and also update "userId" collection's variable used in requests body by API Auth middleware (see postman console).
- If you use "Get all Sauces" request, if response contains at least one product, the collection's variable "productId" will automaticly update to the first product id (see postman console).
- "Get one Sauce" , "Modify Sauce" , "Like Sauce" , "Dislike Sauce" and "Delete Sauce" requests use "productId" collection's variable to target a product.

## Usage with front app

- Go to : https://github.com/OpenClassrooms-Student-Center/Web-Developer-P6
- Follow Installation and Usage steps of the front app readme.md
- then at root of the project create a "back" folder
- run `cd back`
- then follow Installation and Usage steps of this readme.md
