# hacktivoverflow

## Routes Users
|Routes|HTTP Method|Request|Response|Description| 
|----|----|----|----|----|----|
|/users  |POST  |email: String,username: String,  password: String |Success: Register a user,<br /> Error: Internal server error |Register a user|
|/users/:id  |GET  |none |Success: Get user data by id, <br/>Error: Internal server error |Get user data by id|
|/users/login  |POST  |email: String , password: String |Success: Login as a user, <br/>Error: Internal server error |Login via email in Database|


## Routes Questions
|Routes|HTTP Method|Request|Response|Description|
|----|----|----|----|----|----|
|/questions/  |GET  |none |Success: Get all questions,<br /> Error: Internal server error|Get all questions|
|/questions  |POST  |token : String, <br />title: String,<br /> description: String ,<br /> userId : objectId |Success: Create a question,<br /> Error: Internal server error | Create a question|
|/questions/:id  |PUT  |token : String, <br />title: String,<br /> content: String ,<br /> published : Boolean,<br /> image: File|Success: Update a question by id, <br />Error: Internal server error |Update a question by id|
|/questions/upvote/:id  |PATCH  |token : String|Success: Update a question votes + 1 by id, <br />Error: Internal server error |Update a question votes + 1 by id|
|/questions/downvote/:id  |PATCH  |token : String|Success: Update a question votes - 1 by id, <br />Error: Internal server error |Update a question votes - 1 by id|
|/questions/:id  | DELETE  |token: String |Success: Delete a question by id,<br /> Error: Internal server error |Delete an question by id|

## Routes Answers
|Routes|HTTP Method|Request|Response|Description|
|----|----|----|----|----|----|
|/answers/  |GET  |none |Success: Get all answers,<br /> Error: Internal server error|Get all answers|
|/answers  |POST  |token : String, <br />title: String,<br /> description: String ,<br /> userId : objectId, <br /> questionId: objectId |Success: Create a answer,<br /> Error: Internal server error | Create a answer|
|/answers/:id  |PUT  |token : String, <br />title: String,<br /> content: String ,<br /> published : Boolean,<br /> image: File|Success: Update a answer by id, <br />Error: Internal server error |Update a answer by id|
|/answers/upvote/:id  |PATCH  |token : String|Success: Update a answer votes + 1 by id, <br />Error: Internal server error |Update a answer votes + 1 by id|
|/answers/downvote/:id  |PATCH  |token : String|Success: Update a answer votes - 1 by id, <br />Error: Internal server error |Update a answer votes - 1 by id|
|/answers/:id  | DELETE  |token: String |Success: Delete a answer by id,<br /> Error: Internal server error |Delete an answer by id|

