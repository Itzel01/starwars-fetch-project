window.addEventListener('DOMContentLoaded', () => {
    console.log('hello world');
    const navTabs = document.getElementById("nav-tabs");

    navTabs.addEventListener('click', (e) => {
        let contentIdentifier = e.target.innerText.toLowerCase() 
        fetchFunc(contentIdentifier)
    })
    
});

const fetchFunc = (tabName) => {
    fetch(`https://swapi.dev/api/${tabName}`)
    .then(data => { return data.json();})
    .then(info => { iteratorFunc(info.results, tabName);});
}

const iteratorFunc = (info, category) => {
    return info.forEach(item => {
        const bigCatDiv = document.getElementById(`${category}`);
        let div = document.createElement("div");
        div.classList = "column is-one-third";
        div.innerText = `${item.name}`
        bigCatDiv.append(div)
    })
}




