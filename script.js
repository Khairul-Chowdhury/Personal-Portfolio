let tabTitles = document.getElementsByClassName('tab-titles')
let tabContents = document.getElementsByClassName('tab-contents')

function openTab(tabName) {
    for (tabTitle of tabTitles) {
        tabTitle.classList.remove('active')
    }
    for (tabContent of tabContents) {
        tabContent.classList.remove('active')
    }
    event.currentTarget.classList.add('active');
    document.getElementById(tabName).classList.add('active')
}