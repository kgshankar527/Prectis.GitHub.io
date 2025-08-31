# Prectis.GitHub.io
Prectic repository
echo 'function gp() {
      git add .
        git commit -m "${1:-Quick update}"
          git push origin $(git rev-parse --abbrev-ref HEAD)
          }' >> ~/.bashrc && source ~/.bashrc







          
}