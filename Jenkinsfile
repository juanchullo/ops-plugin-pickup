pipeline {
  agent any
  parameters {
    string(name: "key", description: "llave")
  }
  stages {
    stage('Build') {
      steps {
        sh 'echo "Hello World"'
        sh 'echo key ${key}'
        sh 'echo key2 ${params.key}'
      }
    }
  }
}