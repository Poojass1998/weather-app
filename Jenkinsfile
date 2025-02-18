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
                sshagent(['ec2-ssh-key']) {
                    sh '''
                        ssh ubuntu@your-ec2-ip "rm -rf /home/ubuntu/my-weather-app"
                        ssh ubuntu@your-ec2-ip "mkdir -p /home/ubuntu/my-weather-app"
                        scp -r * ubuntu@your-ec2-ip:/home/ubuntu/my-weather-app
                        ssh ubuntu@your-ec2-ip "cd /home/ubuntu/my-weather-app && npm install"
                    '''
                }
            }
        }
        stage('Run Server') {
            steps {
                sshagent(['ec2-ssh-key']) {
                    sh '''
                        ssh ubuntu@your-ec2-ip "cd /home/ubuntu/my-weather-app && nohup node server.js > weather.log 2>&1 &"
                    '''
                }
            }
        }
    }
}

