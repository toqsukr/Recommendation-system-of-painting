import React, { useState, useEffect } from "react";
import useSWR from 'swr'
import { HeadRcm } from "../components/Header/HeadRcm/HeadRcm";
import { Footer } from "../components/Footer/Footer";
import { MainImg } from "../components/MainImg/MainImg";
import { SidePanel } from "../components/SidePanel/SidePanel";
import { footer, api } from "../components/information";
import { getCookie, setCookie } from "../utils/setCookies";
import { getFetch, postFetch } from "../utils/Fetch";
import{ useRouter} from "next/router"

export default function myRecommendation({pool}) {
  const [content, setContent] = useState(pool)
  const [info, setInfo] = useState(false);
  const [about, setAbout] = useState(false);
  const [email, setEmail] = useState('')
  const [auth, setAuth] = useState(false)
  const [cltnInfo, setCltnInfo] = useState('')
  const [isUnique, setUnique] = useState(true)
  const updateUnique = (e) => setUnique(e)
  const updateContent = (e) => setContent(e)
  const updateCltnInfo = (e) => setCltnInfo(e)
  const router = useRouter()

  const { data } = useSWR(`${api.url}/user/rcmd`, async () => {
    const response = await fetch(`${api.url}/user/rcmd`)
    return await response.json()
  })
  
    useEffect(() => {
      setTimeout(() => {
        fetch(`${api.url}/user/collection`).then(
          res => res.json()
        ).then(
          obj => {
            setCltnInfo(obj)
            obj.forEach((el) => {
              if(el.src === content[0].src)   setUnique(false);
            })
          }, 900)
        }
     )
    
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
          <MainImg isUnique={isUnique} cltnInfo={cltnInfo} updateCltnInfo={updateCltnInfo} updateUnique={updateUnique} content={data} email={email} />
          {about && (
              <SidePanel content={footer.about}
              onClick={() => setAbout(false)}
              />
            )}
          {info && (
            <SidePanel
            content={data[0]}
            onClick={() => setInfo(false)}
            />
          )}
          <Footer onClick={() => setAbout(true)}/>
        </>
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  const obj = await fetch(`${api.url}/user/rcmd`).then(
    (res) => res.json()
  );
  return {
    props: {
      pool: obj,
    },
  };
}