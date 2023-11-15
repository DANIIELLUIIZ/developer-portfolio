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
  const hardSkills = document.getElementById('profile.hardSkills')
  hardSkills.innerHTML = profileData.skills.hardSkills
    .map(
      skill =>
        `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}" /></li>`
    )
    .join('')
}

function updateProfileSoftSkills(profileData) {
  const softSkills = document.getElementById('profile.softSkills')
  softSkills.innerHTML = profileData.skills.softSkills
    .map(skill => `<li>${skill}</li>`)
    .join('')
}

function updateProfileLanguages(profileData) {
  const language = document.getElementById('profile.languages')

  language.innerHTML = profileData.languages
    .map(lang => ` <li>${lang}</li>`)
    .join('')
}

function updateProfileProjects(profileData) {
  const project = document.getElementById('profile.projects')

  project.innerHTML = profileData.projects
    .map(
      project => `  <li>
    <span class="title github">${project.name}</span>
    <a
      href="${project.url}"_blank"
      >Clique aqui</a
    >
  </li>`
    )
    .join('')
}

function updateProfileProfessionalExperience(profileData) {
  const experience = document.getElementById('profile.experience')

  experience.innerHTML = profileData.professionalExperience
    .map(
      exp =>
        `
  <li> 
             <h2 class="title">${exp.name}</h2>
              <span>${exp.period}</span>
              <p>${exp.description}</p>
            </li>
  `
    )
    .join('')
}

;(async () => {
  const profileData = await fetchProfileData()
  updateProfileInfo(profileData)
  updateProfileSoftSkills(profileData)
  updateProfileHardSkills(profileData)
  updateProfileLanguages(profileData)
  updateProfileProjects(profileData)
  updateProfileProfessionalExperience(profileData)
})()
