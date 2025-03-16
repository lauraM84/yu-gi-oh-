export function createTextElement(elementType, text) {

    const element = document.createElement(elementType);

    const node = document.createTextNode(text);

    element.appendChild(node);

    return element;

}

export function createImageElement(src) {
    const img = document.createElement('img');
    img.src = src;
    return img;
}

export function createLinkElement(href, text) {
    const link = document.createElement('a');
    link.href = href;
    link.textContent = text;
    return link;
}
