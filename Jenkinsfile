pipeline {
    agent any

    environment {
     
        DOCKER_CREDENTIALS_ID = "dockerhub-credentials"
        // SSH_CREDENTIALS_ID = "homemate-dev-server"
        // SSH_TARGET = "ubuntu@16.170.174.241"
        REACT_APP_IMAGE = "chamaravishwajith644/react-frontend-is:latest"

    }

    tools {
        maven 'Maven 3.9.9'
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/SDewthilini/url_shortner_fr.git'
            }
        }








        stage('Build & Push Frontend Docker Image') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: DOCKER_CREDENTIALS_ID, usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                        sh '''
                        pwd 
                        ls 
                        echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
                        # Build the React frontend Docker image with no-cache to force rebuild
                        docker build --no-cache -t $REACT_APP_IMAGE -f dockerfile 
                        # Push the Docker image to DockerHub
                        docker push $REACT_APP_IMAGE
                        docker logout
                        '''
                    }
                }
            }
        }

       

        stage('Deploy Frontend Application') {
            steps {
                script {
                    sshagent([SSH_CREDENTIALS_ID]) {
                        sh '''
                        ssh -T -o StrictHostKeyChecking=no $SSH_TARGET <<EOF
                        set -xe  # Enables debugging

                        # Ensure the Docker network exists
                        docker network inspect homemate-network >/dev/null 2>&1 || docker network create homemate-network

                        # Pull the latest React frontend image
                        docker pull $REACT_APP_IMAGE

                        # Stop and remove any running instance of the frontend
                        docker ps -q --filter "name=react-frontend" | grep -q . && docker stop react-frontend || true
                        docker ps -aq --filter "name=react-frontend" | grep -q . && docker rm react-frontend || true

                        # Run the container within the same network
                        docker run --pull=always -d --restart always --name react-frontend --network homemate-network -p 3000:3000 $REACT_APP_IMAGE

                        docker logout
                        '''
                    }
                }
            }
        }

    }

    post {
        always {
            junit 'The-Home-Services-Booking-System/target/surefire-reports/TEST-*.xml'
            plot csvFileName: 'test-duration.csv',
                title: 'Test Execution Time',
                group: 'Test Metrics',
                style: 'line'
            cleanWs()
        }

        success {
            emailext(
                to: 'sch.chamara@gmail.com',
                subject: "✅ SUCCESS: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' Completed Successfully",
                body: """
                <html>
                    <body style="font-family: Arial, sans-serif; background-color: #f9f9f9; color: #333;">
                        <div style="max-width: 800px; margin: 0 auto; padding: 20px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                            <h2 style="color: green;">🎉 Build Successful! 🎉</h2>
                            <p style="font-size: 16px;">The job <b>${env.JOB_NAME}</b> build <b>#${env.BUILD_NUMBER}</b> has completed successfully.</p>


                            <div style="text-align: center; margin-top: 30px;">
                                <p style="font-size: 14px; color: #777;">Thank you for using our CI/CD pipeline. If you have any questions, feel free to reach out.</p>
                            </div>
                        </div>
                    </body>
                </html>
                """,
                mimeType: 'text/html',
                replyTo: 'sch.chamara@gmail.com',
                from: 'sch.chamara@gmail.com'
            )
        }

        failure {
            emailext(
                to: 'sch.chamara@gmail.com',
                subject: "❌ FAILURE: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' Failed",
                body: """
                <html>
                    <body style="font-family: Arial, sans-serif; background-color: #f9f9f9; color: #333;">
                        <div style="max-width: 800px; margin: 0 auto; padding: 20px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                            <h2 style="color: red;">⚠️ Build Failed! ⚠️</h2>
                            <p style="font-size: 16px;">The job <b>${env.JOB_NAME}</b> build <b>#${env.BUILD_NUMBER}</b> has failed.</p>


                            <div style="text-align: center; margin-top: 30px;">
                                <p style="font-size: 14px; color: #777;">Thank you for using our CI/CD pipeline. We are here to assist you.</p>
                            </div>
                        </div>
                    </body>
                </html>
                """,
                mimeType: 'text/html',
                replyTo: 'sch.chamara@gmail.com',
                from: 'sch.chamara@gmail.com'
            )
        }
    }
}
