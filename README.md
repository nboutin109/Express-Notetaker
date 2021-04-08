# Title
<p>Express Note-taking Application</p>
<p>This application allows the user to create, save, delete, and view previous notes through a single webpage</p>
<a href="https://express-notetaker-app109.herokuapp.com/"><img src="public/notes.PNG" height="250px" width="250px"/> </a>

# Installation
<p>A live deployment can be found here: <a href="https://express-notetaker-app109.herokuapp.com/">https://express-notetaker-app109.herokuapp.com/</a></p>
<p>To use locally use the following steps.</p>
<ol>
    <li>Download the files from Github</li>
    <li>Install and setup Node.js</li>
    <li>Open the downloaded files with VS code.</li>
    <li>Open the terminal while viewing the files (CTRL + `)</li>
    <li>Run the command npm install in your terminal</li>
    <li>Open the index.html file with a browser</li>
</ol>

## Built With
<ul>
<li>Bootstrap - CDN included</li>
<li>jQuery - CDN included</li>
<li>Node.js and the following packages</li>
<ul>
<li>Body-parser - Installed via Node</li>
<li>Express - Installed via Node</li>
<li>fs - Installed via Node</li>
</ul>
</ul>

## Code Overview
<p>The public folder contains the html and css for the opening page along with the notes page. It also contains all the JavaScript for the notes page outside of the database. For back end, the js files in the routes folder are imported to the server.js page which creates the server. The json file in the db folder is used as the database. Notes are written to, deleted, and read from that file.</p>