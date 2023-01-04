import React, { useState, useEffect } from "react";
import useSWR from "swr"
import { Footer } from "../../components/Footer/Footer";
import { SidePanel } from "../../components/SidePanel/SidePanel";
import { getFetch, postFetch } from "../../utils/Fetch";
import { getCookie, setCookie } from "../../utils/setCookies";
import { useRouter } from "next/router"
import { footer } from "../../components/information"
import { api } from "../../components/information"
import "bootstrap/dist/css/bootstrap.css";
import { Controle } from "../../components/ControleBar/Controle";


export default function myCollection() {
  const [about, setAbout] = useState(false);
  const [auth, setAuth] = useState(false)
  const router = useRouter()

  
  useEffect(() => {
    getFetch("https://norma.nomoreparties.space/api/auth/user", getCookie("accessToken")).then(
      res => {
            if(res["success"]) {
            setAuth(true)
          } else {
            postFetch("https://norma.nomoreparties.space/api/auth/token", {
              token: getCookie("refreshToken"),
            }).then(res => {
              if(res["success"])
              {
                setAuth(true)
                setCookie("accessToken", res["accessToken"], 1);
                setCookie("refreshToken", res["refreshToken"]);
              }
              else router.push('/sign-in')
            })
          }
        }
        )
      }, [])
      const { data } = useSWR(`${api.url}/user/collection`, async () => {
        const response = await fetch(`${api.url}/user/collection`)
        return await response.json()
      })
      
      
  return (
    <>
      <title>Моя коллекция</title>
      {auth && (
        <>
          <Controle data={data}/>
          {about && (
              <SidePanel content={footer.about}
              onClick={() => setAbout(false)}
              />
          )}
        <Footer onClick={() => setAbout(true)}/>
      </>)}
    </>
  );
}

