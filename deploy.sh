set -e
npm run build
cd dist
echo 'daniel.is-coding-on-the.net' > CNAME
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:TechGeekGamer/personal-site.git master:gh-pages
cd -
