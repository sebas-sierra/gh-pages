import React from 'react';
import { Badge, Card } from 'react-bootstrap'

const GithubPages = () => {
  return (
    <Card className="mb-2">
        <Card.Header><Badge pill bg="secondary">Clase Nº 3 </Badge>
            <h1> Deploying a React App* to GitHub Pages</h1>
            <p> * created using <code>`create-react-app`</code></p>
        </Card.Header>
    <Card.Body>
        


<h1> Introduction</h1>

<p>In this tutorial, I'll show you how you can create a React app and deploy it to GitHub Pages.</p>

<p>To create the React app, I'll be using <a href="https://create-react-app.dev/">create-react-app</a>, which is a tool people can use to create a React app from scratch. To deploy the React app, I'll be using <a href="https://github.com/tschaub/gh-pages">gh-pages</a>, which is an npm package people can use to deploy things to <a href="https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages">GitHub Pages</a>, a free web hosting service provided by GitHub.</p>

<p>If you follow along with this tutorial, you'll end up with a new React app—hosted on GitHub Pages—which you can then customize.</p>

<h1> Tutorial</h1>

<h2> Prerequisites</h2>

<ul>
    <li>
    1. <a href="https://nodejs.org/en/download/">Node and npm</a> are installed. Here are the versions I'll be using while making this tutorial:<br/>
    
        <code>
        $ node --version
        v16.13.2
        </code>
    <br/>
        <code>
        $ npm --version
        8.1.2
        </code>
        
        <p> Installing npm adds two commands to the system—`npm` and `npx`—both of which I'll be using while making this tutorial.</p>
    </li>

    <li>
    2. <a href="https://git-scm.com/book/en/v2/Getting-Started-Installing-Git">Git</a> is installed. Here's the version I'll be using while making this tutorial:<br/>

    <code>
    $ git --version
    </code>
    <br/>
    <code>
    git version 2.29.1.windows.1
    </code>
    
    </li>

    <li>
    3. A <a href="https://github.com/signup">GitHub</a> account.

    </li>
</ul>





<h2> Procedure</h2>

<h3> 1. Create an <strong>empty</strong> repository on GitHub</h3>

<ul>
    <li>1. Sign into your GitHub account.</li>
    <li>2. Visit the <a href="https://github.com/new">Create a new repository</a> form.</li>
    <li>3. Fill in the form as follows:
        <ul>
            <li>
                <strong>Repository name:</strong> You can enter any name you want*.
                
                <p>* For a <a href="https://pages.github.com/#project-site">project site</a>, you can enter any name you want. For a <a href="https://pages.github.com/#user-site">user site</a>, GitHub <a href="https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites">requires</a> that the repository's name have the following format: <code>`username.github.io`</code> (e.g. <code>`gitname.github.io`</code>)</p>
                
                <p>The name you enter will show up in a few places: (a) in references to the repository throughout GitHub, (b) in the URL of the repository, and (c) in the URL of the deployed React app.</p>
                
                <p>In this tutorial, I'll be deploying the React app as a project site.</p>
                
                <p>I'll enter: `react-gh-pages`</p>
            </li>
            
            <li>
                <strong>Repository privacy:</strong> Select _Public_ (or _Private_\*).
                 
                <p>* For <a href="https://docs.github.com/en/get-started/learning-about-github/githubs-products#github-free-for-user-accounts">GitHub Free</a> users, the only type of repository that can be used with GitHub Pages is _Public_. For <a href="https://docs.github.com/en/get-started/learning-about-github/githubs-products#github-pro">GitHub Pro</a> users (and other paying users), both _Public_ and _Private_ repositories can be used with GitHub Pages.</p>
                 
                <p>I'll choose: _Public_</p>
            </li>
            
            <li>
                <strong>Initialize repository:</strong> Leave all checkboxes empty.
                
                <p>That will make it so GitHub creates an empty repository, instead of pre-populating the repository with a `README.md`, `.gitignore`, and/or `LICENSE` file.</p>
            </li>
        </ul>
    </li>
    
    <li>4. Submit the form.
        <p>At this point, your GitHub account contains an empty repository, having the name and privacy type that you specified.</p>
    </li>
</ul>



<h3> 2. Create a React app</h3>

<ul>
    <li>1. Create a React app named `my-app`:
        
        <p>In case you want to use a different name from `my-app` (e.g. `web-ui`), you can accomplish that by replacing all occurrences of `my-app` in this tutorial, with that other name (i.e. `my-app` --> `web-ui`).</p>

        <code>$ npx create-react-app my-app</code>
        
        <p>That command will create a React app written in JavaScript. To create one written in <a href="https://create-react-app.dev/docs/adding-typescript/#installation">TypeScript</a>, you can issue this command instead:</p>

        <code>$ npx create-react-app my-app --template typescript</code>

        <p>That command will create a new folder named `my-app`, which will contain the source code of a React app.</p>
        
        <p>In addition to containing the source code of the React app, that folder is also a Git repository. That characteristic of the folder will come into play in Step 6.</p>
        
        <h4>Branch names: `master` vs. `main`</h4>
        
        <p>The Git repository will have one branch, which will be named either (a) `master`, the default for a fresh Git installation; or (b) the value of the Git configuration variable, `init.defaultBranch`, if your computer is running Git version 2.28 or later _and_ you have <a href="https://github.blog/2020-07-27-highlights-from-git-2-28/#introducing-init-defaultbranch">set that variable</a> in your Git configuration (e.g. via `$ git config --global init.defaultBranch main`).</p>
        
        <p>Since I have not set that variable in my Git installation, the branch in my repository will be named `master`. In case the branch in your repository has a different name (which you can check by running  `$ git branch`), such as `main`; you can **replace** all occurrences of `master` throughout the remainder of this tutorial, with that other name (e.g. `master` → `main`).</p>

    </li>
    <li>2. Enter the newly-created folder:<br/>
        <code>$ cd my-app</code>
        <p>At this point, there is a React app on your computer and you are in the folder that contains its source code. All of the remaining commands shown in this tutorial can be run from that folder.</p>
    </li>
</ul>

<h3> 3. Install the `gh-pages` npm package</h3>
<ul>
    <li>
        1. Install the <a href="https://github.com/tschaub/gh-pages">`gh-pages`</a> npm package and designate it as a <a href="https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file">development dependency</a>:<br/>
        
        <code>$ npm install gh-pages --save-dev</code>
        
        <p>At this point, the `gh-pages` npm package is installed on your computer and the React app's dependence upon it is documented in the React app's `package.json` file.</p>
    </li>
</ul>



<h3> 4. Add a `homepage` property to the `package.json` file</h3>
<ul>
    <li>1. Open the `package.json` file in a text editor.<br/>
        
        <code>$ vi package.json</code>
        
        <p>In this tutorial, the text editor I'll be using is <a href="https://www.vim.org/">vi</a>. You can use any text editor you want; for example, <a href="https://code.visualstudio.com/">Visual Studio Code</a>.</p>
    </li>
    <li>2. Add a `homepage` property in this format\*:<br/><code>https://username.github.io/repo-name</code>
    
    <p>* For a <a href="https://pages.github.com/#project-site">project site</a>, that's the format. For a <a href="https://pages.github.com/#user-site">user site</a>, the format is: `https://username.github.io`. You can read more about the `homepage` property in the <a href="https://create-react-app.dev/docs/deployment/#github-pages">"GitHub Pages" section</a> of the `create-react-app` documentation.</p>

                  {/* <code>
                      {
                          "name": "my-app",
                      "version": "0.1.0",
                      + "homepage": "https://gitname.github.io/react-gh-pages",
                      "private": true,
                      ... }
                  </code> */}
                  <p>At this point, the React app's `package.json` file includes a property named `homepage`.</p>

    </li>
</ul>

<h3> 5. Add deployment scripts to the `package.json` file</h3>
<ul>
    <li>1. Open the `package.json` file in a text editor (if it isn't already open in one).<br/>
        <code>$ vi package.json</code>
   </li>
    <li>2. Add a `predeploy` property and a `deploy` property to the `scripts` object:

                  {/* <code>
                      "scripts": {
                        + "predeploy": "npm run build",
                        + "deploy": "gh-pages -d build",
                        "start": "react-scripts start",
                        "build": "react-scripts build",
                        ... }
                  </code> */}
    </li>
</ul>

<p>At this point, the  React app's `package.json` file includes deployment scripts.</p>

<h3> 6. Add a "remote" that points to the GitHub repository</h3>

<ul>
    <li>1. Add a "<a href="https://git-scm.com/docs/git-remote">remote</a>" to the local Git repository.
        
        You can do that by issuing a command in this format: <br/>
        
        <code> $ git remote add origin https://github.com/username/repo-name.git</code><br/>
        
        To customize that command for your situation, replace <code>username</code> with your GitHub username and replace <code>repo-name</code> with the name of the GitHub repository you created in Step 1.<br/>
        
        In my case, I'll run:<br/>
        
        <code>$ git remote add origin https://github.com/gitname/react-gh-pages.git</code><br/>
        
        That command tells Git where I want it to push things whenever I—or the `gh-pages` npm package acting on my behalf—issue the `$ git push` command from within this local Git repository.
        
    </li>
</ul>

<p>At this point, the local repository has a "remote" whose URL points to the GitHub repository you created in Step 1.</p>

<h3> 7. Push the React app to the GitHub repository</h3>
<ul>
    <li>1. Push the React app to the GitHub repository<br/>
        
        <code>$ npm run deploy</code><br/>
        
        <p>That will cause the `predeploy` and `deploy` scripts defined in `package.json` to run.</p>
        
        <p>Under the hood, the `predeploy` script will build a distributable version of the React app and store it in a folder named `build`. Then, the `deploy` script will push the contents of that folder to a new commit on the `gh-pages` branch of the GitHub repository, creating that branch if it doesn't already exist.</p>
        
        <p>By default, the new commit on the `gh-pages` branch will have a commit message of "Updates". You can <a href="https://github.com/gitname/react-gh-pages/issues/80#issuecomment-1042449820">specify a custom commit message</a> via the `-m` option, like this:</p>
        
        <code>$ npm run deploy -- -m "Deploy React app to GitHub Pages"</code>
    </li>
</ul>

<p>At this point, the GitHub repository contains a branch named `gh-pages`, which contains the files that make up the distributable version of the React app. However, we haven't configured GitHub Pages to _serve_ those files yet.</p>

<h3> 8. Configure GitHub Pages</h3>
<ul>
    <li>1. Navigate to the <strong>GitHub Pages</strong> settings page
        <ul>
            <li>1.1 In your web browser, navigate to the GitHub repository</li>
            <li>1.2 Above the code browser, click on the tab labeled "Settings"</li>
            <li>1.3 In the sidebar, in the "Code and automation" section, click on "Pages"</li>
        </ul>
    </li>
    <li>2. Configure the "Build and deployment" settings like this: 
        <ul>
            <li>2.1 <strong>Source:</strong> Deploy from a branch</li>
            <li>2.2 <strong>Branch:</strong> 
                <ul>
                    <li>Branch: `gh-pages`</li>
                    <li>Folder: `/ (root)`</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>3. Click on the "Save" button</li>
</ul>
<p><strong>That's it!</strong> The React app has been deployed to GitHub Pages! :rocket:</p>

<p>At this point, the React app is accessible to anyone who visits the `homepage` URL you specified in Step 4. For example, the React app I deployed is accessible at <a href="https://gitname.github.io/react-gh-pages">https://gitname.github.io/react-gh-pages</a>.</p>

<h3> 9. (Optional) Store the React app's _source code_ on GitHub</h3>

<p>In a previous step, the `gh-pages` npm package pushed the distributable version of the React app to a branch named `gh-pages` in the GitHub repository. However, the _source code_ of the React app is not yet stored on GitHub.</p>

<p>In this step, I'll show you how you can store the source code of the React app on GitHub.</p>

<ul>
    <li>1. Commit the changes you made while you were following this tutorial, to the `master` branch of the local Git repository; then, push that branch up to the `master` branch of the GitHub repository.<br/>

                  <code>
                      $ git add .<br/>
                      $ git commit -m "Configure React app for deployment to GitHub Pages"<br/>
                      $ git push origin master<br/>
                  </code>

    </li>
</ul>


    <p>I recommend exploring the GitHub repository at this point. It will have two branches: `master` and `gh-pages`. The `master` branch will contain the React app's source code, while the `gh-pages` branch will contain the distributable version of the React app.</p>
</Card.Body>
</Card>
  )
}

export default GithubPages