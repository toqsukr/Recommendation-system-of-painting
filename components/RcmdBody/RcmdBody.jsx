import React, { useState, useEffect } from 'react'
import { MainImg } from '../MainImg/MainImg'
import { SidePanel } from '../SidePanel/SidePanel'
import { Loading } from '../Loading/Loading'
import { api } from '../information'
import css from "./RcmdBody.module.css"

export const RcmdBody = ({ updateAbout, email, cltnInfo, updateInfo, updateCltnInfo, info, footer, data, about}) => {
    const [isUnique, setUnique] = useState(true)
    const [content, setContent] = useState(null)
    const [loading, setLoading] = useState(true)
    const [first, setFirst] = useState(false)

    const updateUnique = (e) => setUnique(e)
    const updateContent = (e) => setContent(e)
    const updateLoading = (e) => setLoading(e)

    useEffect(() => {
        setTimeout(() => setFirst(true), 300)
    }, [])
    useEffect(() => {
        if(first) {
            setTimeout(async () => setContent(data), 300)
            setFirst(false)
            setTimeout(() => {
                fetch(`${api.url}/user/collection`).then(
                    res => res.json()
                ).then(
                    obj => {
                        updateCltnInfo(obj)
                        obj.forEach((el) => {
                            if(data && data.length != 0 && el.src === data[0].src)   setUnique(false);
                        })
                    }, 500)
            })
        }
    })
  return (
    <div>
        { !content || content.length === 0 ? (<Loading/>) : (
        <div>
            <MainImg loading={loading} data={data} updateContent={updateContent} updateLoading={updateLoading} isUnique={isUnique} cltnInfo={cltnInfo} updateCltnInfo={updateCltnInfo} updateUnique={updateUnique} content={content} email={email} />
            {about && (
                <SidePanel content={footer.about}
                onClick={() => updateAbout(false)}
                />
                )}
            {info &&
            (
                <div className={css.container_info_open}>
                    <SidePanel
                    content={content[0]}
                    onClick={() => updateInfo(false)}
                    />
                </div>
            )}
        </div>
        )}
    </div>
  )
}
