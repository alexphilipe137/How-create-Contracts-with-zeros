# How-create-Contracts-with-zeros

This is a quick tutorial on how to create contracts with a greater number of zeros

## 1) Clone this repository in your machine

```
sudo apt update -y
```

```
sudo apt upgrade -y
```

```
sudo apt install git
```

```
git clone https://github.com/alexphilipe137/How-create-Contracts-with-zeros.git
```

## 2) Run this commands:
```
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo bash -
```

```
sudo apt-get install -y nodejs vim
```

```
npm install -g yarn
```

```
npm config set update-notifier false
```

```
yarn
```

## 3) Run this command to create your contract

```
npx hardhat mineContractAddress --search-for 0000000000
```

**Be aware that the more zeros you put the more time and more processing it will require to find the phrase that will generate your contract
And yes it will generate an seed phrase and the first contrac that this wallet deploy will be that contract with zeros.**
