//Instruction to run locally

npm install
npm start

//Deployment URL

Github link: 
Render link: https://event-management-api-igkf.onrender.com

//Endpoints with example requests

POST /api/events

{
    "eventName": "Tech Conference 2025",
    "date": "2025-12-15",
    "location": "Mumbai Convention Center",
    "description": "Annual technology conference featuring AI and web development task"
}

GET /api/events

{
    "eventName": "Tech Conference 2025",
    "date": "2025-12-15",
    "location": "Mumbai Convention Center",
    "description": "Annual technology conference"
}

GET api/events/:id

{
    "id": 1
    "eventName": "Tech Conference 2025",
    "date": "2025-12-15",
    "location": "Mumbai Convention Center",
    "description": "Annual technology conference"
}

PUT api/events/:id

{
    "id": 1
    "eventName": "Tech Conference 2025",
    "date": "2025-12-15",
    "location": "Delhi Convention Center",
    "description": "updated: Annual technology conference featuring AI and web development task"
}

DELETE api/events/:id

{
    "eventName": "Tech Conference 2025",
    "date": "2025-12-15",
    "location": "Mumbai Convention Center",
    "description": "Annual technology conference featuring AI and web development task"
}
