export const showHero = (hero) => {
    const heroBlock = document.querySelector('.hero-block')

    const heroSlide = document.createElement('div')
    heroSlide.className = 'hero-slide'

    const heroImage = document.createElement('div')
    heroImage.className = 'hero-image'

    const heroInfo = document.createElement('div')
    heroInfo.className = 'hero-info'

    for (let key in hero) {
        if (key === 'photo') {
            heroImage.innerHTML = `<img src=${'./' + hero[key]} alt="hero" class="hero-img">`
        } else if (hero[key]) {
            const heroInfoItem = document.createElement('div')
            heroInfoItem.className = 'hero-info-item'

            const heroInfoItemTitle = document.createElement('div')
            heroInfoItemTitle.className = 'hero-info-item-title'
            heroInfoItemTitle.textContent = key
            heroInfoItem.append(heroInfoItemTitle)

            const heroInfoItemText = document.createElement('div')
            heroInfoItemText.className = 'hero-info-item-text'
            heroInfoItemText.textContent = hero[key]
            heroInfoItem.append(heroInfoItemText)

            heroInfo.append(heroInfoItem)
        }
    }

    heroSlide.append(heroImage)
    heroSlide.append(heroInfo)
    heroBlock.append(heroSlide)
}