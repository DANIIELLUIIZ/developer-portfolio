const allAcordeon = document.querySelectorAll('.acordeon')

allAcordeon.forEach(item => {
  const isAcordeon = item.classList.contains('acordeon')

  item.addEventListener('click', e => {
    if (isAcordeon) {
      item.classList.toggle('open')
      item.children[1].classList.toggle('open')
    }

    allAcordeon.forEach(item => {
      if (item !== e.target) {
        item.classList.remove('open')
        item.children[1].classList.remove('open')
      }
    })
  })
})
