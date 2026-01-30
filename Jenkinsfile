pipeline {
    agent any

    stages {
        stage('Instalar dependencias') {
            steps {
                bat 'npm install'
            }
        }

        stage('Ejecutar pruebas Cypress') {
            steps {
                bat 'npx cypress run'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'cypress/screenshots/**', allowEmptyArchive: true
            archiveArtifacts artifacts: 'cypress/videos/**', allowEmptyArchive: true
        }
    }
}


