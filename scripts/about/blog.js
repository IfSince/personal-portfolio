import {createDomElement} from '../util/createDomElement.js';

const blogContainer = document.querySelector('.blog__posts');

async function loadPosts() {
    const response = await fetch('assets/server.json')

    if (!response.ok) {
        const message = `The data could not be loaded. Status received: ${response.status}`;
        throw new Error(message);
    }

    return response.json();
}

async function createBlogPost(posts, observer) {
    if (posts.length === 0) {
        const blogPost = createDomElement('div', null, ['blog-post', 'fade-in__bottom']);

        const blogPostImageContainer = createDomElement('div', null, ['blog-post__image']);
        const blogPostImg = createDomElement('img');
        blogPostImg.setAttribute('src', '../../assets/nothing-found.svg');
        blogPostImageContainer.appendChild(blogPostImg)

        const blogPostText = createDomElement('div', null, ['blog-post__text']);
        const blogCategory = createDomElement('p', 'Nothing to see here…', ['blog-category']);
        const blogHeader = createDomElement('h3', 'No blogs have been uploaded yet.', ['blog-header']);
        blogPostText.appendChild(blogCategory)
        blogPostText.appendChild(blogHeader)

        blogPost.appendChild(blogPostImageContainer);
        blogPost.appendChild(blogPostText);

        blogContainer.appendChild(blogPost);
        observer.observe(blogPost);
    }

    posts.forEach((post) => {
        const { name, imgUrl, content } = post;

        const blogPost = createDomElement('div', null, ['blog-post', 'fade-in__bottom']);

        const blogPostImageContainer = createDomElement('div', null, ['blog-post__image']);
        const blogPostImg = createDomElement('img');
        blogPostImg.setAttribute('src', imgUrl);
        blogPostImageContainer.appendChild(blogPostImg)

        const blogPostText = createDomElement('div', null, ['blog-post__text']);
        const blogCategory = createDomElement('p', name, ['blog-category']);
        const blogHeader = createDomElement('h3', content.slice(0, 150), ['blog-header']);
        blogPostText.appendChild(blogCategory)
        blogPostText.appendChild(blogHeader)


        blogPost.appendChild(blogPostImageContainer);
        blogPost.appendChild(blogPostText);


        blogContainer.appendChild(blogPost);
        observer.observe(blogPost);
    });
}

export function initBlog(observer) {
    loadPosts()
        .then(posts => createBlogPost(posts, observer))
        .catch(e => handleError(e, observer));
}

function handleError(error, observer) {
    const blogPost = createDomElement('div', null, ['blog-post', 'fade-in__bottom']);

    const blogPostImageContainer = createDomElement('div', null, ['blog-post__image']);
    const blogPostImg = createDomElement('img');
    blogPostImg.setAttribute('src', '../../assets/error.svg');
    blogPostImageContainer.appendChild(blogPostImg)

    const blogPostText = createDomElement('div', null, ['blog-post__text']);
    const blogCategory = createDomElement('p', 'Nothing to see here…', ['blog-category']);
    const blogHeader = createDomElement('h3', error, ['blog-header']);
    blogPostText.appendChild(blogCategory)
    blogPostText.appendChild(blogHeader)

    blogPost.appendChild(blogPostImageContainer);
    blogPost.appendChild(blogPostText);

    blogContainer.appendChild(blogPost);
    observer.observe(blogPost);
}