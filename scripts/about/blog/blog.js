import {createDomElement} from '../../util/createDomElement.js';

async function loadPosts() {
    const response = await fetch('assets/server.json')
    if (!response.ok) {
        const message = `The data could not be loaded. Status received: ${response.status}`;
        throw new Error(message);
    }
    return response.json();
}

async function handleError(error, observer) {
    const errorPostData = {
        name: 'Nothing to see here.',
        imgUrl: '../../assets/shared-icons/error.svg',
        content: error.toString()
    }
    await createBlogPostElement(errorPostData, observer)
}

async function createBlogPost(posts, observer) {
    if (posts.length === 0) {
        const placeHolderPostData = {
            name: 'Nothing to see here.',
            imgUrl: '../../assets/shared-icons/nothing-found.svg',
            content: 'No blogs have been uploaded yet'
        }
        await createBlogPostElement(placeHolderPostData, observer)
    }
    posts.forEach((post) => createBlogPostElement(post, observer));
}

function createBlogPostElement(postData, observer, maxLength = 150) {
    const { imgUrl, name, content } = postData;
    const element = createDomElement("blog-post", null, ["fade-in__bottom"]);
    element.setAttribute("imgUrl", imgUrl);
    element.setAttribute("name", name);
    element.setAttribute("content", content.slice(0, maxLength) + "…");

    document.querySelector('.blog__posts').appendChild(element);
    observer.observe(element);
}

export function initBlog(observer) {
    loadPosts()
        .then(posts => createBlogPost(posts, observer))
        .catch(e => handleError(e, observer));
}