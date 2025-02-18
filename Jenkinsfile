pipeline {
    agent any  // Use any available Jenkins agent

    environment {
        NODEJS_HOME = tool 'NodeJS 18' // Use the Node.js version from Jenkins
        PATH = "${NODEJS_HOME}/bin:${env.PATH}"
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/alihammoud17/landing-page'
            }
        }
        
        stage('Install pm2') {
            steps {
                sh 'npm install -g pm2'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Next.js') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                # Remove old deployment (if exists)
                rm -rf /var/www/tribelightlb
                mkdir -p /var/www/tribelightlb
                rsync -av --progress .next public package.json /var/www/tribelightlb
                '''
            }
        }

        stage('Restart Server') {
            steps {
                sh 'pm2 restart tribelightlb || pm2 start npm --name "tribelightlb" -- start'
            }
        }
    }

    post {
        success {
            echo 'Deployment successful!'
        }
        failure {
            echo 'Deployment failed!'
        }
    }
}

// https://medium.com/@abderrahimfazazi/set-up-ci-cd-using-jenkins-for-your-nextjs-app-db933ac87e93