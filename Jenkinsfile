pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/Gom534/PAS.git', branch: 'back/feat/AR'
            }
        }
        
        stage('Build Docker Image') {
            steps {
                script {
                    // Docker 빌드 명령어에서 컨텍스트 디렉토리 지정
                    sh 'docker build -t wjddntyvld/artion:latest -f /home/ubuntu/artion/Dockerfile /home/ubuntu/artion'
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    sh 'docker push wjddntyvld/artion:latest'
                }
            }
        }
    }
}
