import React, { useState, useEffect } from "react";
import useSWR from 'swr'
import { HeadRcm } from "../components/Header/HeadRcm/HeadRcm";
import { Footer } from "../components/Footer/Footer";
import { footer, api } from "../components/information";
import { getCookie, setCookie } from "../utils/setCookies";
import { getFetch, postFetch } from "../utils/Fetch";
import { RcmdBody } from "../components/RcmdBody/RcmdBody";
import{ useRouter } from "next/router"

export default function myRecommendation() {
  const [auth, setAuth] = useState(false)
  const [about, setAbout] = useState(false);
  const [info, setInfo] = useState(false);
  const [email, setEmail] = useState('')
  const [userID, setUserID] = useState('')
  
  const [cltnInfo, setCltnInfo] = useState('')
  const updateCltnInfo = (e) => setCltnInfo(e)
  const updateInfo = (e) => setInfo(e)
  const updateAbout = (e) => setAbout(e)

  const router = useRouter()

  const { data } = useSWR(`${api.url}/user/${userID}`, async () => {
    const response = await fetch(`${api.url}/user/rcmd`)
    return await response.json()
  })
  
    useEffect(() => {
      getFetch("https://norma.nomoreparties.space/api/auth/user", getCookie("accessToken")).then(
          res => {
            if(res["success"]) {
            setAuth(true)
            setEmail(res.user.email)
          } else {
            postFetch("https://norma.nomoreparties.space/api/auth/token", {
              token: getCookie("refreshToken"),
            }).then(res => {
              if(res["success"])
              {
                setAuth(true)
                setCookie("accessToken", res["accessToken"], 1);
                setCookie("refreshToken", res["refreshToken"]);
                getFetch("https://norma.nomoreparties.space/api/auth/user", res["accessToken"]).then(
                  res => setEmail(res.user.email)
                )
              }
              else router.push('/sign-in')
            })
          }
        }
      )
  }, [])

  return (
    <>
      <title>Рекомендации</title>
      {auth && (
        <>
          <HeadRcm onClick={() => setInfo(true)} />
          <RcmdBody updateAbout={updateAbout} email={email} cltnInfo={cltnInfo} updateInfo={updateInfo} updateCltnInfo={updateCltnInfo} about={about} info={info} footer={footer} data={data}/>
          <Footer onClick={() => setAbout(true)}/>
        </>
      )}
    </>
  );
}