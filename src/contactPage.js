import initalPageLoader from './initialPage';
const contactLoader = (() => {
    initalPageLoader.link3.addEventListener('click', () => {
        initalPageLoader.description.querySelectorAll('*').forEach(n => n.remove());
        initalPageLoader.description.setAttribute('style', 'width: 400px; height: 500px;')
        
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
        madeBy.appendChild(profileLink)

        const profile = document.createElement('img');
        profile.setAttribute('src', '/src/img/GitHub-Mark-32px.png')
        profile.classList.add('logo')
        profile.setAttribute('style', 'display: inline-block; ')
        profileLink.appendChild(profile)
    })

})()

export default contactLoader