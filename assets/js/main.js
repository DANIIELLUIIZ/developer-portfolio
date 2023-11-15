function updateProfileInfo(profileData) {
  const photo = document.querySelector('.profile-photo')
  const name = document.querySelector('.profile-name')
  const job = document.querySelector('.profile-job')
  const location = document.querySelector('.profile-location')
  const phone = document.querySelector('.profile-phone')
  const email = document.querySelector('.profile-email')
  // skills
  const css = document.querySelector(".profile-css")

  photo.src = profileData.photo
  photo.alt = profileData.name
  name.innerHTML = profileData.name
  job.innerHTML = profileData.job
  location.innerHTML = profileData.location
  phone.innerHTML = profileData.phone
  email.innerHTML = profileData.email
}

;(async () => {
  const profileData = await fetchProfileData()
  updateProfileInfo(profileData)
})()
