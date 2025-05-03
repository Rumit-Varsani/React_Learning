# React_Learning
by Akshay Saini

# 1. Check if Node.js is installed
node -v

# 2. Initialize a Node.js project (creates package.json)
npm init -y

# 3. Install React and ReactDOM
npm install react react-dom

# 4. Install Parcel as a dev dependency
npm install -D parcel

# 5. Start the development server
npx parcel index.html











## 🧪 Setting up Testing in Our App

```bash
# 1. Install React Testing Library
npm install @testing-library/react

# 2. Install Jest
npm install --save-dev jest

# 3. Install Babel dependencies
npm install --save-dev @babel/preset-env @babel/preset-react babel-jest

# 4. Create a .babelrc file and add the following:
echo '{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}' > .babelrc

# 5. Create or update the .parcelrc file to disable default babel transpilation
echo '{
  "extends": "@parcel/config-default",
  "transformers": {
    "*.{js,jsx}": ["@parcel/transformer-babel"]
  }
}' > .parcelrc

# 6. Initialize Jest configuration
npx jest --init

# 7. Install jsdom library
npm install --save-dev jsdom
