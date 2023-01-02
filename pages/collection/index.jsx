import React, { useState, useEffect } from "react";
import useSWR from "swr"
import { HeadCltn } from "../../components/Header/HeadCltn/HeadCltn";
import { Footer } from "../../components/Footer/Footer";
import { Gallery } from "../../components/Gallery/Gallery";
import { SwitchBar } from "../../components/SwitchBar/SwitchBar";
import { NotFound } from "../../components/NotFound/NotFound";
import { SidePanel } from "../../components/SidePanel/SidePanel";
import { getFetch, postFetch } from "../../utils/Fetch";
import { getCookie, setCookie } from "../../utils/setCookies";
import { useRouter } from "next/router"
import {footer} from "../../components/information"
import {api} from "../../components/information"
import "bootstrap/dist/css/bootstrap.css";


export default function myCollection({pool}) {
  const [page, setPage] = useState(0);
  const [content, setContent] = useState(pool);
  const [about, setAbout] = useState(false);
  const [auth, setAuth] = useState(false)
  const router = useRouter()

  const { data } = useSWR(`${api.url}/user/collection`, async () => {
    const response = await fetch(`${api.url}/user/collection`)
    return await response.json()
  })
  
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
    
  const fullGallery = data;
  const updatePage = (p) => setPage(p);
  const updateContent = (p) => setContent(p);

  return (
    <>
      <title>Моя коллекция</title>
      {auth && (
        <>
          <HeadCltn
            fullGallery={fullGallery}
            updateContent={updateContent}
            content={content}
            updatePage={updatePage}
          />
          <div>
            {content.length ? (
              <Gallery fullContent={data} updateContent={updateContent} updatePage={updatePage} content={data?.slice(page * 6, (page + 1) * 6)} />
            ) : (
              <NotFound />
            )}
          </div>
          {about && (
              <SidePanel content={footer.about}
              onClick={() => setAbout(false)}
              />
          )}
        <SwitchBar content={content} page={page} updatePage={updatePage} />
        <Footer onClick={() => setAbout(true)}/>
      </>)}
    </>
  );
}

export async function getServerSideProps(context) {
  const response = await fetch(`${api.url}/user/collection`)
  const obj = await response.json()
  return {
    props: {
      pool: obj,
    },
  };
}

