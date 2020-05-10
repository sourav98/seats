window.onload = () => {
    const listings= Array.from(document.getElementsByClassName('listings'))
     
    //in order to loop through the listings 

    listings.forEach(listings => handleSlider(listings))
}

const handleSlider = (listings) => {
    const listingsGrid = listings.getElementsByClassName('listings-grid')[0]
    const arrowLeft = listings.getElementsByClassName('left')[0]
    const arrowRight = listings.getElementsByClassName('right')[0]

    if(!listingsGrid || !arrowLeft || !arrowRight)
    {
        console.log(listings)
        return
    }


arrowRight.addEventListener('click', e => {
    e.preventDefault()  
    handleClassChange('right');
    listingsGrid.scrollTo({
        left:listingsGrid.offsetWidth,
        behaviour:'smooth'
    })
})

arrowLeft.addEventListener('click', e => {
    e.preventDefault()  
    handleClassChange('left');
    listingsGrid.scrollTo({
        left:0,
        behaviour:'smooth'
    })
})

const handleClassChange = direction => {
if(direction=='right') {
    arrowRight.classList.remove('darker');
    arrowLeft.classList.add('darker');
}
else if(direction=='left'){
    arrowLeft.classList.remove('darker');
    arrowRight.classList.add('darker');
}
}
}