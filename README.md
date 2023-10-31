# Share B&B Client

## What is This?
This repo represents the front-end client for a bootcamp development project focused on building a web application from scratch with only basic requirements. It was developed as part of my Full-Stack Software Engineering curriculum at the Rithm School bootcamp in partnership with a fellow cohort member.

In this case, we opted to choose React for our front-end in order to gain more experience with that library and Flask for our backend, since we preferred that over Express.js. For the backend we used PostgreSQL as that was the only database we were familiar with. We also leveraged Amazon S3 to support image storage and retrieval.

[Link to backend repo.](https://github.com/jasjoh/cyoas-sharebnb-server)

## Key Learnings
- The need to explicitly type image uploads sent from React forms alongside JSON data to Flask APIs as multipart form data
- How to provision a new AWS account and S3 instance including IAM and policy management
- How challenging it is as an AWS novice to navigate their documentation as part of the above bullet point
- The challenges of time estimation and planning while working under fixed time constraints

## How to Run
- Run `npm install` to install pre-requisites
- Run `npm start` to start the React app
- Install and run the [backend.](https://github.com/jasjoh/cyoas-sharebnb-server)
- Navigate to http://localhost:3000/

## Wireframe Mocks
![Wireframe Mocks](https://github.com/jasjoh/cyoas-sharebnb-client/blob/main/sharebnb.wireframes.jpg "Wireframe Mocks")

## React Component Diagram
![React Component Diagram](https://github.com/jasjoh/cyoas-sharebnb-client/blob/main/sharebnb.component.jpg "React Component Diagram")
