import React, { useState, useEffect } from "react";
import { HeadRcm } from "../components/Header/HeadRcm/HeadRcm";
import { Footer } from "../components/Footer/Footer";
import { MainImg } from "../components/MainImg/MainImg";
import { SidePanel } from "../components/SidePanel/SidePanel";
import { footer, api } from "../components/information";
import { getCookie } from "../utils/setCookies";
import { getFetch } from "../utils/Fetch";
import{ useRouter} from "next/router"
import { Layout } from "../components/Layout/Layout";
export default function myRecommendation({data}) {
  const [content, setContent] = useState(data)
  const [info, setInfo] = useState(false);
  const [about, setAbout] = useState(false);
  const [count, setCount] = useState(0)
  const [email, setEmail] = useState('')
  const router = useRouter()
  const swipeImage = (p) => setCount(p)
  useEffect(() => {
    router.prefetch('/sign-in')
  }, [])
  useEffect(() => {
    getFetch("https://norma.nomoreparties.space/api/auth/user", getCookie("accessToken")).then(
        res => {
          res.user ? setEmail(res.user.email) : router.push('/sign-in')
        }
    )
  }, [])
  return (
    <Layout onlyOnAuth>
        <div>
          <title>Рекомендации</title>
          <HeadRcm onClick={() => setInfo(true)} />
          <MainImg email={email} swipeImage={swipeImage} content={content[count]} />
          {about && (
              <SidePanel content={footer.about}
              onClick={() => setAbout(false)}
              />
            )}
          {info && (
            <SidePanel
            content={content[count]}
            onClick={() => setInfo(false)}
              />
          )}
          <Footer onClick={() => setAbout(true)}/>
        </div>
    </Layout>
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