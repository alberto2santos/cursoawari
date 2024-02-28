const posts = [
    {
        image: {
            url:'https://logosmarcas.net/wp-content/uploads/2020/08/Chrome-Emblema.png',
            alt: 'Logo',
            width:'100px',
            heigth: 'auto',
            title: 'Google Chrome'
        },
        title: 'Google Chrome',
        content: "Google Chrome is a web browser developed by Google, released in 2008. Chrome is the world's most popular web browser today!"
    },
    {
        image: {
            url:'https://upload.wikimedia.org/wikipedia/commons/e/e7/Firefox_logo%2C_2019.png',
            alt: 'Logo',
            width:'100px',
            heigth: 'auto',
            title: 'Mozilla Firefox'
        },
        title: 'Mozilla Firefox',
        content: "Mozilla Firefox is an open-source web browser developed by Mozilla. Firefox has been the second most popular web browser since January, 2018."
    },
    {
        image: {
            url:'https://w7.pngwing.com/pngs/750/511/png-transparent-microsoft-edge-hd-logo-thumbnail.png',
            alt: 'Logo',
            width:'100px',
            heigth: 'auto',
            title: 'Microsoft Edge'
        },
        title: 'Microsoft Edge',
        content: "Microsoft Edge is a web browser developed by Microsoft, released in 2015. Microsoft Edge replaced Internet Explorer."
    },
    {
        image: {
            url:'https://logodownload.org/wp-content/uploads/2017/06/opera-logo-browser.png',
            alt: 'Logo',
            width:'100px',
            heigth: 'auto',
            title: 'Opera',
        },
        title: 'Opera',
        content: "Opera é um navegador da web desenvolvido pela companhia norueguesa Opera Software e disponibilizado para Microsoft Windows, Mac OS X e Linux, usando o motor Blink. Uma antiga versão que funciona com o motor Presto ainda pode ser usada no FreeBSD, além dos outros sistemas operacionais."
    }
];

const wrapper = document.getElementById('posts');

for (var i = 0; i < posts.length; i++) {
    const postData = posts[i];

    const article = document.createElement('article');
    article.classList.add('article');

    const img = document.createElement('img');
    img.classList.add('image-logo');
    img.setAttribute('src', postData.image.url);
    img.setAttribute('alt', postData.image.alt);
    img.setAttribute('data-title', postData.image.title);
    img.style.width = postData.image.width;
    img.style.height = postData.image.height;
    article.appendChild(img);

    const title = document.createElement('h2');
    title.classList.add('article-title');
    const titleText = document.createTextNode(postData.title);
    title.appendChild(titleText);
    article.appendChild(title);
    
    const content = document.createElement('p');
    const contentText = document.createTextNode(postData.content);
    content.appendChild(contentText);
    article.appendChild(content);
    
    wrapper.appendChild(article);
}