import React, { useState, useEffect } from "react";
import { HeadCltn } from "../../components/Header/HeadCltn/HeadCltn";
import { Footer } from "../../components/Footer/Footer";
import { Gallery } from "../../components/Gallery/Gallery";
import { SwitchBar } from "../../components/SwitchBar/SwitchBar";
import { NotFound } from "../../components/NotFound/NotFound";
import { SidePanel } from "../../components/SidePanel/SidePanel";
import { getFetch, postFetch } from "../../utils/Fetch";
import { getCookie, setCookie } from "../../utils/setCookies";
import { useRouter } from "next/router"
import { Layout } from "../../components/Layout/Layout";
import {footer} from "../../components/information"
import {api} from "../../components/information"
import "bootstrap/dist/css/bootstrap.css";


export default function myCollection({ data }) {
  const [content, setContent] = useState(data);
  const [page, setPage] = useState(0);
  const [about, setAbout] = useState(false);
  const [auth, setAuth] = useState(false)
  const [pageCount, setPageCount] = useState(Math.ceil(content.length / 6))
  const router = useRouter()
  
  useEffect(() => {
    const sendUser = () => {
        getFetch("https://norma.nomoreparties.space/api/auth/user", getCookie("accessToken")).then(
          res =>  {if(res.user)  res["success"] ? setAuth(true) : router.push('/sign-in')}
      )
    }

    if(getCookie("refreshToken"))  {
      if(!getCookie("accessToken")) {
        postFetch("https://norma.nomoreparties.space/api/auth/token", {
          token: getCookie("refreshToken"),
        }).then(res => {
          res["success"] ? setAuth(true) : router.push('/sign-in')
          setCookie("accessToken", res.accessToken, 2);
          setCookie("refreshToken", res.refreshToken);
        })
      } else {
        sendUser()
      }
    } else  router.push("/sign-in")
  }, [])

  const fullGallery = data;
  const updatePage = (p) => setPage(p);
  const updateContent = (p) => setContent(p);

  return (
    <>
    {auth && (<Layout title="Моя коллекция">
      <HeadCltn
        fullGallery={fullGallery}
        updateContent={updateContent}
        content={content}
        updatePage={updatePage}
      />
      <div>
        {content.length ? (
          <Gallery fullContent={content} updateContent={updateContent} updatePage={updatePage} content={content?.slice(page * 6, (page + 1) * 6)} />
        ) : (
          <NotFound />
        )}
      </div>
      {about && (
          <SidePanel content={footer.about}
          onClick={() => setAbout(false)}
          />
        )}
      <SwitchBar pageCount={pageCount} content={content} page={page} updatePage={updatePage} />
      <Footer onClick={() => setAbout(true)}/>
    </Layout>)}
    </>
  );
}

export async function getServerSideProps(context) {
  const obj = await fetch(`${api.url}/user/collection`).then(
    (res) => res.json()
  );
  return {
    props: {
      data: obj,
    },
  };
}
