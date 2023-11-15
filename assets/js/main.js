function updateProfileInfo(profileData) {
  const photo = document.getElementById('profile.photo')
  photo.src = profileData.photo
  photo.alt = profileData.name

  const name = document.getElementById('profile.name')
  name.innerText = profileData.name

  const job = document.getElementById('profile.job')
  job.innerText = profileData.job

  const location = document.getElementById('profile.location')
  location.innerText = profileData.location

  const phone = document.getElementById('profile.phone')
  phone.innerText = profileData.phone
  phone.href = `tel:${profileData.phone}`
  const email = document.getElementById('profile.email')
  email.innerText = profileData.email
  email.href = `mailto:${profileData.email}`
}
function updateProfileHardSkills(profileData) {
  const hardSkillsData = profileData.skills.hardSkills
  const hardSkills = document.getElementById('profile.hardSkills')
  for (let i = 0; i <= 0; i++) {
    hardSkills.innerHTML += ` <li>
<img src="${hardSkillsData[i].logo}"alt="${hardSkillsData[i].name}" />
</li>
`
  }
}

function updateProfileSoftSkills(profileData) {
  const softSkillsData = profileData.skills.softSkills
  const softSkills = document.getElementById('profile.softSkills')
  for (let i = 0; i < softSkillsData.length; i++) {
    softSkills.innerHTML += `<li>${softSkillsData[i]}</li>`
  }
}

;(async () => {
  const profileData = await fetchProfileData()
  updateProfileInfo(profileData)
  updateProfileSoftSkills(profileData)
  updateProfileHardSkills(profileData)
})()