class BlogPost extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open'})
    }

    get imgUrl() {
        return this.getAttribute("imgUrl")
    }

    set imgUrl(value) {
        this.setAttribute("imgUrl", value)
    }

    get name() {
        return this.getAttribute("name")
    }

    set name(value) {
        this.setAttribute("name", value)
    }

    get content() {
        return this.getAttribute("content")
    }

    set content(value) {
        this.setAttribute("content", value)
    }

    static get observedAttributes() {
        return ["imgUrl", "name", "content"];
    }

    attributeChangedCallback(property, oldValue, newValue) {
        if (["imgUrl", "name", "content"].includes(property)) this.render();
    }

    connectedCallBack() {
        this.render();
    }

    render() {
        this.shadow.innerHTML = `
        <style>
          @import "../../../styles/shared/style.css";
          @import "../../../styles/about.css";
        </style>
        <div class="blog-post">
            <div class="blog-post__image">
              <img src="${this.imgUrl}" alt="Blog Image">
            </div>
            <div class="blog-post__text">
              <p class="blog-category">${this.name}</p>
              <h3 class="blog-header">${this.content}</h3>
            </div>
        </div>`
        ;
    }
}

customElements.define("blog-post", BlogPost)