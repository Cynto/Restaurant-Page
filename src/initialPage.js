const initalPageLoader = (() => {
    const content = document.querySelector('#content');
    const nav = document.createElement('nav');
    
    content.appendChild(nav);

    const ul = document.createElement('ul');
    nav.appendChild(ul);

    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');

    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);

    const link1 = document.createElement('a');
    link1.textContent = 'Home';
    link1.setAttribute('href', '#home')
    
    
    const link2 = document.createElement('a');
    link2.textContent = 'Menu';
    link2.setAttribute('href', '#menu')
    
    const link3 = document.createElement('a');
    link3.textContent = 'Contact';
    link3.setAttribute('href', '#contact');

    li1.appendChild(link1);
    li2.appendChild(link2);
    li3.appendChild(link3);

    //main section
    const main = document.createElement('main');
    content.appendChild(main);

    const description = document.createElement('div');
    description.classList.add('description');
    main.appendChild(description);

    const h2 = document.createElement('h2');
    h2.textContent = 'The World\'s greatest food!'
    description.appendChild(h2);


    const p = document.createElement('p');
    p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mollis ipsum et volutpat tempus. Quisque odio urna, tincidunt nec sodales vitae, cursus ut enim. Nulla ac ipsum luctus, auctor mauris quis, auctor velit. Maecenas id interdum justo. Ut nec sem luctus, consequat tellus nec, efficitur nunc. Fusce euismod ullamcorper velit, ut fringilla ex. Aenean scelerisque eget mauris vitae placerat. '
    description.appendChild(p);

    const h2Two = document.createElement('h2');
    h2Two.textContent = 'Check out our menu!'
    description.appendChild(h2Two);

    return{link1, link2, link3, description, content}

})();

function setMain() {
    const content = initalPageLoader.content;
    const main = document.querySelector('main');
    main.setAttribute('style', 'background-image: url("https://www.trattoriailborgo.it/wp-content/uploads/2018/11/food-plate-wood-restaurant.jpg")')
    content.appendChild(main);

    const description = document.querySelector('.description');
    description.classList.add('description');
    description.setAttribute('style', 'width: 400px; height: 500px;')
    main.appendChild(description);
    initalPageLoader.description.querySelectorAll('*').forEach(n => n.remove());

    const h2 = document.createElement('h2');
    h2.textContent = 'The World\'s greatest food!'
    description.appendChild(h2);


    const p = document.createElement('p');
    p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mollis ipsum et volutpat tempus. Quisque odio urna, tincidunt nec sodales vitae, cursus ut enim. Nulla ac ipsum luctus, auctor mauris quis, auctor velit. Maecenas id interdum justo. Ut nec sem luctus, consequat tellus nec, efficitur nunc. Fusce euismod ullamcorper velit, ut fringilla ex. Aenean scelerisque eget mauris vitae placerat. '
    description.appendChild(p);

    const h2Two = document.createElement('h2');
    h2Two.textContent = 'Check out our menu!'
    description.appendChild(h2Two);
}
export default initalPageLoader;
export {setMain}