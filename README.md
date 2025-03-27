**Weather App**  
**Real-Time Weather App on EC2**

**Overview**
The **Real-Time Weather App** fetches live weather data from the OpenWeather API and displays real-time temperature and weather updates. The application is deployed using **Jenkins** on an **AWS EC2** instance.

**Features**
-Fetches real-time weather data from the OpenWeather API  
-Displays temperature and weather conditions dynamically  
-Automated deployment via Jenkins on AWS EC2

**Technologies Used:**
**Frontend**
-HTML

**Backend**
-Node.js

**Deployment & CI/CD**
- AWS EC2 (Hosting)
- Jenkins (CI/CD Pipeline)
- Git & GitHub (Version Control)

**Installation & Setup**
**Prerequisites**
-AWS EC2 instance configured
- Node.js installed
- Jenkins set up with necessary plugins

**Steps to Set Up & Run**
-1. Clone the Repository
  - git clone <repository-url>
  -  cd weather-app
-2.Install Dependencies:
- npm install
-3. Start the Server:
- node server.js
  -4. Access the App:
- Open http://<ec2_public_ip>:3000 in a browser.

**CI/CD with Jenkins**
- 1. Configure Jenkins Pipeline:
- Add a Jenkinsfile to the repository.
- Define steps for cloning, installing dependencies, and deploying.
- 2. Create a Jenkins Job:
- Set up a multibranch pipeline connected to GitHub.
- Configure a build trigger (GitHub Webhook).

**Deploy Automatically:**
- Push updates to GitHub to trigger Jenkins and deploy changes to EC2.
