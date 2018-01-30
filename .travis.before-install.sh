wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | sudo apt-key add - 
sudo sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
sudo apt-get update
sudo apt-get --assume-yes --purge remove google-chrome-stable
CHROME_VERSION=$(apt-cache show google-chrome-stable | grep Version | head -1 | sed -E 's/^[^0-9]+([0-9\.-]+*).*$/\1/g')
echo Chrome version to install: $CHROME_VERSION
sudo apt-get --assume-yes install google-chrome-stable=$CHROME_VERSION
echo $CHROME_VERSION > spec/temp/chrome-version.txt