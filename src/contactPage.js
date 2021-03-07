import initalPageLoader from './initialPage';
const contactLoader = (() => {
    initalPageLoader.link3.addEventListener('click', () => {
        initalPageLoader.description.querySelectorAll('*').forEach(n => n.remove());
        initalPageLoader.description.setAttribute('style', 'width: 400px; height: 300px; opacity: 0.95')
        
        const main = document.querySelector('main');
        main.setAttribute('style', 'display: flex; background-image: url("https://wallpapercave.com/wp/wp1874162.jpg")');

        const title = document.createElement('h1');
        title.textContent = 'Contact';
        initalPageLoader.description.appendChild(title) 

        const madeBy = document.createElement('h2');
        madeBy.textContent = 'Made by Luca';
        madeBy.setAttribute('style', 'margin-top: 20px; font-size: 20px; display: inline-block;')
        initalPageLoader.description.appendChild(madeBy)

        

        const profileLink = document.createElement('a');
        profileLink.setAttribute('href', 'https://github.com/Cynto');
        profileLink.setAttribute('target', '_blank')
        profileLink.setAttribute('style', 'display: inline-block')
        initalPageLoader.description.appendChild(profileLink)

        const gitHub = document.createElement('h2');
        gitHub.textContent = 'My GitHub';
        gitHub.classList.add('gitHub');
        gitHub.setAttribute('style', 'margin-top: 20px; font-size: 20px; display: inline-block;');
        profileLink.appendChild(gitHub)

        

        
        const projectLink = document.createElement('a');
        projectLink.setAttribute('href', 'https://github.com/Cynto/Restaurant-Page');
        projectLink.setAttribute('target', '_blank');
        initalPageLoader.description.appendChild(projectLink);

        const projectGit = document.createElement('h2');
        projectGit.textContent = 'Project Repository';
        projectGit.classList.add('gitHub');
        projectGit.setAttribute('style', 'margin-top: 20px; font-size: 20px; display: inline-block;');
        projectLink.appendChild(projectGit);

        



    })

})()

export default contactLoader