pipeline {
  agent {
    node {
      label 'React_Frontend'
    }

  }
  stages {
    stage('Build') {
      steps {
        build 'npm run build'
      }
    }

  }
}