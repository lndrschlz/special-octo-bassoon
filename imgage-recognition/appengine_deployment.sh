cp app.yaml .app.yaml
echo "  DEPLOYMENT: \"`date`\"" >> .app.yaml
gcloud app deploy .app.yaml
