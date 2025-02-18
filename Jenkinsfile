pipeline {
    agent any
    stages {
        stage('Checkout Code') {
            steps {
                git credentialsId: 'github-pat', url: 'https://github.com/Poojass1998/weather-app.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sshagent(['aws.pem']) {
                    sh '''
                        ssh -i aws.pem ubuntu@3.108.63.115 "rm -rf /home/ubuntu/weather-app"
                        ssh -i aws.pem ubuntu@3.108.63.115 "mkdir -p /home/ubuntu/weather-app"
                        scp -i aws.pem -r * ubuntu@3.108.63.115:/home/ubuntu/weather-app
                        ssh -i aws.pem ubuntu@3.108.63.115 "cd /home/ubuntu/weather-app && npm install"
                    '''
                }
            }
        }
        stage('Run Server') {
            steps {
                sshagent(['aws.pem']) {
                    sh '''
                        ssh -i aws.pem ubuntu@3.108.63.115 "cd /home/ubuntu/weather-app && nohup node server.js > weather.log 2>&1 &"
                    '''
                }
            }
        }
    }
}





