INPUT=$(npm start)
echo $INPUT
POEM=$(echo $INPUT | sed 's/> poem-bot@1.0.0 start > node index.js / /')
echo $POEM
