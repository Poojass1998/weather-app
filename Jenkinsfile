pipeline {
    agent any
    stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/Poojass1998/my-weather-app.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sshagent(['aws.pem']) {
                    sh '''
                        ssh -i aws.pem ubuntu@3.108.63.115 "rm -rf /home/ubuntu/my-weather-app"
                        ssh -i aws.pem ubuntu@3.108.63.115 "mkdir -p /home/ubuntu/my-weather-app"
                        scp -i aws.pem -r * ubuntu@3.108.63.115:/home/ubuntu/my-weather-app
                        ssh -i aws.pem ubuntu@3.108.63.115 "cd /home/ubuntu/my-weather-app && npm install"
                    '''
                }
            }
        }
        stage('Run Server') {
            steps {
                sshagent(['aws.pem']) {
                    sh '''
                        ssh -i aws.pem ubuntu@3.108.63.115 "cd /home/ubuntu/my-weather-app && nohup node server.js > weather.log 2>&1 &"
                    '''
                }
            }
        }
    }
}

