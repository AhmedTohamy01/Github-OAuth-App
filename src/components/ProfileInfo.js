import { useEffect, useState, useContext } from 'react'
import { MainContext } from '../context/MainContext'
import styled from 'styled-components'
import config from '../server/config'

/*---> Component <---*/
function ProfileInfo() {
  const { profileData, setProfileData } = useContext(MainContext)
  console.log(profileData)

  useEffect(() => {
    const url = window.location.href
    const newUrl = url.split('?code=')
    window.history.pushState({}, null, newUrl[0])

    const requestData = {
      code: newUrl[1],
    }

    fetch(config.proxy_url, {
      method: 'POST',
      body: JSON.stringify(requestData),
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem('profileData', JSON.stringify(data))
        setProfileData(data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <Wrapper>
      <Image src={profileData.avatar_url} />
      <Name>{profileData.name}</Name>
      <Bio>{profileData.bio}</Bio>
      <PublicRepos>
        Public Repos: <span>{profileData.public_repos}</span>
      </PublicRepos>
    </Wrapper>
  )
}

/*---> Styles <---*/
export const Wrapper = styled.div`
  text-align: center;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
`

export const Image = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  margin-top: 30px;
`

export const Name = styled.p`
  margin-top: 20px;
  font-size: 25px;
  font-weight: bolder;
`

export const Bio = styled.p`
  margin-top: 20px;
  margin-top: 10px;
  font-size: 18px;
`

export const PublicRepos = styled.p`
  margin-top: 20px;
  font-size: 18px;

  span {
    font-weight: bolder;
  }
`

export default ProfileInfo
