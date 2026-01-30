pipeline {
    agent any

    

    stages {
        stage('Clonar repositorio') {
            steps {
                git 'https://github.com/andresgomez1224/cypress-saucedemo-pom'
            }
        }

        stage('Instalar dependencias') {
            steps {
                sh 'npm install'
            }
        }

        stage('Ejecutar pruebas Cypress') {
            steps {
                sh 'npx cypress run'
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
