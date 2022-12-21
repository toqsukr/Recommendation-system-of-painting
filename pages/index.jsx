import React, { useState, useEffect } from "react";
import { HeadRcm } from "../components/Header/HeadRcm/HeadRcm";
import { Footer } from "../components/Footer/Footer";
import { MainImg } from "../components/MainImg/MainImg";
import { SidePanel } from "../components/SidePanel/SidePanel";
import { footer, api } from "../components/information";
import { eraseCookie, getCookie, setCookie } from "../utils/setCookies";
import { getFetch, postFetch } from "../utils/Fetch";
import{ useRouter} from "next/router"
import { Layout } from "../components/Layout/Layout";
export default function myRecommendation({data}) {
  const [content, setContent] = useState(data)
  const [info, setInfo] = useState(false);
  const [about, setAbout] = useState(false);
  const [email, setEmail] = useState('')
  const [auth, setAuth] = useState(false)
  const updateContent = (e) => setContent(e)
  const router = useRouter()
    
    useEffect(() => {
    router.prefetch('/sign-in')
    const sendUser = () => {
        getFetch("https://norma.nomoreparties.space/api/auth/user", getCookie("accessToken")).then(
          res => {
              if(res.user) {
                setEmail(res.user.email)
                setAuth(true)
              }
          }
      )
    }

    if(getCookie("refreshToken"))  {
      if(!getCookie("accessToken")) {
        postFetch("https://norma.nomoreparties.space/api/auth/token", {
          token: getCookie("refreshToken"),
        }).then(res => {
          setCookie("accessToken", res.accessToken, 2);
          setCookie("refreshToken", res.refreshToken);
          console.log(res)
          res["success"] ? setAuth(true) : router.push('/sign-in')
        })
      } else {
        sendUser()
      }
    } else  router.push("/sign-in")
  }, [])

  return (
    <>
    {auth && (<Layout title="Рекомендации">
          <HeadRcm onClick={() => setInfo(true)} />
          <MainImg content={content} updateContent={updateContent} email={email} />
          {about && (
              <SidePanel content={footer.about}
              onClick={() => setAbout(false)}
              />
            )}
          {info && (
            <SidePanel
            content={content[0]}
            onClick={() => setInfo(false)}
              />
          )}
          <Footer onClick={() => setAbout(true)}/>
    </Layout>)}
    </>
  );
}

export async function getServerSideProps(context) {
  const obj = await fetch(`${api.url}/user/rcmd`).then(
    (res) => res.json()
  );
  return {
    props: {
      data: obj,
    },
  };
}