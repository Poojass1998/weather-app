pipeline {
    agent any
    stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/Poojass1998/weather-app.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sshagent(credentials: ['aws.pem']) { // Use the correct credentials ID
                    sh '''
                    ssh -o StrictHostKeyChecking=no ubuntu@3.108.63.115 "rm -rf /home/ubuntu/weather-app"
                    ssh -o StrictHostKeyChecking=no ubuntu@3.108.63.115 "mkdir -p /home/ubuntu/weather-app"
                    scp -o StrictHostKeyChecking=no -r Jenkinsfile README.md public server ubuntu@3.108.63.115:/home/ubuntu/weather-app
                    ssh -o StrictHostKeyChecking=no ubuntu@3.108.63.115 "cd /home/ubuntu/weather-app && npm install"
                    '''
                }
            }
        }

        stage('Run Server') {
            steps {
                sshagent(credentials: ['aws.pem']) {
                    sh '''
                    ssh -o StrictHostKeyChecking=no ubuntu@3.108.63.115 "cd /home/ubuntu/weather-app && npm start"
                    '''
                }
            }
        }
    }
}
